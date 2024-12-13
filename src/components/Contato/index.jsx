"use client";

import { useState } from "react";
import styles from "./style.module.css";
import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'

export default function Contato() {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState(""); // Mensagem a ser exibida no diálogo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const regex = /^\(?\d{2}\)?[\s-]?9?\d{4}[\s-]?\d{4}$/;
  const isValidNumber = regex.test(number);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidNumber) {
      setStatusMessage("Número de telefone inválido!");
      return;
    }

    setLoading(true);
    setStatusMessage("");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "coelho180305@gmail.com",
          subject: "Novo contato do formulário",
          text: `Nome: ${name}\nE-mail: ${email}\nNúmero: ${number}\nMensagem: ${message}`,
          html: `
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Número:</strong> ${number}</p>
            <p><strong>Mensagem:</strong> ${message}</p>
          `,
        }),
      });

      if (res.ok) {
        setDialogMessage("E-mail enviado com sucesso!");
        openDialog(); // Abre o diálogo de sucesso
        // Limpa o formulário
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        setDialogMessage("Erro ao enviar o e-mail.");
        openDialog(); // Abre o diálogo de erro
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setDialogMessage("Erro ao enviar e-mail: " + error.message);
      openDialog(); // Abre o diálogo de erro
    }

    setLoading(false);
  };

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
  }

  return (
    <div className="flex justify-center items-center min-h-screen border-b shadow-md">
      <section className="p-10 w-full max-w-lg">
        <h1 className={styles.title}>Contato</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="name">
            <label className={styles.label} htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="email">
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="number">
            <label className={styles.label} htmlFor="number">
              Número de Telefone
            </label>
            <input
              type="tel"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={styles.input}
              placeholder="(00) 00000-0000"
              required
            />
            {!isValidNumber && number && (
              <p className="text-red-500 text-sm">
                Número de telefone inválido!
              </p>
            )}
          </div>
          <div className="sms">
            <label className={styles.label} htmlFor="sms">
              Mensagem
            </label>
            <textarea
              id="sms"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.input}
              rows="4"
              placeholder="Digite sua mensagem"
              required
            ></textarea>
          </div>
          <div className="button flex justify-center">
            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>

        <Transition show={isOpen} appear>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={closeDialog}
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {dialogMessage}
                  </DialogTitle>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeDialog}
                    >
                      Fechar
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </div>
  );
}
