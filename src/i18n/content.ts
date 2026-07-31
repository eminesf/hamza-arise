export type Lang = "en" | "pt-br";

export interface ServiceItem {
	title: string;
	desc: string;
}

export interface Stat {
	value: string;
	label: string;
}

export interface TeamMember {
	id: string;
	src: string;
	name: string;
	role: string;
	bio: string;
}

export interface Content {
	nav: {
		about: string;
		mission: string;
		services: string;
		team: string;
		apply: string;
		contact: string;
	};
	hero: {
		eyebrow: string;
		subword: string;
		tagline: string;
		acronym: string;
		desc: string;
		cta1: string;
		cta2: string;
		cta3: string;
	};
	about: {
		tag: string;
		title: string;
		titleEm: string;
		p1: string;
		p2: string;
		quote: string;
		quoteCite: string;
		photoPlaceholder: string;
	};
	mission: {
		tag: string;
		title: string;
		titleEm: string;
		text: string;
		serveText: string;
	};
	services: {
		tag: string;
		title: string;
		titleEm: string;
		items: ServiceItem[];
	};
	impact: {
		tag: string;
		title: string;
		titleEm: string;
		text: string;
		stats: Stat[];
	};
	quoteBanner: { text: string; cite: string };
	team: {
		tag: string;
		title: string;
		titleEm: string;
		founderLabel: string;
		founderName: string;
		founderRole: string;
		founderBio: string;
		founderCta: string;
		founderPhotoAlt: string;
		supportTag: string;
		members: TeamMember[];
	};
	apply: {
		tag: string;
		title: string;
		titleEm: string;
		desc: string;
		cta: string;
		qrAlt: string;
		qrHint: string;
	};
	contact: {
		tag: string;
		title: string;
		titleEm: string;
		desc: string;
		locationLabel: string;
		location: string;
		emailLabel: string;
		instagramLabel: string;
	};
	footer: { tagline: string; founderLink: string; copyright: string };
	seo: { title: string; description: string };
}

export const CONTENT: Record<Lang, Content> = {
	en: {
		nav: {
			about: "About",
			mission: "Mission",
			services: "Services",
			team: "Team",
			apply: "Apply",
			contact: "Contact",
		},
		hero: {
			eyebrow: "A New Jersey 501(c)(3) Nonprofit",
			subword: "Initiative",
			tagline: "“Rise From Where You Are.”",
			acronym:
				"ARISE stands for Advancing Resilience, Inspiration, Success, and Empowerment.",
			desc: "ARISE Initiative, Inc. helps students persist, graduate, and thrive. We provide mentorship, coaching, advising, leadership development, and financial aid guidance, all completely free for the student. ARISE was founded by Dr. Hamza Seidu Wedam and grew out of his doctoral research on student success.",
			cta1: "Our Services",
			cta2: "Meet the Founder",
			cta3: "Apply Now",
		},
		about: {
			tag: "About ARISE",
			title: "Grown from",
			titleEm: "research, built on care",
			p1: "ARISE Initiative, Inc. is a New Jersey-based 501(c)(3) nonprofit dedicated to helping students persist, graduate, and thrive. Dr. Hamza Seidu Wedam founded ARISE after his doctoral research on student success programs convinced him of a simple truth: with the right support, students who might otherwise fall through the cracks can go on to finish what they started.",
			p2: "We offer mentorship, academic coaching, advising, leadership development, financial aid guidance, and career counseling, all within a community that treats every participant as a whole person. Our programs welcome students of every background. We give special attention to first-generation and underserved students, and to anyone motivated to grow who simply lacks a support network.",
			quote:
				"A structured, dignity-first support system, open to everyone, that turns overlooked potential into real momentum.",
			quoteCite: "Why Students Join ARISE",
			photoPlaceholder: "Photo coming soon",
		},
		mission: {
			tag: "Our Mission",
			title: "Helping students",
			titleEm: "rise, on their terms",
			text: "The mission of ARISE is to help students of all backgrounds succeed academically, professionally, and personally through mentorship, coaching, advising, leadership development, financial aid guidance, and career counseling. We exist to remove the barriers that push capable students off course, to activate potential that has been overlooked, and to develop confident, resilient students.",
			serveText:
				"ARISE serves students of every racial, ethnic, cultural, gender, and socioeconomic background. We pay particular attention to first-generation students, community college and four-year students, people returning to the workforce, and emerging leaders who need structure and support to reach their goals. Our doors are open to everyone.",
		},
		services: {
			tag: "What We Offer",
			title: "An integrated model of",
			titleEm: "support",
			items: [
				{
					title: "Mentorship",
					desc: "We pair students with positive role models and community leaders who provide guidance, accountability, and encouragement.",
				},
				{
					title: "Academic Coaching",
					desc: "Students build the study skills, time management, goal setting, and persistence habits that drive academic success.",
				},
				{
					title: "Academic & College Advising",
					desc: "We guide students through course selection, degree planning, and enrollment to keep them on track toward completion.",
				},
				{
					title: "Financial Aid Assistance",
					desc: "We help students access scholarships, grants, and aid, and also provide school supply support.",
				},
				{
					title: "Leadership Development",
					desc: "Students strengthen their communication, teamwork, civic engagement, and servant-leadership skills.",
				},
				{
					title: "Career Readiness",
					desc: "Resume development, interview preparation, internships, and job placement support.",
				},
				{
					title: "Community Building",
					desc: "Workshops, expert-led sessions, and a recognition culture that helps students feel seen and supported.",
				},
			],
		},
		impact: {
			tag: "Why It Matters",
			title: "Turning potential into",
			titleEm: "completion",
			text: "ARISE is designed to increase college enrollment, strengthen retention and persistence, and improve academic performance. Personalized mentoring and advising help students build stronger study habits, raise their GPA, and stay focused on graduation. Financial aid guidance clears up the confusion around paying for school.",
			stats: [
				{ value: "2024", label: "Founded" },
				{ value: "7", label: "Core Services" },
				{ value: "8", label: "Partner Institutions" },
				{ value: "100%", label: "Free to Students" },
			],
		},
		quoteBanner: {
			text: "“They come for a mentor who believes in them, a coach who helps them stay on track, and an advisor who makes college feel navigable instead of overwhelming.”",
			cite: "Why Students Join ARISE",
		},
		team: {
			tag: "Our People",
			title: "Led by",
			titleEm: "experience",
			founderLabel: "Founder & Executive Director",
			founderName: "Hamza Seidu Wedam, Ed.D.",
			founderRole: "Founder and Executive Director, ARISE Initiative, Inc.",
			founderBio:
				"Dr. Wedam brings more than fifteen years of leadership experience in higher education, spanning enrollment management, registrar operations, and student services. He is the author of “Arise From Where You Are,” a book based on his doctoral research across seven community colleges in five states.",
			founderCta: "Visit Founder's Site",
			founderPhotoAlt:
				"Portrait of Dr. Hamza Seidu Wedam, Founder and Executive Director of ARISE Initiative",
			supportTag: "Support Behind the Operations",
			members: [
				{
					id: "team-vedad",
					src: "/assets/vedad-delic.png",
					name: "Vedad Delic, Ph.D.",
					role: "Grant Writer",
					bio: "Research scientist at the East Orange VA NJ Health Care System and Assistant Professor at Rutgers New Jersey Medical School. He has secured millions of dollars in competitive federal research funding.",
				},
				{
					id: "team-tyrone",
					src: "/assets/tyrone-taylor.png",
					name: "Tyrone Taylor",
					role: "Grant Manager",
					bio: "Chief Financial Officer of the VA New Jersey Health Care System, with three decades of experience leading federal finance, budgeting, and mentorship programs for public service careers.",
				},
			],
		},
		apply: {
			tag: "Get Started",
			title: "Ready to",
			titleEm: "apply?",
			desc: "Scan the QR code with your phone, or tap the button below to open our enrollment form. It only takes a few minutes, and it's completely free.",
			cta: "Open the Enrollment Form",
			qrAlt: "QR code linking to the ARISE enrollment form",
			qrHint: "Scan with your phone camera",
		},
		contact: {
			tag: "Get Involved",
			title: "Partner with",
			titleEm: "ARISE",
			desc: "Whether you're a student, an institution, a mentor, or a supporter, we would love to hear from you.",
			locationLabel: "Location",
			location: "New Jersey, USA",
			emailLabel: "Email",
			instagramLabel: "Instagram",
		},
		footer: {
			tagline: "“Rise From Where You Are.”",
			founderLink: "Founded by Dr. Hamza Seidu Wedam. Visit his site",
			copyright: "© 2026 ARISE Initiative, Inc.",
		},
		seo: {
			title:
				"ARISE Initiative, Inc. | Free Student Mentorship & Success Nonprofit in New Jersey",
			description:
				"ARISE Initiative, Inc. is a New Jersey 501(c)(3) nonprofit helping students persist, graduate, and thrive through free mentorship, academic coaching, advising, leadership development, and financial aid guidance. Founded by Dr. Hamza Seidu Wedam.",
		},
	},
	"pt-br": {
		nav: {
			about: "Sobre",
			mission: "Missão",
			services: "Serviços",
			team: "Equipe",
			apply: "Inscreva-se",
			contact: "Contato",
		},
		hero: {
			eyebrow: "Uma organização sem fins lucrativos 501(c)(3) de Nova Jersey",
			subword: "Initiative",
			tagline: "“Rise From Where You Are.”",
			acronym:
				"ARISE significa Advancing Resilience, Inspiration, Success, and Empowerment.",
			desc: "A ARISE Initiative, Inc. ajuda estudantes a persistir, se formar e prosperar. Oferecemos mentoria, coaching, orientação, desenvolvimento de liderança e apoio com auxílio financeiro, tudo totalmente gratuito para o estudante. A ARISE foi fundada pelo Dr. Hamza Seidu Wedam a partir de sua pesquisa de doutorado sobre sucesso estudantil.",
			cta1: "Nossos Serviços",
			cta2: "Conheça o Fundador",
			cta3: "Inscreva-se",
		},
		about: {
			tag: "Sobre a ARISE",
			title: "Nascida da pesquisa,",
			titleEm: "construída com cuidado",
			p1: "A ARISE Initiative, Inc. é uma organização sem fins lucrativos 501(c)(3) de Nova Jersey dedicada a ajudar estudantes a persistir, se formar e prosperar. O Dr. Hamza Seidu Wedam fundou a ARISE depois que sua pesquisa de doutorado sobre programas de sucesso estudantil o convenceu de uma verdade simples: com o apoio certo, estudantes que poderiam ficar pelo caminho conseguem terminar o que começaram.",
			p2: "Oferecemos mentoria, coaching acadêmico, orientação, desenvolvimento de liderança, apoio com auxílio financeiro e aconselhamento de carreira, tudo dentro de uma comunidade que trata cada participante como uma pessoa inteira. Nossos programas recebem estudantes de todas as origens. Damos atenção especial a estudantes de primeira geração e de baixa renda, e a qualquer pessoa motivada a crescer que não tenha uma rede de apoio.",
			quote:
				"Um sistema de apoio estruturado, com a dignidade em primeiro lugar, aberto a todos, que transforma potencial esquecido em impulso real.",
			quoteCite: "Por que os estudantes se juntam à ARISE",
			photoPlaceholder: "Foto em breve",
		},
		mission: {
			tag: "Nossa Missão",
			title: "Ajudando estudantes a se levantarem,",
			titleEm: "em seus próprios termos",
			text: "A missão da ARISE é ajudar estudantes de todas as origens a ter sucesso acadêmico, profissional e pessoal por meio de mentoria, coaching, orientação, desenvolvimento de liderança, apoio com auxílio financeiro e aconselhamento de carreira. Existimos para remover as barreiras que desviam estudantes capazes, ativar potenciais esquecidos e formar estudantes confiantes e resilientes.",
			serveText:
				"A ARISE atende estudantes de toda origem racial, étnica, cultural, de gênero e socioeconômica. Damos atenção especial a estudantes de primeira geração, estudantes de faculdades comunitárias e de quatro anos, pessoas retornando ao mercado de trabalho e líderes emergentes que precisam de estrutura e apoio para alcançar seus objetivos. Nossas portas estão abertas a todos.",
		},
		services: {
			tag: "O Que Oferecemos",
			title: "Um modelo integrado de",
			titleEm: "apoio",
			items: [
				{
					title: "Mentoria",
					desc: "Conectamos estudantes a referências positivas e líderes comunitários que oferecem orientação, responsabilidade e incentivo.",
				},
				{
					title: "Coaching Acadêmico",
					desc: "Os estudantes desenvolvem hábitos de estudo, gestão do tempo, definição de metas e persistência que impulsionam o sucesso acadêmico.",
				},
				{
					title: "Orientação Acadêmica e Universitária",
					desc: "Guiamos estudantes na escolha de disciplinas, no planejamento do curso e na matrícula para mantê-los no caminho da conclusão.",
				},
				{
					title: "Apoio com Auxílio Financeiro",
					desc: "Ajudamos estudantes a acessar bolsas, subsídios e auxílios, além de oferecer apoio com material escolar.",
				},
				{
					title: "Desenvolvimento de Liderança",
					desc: "Os estudantes fortalecem comunicação, trabalho em equipe, engajamento cívico e liderança a serviço dos outros.",
				},
				{
					title: "Preparação para Carreira",
					desc: "Elaboração de currículo, preparação para entrevistas, estágios e apoio na colocação profissional.",
				},
				{
					title: "Construção de Comunidade",
					desc: "Workshops, sessões com especialistas e uma cultura de reconhecimento que faz os estudantes se sentirem vistos e apoiados.",
				},
			],
		},
		impact: {
			tag: "Por Que Importa",
			title: "Transformando potencial em",
			titleEm: "conclusão",
			text: "A ARISE foi desenhada para aumentar o ingresso na faculdade, fortalecer a retenção e a persistência, e melhorar o desempenho acadêmico. A mentoria e a orientação personalizadas ajudam os estudantes a criar hábitos de estudo mais fortes, elevar sua média e manter o foco na formatura. O apoio com auxílio financeiro esclarece as dúvidas sobre como pagar os estudos.",
			stats: [
				{ value: "2024", label: "Fundação" },
				{ value: "7", label: "Serviços Principais" },
				{ value: "8", label: "Instituições Parceiras" },
				{ value: "100%", label: "Gratuito p/ Estudantes" },
			],
		},
		quoteBanner: {
			text: "“Eles vêm por um mentor que acredita neles, um coach que os ajuda a se manter no caminho, e um orientador que faz a faculdade parecer navegável, não avassaladora.”",
			cite: "Por que os estudantes se juntam à ARISE",
		},
		team: {
			tag: "Nosso Time",
			title: "Liderados pela",
			titleEm: "experiência",
			founderLabel: "Fundador e Diretor Executivo",
			founderName: "Hamza Seidu Wedam, Ed.D.",
			founderRole: "Fundador e Diretor Executivo, ARISE Initiative, Inc.",
			founderBio:
				"O Dr. Wedam tem mais de quinze anos de experiência de liderança no ensino superior, passando por gestão de matrículas, secretaria acadêmica e serviços estudantis. É autor de “Arise From Where You Are”, livro baseado em sua pesquisa de doutorado em sete faculdades comunitárias de cinco estados.",
			founderCta: "Visitar Site do Fundador",
			founderPhotoAlt:
				"Retrato do Dr. Hamza Seidu Wedam, Fundador e Diretor Executivo da ARISE Initiative",
			supportTag: "Apoio Por Trás da Operação",
			members: [
				{
					id: "team-vedad",
					src: "/assets/vedad-delic.png",
					name: "Vedad Delic, Ph.D.",
					role: "Redator de Propostas",
					bio: "Cientista pesquisador no East Orange VA NJ Health Care System e Professor Assistente na Rutgers New Jersey Medical School. Já captou milhões de dólares em financiamento federal competitivo para pesquisa.",
				},
				{
					id: "team-tyrone",
					src: "/assets/tyrone-taylor.png",
					name: "Tyrone Taylor",
					role: "Gerente de Subvenções",
					bio: "Diretor Financeiro do VA New Jersey Health Care System, com três décadas de experiência liderando finanças federais, orçamento e programas de mentoria para carreiras no serviço público.",
				},
			],
		},
		apply: {
			tag: "Comece Agora",
			title: "Pronto para",
			titleEm: "se inscrever?",
			desc: "Escaneie o QR code com o celular, ou toque no botão abaixo para abrir nosso formulário de inscrição. Leva só alguns minutos, e é totalmente gratuito.",
			cta: "Abrir Formulário de Inscrição",
			qrAlt: "QR code que leva ao formulário de inscrição da ARISE",
			qrHint: "Escaneie com a câmera do celular",
		},
		contact: {
			tag: "Participe",
			title: "Seja parceiro da",
			titleEm: "ARISE",
			desc: "Seja você um estudante, uma instituição, um mentor ou um apoiador, adoraríamos ouvir de você.",
			locationLabel: "Localização",
			location: "Nova Jersey, EUA",
			emailLabel: "Email",
			instagramLabel: "Instagram",
		},
		footer: {
			tagline: "“Rise From Where You Are.”",
			founderLink: "Fundada pelo Dr. Hamza Seidu Wedam. Visite o site dele",
			copyright: "© 2026 ARISE Initiative, Inc.",
		},
		seo: {
			title:
				"ARISE Initiative, Inc. | Mentoria Estudantil Gratuita em Nova Jersey",
			description:
				"A ARISE Initiative, Inc. é uma organização sem fins lucrativos 501(c)(3) de Nova Jersey que ajuda estudantes a persistir, se formar e prosperar por meio de mentoria, coaching acadêmico, orientação e apoio com auxílio financeiro, tudo gratuito. Fundada pelo Dr. Hamza Seidu Wedam.",
		},
	},
};
