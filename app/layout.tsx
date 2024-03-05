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
  title: "CPF Social - Gerador de CPFs válidos.",
  description:
    "CPF Social é uma maneira rápida e segura de gerar números de CPF válidos. Nosso serviço online oferece uma solução conveniente para suas necessidades.",
  // description: "Generated by create next app",
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
        <meta name="subject" content="Gerador de CPFs válidos." />
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
          content="CPF Social é uma maneira rápida e segura de gerar números de CPF válidos. Nosso serviço online oferece uma solução conveniente para suas necessidades."
        />
        <meta
          name="topic"
          content="CPF Social é uma maneira rápida e segura de gerar números de CPF válidos. Nosso serviço online oferece uma solução conveniente para suas necessidades."
        />
        <meta
          name="summary"
          content="CPF Social é uma maneira rápida e segura de gerar números de CPF válidos. Nosso serviço online oferece uma solução conveniente para suas necessidades."
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

        <meta name="og:title" content="CPF Social - Gerador de CPFs válidos." />

        <meta name="og:type" content="website" />

        <meta name="og:url" content="http://www.cpf.social" />

        <meta name="og:image" content="http://www.cpf.social" />

        <meta name="og:site_name" content="CPF Social" />

        <meta
          name="og:description"
          content="CPF Social é uma maneira rápida e segura de gerar números de CPF válidos. Nosso serviço online oferece uma solução conveniente para suas necessidades."
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

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7591089490291132"
          crossOrigin="anonymous"
        ></script>
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
