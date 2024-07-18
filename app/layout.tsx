import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

import "@/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CPF Social - Gerador de CPF válido.",
  description:
    "CPF Social é um gerador de CPF válido. Nosso sistema é uma maneira rápida e eficiente de gerar CPF válido ou gerar CPF real.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7591089490291132"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="shortcut icon"
          href="https://wiki.gelzin.com/api/emoji/%F0%9F%92%B3"
          type="image/x-icon"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Gerador CPF válido, Como obter CPF grátis, CPF generator online, Gerador CPF válido grátis, Gerador CPF para teste, Como gerar CPF, CPF generator brasileiro"
        />
        <meta name="subject" content="Gerador de CPF válidos" />
        <meta name="copyright" content="CPF Social" />
        <meta name="language" content="PT" />
        <meta name="robots" content="index, follow, nocache" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta name="revised" content="Terça-feira, 23 de Janeiro de 2024" />
        <meta
          name="abstract"
          content="CPF Social é uma maneira rápida e segura de gerar um número de CPF válido. Nosso serviço online oferece uma solução conveniente para suas necessidades."
        />
        <meta
          name="topic"
          content="CPF Social é uma maneira rápida e segura de gerar um número de CPF válido. Nosso serviço online oferece uma solução conveniente para suas necessidades."
        />
        <meta
          name="summary"
          content="CPF Social é uma maneira rápida e segura de gerar um número de CPF válido. Nosso serviço online oferece uma solução conveniente para suas necessidades."
        />

        <meta name="classification" content="Software" />

        <meta name="author" content="CPF Social, contato@luannzin.com" />

        <meta name="reply-to" content="contato@luannzin.com" />

        <meta name="owner" content="CPF Social" />

        <meta name="url" content="http://www.cpf.social" />

        <meta name="identifier-URL" content="http://www.cpf.social" />

        <meta name="directory" content="Software, Gerador de CPF" />

        <meta name="category" content="Software, Gerador de CPF" />

        <meta name="coverage" content="Brasil" />

        <meta name="distribution" content="Nacional" />

        <meta name="rating" content="Livre" />

        <meta name="revisit-after" content="7 dias" />

        <meta httpEquiv="Expires" content="0" />

        <meta httpEquiv="Pragma" content="no-cache" />

        <meta httpEquiv="Cache-Control" content="no-cache" />

        <meta name="og:title" content="CPF Social - Gerador de CPF válido" />
        <meta
          name="twitter:title"
          content="CPF Social - Gerador de CPF válido"
        />

        <meta name="og:type" content="website" />

        <meta name="og:url" content="http://www.cpf.social" />
        <meta name="twitter:url" content="http://www.cpf.social" />

        <meta name="og:image" content="http://www.cpf.social" />
        <meta name="twitter:image" content="http://www.cpf.social" />

        <meta name="og:site_name" content="CPF Social" />

        <meta
          name="og:description"
          content="CPF Social é um gerador de CPF válido. Nosso sistema é uma maneira rápida de gerar um cpf real."
        />
        <meta
          name="twitter:description"
          content="CPF Social é um gerador de CPF válido. Nosso sistema é uma maneira rápida de gerar um cpf real."
        />

        <meta name="og:email" content="contato@luannzin.com.br" />

        <meta name="og:phone_number" content="(14) 99658-9643" />

        <meta name="application-name" content="CPF Social" />

        <meta content="yes" name="apple-mobile-web-app-capable" />

        <meta name="theme-color" content="#603500" />

        <meta name="theme-color" content="#603500" />

        <meta name="msapplication-navbutton-color" content="#603500" />

        <meta name="msapplication-TileColor" content="#603500" />

        <meta name="apple-mobile-web-app-status-bar-style" content="#603500" />

        <meta name="color-scheme" content="light" />

        <meta
          name="theme-color"
          content="#603500"
          media="(prefers-color-scheme: light)"
        />

        <meta
          name="theme-color"
          content="#603500"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${roboto.className} w-screen h-screen overflow-x-hidden bg-white flex items-center justify-center`}
      >
        <div className="max-w-[1200px] min-h-screen h-full max-h-screen w-full flex flex-col items-center justify-center">
          {children}
        </div>
        {/* <Toaster closeButton /> */}
        <Analytics />
      </body>
    </html>
  );
}
