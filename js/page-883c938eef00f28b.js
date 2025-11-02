// components/NivusPayPixStatus.tsx
// Componente que verifica automaticamente se o PIX foi pago

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface NivusPayPixStatusProps {
  transactionId: number;
  qrCode: string;
  onPaymentConfirmed?: () => void;
}

export default function NivusPayPixStatus({
  transactionId,
  qrCode,
  onPaymentConfirmed
}: NivusPayPixStatusProps) {
  const router = useRouter();
  const [status, setStatus] = useState<string>('waiting_payment');
  const [attempts, setAttempts] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // Verifica status a cada 5 segundos
    const checkPayment = async () => {
      try {
        setAttempts(prev => prev + 1);

        const response = await fetch(
          `/api/payments/nivuspay/check/${transactionId}`
        );
        const data = await response.json();

        console.log(`Tentativa ${attempts + 1} - Status:`, data.status);
        setStatus(data.status);

        if (data.status === 'paid') {
          // Pagamento confirmado! 🎉
          console.log('✅ Pagamento confirmado!');
          clearInterval(intervalId);
          
          if (onPaymentConfirmed) {
            onPaymentConfirmed();
          }
          
          // Redireciona para página de sucesso
          setTimeout(() => {
            router.push('/success?transaction=' + transactionId);
          }, 1000);
        } else if (data.status === 'refused' || data.status === 'canceled') {
          // Pagamento recusado/cancelado
          console.log('❌ Pagamento não foi aprovado');
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error('Erro ao verificar pagamento:', error);
      }
    };

    // Primeira verificação imediata
    checkPayment();

    // Verificações subsequentes a cada 5 segundos
    intervalId = setInterval(checkPayment, 5000);

    // Timeout após 5 minutos (60 tentativas * 5s)
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      console.log('⏰ Timeout: Verificação encerrada');
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [transactionId, attempts, onPaymentConfirmed, router]);

  const copyQRCode = async () => {
    try {
      await navigator.clipboard.writeText(qrCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Status */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">
          {status === 'waiting_payment' && '⏳ Aguardando Pagamento'}
          {status === 'paid' && '✅ Pagamento Confirmado!'}
          {status === 'refused' && '❌ Pagamento Recusado'}
          {status === 'canceled' && '❌ Pagamento Cancelado'}
        </h2>
        
        <p className="text-gray-600">
          {status === 'waiting_payment' && 
            `Verificando... (tentativa ${attempts})`}
          {status === 'paid' && 'Redirecionando...'}
        </p>
      </div>

      {/* QR Code */}
      {status === 'waiting_payment' && (
        <div className="space-y-4">
          {/* Código PIX */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Código PIX (Copia e Cola):
            </label>
            <div className="relative">
              <textarea
                value={qrCode}
                readOnly
                className="w-full p-3 border rounded-lg text-sm font-mono bg-gray-50"
                rows={3}
                onClick={(e) => e.currentTarget.select()}
              />
              <button
                onClick={copyQRCode}
                className="absolute top-2 right-2 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                {copied ? '✓ Copiado' : 'Copiar'}
              </button>
            </div>
          </div>

          {/* Instruções */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Como pagar:</h3>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>Abra o app do seu banco</li>
              <li>Escolha pagar com PIX</li>
              <li>Copie e cole o código acima</li>
              <li>Confirme o pagamento</li>
            </ol>
          </div>

          {/* Loading indicator */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200" />
            <span>Verificando pagamento automaticamente...</span>
          </div>
        </div>
      )}

      {/* Sucesso */}
      {status === 'paid' && (
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">✓</span>
          </div>
          <p className="text-gray-600">
            Seu pagamento foi confirmado com sucesso!
          </p>
        </div>
      )}
    </div>
  );
}

// ============================================
// API ROUTE - Verificar Status
// ============================================

// app/api/payments/nivuspay/check/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { nivusPayService } from '@/services/nivuspay.service';

// Inicializar serviço
nivusPayService.initialize({
  publicKey: process.env.NIVUSPAY_PUBLIC_KEY!,
  secretKey: process.env.NIVUSPAY_SECRET_KEY!
});

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const transactionId = parseInt(params.id);

    if (isNaN(transactionId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      );
    }

    // Consulta transação
    const transaction = await nivusPayService.getTransaction(transactionId);

    return NextResponse.json({
      success: true,
      status: transaction.status,
      isPaid: transaction.status === 'paid',
      paidAt: transaction.paidAt,
      paidAmount: transaction.paidAmount,
      transaction
    });

  } catch (error: any) {
    console.error('Erro ao verificar transação:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Erro ao verificar pagamento' 
      },
      { status: 500 }
    );
  }
}

// ============================================
// EXEMPLO DE USO NO CHECKOUT
// ============================================

// app/checkout/page.tsx

'use client';

import { useState } from 'react';
import NivusPayPixStatus from '@/components/NivusPayPixStatus';

export default function CheckoutPage() {
  const [pixData, setPixData] = useState<{
    transactionId: number;
    qrCode: string;
  } | null>(null);

  const handleCreatePayment = async () => {
    try {
      const response = await fetch('/api/payments/nivuspay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 67.90,
          fullName: 'João Silva',
          email: 'joao@example.com',
          document: '12345678900',
          items: [
            {
              title: 'Produto Exemplo',
              unitPrice: 67.90,
              quantity: 1,
              tangible: false
            }
          ]
        })
      });

      const data = await response.json();

      if (data.success) {
        // Mostra QR Code e inicia verificação automática
        setPixData({
          transactionId: data.transactionId,
          qrCode: data.qrCode
        });
      } else {
        alert('Erro: ' + data.error);
      }
    } catch (error) {
      alert('Erro ao criar pagamento');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {!pixData ? (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <p className="text-gray-600 mb-6">
              Valor: R$ 67,90
            </p>
            <button
              onClick={handleCreatePayment}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Pagar com PIX
            </button>
          </div>
        ) : (
          <NivusPayPixStatus
            transactionId={pixData.transactionId}
            qrCode={pixData.qrCode}
            onPaymentConfirmed={() => {
              console.log('Pagamento confirmado! 🎉');
              // Você pode adicionar lógica adicional aqui
            }}
          />
        )}
      </div>
    </div>
  );
}
