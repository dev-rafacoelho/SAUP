import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { to, subject, text, html } = await req.json();


  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Porta específica
    secure: false, // Usa TLS
    auth: {
      user: 'coelho180305@gmail.com', 
      pass: 'rxph fkol kfsv qwsr',
    },
  });
     


  try {
    // Enviando o e-mail
    const info = await transporter.sendMail({
      from: `"Rafael Coelho" <${process.env.EMAIL_USER}>`, // Seu endereço de e-mail
      to, // Lista de destinatários
      subject, // Assunto do e-mail
      text, // Corpo do e-mail em texto puro
      html, // Corpo do e-mail em HTML
    });

    return NextResponse.json({ message: "E-mail enviado com sucesso!", messageId: info.messageId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Falha no envio do e-mail" }, { status: 500 });
  }
}
