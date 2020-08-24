import Project from "../components/portfolio/Project.js";
import Footer from "../components/Footer.js";

const projects = [
	{
		title: "Em Desenvolvimento: Serase",
		color: "#61FF00",
		img: "Serase",
		content: {
			info1: "Finalidade",
			info1value: "CEFET",
			info2: "Tecnologias",
			info2value: ["React Native", "Expo", "Tailwind", "SQLite"],
			info3: "Integrantes",
			info3value: ["6 programadores"],
			info4: "Meu Papel",
			info4value: ["Design UI/UX", "Desenvolvimento Front-End"],
			info5: "Proposta",
			info5value:
				"Um aplicativo de gerenciamento financeiro para gerenciamento de despesas, metas e dívidas - tudo em um só lugar enquanto você aprende sobre educação financeira.",
			info6: "Princípios",
			info6value: [
				"Simplicidade e amigabilidade.",
				"Fluxo de uso curto e didático.",
				"Machine Learning acessível.",
			],
			links: [
				{
					call: "Serase no Github",
					link: "https://github.com/Serase-Labs",
				},
				{
					call: "Serase no Twitter",
					link: "https://twitter.com/seraseapp",
				},
				{
					call: "Serase em desenvolvimento",
					link:
						"https://twitter.com/nydcodes/status/1287554397409443844?s=20",
				},
			],
		},
	},
	{
		title: "Distraction Journal",
		color: "#FFC703",
		img: "DistractionJournal",
		content: {
			info1: "Finalidade",
			info1value: "Experimentação",
			info2: "Tecnologias",
			info2value: ["Javascript", "Chrome Extension API", "Tailwind"],
			info3: "Foco",
			info3value: ["Desenvolvimento"],
			info4: "Meu Papel",
			info4value: ["Design", "Desenvolvimento"],
			info5: "Proposta",
			info5value:
				"Extensão para Google Chrome que arquiva notas rápidas, mantendo suas distrações em segurança enquanto você navega pela internet e as tornando visíveis ao fim de um turno de trabalho ou estudo.",
			info6: "Entregas-Chave",
			info6value: [
				"Uso da API Google Chrome Extension.",
				"Extensão de estado contínuo.",
				"Uso da biblioteca CSS Tailwind.",
			],
			links: [
				{
					call: "Github",
					link: "https://github.com/nydndr/distraction-journal",
				},
			],
		},
	},
	{
		title: "Sistema Biblioteca & Alunos",
		color: "#FFFFFF",
		img: "Sistema",
		content: {
			info1: "Finalidade",
			info1value: "CEFET",
			info2: "Tecnologias",
			info2value: ["Javascript", "Java", "Ajax", "HTML", "TSQL"],
			info3: "Participantes",
			info3value: ["7 Desenvolvedores", "6 sub-grupos"],
			info4: "Meu Papel",
			info4value: [
				"Liderança de subgrupo",
				"Desenvolvimento Front-End",
				"Design",
			],
			info5: "Proposta",
			info5value:
				"Sistema de gerenciamento de alunos e de acervo de biblioteca para uma organização estudantil fictícia. Meu subgrupo tratou do lançamento do sistema de avaliações; atividades; sistema de reservas.",
			info6: "Entregas-Chave",
			info6value: [
				"Aplicação Desktop e Web.",
				"Banco de dados comunicante entre plataformas.",
			],
			links: [
				{
					call: "Github",
					link: "https://github.com/INF2-2019",
				},
			],
		},
	},
	{
		title: "1000&1",
		color: "#FF6F5E",
		img: "1000&1",
		content: {
			info1: "Finalidade",
			info1value: "Experimentação",
			info2: "Tecnologias",
			info2value: ["Javascript", "Tailwind", "Moment.js", "Alpine.js"],
			info3: "Foco",
			info3value: ["Design"],
			info4: "Meu Papel",
			info4value: ["Design", "Desenvolvimento"],
			info5: "Proposta",
			info5value:
				"Ninguém sabe quando completa 1000 dias de namoro. É uma conta complicada, mas muito importante e esse site cuida disso pra você.",
			info6: "Entregas-Chave",
			info6value: [
				"Manipulação de dados com Moment.js",
				"Uso da biblioteca Talwind.",
				"Consideração de UX Writing",
			],
			links: [
				{
					call: "Github",
					link: "https://github.com/nydndr/1000-1",
				},
				{
					call: "Website",
					link: "https://nydndr.github.io/1000-1/",
				},
			],
		},
	},
	{
		title: "@MaisQueChup",
		color: "#92014A",
		img: "MaisQueChup",
		content: {
			info1: "Marca",
			info1value: "MaisQueChup",
			info2: "Tecnologias",
			info2value: ["Figma"],
			info3: "Veiculação",
			info3value: ["Digital"],
			info4: "Meu Papel",
			info4value: ["Design"],
			info5: "Produtos da Marca",
			info5value: "Chups-Chups Cremosos, Fatias Suculentas e Salgados",
			info6: "Entregas-Chave",
			info6value: ["Cardápios", "Cartões", "Assets de feed do instagram"],
			links: [
				{
					call: "Feed",
					link: "https://www.instagram.com/maisquechup/",
				},
			],
		},
	},
];

export default function Portfolio() {
	return (
		<>
			<p className="text-xl font-sans w-10/12 m-auto py-12">
				O meu maior projeto em andamento e uma pequena seleção dos meus
				melhores trabalhos.
			</p>

			<main className="space-y-12">
				{projects.map((project) => (
					<Project item={project} />
				))}
			</main>

			<div className="bg-secondary h-2 w-4/12 m-auto rounded my-20"></div>
			<Footer
				leadText="Precisando de uma designer ou desenvolvedora?"
				callToAction="Entre em contato."
				arrayLinks={["linkedin", "email"]}
			/>
		</>
	);
}
