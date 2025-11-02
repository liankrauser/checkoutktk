// ============================================
// NIVUSPAY INTEGRATION PATCH
// Adicione este script ANTES do código principal
// ============================================

(function() {
    'use strict';
    
    console.log('🚀 Inicializando NivusPay Integration...');

    // Configuração NivusPay
    const NIVUSPAY_CONFIG = {
        publicKey: 'pk_1HwDRFwxUjHnuwTlNs1UG16NQxa5',
        secretKey: 'sk_PjJ2OvRsFfCypykwBw5wJ3TPqIkODmRCS_NF',
        apiUrl: 'https://api.nivuspayments.com.br/v1/transactions',
        
        getAuthToken() {
            return 'Basic ' + btoa(`${this.publicKey}:${this.secretKey}`);
        }
    };

    // ============================================
    // FUNÇÃO: Criar Pagamento NivusPay
    // ============================================
    async function createNivusPayment(originalPayload) {
        console.log('💳 Interceptando pagamento para NivusPay', originalPayload);

        try {
            // Calcular valor total em centavos
            let totalAmount = 0;
            
            if (originalPayload.salesPlanId) {
                const planPrice = parseFloat(originalPayload.salesPlanId.salesPrice || 0);
                const quantity = parseInt(originalPayload.quantity || 1);
                totalAmount = planPrice * quantity;
            }

            if (originalPayload.additionalSalesPlans?.length > 0) {
                originalPayload.additionalSalesPlans.forEach(plan => {
                    totalAmount += parseFloat(plan.salesPrice || 0);
                });
            }

            const amountInCents = Math.round(totalAmount * 100);

            // Montar items
            const items = [{
                title: originalPayload.salesPlanId?.name || 'Produto',
                unitPrice: Math.round((originalPayload.salesPlanId?.salesPrice || 0) * 100),
                quantity: parseInt(originalPayload.quantity || 1),
                tangible: true
            }];

            if (originalPayload.additionalSalesPlans?.length > 0) {
                originalPayload.additionalSalesPlans.forEach(plan => {
                    items.push({
                        title: plan.name || 'Item Adicional',
                        unitPrice: Math.round((plan.salesPrice || 0) * 100),
                        quantity: 1,
                        tangible: true
                    });
                });
            }

            // Payload NivusPay
            const nivusPayload = {
                paymentMethod: originalPayload.paymentMethod.toLowerCase(),
                amount: amountInCents,
                items: items,
                customer: {
                    name: originalPayload.payerName,
                    email: originalPayload.payerEmail,
                    phone: (originalPayload.payerPhone || '').replace(/\D/g, ''),
                    document: {
                        type: 'cpf',
                        number: (originalPayload.payerCpf || originalPayload.payerDocument || '').replace(/\D/g, '')
                    }
                }
            };

            // Configurações específicas por método
            if (originalPayload.paymentMethod === 'PIX') {
                nivusPayload.pix = { expiresInDays: 1 };
            } else if (originalPayload.paymentMethod === 'BOLETO') {
                nivusPayload.boleto = { expiresInDays: 3 };
            } else if (originalPayload.paymentMethod === 'CREDIT_CARD') {
                nivusPayload.card = {
                    number: (originalPayload.cardNumber || '').replace(/\s/g, ''),
                    holderName: originalPayload.cardholder,
                    expirationMonth: originalPayload.expirationMonth,
                    expirationYear: originalPayload.expirationYear,
                    cvv: originalPayload.securityCode,
                    installments: parseInt(originalPayload.installments || 1)
                };
            }

            console.log('📤 Enviando para NivusPay:', nivusPayload);

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
                console.error('❌ Erro NivusPay:', errorData);
                throw new Error(JSON.stringify(errorData));
            }

            const nivusData = await response.json();
            console.log('✅ Resposta NivusPay:', nivusData);

            // Gerar QR Code Base64 se for PIX
            let qrCodeBase64 = null;
            if (nivusData.pix?.qrcode) {
                qrCodeBase64 = await generateQRCodeBase64(nivusData.pix.qrcode);
            }

            // Adaptar resposta para formato esperado
            return {
                data: {
                    order: {
                        _id: nivusData.id.toString(),
                        value: nivusData.amount / 100,
                        status: mapNivusStatus(nivusData.status),
                        payerName: nivusData.customer.name,
                        payerEmail: nivusData.customer.email,
                        payerPhone: nivusData.customer.phone,
                        payerCpf: nivusData.customer.document.number
                    },
                    paymentInfo: {
                        status: mapNivusStatus(nivusData.status),
                        
                        // PIX
                        ...(nivusData.pix && {
                            qrCode: nivusData.pix.qrcode,
                            base64QrCode: qrCodeBase64,
                            expirationDate: nivusData.pix.expirationDate
                        }),

                        // Boleto
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
    // FUNÇÃO: Verificar Status
    // ============================================
    async function checkNivusStatus(orderId) {
        try {
            const response = await fetch(`${NIVUSPAY_CONFIG.apiUrl}/${orderId}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': NIVUSPAY_CONFIG.getAuthToken()
                }
            });

            if (!response.ok) return null;

            const data = await response.json();
            
            return {
                _id: data.id.toString(),
                status: mapNivusStatus(data.status),
                value: data.amount / 100,
                payerName: data.customer.name,
                payerEmail: data.customer.email,
                payerPhone: data.customer.phone,
                payerCpf: data.customer.document.number
            };

        } catch (error) {
            console.error('❌ Erro ao verificar status:', error);
            return null;
        }
    }

    // ============================================
    // FUNÇÃO: Mapear Status
    // ============================================
    function mapNivusStatus(nivusStatus) {
        const statusMap = {
            'waiting_payment': 'PENDING',
            'paid': 'APPROVED',
            'refused': 'REFUSED',
            'refunded': 'REFUNDED',
            'canceled': 'CANCELED'
        };
        return statusMap[nivusStatus] || 'PENDING';
    }

    // ============================================
    // FUNÇÃO: Gerar QR Code Base64
    // ============================================
    async function generateQRCodeBase64(qrCodeText) {
        try {
            const response = await fetch(
                `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qrCodeText)}`
            );
            const blob = await response.blob();
            
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64 = reader.result.split(',')[1];
                    resolve(base64);
                };
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        } catch (error) {
            console.error('❌ Erro ao gerar QR Code:', error);
            return null;
        }
    }

    // ============================================
    // INTERCEPTAR FETCH
    // ============================================
    const originalFetch = window.fetch;
    
    window.fetch = async function(...args) {
        const [url, options] = args;
        
        // Interceptar chamadas de criação de pagamento
        if (url && url.includes('/payments') && options?.method === 'POST') {
            try {
                console.log('🎯 Interceptando POST /payments');
                
                const originalBody = JSON.parse(options.body);
                
                // Criar via NivusPay
                const nivusResponse = await createNivusPayment(originalBody);
                
                // Retornar resposta simulando fetch
                return {
                    ok: true,
                    status: 200,
                    json: async () => nivusResponse
                };
                
            } catch (error) {
                console.error('❌ Erro no intercept:', error);
                return originalFetch.apply(this, args);
            }
        }
        
        // Interceptar verificação de status
        if (url && url.includes('/orders/') && url.includes('/status')) {
            try {
                const orderId = url.split('/orders/')[1].split('/')[0];
                console.log('🔍 Interceptando verificação de status:', orderId);
                
                const status = await checkNivusStatus(orderId);
                
                if (status) {
                    return {
                        ok: true,
                        json: async () => status
                    };
                }
            } catch (error) {
                console.error('❌ Erro ao verificar status:', error);
            }
        }
        
        // Para outras chamadas, usar fetch original
        return originalFetch.apply(this, args);
    };

    // ============================================
    // SUBSTITUIR EventSource POR POLLING
    // ============================================
    const OriginalEventSource = window.EventSource;
    
    window.EventSource = function(url) {
        console.log('🔄 Substituindo EventSource por polling:', url);
        
        const orderId = url.split('/').pop();
        
        const fakeEventSource = {
            onmessage: null,
            onerror: null,
            close: function() {
                if (this._interval) {
                    clearInterval(this._interval);
                }
            },
            
            _startPolling: function(orderId) {
                let checkCount = 0;
                
                this._interval = setInterval(async () => {
                    const status = await checkNivusStatus(orderId);
                    
                    if (status && status.status === 'APPROVED') {
                        if (this.onmessage) {
                            this.onmessage({
                                data: `${orderId}-APPROVED`
                            });
                        }
                        this.close();
                    }
                    
                    checkCount++;
                    if (checkCount > 360) { // 30 minutos
                        this.close();
                    }
                }, 5000);
            }
        };
        
        setTimeout(() => {
            fakeEventSource._startPolling(orderId);
        }, 100);
        
        return fakeEventSource;
    };

    console.log('✅ NivusPay Patch aplicado com sucesso!');

})();
