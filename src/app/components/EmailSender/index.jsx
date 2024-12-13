'use client'; // Para o App Router no Next.js

import { useState } from 'react';

const EmailSender = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'coelho180305@gmail.com', // E-mail de destinatário
          subject: 'Hello ✔', // Assunto do e-mail
          text: 'Hello world?', // Texto do e-mail
          html: '<b>Hello world?</b>', // HTML do e-mail
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`E-mail enviado com sucesso! ID: ${data.messageId}`);
      } else {
        setMessage('Erro ao enviar e-mail: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      setMessage('Erro ao enviar e-mail: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <button
        onClick={sendEmail}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? 'Enviandooo...' : 'Enviar E-mail'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailSender;
