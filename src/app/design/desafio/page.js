"use client";

import Link from "next/link";
import { useState } from "react";
export default function Desafio() {
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showDevelopment, setShowDevelopment] = useState(false);

  return (
    <>
      <section className="hidden md:grid grid-cols-3 my-20">
        <div className="col-span-2">
          <p className="text-5xl font-bold tracking-tight leading-relaxed pb-6 w-2/3">
            Fin: jovens, sejam bem vindos ao controle financeiro
          </p>
          <p className="font-medium text-xl bg-dandara-yellow w-fit">
            Projeto vencedor do #1 Desafio UI/UX Jr
          </p>
        </div>
        <div className="bg-[url('/images/design_desafio_header.png')] aspect-square bg-cover no-repeat"></div>
      </section>

      <section className="block md:hidden space-y-12 my-20">
        <div className="">
          <p className="text-2xl md:text-5xl font-bold tracking-tight leading-relaxed pb-6 w-2/3">
            Fin: jovens, sejam bem vindos ao controle financeiro
          </p>
          <p className="font-medium text-xl bg-dandara-yellow w-fit">
            Projeto vencedor do #1 Desafio UI/UX Jr
          </p>
        </div>

        <img src="/images/design_desafio_header.png" className=""></img>
      </section>

      <section className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0 ">
        <div className="space-y-6 ">
          <p className="font-anton uppercase text-3xl text-[#0ABF53]">
            #1 DESAFIO JOVENS UI/UX JR
          </p>
          <div className="leading-loose space-y-6">
            <p className="">
              O projeto foi desenvolvido a partir do #1 Desafio UI/UX Jr. A
              proposta do desafio era o desenvolvimento do fluxo correspondente
              ao primeiro acesso do usuário em uma aplicação.
            </p>
            <p>
              A partir desse prompt, com temas e interpretações livres,
              buscou-se uma problemática e deu-se início ao processo de UX e UI
              que se segue.
            </p>
          </div>
        </div>

        <div className="col-span-2 bg-[#0ABF53] block md:grid md:grid-cols-2 py-12 px-6 text-white gap-x-6 items-center space-y-6 md:space-y-0">
          <div className="space-y-6">
            <p className="font-anton uppercase text-2xl">Duração</p>
            <p className="font-semibold text-lg">15 Dias</p>
          </div>
          <div className="space-y-6">
            <p className="font-anton uppercase text-2xl">Projeto</p>
            <p className="font-semibold text-lg">
              Onboarding; Aplicativo de gerenciamento financeiro
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-anton uppercase text-2xl">Atuação</p>
            <p className="font-semibold text-lg">
              UX Research, UX Design, UI Design
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="font-anton uppercase text-2xl">Problema</p>
          <p className="text-sm leading-relaxed font-medium">
            A medida que os jovens passam a ter mais acesso ao mundo financeiro,
            mais competência financeira é exigida deles. No entanto, uma grande
            parcela desse grupo não faz nenhum tipo de controle financeiro por
            considerar a tarefa muito complicada e difícil de manter.
          </p>
        </div>

        <div className="space-y-6">
          <p className="font-anton uppercase text-2xl">Solução</p>
          <p className="text-sm leading-relaxed font-medium">
            <span className="bg-dandara-yellow">
              O Fin atende esse público sendo uma aplicação financeira que
              conversa com os jovens consumidores e suas dores
            </span>
            , facilitando a experiência com o mundo financeiro desde o
            onboarding.
          </p>
        </div>

        <div className="space-y-6">
          <p className="font-anton uppercase text-2xl">Processo</p>
          <p className="text-sm leading-relaxed font-medium">
            O tempo do desafio foi de 15 dias. Nesse intervalo a metodologia
            Duplo Diamante foi escolhida pelo meu nível de familiaridade com
            esse processo.
          </p>
          <p className="text-sm leading-relaxed font-medium">
            O primeiro objetivo foi{" "}
            <span className="font-bold">
              criar uma base sólida para o produto
            </span>
            . Em seguida, foi priorizado{" "}
            <span className="font-bold">
              o que é pertinente para o usuário desse produto no primeiro acesso
            </span>
            .
          </p>
        </div>

        <img
          className="col-span-3"
          src={"/images/design_desafio_press.png"}></img>
      </section>

      <section className="flex justify-between pt-28">
        <p className="w-2/5 text-lg leading-relaxed">
          <span className="font-bold">Descobrindo o produto:</span> validando a
          hipótese com entrevistas e análises quantitativas; traduzindo
          descobertas em uma persona e suas dores
        </p>
        <button
          onClick={() => setShowDiscovery(!showDiscovery)}
          className="font-medium border border-dandara-black h-fit px-3 py-1 rounded-full transition hover:text-white hover:bg-dandara-black">
          {showDiscovery ? "Resumir Etapa -" : "Expandir Etapa +"}
        </button>
      </section>

      <section className={showDiscovery ? "block py-28" : "hidden"}>
        <section className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
          <div className="leading-relaxed space-y-6">
            <p className="font-anton text-2xl text-[#0ABF53] uppercase">
              Hipótese
            </p>
            <p>
              O primeiro objetivo foi criar uma base sólida para o produto. Em
              seguida, foi priorizado o que é pertinente para o usuário desse
              produto no primeiro acesso.
            </p>
            <p>
              O primeiro objetivo foi criar uma base sólida para o produto. Em
              seguida, foi priorizado o que é pertinente para o usuário desse
              produto no primeiro acesso.
            </p>
          </div>

          <div className="col-span-2 bg-[#0ABF53] text-white font-anton uppercase md:text-2xl flex items-center px-6 py-12 md:py-0">
            <p className="w-full md:w-2/3 leading-loose tracking-wide">
              Os jovens atuais não fazem controle financeiro, apesar de terem
              uma vida financeira consideravelmente movimentada.
            </p>
          </div>
        </section>

        <section className={"bg-[#FFFFD7] py-12 mt-28 px-6"}>
          <div className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
            <div className="space-y-6 leading-relaxed">
              <p className="uppercase text-2xl font-anton">Pesquisa</p>

              <p>
                Para validar a hipótese, escolheu-se uma metodologia
                quantitativa. A pesquisa quantitativa ofereceu em um curto
                espaço de tempo dados suficientes para confirmação da hipótese
                base e noções gerais de comportamento. Além disso, a pesquisa
                serviu como convite para entrevistas com voluntários, abrindo
                porta para análises qualitativas com alguns dos respondentes.
              </p>

              <div className="space-y-3">
                <p className="uppercase font-anton text-lg text-gray-500">
                  Objetivo
                </p>
                <p>
                  Descobrir quais os meios que jovens adultos com renda utilizam
                  para fazer gerenciamento e planejamento financeiro mensal de
                  curto prazo e quais são suas dores no processo.
                </p>
              </div>

              <div className="space-y-3">
                <p className="uppercase font-anton text-lg text-gray-500">
                  Impacto
                </p>
                <p>
                  A partir das informações retiradas da análise dos dados
                  quantitativos foi possível traçar as funcionalidades desejadas
                  e necessárias em uma caderneta financeira. A partir das
                  funcionalidades agrupadas, houve a priorização de quais
                  deveriam integrar o processo de onboarding.
                </p>
              </div>

              <p>
                As entrevistas com os usuários aconteceram em formato
                não-estruturado, repassando perguntas do formulário e indo a
                fundo na dificuldade da formação do hábito de gerenciamento
                financeiro - ponto indicado como maior problemática pelos
                participantes da pesquisa quantitativa até o dado momento.
              </p>
            </div>

            <img
              className="col-span-2 px-28"
              src={"/images/design_desafio_research_process.png"}></img>
          </div>

          <img
            className="py-12"
            src={"/images/design_desafio_research_results.png"}></img>

          <div className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0 leading-relaxed">
            <div></div>
            <p className="">
              Ao entrevistar os usuários tive a oportunidade de investigar
              porque os aplicativos financeiros especializados não são tão
              utilizados quanto outros aplicativos e ferramentas manuais. Os
              jovens não sentem que esses aplicativos são fáceis de usar ou
              adaptáveis a suas necessidades. Muitas das funcionalidades
              oferecidas não são compatíveis com o estilo de vida desse
              público-alvo, assim como a linguagem e o visual.
            </p>
            <p>
              Além da dificuldade de construir o hábito de fazer o controle
              financeiro, também foi manifestada a incompreensão do
              gerenciamento financeiro. 22,9% das pessoas não sabem como
              funciona ou como começar o controle financeiro. Portanto. é
              interessante que o aplicativo se atenha ao básico em um primeiro
              acesso.
            </p>
          </div>
        </section>

        <section className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0 py-12 md:py-24">
          <div className="space-y-6">
            <p className="font-anton text-2xl uppercase">Persona</p>
            <p className="leading-loose">
              Dos dados coletados pela etapa de pesquisa, nasceu a persona Elisa
              Dias.
            </p>
          </div>

          <div className="col-span-2 bg-[#0ABF53] text-white py-12 px-6 space-y-6">
            <p className="font-anton text-2xl uppercase">Elisa Dias</p>
            <div className="font-semibold">
              <p>21 anos</p>
              <p>Universitária, Graduanda de Jornalismo</p>
              <p>Freelancer, Social Media Manager</p>
            </div>

            <div className="space-y-3">
              <p className="font-anton uppercase text-xl">Bio</p>
              <p className="leading-loose">
                Elisa é uma aluna de jornalismo, atualmente em EAD, que faz
                trabalhos de social media para marcas de médio porte. Conciliar
                a vida acadêmica com os trabalhos de freelance lhe mantem muito
                ocupada, frequentemente se esquecendo de rotinas com seus dias
                agitados mesmo que tente se planejar com antecedência. Sua renda
                pode variar muito durante o ano e até mesmo no mês, por isso
                prefere se organizar em ferramentas mais flexíveis.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-anton uppercase text-xl">
                Aplicativos mais utilizados
              </p>
              <p>Instagram. Tiktok. Gmail. Google Calendar.</p>
            </div>

            <div className="space-y-3">
              <p className="font-anton uppercase text-xl">Dores</p>
              <ul className="space-y-3">
                <li>
                  + Quando um cliente cancela um serviço, Elisa precisa somar
                  novamente todos as movimentações em seus bloco de notas.
                </li>
                <li>
                  + Por vezes seus cálculos saem errados por ter esquecido de
                  inserir algum valor durante o mês.
                </li>
                <li>
                  + Com a rotina corrida, acaba se lembrando de anotar as
                  entradas de clientes, mas não seus pequenos gastos.
                </li>
                <li>
                  + Por organizar todos os seus fluxos no bloco de notas não
                  consegue ter noção ao fim do mês de para onde foram seus
                  gastos e como vão seus projetos de freelance.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#D9F0A3] py-12 px-6 space-y-6 leading-relaxed">
          <p className="font-anton uppercase text-2xl">Benchmark</p>

          <div className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
            <div className="space-y-6">
              <p>
                Analisando as necessidades da Elisa e ciente da multitude de
                aplicativos de gerenciamento financeiro disponível, além das
                ferramentas não especializadas utilizadas, foi considerado
                inteligente analisar as opções já em mercado.
              </p>

              <div className="space-y-3">
                <p className="uppercase font-anton text-lg text-gray-500">
                  Objetivo
                </p>
                <p>
                  Analisar as funcionalidades oferecidas, os preços dos serviços
                  e em isolamento como ocorre o fluxo de onboarding nessas
                  plataformas, em busca de padrões que poderiam ser aproveitados
                  e também de experiências que poderiam ser melhoradas.
                </p>
              </div>
            </div>
            <div className="col-span-2 space-y-6">
              <p className="uppercase font-anton text-lg text-gray-500">
                Impacto
              </p>
              <div className="block md:grid md:grid-cols-2 gap-6 space-y-6 md:space-y-0">
                <p>
                  Analisando aplicativos com relação indireta foi possível
                  reconhecer as características que mais interessam os usuários
                  dessa faixa etária. A simplicidade oferecida pelo bloco de
                  notas é diametralmente oposta a complexidade dos registros
                  ofercidos pelo Wallet e Spendee.{" "}
                  <span className="font-bold">
                    A complexidade das aplicações citadas é justificada pelo seu
                    público-alvo, mas ultrapassam as necessidades e interesses
                    do nosso público-alvo. É necessário que a nossa solução
                    foque na simplicidade.
                  </span>
                </p>

                <p>
                  A análise do aplicativo bancário do Nubank apontou que apesar
                  de faltarem com funcionalidades importantes para o
                  gerenciamento financeiro, esses aplicativos são escolhidos
                  para um controle superficial pela praticidade. Além disso,{" "}
                  <span className="font-bold">
                    a linguagem visual e escrita das aplicações de bancos
                    digitais se comunica muito bem com a faixa etária em
                    questão.
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="flex justify-between pt-28">
        <p className="w-2/5 text-lg leading-relaxed">
          <span className="font-bold">Definindo a solução:</span> desenvolvendo
          ideias com base nos resultados da pesquisa; organizando e priorizando
          ideias com base nas dores dos usuários
        </p>
        <button
          onClick={() => setShowDefinition(!showDefinition)}
          className="font-medium border border-dandara-black h-fit px-3 py-1 rounded-full transition hover:text-white hover:bg-dandara-black">
          {showDefinition ? "Resumir Etapa -" : "Expandir Etapa +"}
        </button>
      </section>

      <section
        className={
          showDefinition ? "block bg-[#D9F0A3] py-12 mt-28 px-6" : "hidden"
        }>
        <div className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
          <div className="space-y-6 leading-relaxed">
            <p className="uppercase text-2xl font-anton">Pesquisa</p>

            <p>
              A partir dos insights gerados na fase de pesquisa, anotei todas as
              ideias de funcionalidade e recursos que a aplicação poderia
              conter.
            </p>

            <div className="space-y-3">
              <p className="uppercase font-anton text-lg text-gray-500">
                Plano de Ação
              </p>
              <p>
                Para manter a simplicidade e a objetividade do app, as dores da
                Elisa foram utilizadas como base em uma plano de ação. Todas as
                ideias que não se relacionavam com suas dores de maneira direta,
                foram colocadas em backlog. A partir desse plano de ação, uma
                trajetória para priorização das funcionalidades e recursos que
                deveriam ser introduzidas ao usuário no momento de criação da
                sua conta.
              </p>
            </div>
          </div>

          <img
            className="col-span-2 px-28"
            src={"/images/design_desafio_brainstorming.png"}></img>
        </div>
      </section>

      <section className="flex justify-between pt-28">
        <p className="w-2/5 text-lg leading-relaxed">
          <span className="font-bold">Desenvolvendo a solução:</span>{" "}
          priorizando o primeiro contato com a aplicação; testando e aprimorando
          a solução
        </p>
        <button
          onClick={() => setShowDevelopment(!showDevelopment)}
          className="font-medium border border-dandara-black h-fit px-3 py-1 rounded-full transition hover:text-white hover:bg-dandara-black">
          {showDevelopment ? "Resumir Etapa -" : "Expandir Etapa +"}
        </button>
      </section>

      <section
        className={
          showDevelopment ? "block py-28 space-y-12 md:space-y-0" : "hidden"
        }>
        <section>
          <section className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
            <div className="leading-relaxed space-y-6">
              <p className="font-anton text-2xl text-[#0ABF53] uppercase">
                Priorizando features para o primeiro contato
              </p>
              <p>
                O grupo de features gerado pelo plano de ação foi organizado em
                um kanban com três colunas: independente do onboarding,
                interessante de apresentar no onboarding, essencial para o
                onboarding.
              </p>
              <p>
                Como meio de filtrar as features nas duas últimas colunas,
                comparou-se dois fatores:
              </p>
              <ul className="list-disc">
                <li>
                  Essa feature é um diferencial em relação as outras aplicações?
                </li>
                <li>
                  Essa feature exige uma configuação extensa por parte do
                  usuário?
                </li>
              </ul>
            </div>

            <div className="col-span-2 space-y-12">
              <div className="bg-[#0ABF53] text-white font-anton uppercase text-2xl flex items-center px-6 py-12">
                <p className="w-2/3 leading-loose tracking-wide">
                  Apenas uma feature com extensa configuração poderia integrar o
                  onboarding e pelo menos uma das features do onboarding deveria
                  ser um diferencial.
                </p>
              </div>
              <img src="/images/design_desafio_tasks.png"></img>
            </div>
          </section>
        </section>

        <section>
          <section className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
            <div className="leading-relaxed space-y-6">
              <p className="font-anton text-2xl text-[#0ABF53] uppercase">
                Prototipação de Baixo Nível
              </p>
              <p>
                Após desenvolver um inventário de interface com base no task
                flow para a criação da conta, um protótipo de baixo nível foi
                desenvolvido a fim de encontrar a melhor sequência para as
                funcionalidades e organização das informações. Posteriormente,
                esse protótipo foi levado para um teste de usabilidade a fim de
                confirmar a validade da solução encontrada.
              </p>
            </div>

            <img
              className="col-span-2 px-12"
              src="/images/design_desafio_low_prototype.png"></img>
          </section>
        </section>

        <section className={"bg-[#FFFFD7] py-12 mt-28 px-6"}>
          <div className="space-y-6 leading-relaxed">
            <p className="uppercase text-2xl font-anton">
              Primeiro Teste de Usabilidade
            </p>
            <div className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
              <div className="space-y-6 md:space-y-0">
                <div className="space-y-3">
                  <p className="uppercase font-anton text-lg text-gray-500">
                    Objetivo
                  </p>
                  <p>
                    Averiguar a extensão e a complexidade do fluxo de cadastro.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="uppercase font-anton text-lg text-gray-500">
                    Tarefa
                  </p>
                  <p>
                    A tarefa passada foi criar uma conta nova seguindo as
                    diretrizes da personagem Eliza Dias. Os testers conheceram
                    sua história por meio de um roteiro passado.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="uppercase font-anton text-lg text-gray-500">
                  Feedbacks
                </p>
                <p>
                  Após a complutde do teste, os usuários participaram de uma
                  conversa em que puderam expressar suas reflexões sobre a
                  aplicação. Todos apontaram que o fluxo foi rápido e claro e
                  que apresentou funcionalidades pertinentes para os seus
                  contextos. Outrossim, uma das participantes manifestou
                  incerteza quanto a segurança da funcionalidade de
                  sincronização bancária.
                </p>
              </div>

              <div className="space-y-3">
                <p className="uppercase font-anton text-lg text-gray-500">
                  Impacto
                </p>
                <p>
                  A tarefa passada foi criar uma conta nova seguindo as
                  diretrizes da personagem Eliza Dias. Os testers conheceram sua
                  história por meio de um roteiro passado.
                </p>
              </div>
            </div>
          </div>

          <img
            className="col-span-2 my-6 md:px-28 md:my-16"
            src={"/images/design_desafio_medium_prototype.png"}></img>

          <div className="space-y-6">
            <p className="uppercase text-2xl font-anton">
              Segundo Teste de Usabilidade
            </p>
            <div className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0 leading-relaxed">
              <p className="">
                O segundo teste de usabilidade teve como objetivo validar as
                alterações realizadas no fluxo de e a linguagem aplicada. Para
                isso, os protótipos foram enviados para testers diferentes da
                primeira usabilidade, com exceção da usuária que apontou
                confusão na sincronização bancária, e o roteiro e a tarefa foram
                os mesmos.
              </p>
              <p>
                O segundo teste de usabilidade teve como objetivo validar as
                alterações realizadas no fluxo de e a linguagem aplicada. Para
                isso, os protótipos foram enviados para testers diferentes da
                primeira usabilidade, com exceção da usuária que apontou
                confusão na sincronização bancária, e o roteiro e a tarefa foram
                os mesmos.
              </p>
              <div></div>
            </div>
          </div>
        </section>

        <div className="space-y-6 leading-relaxed pt-16">
          <p className="uppercase text-2xl font-anton">UI Design</p>
          <div className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0">
            <p>
              Apenas 17,1% dos entrevistados utilizam, ou já utilizaram,
              aplicativos financeiros especializados. Para além das
              funcionalidades sob medida para as suas necessidades atuais, a
              linguagem visual foi desenhada para quebrar o gelo entre jovens e
              aplicativos de gerenciamento financeiro. Para construí-la,
              buscou-se inspiração nos aplicativos mais utilizados pela persona
              e também nas ferramentas mais utilizadas pelos entrevistados.
            </p>

            <div className="space-y-3">
              <p className="uppercase font-anton text-lg text-gray-500">
                Ilustrações
              </p>
              <p>
                A biblioteca de ilustrações utilizadas carrega traços simples
                que conversam com a filosofia do produto, além de trazer cenas e
                objetos que se relacionam com a vida e rotina da Elisa.
              </p>
            </div>

            <div className="space-y-3">
              <p className="uppercase font-anton text-lg text-gray-500">
                Iconografia
              </p>
              <p>
                Assim com as ilustrações, a biblioteca de ícones complementa a
                linguagem simples e moderna do fin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <img className="py-16" src={"/images/design_desafio_screens.png"}></img>

      <section className="block md:grid md:grid-cols-3 gap-x-6 gap-y-28 space-y-12 md:space-y-0 bg-[#0ABF53] py-12 px-6 text-white font-bold tracking-tight gap-12 leading-relaxed items-center">
        <div className="space-y-6">
          <p>
            “Achei bem limpo. As informações foram sucintas, rápidas e
            objetivas.”
          </p>

          <p className="border border-white w-fit px-3 py-1 rounded-full">.</p>
        </div>

        <div className="space-y-6">
          <p>
            “As ações ficaram bem descritas e ficou muito fácil de interagir.”
          </p>
          <p className="border border-white w-fit px-3 py-1 rounded-full">.</p>
        </div>

        <div className="space-y-6">
          <p>
            “Gostei especialmente dos feedbacks de cada ação, sempre bom ter
            aquele tapinha nas costas por fazer o trem certo{" "}
            <span className="line-through">ksjdhksd</span> arrasou e estou
            curiosa pelos próximos.”
          </p>
          <p className="border border-white w-fit px-3 py-1 rounded-full">.</p>
        </div>
      </section>

      <section className="flex justify-between py-28">
        <p className="w-2/5 text-lg leading-relaxed">
          <span className="font-bold">
            O projeto foi selecionado como o vencedor do desafio
          </span>{" "}
          para o qual foi criado e apresentado em live para a premiação.
        </p>
        <Link
          href="https://www.youtube.com/live/qv3Z4_mBg9M?feature=share"
          className="font-medium border border-dandara-black h-fit px-3 py-1 rounded-full transition hover:text-white hover:bg-dandara-black">
          Assistir Premiação ↗
        </Link>
      </section>

      <section className="block md:grid md:grid-cols-3 space-y-6 md:space-y-0 text-white items-center">
        <p className="text-2xl font-anton text-[#0ABF53] uppercase">
          Mais do meu trabalho
        </p>

        <div className="block col-span-2 bg-[#0ABF53] md:grid md:grid-cols-2">
          <div className="py-12 px-6 space-y-4 text-white">
            <p className="uppercase font-anton text-xl tracking-wide">
              Product Designer @ Stone
            </p>
            <p className="font-medium w-11/12">
              Cuidando de 20+ maquininhas e elevando a régua do design na maior
              adquirete do Brasil
            </p>
            <div>
              <Link href="design/stone">
                <button className="border px-3 py-1 rounded-full transition hover:bg-white hover:text-[#0ABF53]">{`Ler mais →`}</button>
              </Link>
            </div>
          </div>
          <div className="bg-[url('/images/home_stone.png')] bg-cover bg-no-repeat"></div>
        </div>
      </section>

      <section className=" bg-dandara-yellow mt-28 px-6 py-12 space-y-6">
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
    </>
  );
}
