"use client";

import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dandara | Product Designer</title>
        <meta
          property="og:title"
          content="Dandara | Product Designer"
          key="title"
        />
        <meta
          name="description"
          content="Portfólio de Nicoly Dandara, Product Designer/Gráfica/de Informação nascida e lapidada no Brasil."></meta>

        <meta name="author" content="Nicoly Dandara"></meta>
      </Head>
      <main className="font-manrope text-dandara-black">
        <div>
          <section className="px-12 my-20 font-manrope">
            <p className="text-3xl md:text-6xl font-bold leading-relaxed pb-6">
              Meu nome é Nicoly Dandara, <br></br> mas o Nicoly é mudo.
            </p>
            <div className=" space-y-2">
              <p className="font-semibold text-xl">Product Designer @ Stone</p>
              <p className="font-medium">
                No passado: Product Designer @ QuintoAndar
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-10 text-white">
            <div className="bg-desafiouiux px-6 py-12 space-y-4 flex flex-col justify-between">
              <p className="uppercase font-anton text-xl tracking-wide">
                #1 Desafio Jovens UI/UX
              </p>
              <p className="font-medium w-11/12">
                Onboarding para aplicação de gerenciamento financeiro, vencedor
                do prêmio Jovens UI/UX
              </p>
              <div>
                <Link href="design/desafio">
                  <button className="border px-3 py-1 rounded-full">{`Ler Case →`}</button>
                </Link>
              </div>
            </div>

            <div className="col-span-2 bg-stone block md:grid md:grid-cols-2">
              <div className="px-6 py-12 space-y-4 flex flex-col justify-between">
                <p className="uppercase font-anton text-xl tracking-wide">
                  Product Designer @ Stone
                </p>
                <p className="font-medium w-11/12">
                  Cuidando de 20+ maquininhas e elevando a régua do design na
                  maior adquirete do Brasil
                </p>
                <div>
                  <Link href="design/stone">
                    <button className="border px-3 py-1 rounded-full">{`Ler mais →`}</button>
                  </Link>
                </div>
              </div>
              <div className="bg-[url('/images/home_stone.png')] bg-cover bg-no-repeat"></div>
            </div>
          </section>

          <section className=" bg-dandara-yellow mt-12 px-6 py-12 space-y-6">
            <p className="text-4xl font-bold tracking-tight">
              Quer colaborar? Vamos conversar!
            </p>
            <p className="font-medium">
              Envie um{" "}
              <Link className="underline" href="mailto:nicolydndr@gmail.com">
                email
              </Link>{" "}
              ou me pinga no{" "}
              <Link
                className="underline"
                href="https://www.linkedin.com/in/nicolydandara/">
                LinkedIn
              </Link>{" "}
              e vamos marcar um papo.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
