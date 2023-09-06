import Link from "next/link";

export default function Stone() {
  return (
    <>
      <section className="hidden md:grid grid-cols-3 my-20">
        <div className="col-span-2">
          <p className="text-5xl font-bold tracking-tight leading-relaxed pb-6 w-2/3">
            Stone: cuidando das maquininhas mais verdes do Brasil
          </p>
          <p className="font-medium text-xl bg-dandara-yellow w-fit">
            Produt Designer @ Stone
          </p>
        </div>

        <div className="bg-[url('/images/home_stone.png')] aspect-square bg-cover no-repeat"></div>
      </section>

      <section className="block md:hidden space-y-12 my-20">
        <div className="">
          <p className="text-2xl md:text-5xl font-bold tracking-tight leading-relaxed pb-6 w-2/3">
            Stone: cuidando das maquininhas mais verdes do Brasil
          </p>
          <p className="font-medium text-xl bg-dandara-yellow w-fit">
            Produt Designer @ Stone
          </p>
        </div>

        <img src="/images/home_stone.png" className=""></img>
      </section>

      <section className="space-y-6">
        <p className="font-anton uppercase text-3xl text-stone">Atuação</p>
        <div className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
          <p className="text-sm leading-relaxed font-medium">
            Me uni a um time pequeno de designers atuando de maneira cross -
            trabalhamos servindo várias squads dentro da nossa tribo - revezando
            em tocar projetos sozinha e com uma estagiária.
          </p>

          <p className="text-sm leading-relaxed font-medium">
            O Time de POS (Point of Sale) cuida de todas as maquininhas: Stone,
            Ton e Pagar.me, aproximadamente 20 dispositivos, com dimensões,
            características e capacidades completamente diferentes.
          </p>
        </div>
        <div></div>
        <div className="block md:grid md:grid-cols-3 items-center gap-6">
          <p className="leading-relaxed font-medium">
            Recebendo demandas em diferentes estágios de definição, atuei de
            maneira geral em toda a extensão do Design do produto. Da descoberta
            até a entrega, os projetos atuados se aplicaram á dispositivos de
            venda presencial (maquininhas) o que requer uma visão especial de
            padrões de Design de Interface e Experiência.
          </p>

          <img
            className="col-span-2 py-12 px-6"
            src="/images/design_stone_double_diamond.png"></img>
        </div>
      </section>

      <section className="space-y-6">
        <p className="font-anton uppercase text-2xl text-stone">
          Principais Projetos
        </p>

        <div className="block md:grid md:grid-cols-3 gap-10 space-y-10 md:space-y-0 text-white">
          <div className="bg-stone px-6 py-12 space-y-4 aspect-square flex flex-col justify-between">
            <p className="uppercase font-anton text-2xl tracking-wide">
              Loja Android
            </p>
            <p className="font-medium w-11/12">
              Discovery com stakeholders internos para a conceituação e
              priorização da Loja de POS’s Android
            </p>
            <div className="max-h-max">
              <img src="/images/double_diamond_start.png"></img>
            </div>
          </div>

          <div className="col-span-2 bg-stone grid grid-cols-2 ">
            <div className="bg-stone px-6 py-12 space-y-4 flex flex-col justify-between">
              <p className="uppercase font-anton text-2xl tracking-wide">
                Fichas
              </p>
              <p className="font-medium w-11/12">
                Design do aplicativo de Fichas para o POS Android, primeiro
                aplicativo da Loja Android.
              </p>

              <div className="max-h-max">
                <img src="/images/double_diamond_end.png"></img>
              </div>
            </div>
            <div className="bg-[url('/images/design_stone_fichas.png')] bg-contain md:bg-cover bg-no-repeat"></div>
          </div>

          <div className="bg-stone px-6 py-12 space-y-4 flex flex-col justify-between">
            <p className="uppercase font-anton text-2xl tracking-wide">
              Adequações a resoluções
            </p>
            <p className="font-medium w-11/12">
              Ajustes de interface no POS à resoluções do Banco Central
            </p>

            <div className="max-h-max">
              <img src="/images/double_diamond_definition_end.png"></img>
            </div>
          </div>

          <div className="bg-stone px-6 py-12 space-y-4 aspect-square flex flex-col justify-between">
            <p className="uppercase font-anton text-2xl tracking-wide">
              Melhorias
            </p>
            <p className="font-medium w-11/12">
              Desenvolvimento de features e melhorias nos aplicativos de
              Solicitação de Bobinas, Launchers, Simulador de Vendas e Ajustes
            </p>

            <div className="max-h-max">
              <img src="/images/double_diamond_full.png"></img>
            </div>
          </div>

          <div className=" bg-zinc-700 px-6 py-12 space-y-4 flex flex-col justify-between">
            <p className="uppercase font-anton text-2xl tracking-wide">
              Designops
            </p>
            <p className="font-medium w-11/12">
              Elevando a régua do design com novos ritos, iniciando discussão
              sobre processo de trabalho e contribuindo com reorganização de
              repositórios
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-dandara-yellow mt-28 px-6 py-12 space-y-6">
        <p className="text-4xl font-bold tracking-tight">
          Quer saber mais sobre a minha atuação?
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
    </>
  );
}
