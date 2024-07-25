import Link from "next/link";

const Page = () => {
  return (
    <main className="flex flex-col gap-4 py-16">
      <u>
        <Link href={"/"}>Gerador de cpf</Link>
      </u>
      <h1 className="text-2xl text-center">
        <strong>A Matemática do CPF.</strong>
      </h1>
      <div className="flex flex-col gap-2">
        <p>
          A Matemática está presente em várias coisas naturais para o nosso
          dia-a-dia.
        </p>
        <p>
          Hoje eu vou explicar como funciona a geração e validação de um CPF.
        </p>
      </div>
      <h2 className="text-2xl">
        <strong>Fórmula</strong>
      </h2>
      <img
        width={600}
        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*--7XE1QgT7KIiBW03toQnQ.png"
        alt=""
      />
      <p>
        Os <strong>primeiros oito dígitos</strong>, são os números base do CPF,
        que são definidos pela Receita Federal.
      </p>
      <p>
        O <strong>nono dígito</strong>, define a Região Fiscal responsável pela
        inscrição.
      </p>
      <p>
        O <strong>penúltimo</strong>,é o dígito verificador dos nove primeiros.
      </p>
      <p>
        O <strong>último</strong>, é o dígito verificador dos noves anteriores a
        ele.
      </p>
      <h2 className="text-2xl">
        <strong>Simplificando</strong>
      </h2>
      <p>
        Os 8 primeiros números podem ser aleatórios (123.456.78x-xx ou
        000.000.00x-xx), o que realmente importa são os próximos 3.
      </p>
      <h3>
        <strong>Nono Digito</strong>
      </h3>
      <strong>1 — DF, GO, MS, MT e TO</strong>
      <strong>2 — AC, AM, AP, PA, RO e RR</strong>
      <strong>3 — CE, MA e PI</strong>
      <strong>4 — AL, PB, PE, RN</strong>
      <strong>5 — BA e SE</strong>
      <strong>6 — MG</strong>
      <strong>7 — ES e RJ</strong>
      <strong>8 — SP</strong>
      <strong>9 — PR e SC</strong>
      <strong>0 — RS</strong>
      <p>
        Segundo essa tabela, o seu nono digito indica qual{" "}
        <strong>Região Fiscal</strong> é responsável por ele. (Faz o teste com o
        seu CPF. 😉)
      </p>
      <h3>
        <strong>Décimo Digito</strong>
      </h3>
      <p>Esse é o nosso primeiro verificador, e ele usa a seguinte fórmula:</p>
      <p>
        Os nove primeiros números são ordenadamente multiplicados pela sequência
        <strong>10, 9, 8, 7, 6, 5, 4, 3, 2</strong> (o primeiro por 10, o
        segundo por 9, e assim sucessivamente))
      </p>
      <p>
        Em seguida, você soma os resultados e calcula o resto da divisão dessa
        soma por 11.
      </p>
      <p>Ex:</p>
      <p>Imagine que a soma total foi 162.</p>
      <strong>162 % 11 = 8</strong>
      <p>O resto da divisão.</p>
      <p>
        Se esse resto for <strong>0 ou 1</strong>, então o digito deve ser{" "}
        <strong>0</strong>.
      </p>
      <p>
        Caso contrário, o digito é <strong>(11 — resto)</strong>.
      </p>
      <p>Ex:</p>
      <strong>11–8 = 3</strong>
      <p>
        O nosso décimo digito, seria <strong>3</strong>.
      </p>
      <h3>
        <strong>Décimo Primeiro Digito</strong>
      </h3>
      <p>
        Para esse Digito, a fórmula funciona da mesma maneira, mas ele usa os 9
        números antes dele.
      </p>
      <p>
        Ou seja, agora o nosso primeiro digito verificador também entra nessa
        conta.
      </p>
      <p>
        E com isso, mesmo com apenas uma caneta e um pedaço de papel, você já
        consegue gerar CPFs válidos manualmente.
      </p>
      <h3>Automatização</h3>
      <p>
        E para testar essa lógica e as fórmulas, eu fiz um gerador de CPF
        extremamente simples.
      </p>
      <p>
        👉
        <Link className="text-orange-700 underline" href="/">
          https://cpf.social/
        </Link>
        👈
      </p>
      <p>Aqui está o repositório:</p>
      <p>
        👉
        <Link
          className="text-orange-700 underline"
          href="https://github.com/luannzin/cpf-social"
        >
          https://github.com/luannzin/cpf-social
        </Link>
        👈
      </p>
      <p>E aqui está o algoritmo de geração:</p>
      <p>
        👉
        <Link
          className="text-orange-700 underline"
          href="https://github.com/luannzin/cpf-social/blob/main/app/helpers/generateCpf.ts"
        >
          https://github.com/luannzin/cpf-social/blob/main/app/helpers/generateCpf.ts
        </Link>
        👈
      </p>
      <p>
        O projeto é um MVP e Open Source, então qualquer ideia é extremamente
        bem-vinda.
      </p>
      <p>
        Farei um post sobre o Algoritmo de Luhn, então fiquem preparados. 👑
      </p>
      <p>Siga meu Github para os meus próximos projetos.</p>
      <p>
        👉
        <Link
          className="text-orange-700 underline"
          href="https://github.com/luannzin "
        >
          https://github.com/luannzin
        </Link>
        👈
      </p>
      <u className="mt-16">
        <Link href={"/"}>Gerador de CPF Valido</Link>
      </u>
    </main>
  );
};

export default Page;
