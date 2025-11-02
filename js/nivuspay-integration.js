// ============================================
// NIVUSPAY INTEGRATION - Interceptação Global
// ============================================

// Configuração NivusPay
const NIVUSPAY_CONFIG = {
  publicKey: 'pk_1HwDRFwxUjHnuwTlNs1UG16NQxa5',
  secretKey: 'sk_PjJ2OvRsFfCypykwBw5wJ3TPqIkODmRCS_NF',
  apiUrl: 'https://api.nivuspayments.com.br/v1/transactions',
  
  getAuthToken() {
    const credentials = `${this.publicKey}:${this.secretKey}`;
    return 'Basic ' + btoa(credentials);
  }
};

// ============================================
// FUNÇÃO PRINCIPAL DE PAGAMENTO NIVUSPAY
// ============================================
async function createNivusPayment(paymentData) {
  try {
    console.log('🚀 Criando pagamento NivusPay', paymentData);

    // Preparar payload para NivusPay
    const nivusPayload = {
      paymentMethod: paymentData.paymentMethod?.toLowerCase() || 'pix',
      amount: Math.round(paymentData.value || paymentData.quantity * (paymentData.salesPlanId?.salesPrice || 0)),
      
      // Configuração específica do PIX
      ...(paymentData.paymentMethod === 'PIX' && {
        pix: { expiresInDays: 1 }
      }),

      // Items do pedido
      items: [{
        title: paymentData.salesPlanId?.name || paymentData.payerName || 'Produto',
        unitPrice: Math.round(paymentData.salesPlanId?.salesPrice || paymentData.value || 0),
        quantity: paymentData.quantity || 1,
        tangible: true
      }],

      // Dados do cliente
      customer: {
        name: paymentData.payerName || paymentData.fullName,
        email: paymentData.payerEmail || paymentData.email,
        phone: (paymentData.payerPhone || paymentData.phone || '')?.replace(/\D/g, ''),
        document: {
          type: 'cpf',
          number: (paymentData.payerCpf || paymentData.payerDocument || paymentData.document || '')?.replace(/\D/g, '')
        }
      }
    };

    // Chamar API NivusPay
    const response = await fetch(NIVUSPAY_CONFIG.apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': NIVUSPAY_CONFIG.getAuthToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nivusPayload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    const nivusData = await response.json();
    console.log('✅ Pagamento NivusPay criado:', nivusData);

    // Adaptar resposta para o formato esperado
    return {
      data: {
        order: {
          _id: nivusData.id.toString(),
          value: nivusData.amount,
          status: nivusData.status === 'waiting_payment' ? 'PENDING' : 
                  nivusData.status === 'paid' ? 'APPROVED' : 'REFUSED',
          payerName: nivusData.customer.name,
          payerEmail: nivusData.customer.email,
          payerPhone: nivusData.customer.phone,
          payerCpf: nivusData.customer.document.number
        },
        paymentInfo: {
          status: nivusData.status === 'waiting_payment' ? 'PENDING' : 
                  nivusData.status === 'paid' ? 'APPROVED' : 'REFUSED',
          
          // Para PIX
          ...(nivusData.pix && {
            qrCode: nivusData.pix.qrcode,
            base64QrCode: await generateQRCodeBase64(nivusData.pix.qrcode),
            expirationDate: nivusData.pix.expirationDate
          }),

          // Para Boleto
          ...(nivusData.boleto && {
            digitableLine: nivusData.boleto.digitableLine,
            barCode: nivusData.boleto.barcode,
            boletoDueDate: nivusData.boleto.dueDate
          })
        }
      }
    };

  } catch (error) {
    console.error('❌ Erro ao criar pagamento NivusPay:', error);
    throw error;
  }
}

// ============================================
// GERAR QR CODE BASE64
// ============================================
async function generateQRCodeBase64(qrCodeText) {
  try {
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrCodeText)}`
    );
    const blob = await response.blob();
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Erro ao gerar QR Code:', error);
    return null;
  }
}

// ============================================
// INTERCEPTAR FETCH GLOBAL
// ============================================
const originalFetch = window.fetch;

window.fetch = async function(...args) {
  const [url, options] = args;
  
  // Detectar chamadas para o endpoint de pagamento
  if (typeof url === 'string' && 
      (url.includes('/payments') || url.includes('/stores/orders')) && 
      options?.method === 'POST') {
    
    console.log('🔍 Interceptando chamada de pagamento:', url);
    
    try {
      // Pegar os dados do body
      const bodyData = JSON.parse(options.body);
      console.log('📦 Dados do pagamento:', bodyData);
      
      // Chamar NivusPay ao invés da API original
      return {
        ok: true,
        json: async () => await createNivusPayment(bodyData),
        status: 200,
        statusText: 'OK'
      };
    } catch (error) {
      console.error('❌ Erro na interceptação:', error);
      // Em caso de erro, deixar passar para a API original
      return originalFetch.apply(this, args);
    }
  }
  
  // Para outras chamadas, usar fetch original
  return originalFetch.apply(this, args);
};

// ============================================
// POLLING DE STATUS NIVUSPAY
// ============================================
async function checkNivusPaymentStatus(orderId) {
  try {
    const response = await originalFetch(`${NIVUSPAY_CONFIG.apiUrl}/${orderId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': NIVUSPAY_CONFIG.getAuthToken()
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao verificar status');
    }

    const data = await response.json();
    
    return {
      _id: data.id.toString(),
      status: data.status === 'paid' ? 'APPROVED' : 
              data.status === 'waiting_payment' ? 'PENDING' : 'REFUSED',
      value: data.amount,
      payerName: data.customer.name,
      payerEmail: data.customer.email,
      payerPhone: data.customer.phone,
      payerCpf: data.customer.document.number
    };

  } catch (error) {
    console.error('Erro ao verificar status:', error);
    return null;
  }
}

// Expor funções globalmente
window.NivusPayIntegration = {
  createNivusPayment,
  checkNivusPaymentStatus,
  NIVUSPAY_CONFIG
};

console.log('✅ NivusPay Integration loaded successfully');
