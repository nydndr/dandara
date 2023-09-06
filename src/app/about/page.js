import Link from "next/link";

export default function About() {
  return (
    <>
      <main className="font-manrope">
        <section className="my-20">
          <p className="text-xl md:text-4xl font-bold leading-relaxed pb-6 w-full md:w-2/3">
            Eu falo inglês e português fluente e entendo um pouco de alemão, mas
            design é minha língua favorita.
          </p>
        </section>

        <section className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0 text-sm leading-relaxed font-medium">
          <img className="" src="/images/about_profile.png"></img>
          <div className="space-y-6">
            <p className="font-anton uppercase text-2xl">Antes do design</p>

            <p>
              Antes de iniciar no mundo de design, eu fui desenvolvedora
              front-end. Como parte do currículo do curso de Informática
              (voltado para desenvolvimento) no CEFET-MG, realizei um estágio
              como programadora front-end na TeamHub - RH Tech que oferece uma
              plataforma para gestão de colaboradores e clima organizacional.
            </p>

            <p>
              Sempre suspeitei que teria mais afinidade com o trabalho de Design
              que com o trabalho como Desenvolvedora e o tempo na startup me deu
              oportunidade de experimentar o outro lado da tecnologia. Sem a
              presença de uma pessoa de design na empresa, realizei explorações
              individuais de acordo com as necessidades que enxerguei, iniciando
              o uso do Figma na companhia como ferramenta de prototipação e
              documentação de interface.
            </p>
          </div>
          <div className="space-y-6">
            <p className="font-anton uppercase text-2xl">Depois do design</p>

            <p>
              Alguns meses dentro do estágio decidi traçar meu plano para
              transição de carreira, estudando de maneira independente o
              suficiente para ingressar em processos seletivos. Essa fase de
              aprendizado durou aproximadamente 6 meses.
            </p>
            <p>
              O que considero o fim dessa fase foi o #1 Desafio Jovens UI/UX
              onde desenvolvi um projeto de interface e experiência em 15 dias.
              O{" "}
              <Link
                className="font-bold underline underline-offset-4"
                href="design/desafio">
                Fin
              </Link>
              , uma retratação e evolução do projeto desenvolvido como TCC do
              curso de Informática, foi escolhido como o vencedor e pude
              apresentá-lo como case na{" "}
              <Link
                className="font-bold underline underline-offset-4"
                href="https://www.youtube.com/live/qv3Z4_mBg9M?feature=share">
                live da premiação{" "}
              </Link>{" "}
              - e essa foi a{" "}
              <span className="font-bold">
                minha primeira experiência apresentando um case de design.
              </span>
            </p>
          </div>
          <p>
            A segunda seria no processo seletivo para o{" "}
            <span className="font-bold">QuintoAndar</span>, empresa na qual
            ingressei como{" "}
            <span className="font-bold">
              Product Designer Junior no time de Closing
            </span>{" "}
            no fim de 2021. Começar minha carreira no time referência de Design
            no Brasil me apresentou um padrão de qualidade e ética impossível de
            abandonar.
          </p>
          <p>
            Com essa mesma visão de Design, entrei na{" "}
            <span className="font-bold">Stone</span> em 2022 como{" "}
            <span className="font-bold">
              Designer De Produto I para servir o time de POS (as maquininhas
              verdes)
            </span>
            . Em um time de apenas três pessoas, conheci um mundo e contexto
            completamente diferente de se relacionar e desenhar para. Em
            melhorias em produtos já existentes ou em projetos completamente
            inovadores, otimizei o processo de Design a importância da nossa
            prática frente ás outras.
          </p>

          <div className=" bg-stone text-white px-6 py-12 space-y-4 flex flex-col justify-between ">
            <p className="uppercase font-anton text-xl">
              Product Designer @ Stone
            </p>
            <p className="font-medium w-11/12">
              Cuidando de 20+ maquininhas e elevando a régua do design na maior
              adquirete do Brasil
            </p>
            <div>
              <Link href="design/stone">
                <button className="border px-3 py-1 rounded-full">{`Ler mais →`}</button>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-anton uppercase text-2xl">Educação</p>
            <p>
              Durante o mesmo período em que estudava para me tornar Designer em
              2021, estudava também para ingressar no ensino superior. Hoje
              curso Bacharelado em Design Gráfico na UEMG, primeira instituição
              educacional de design do Brasil. Praticar design como profissional
              e como estudante - e como designer digital e como designer gráfica
              - me prova todos os dias que{" "}
              <span className="font-bold">
                design é tudo, principalmente processo.
              </span>
            </p>
          </div>

          <div className="col-span-2 bg-uemg grid grid-rows-2 md:grid-cols-2 text-white">
            <div className="px-6 py-12 space-y-4 flex flex-col justify-between">
              <p className="uppercase font-anton text-xl">UEMG</p>
              <p className="font-medium w-11/12">
                Aprendendo sobre metodologia de design, design gráfico, design
                de serviço, percepção e emoção e trazendo tudo pros produtos
                digitais.
              </p>
            </div>
            <div className="bg-[url('/images/about_uemg.png')] bg-cover bg-no-repeat"></div>
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
      </main>
    </>
  );
}
