// pages/checkout.tsx ou app/checkout/page.tsx
// TUDO EM UM ARQUIVO - Pronto para usar!

'use client';

import { useState, useEffect } from 'react';

// ============================================
// 🔧 CONFIGURAÇÃO - MUDE AQUI!
// ============================================
const CONFIG = {
  NIVUSPAY_PUBLIC_KEY: 'pk_1HwDRFwxUjHnuwTlNs1UG16NQxa5-91IpWFiOFGwbjTo6pNI',
  NIVUSPAY_SECRET_KEY: 'sk_PjJ2OvRsFfCypykwBw5wJ3TPqIkODmRCS_NF-HVO7t96sZw8',
  NIVUSPAY_API: 'https://api.nivuspay.com/v1'
};

export default function CheckoutOnePage() {
  // Estados
  const [step, setStep] = useState<'form' | 'pix' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  
  // Dados do formulário
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    document: '',
    amount: 67.90
  });
  
  // Dados do PIX
  const [pixData, setPixData] = useState<{
    transactionId: number;
    qrCode: string;
    qrCodeBase64?: string;
    amount: number;
  } | null>(null);

  // ============================================
  // 💳 CRIAR PAGAMENTO PIX
  // ============================================
  const createPayment = async () => {
    try {
      setLoading(true);
      setError('');

      // Fazer requisição diretamente para NivusPay
      const response = await fetch(`${CONFIG.NIVUSPAY_API}/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CONFIG.NIVUSPAY_SECRET_KEY}`,
          'X-Public-Key': CONFIG.NIVUSPAY_PUBLIC_KEY
        },
        body: JSON.stringify({
          payment_method: 'pix',
          amount: Math.round(formData.amount * 100), // Centavos
          customer: {
            name: formData.fullName,
            email: formData.email,
            document_number: formData.document.replace(/\D/g, '')
          },
          items: [{
            title: 'Produto Exemplo',
            unit_price: Math.round(formData.amount * 100),
            quantity: 1,
            tangible: false
          }]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao criar pagamento');
      }

      const data = await response.json();

      // Salvar dados do PIX
      setPixData({
        transactionId: data.id,
        qrCode: data.pix_qr_code,
        qrCodeBase64: data.pix_qr_code_base64,
        amount: data.amount / 100
      });

      // Ir para tela do PIX
      setStep('pix');

      // Iniciar verificação automática
      startPaymentVerification(data.id);

    } catch (err: any) {
      console.error('Erro ao criar pagamento:', err);
      setError(err.message || 'Erro ao processar pagamento');
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // 🔍 VERIFICAR PAGAMENTO AUTOMATICAMENTE
  // ============================================
  const startPaymentVerification = (transactionId: number) => {
    let attempts = 0;
    const maxAttempts = 100; // 5 minutos (100 * 3s)

    const intervalId = setInterval(async () => {
      try {
        attempts++;
        console.log(`✓ Verificando... tentativa ${attempts}`);

        // Consultar status na NivusPay
        const response = await fetch(
          `${CONFIG.NIVUSPAY_API}/transactions/${transactionId}`,
          {
            headers: {
              'Authorization': `Bearer ${CONFIG.NIVUSPAY_SECRET_KEY}`,
              'X-Public-Key': CONFIG.NIVUSPAY_PUBLIC_KEY
            }
          }
        );

        const data = await response.json();
        console.log('Status:', data.status);

        if (data.status === 'paid') {
          console.log('✅ PAGAMENTO CONFIRMADO!');
          clearInterval(intervalId);
          setStep('success');
        } else if (data.status === 'refused' || data.status === 'canceled') {
          console.log('❌ Pagamento não aprovado');
          clearInterval(intervalId);
          setError('Pagamento não foi aprovado');
        }

        // Parar após 5 minutos
        if (attempts >= maxAttempts) {
          clearInterval(intervalId);
          console.log('⏰ Timeout');
        }

      } catch (error) {
        console.error('Erro ao verificar:', error);
      }
    }, 3000); // Verificar a cada 3 segundos
  };

  // ============================================
  // 📋 COPIAR QR CODE
  // ============================================
  const copyQRCode = async () => {
    if (!pixData) return;
    
    try {
      await navigator.clipboard.writeText(pixData.qrCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  // ============================================
  // 💰 FORMATAR VALOR
  // ============================================
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  // ============================================
  // 📝 FORMULÁRIO
  // ============================================
  if (step === 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Checkout Rápido 🚀
            </h1>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="João Silva"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              {/* CPF */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  CPF
                </label>
                <input
                  type="text"
                  value={formData.document}
                  onChange={(e) => setFormData({...formData, document: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="000.000.000-00"
                  maxLength={14}
                  required
                />
              </div>

              {/* Valor */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Valor
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  step="0.01"
                  min="0.01"
                  required
                />
              </div>
            </div>

            {/* Resumo */}
            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-blue-600">
                  {formatCurrency(formData.amount)}
                </span>
              </div>
            </div>

            {/* Botão */}
            <button
              onClick={createPayment}
              disabled={loading || !formData.fullName || !formData.email || !formData.document}
              className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Gerando PIX...
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Pagar com PIX
                </>
              )}
            </button>

            {/* Segurança */}
            <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Pagamento Seguro
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // 📱 TELA PIX
  // ============================================
  if (step === 'pix' && pixData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Aguardando Pagamento
              </h2>
              <p className="text-3xl font-bold text-blue-600">
                {formatCurrency(pixData.amount)}
              </p>
            </div>

            {/* QR Code */}
            {pixData.qrCodeBase64 && (
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
                  <img
                    src={`data:image/png;base64,${pixData.qrCodeBase64}`}
                    alt="QR Code PIX"
                    className="w-48 h-48"
                  />
                </div>
              </div>
            )}

            {/* Código Copia e Cola */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Código PIX:
              </label>
              <div className="relative">
                <textarea
                  value={pixData.qrCode}
                  readOnly
                  className="w-full p-3 pr-20 border rounded-lg text-xs font-mono bg-gray-50 resize-none"
                  rows={3}
                  onClick={(e) => e.currentTarget.select()}
                />
                <button
                  onClick={copyQRCode}
                  className="absolute top-2 right-2 px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                  {copied ? '✓ Copiado' : 'Copiar'}
                </button>
              </div>
            </div>

            {/* Instruções */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Como pagar:</h3>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li>Abra o app do seu banco</li>
                <li>Escolha <strong>Pagar com PIX</strong></li>
                <li>Escaneie o QR Code ou copie o código</li>
                <li>Confirme o pagamento</li>
              </ol>
            </div>

            {/* Verificando */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span>Verificando pagamento...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // ✅ SUCESSO
  // ============================================
  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              Pagamento Confirmado!
            </h2>
            <p className="text-gray-600 mb-6">
              Seu pagamento de {formatCurrency(pixData?.amount || 0)} foi aprovado com sucesso!
            </p>
            <button
              onClick={() => {
                setStep('form');
                setPixData(null);
                setFormData({
                  fullName: '',
                  email: '',
                  document: '',
                  amount: 67.90
                });
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Fazer Novo Pagamento
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
