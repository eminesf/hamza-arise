export type Lang = "en" | "pt-br" | "es";

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
	email?: string;
	photoPosition?: string;
}

export interface Content {
	nav: {
		about: string;
		mission: string;
		services: string;
		gallery: string;
		team: string;
		apply: string;
		contact: string;
	};
	hero: {
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
	};
	mission: {
		tag: string;
		title: string;
		titleEm: string;
		titleFootnote: string;
		text: string;
		serveText: string;
		statusNote: string;
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
	gallery: {
		tag: string;
		title: string;
		titleEm: string;
		desc: string;
		cta: string;
		pageDesc: string;
		photoLabel: string;
		backLink: string;
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
			gallery: "Gallery",
			team: "Team",
			apply: "Apply",
			contact: "Contact",
		},
		hero: {
			subword: "Initiative",
			tagline: "“Rise From Where You Are.”",
			acronym:
				"ARISE stands for Advancing Resilience, Inspiration, Success, and Empowerment.",
			desc: "ARISE Initiative, Inc. helps students persist, graduate, and thrive. We provide mentorship, coaching, advising, leadership development, and financial aid guidance, all completely free for the student. ARISE was founded by Dr. Hamza Seidu Wedam and grew out of his doctoral research on student success.",
			cta1: "View Gallery",
			cta2: "Meet the Founder",
			cta3: "Apply Now",
		},
		about: {
			tag: "About ARISE",
			title: "Grown from",
			titleEm: "research, built on care",
			p1: "ARISE Initiative, Inc. is a New Jersey-based 501(c)(3) nonprofit dedicated to helping students persist, graduate, and thrive. Dr. Hamza Seidu Wedam founded ARISE after his doctoral research on student success programs convinced him of a simple truth: with the right support, students who might otherwise fall through the cracks can go on become successful academically.",
			p2: "We offer mentorship, academic coaching, advising, leadership development, financial aid guidance, and career counseling, all within a community that treats every student as a whole person. Our programs welcome students of every background. We give special attention to first-generation and underserved students, and to anyone motivated to grow who simply lacks a support network.",
			quote:
				"A structured, dignity-first support system, open to everyone, that turns overlooked potential into real momentum.",
			quoteCite: "Why Students Join ARISE",
		},
		mission: {
			tag: "Our Mission",
			title: "Helping students",
			titleEm: "ARISE from where they are",
			titleFootnote: "",
			text: "The mission of ARISE is to help students of all backgrounds succeed academically, professionally, and personally through mentorship, coaching, advising, leadership development, financial aid guidance, and career counseling. We exist to remove the barriers that push capable students off course, to activate potential that has been overlooked, and to develop confident, resilient students.",
			serveText:
				"ARISE serves students of every racial, ethnic, cultural, gender, and socioeconomic background. We pay particular attention to first-generation students, community college and four-year students, people returning to the workforce, and emerging leaders who need structure and support to reach their goals. Our doors are open to everyone.",
			statusNote:
				"ARISE Initiative, Inc. is a registered New Jersey 501(c)(3) nonprofit organization.",
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
			titleEm: "success",
			text: "ARISE is designed to increase college enrollment, strengthen retention and persistence, and improve academic performance. Personalized mentoring and advising help students build stronger study habits, raise their GPA, and stay focused on graduation. Financial aid guidance clears up the confusion around paying for school.",
			stats: [
				{ value: "2024", label: "Founded" },
				{ value: "7", label: "Core Services" },
				{ value: "8", label: "Partner Institutions" },
				{ value: "100%", label: "Free to Students" },
			],
		},
		gallery: {
			tag: "Gallery",
			title: "Life inside",
			titleEm: "the ARISE community",
			desc: "A look at the mentors, students, and moments behind the mission.",
			cta: "View Full Gallery",
			pageDesc:
				"A look at the mentors, students, and moments behind the ARISE mission.",
			photoLabel: "Photo",
			backLink: "Back to Home",
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
			founderRole: "Founder and Executive Director",
			founderBio:
				"Dr. Wedam brings more than fifteen years of leadership experience in higher education, spanning enrollment management, registrar operations, and student services. He is the author of “Arise From Where You Are,” a book based on his doctoral research across seven community colleges in five states.",
			founderCta: "Visit Founder's Site",
			founderPhotoAlt:
				"Portrait of Dr. Hamza Seidu Wedam, Founder and Executive Director of ARISE Initiative",
			supportTag: "Team",
			members: [
				{
					id: "team-vedad",
					src: "/assets/vedad-delic.png",
					name: "Vedad Delic, Ph.D.",
					role: "Grant Writer",
					bio: "Professor at Rutgers New Jersey Medical School and a Research scientist at the East Orange VA NJ Health Care System. He has secured millions of dollars in competitive federal research funding.",
					email: "vedad.delic@rutgers.edu",
				},
				{
					id: "team-tyrone",
					src: "/assets/tyrone-taylor.png",
					name: "Tyrone Taylor",
					role: "Grant Manager",
					bio: "Retired Chief Financial Officer of the VA New Jersey Health Care System, with three decades of experience leading federal finance, budgeting, and mentorship programs for public service careers.",
					email: "tcap156@verizon.net",
				},
				{
					id: "team-sadia",
					src: "/assets/sadia-zafar.jpg",
					photoPosition: "center top",
					name: "Sadia Zafar",
					role: "Mentor and Healthcare Career Advisor",
					bio: "Clinical Assistant Professor at Fairleigh Dickinson University and a board-certified Physician Assistant specializing in psychiatry. She guides students pursuing careers in medicine and the health sciences, providing mentorship, career planning, and professional development.",
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
			copyright: "ARISE Initiative, Inc.",
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
			gallery: "Galeria",
			team: "Equipe",
			apply: "Inscreva-se",
			contact: "Contato",
		},
		hero: {
			subword: "Initiative",
			tagline: "“Rise From Where You Are.”",
			acronym:
				"ARISE significa Advancing Resilience, Inspiration, Success, and Empowerment.",
			desc: "A ARISE Initiative, Inc. ajuda estudantes a persistir, se formar e prosperar. Oferecemos mentoria, coaching, orientação, desenvolvimento de liderança e apoio com auxílio financeiro, tudo totalmente gratuito para o estudante. A ARISE foi fundada pelo Dr. Hamza Seidu Wedam a partir de sua pesquisa de doutorado sobre sucesso estudantil.",
			cta1: "Ver Galeria",
			cta2: "Conheça o Fundador",
			cta3: "Inscreva-se",
		},
		about: {
			tag: "Sobre a ARISE",
			title: "Nascida da pesquisa,",
			titleEm: "construída com cuidado",
			p1: "A ARISE Initiative, Inc. é uma organização sem fins lucrativos 501(c)(3) de Nova Jersey dedicada a ajudar estudantes a persistir, se formar e prosperar. O Dr. Hamza Seidu Wedam fundou a ARISE depois que sua pesquisa de doutorado sobre programas de sucesso estudantil o convenceu de uma verdade simples: com o apoio certo, estudantes que poderiam ficar pelo caminho podem alcançar sucesso acadêmico.",
			p2: "Oferecemos mentoria, coaching acadêmico, orientação, desenvolvimento de liderança, apoio com auxílio financeiro e aconselhamento de carreira, tudo dentro de uma comunidade que trata cada estudante como uma pessoa inteira. Nossos programas recebem estudantes de todas as origens. Damos atenção especial a estudantes de primeira geração e de baixa renda, e a qualquer pessoa motivada a crescer que não tenha uma rede de apoio.",
			quote:
				"Um sistema de apoio estruturado, com a dignidade em primeiro lugar, aberto a todos, que transforma potencial esquecido em impulso real.",
			quoteCite: "Por que os estudantes se juntam à ARISE",
		},
		mission: {
			tag: "Nossa Missão",
			title: "Ajudando estudantes a",
			titleEm: "ARISE* de onde estão",
			titleFootnote: '*em inglês, "Arise" significa se erguer, se levantar.',
			text: "A missão da ARISE é ajudar estudantes de todas as origens a ter sucesso acadêmico, profissional e pessoal por meio de mentoria, coaching, orientação, desenvolvimento de liderança, apoio com auxílio financeiro e aconselhamento de carreira. Existimos para remover as barreiras que desviam estudantes capazes, ativar potenciais esquecidos e formar estudantes confiantes e resilientes.",
			serveText:
				"A ARISE atende estudantes de toda origem racial, étnica, cultural, de gênero e socioeconômica. Damos atenção especial a estudantes de primeira geração, estudantes de faculdades comunitárias e de quatro anos, pessoas retornando ao mercado de trabalho e líderes emergentes que precisam de estrutura e apoio para alcançar seus objetivos. Nossas portas estão abertas a todos.",
			statusNote:
				"A ARISE Initiative, Inc. é uma organização sem fins lucrativos 501(c)(3) registrada em Nova Jersey.",
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
			titleEm: "sucesso",
			text: "A ARISE foi desenhada para aumentar o ingresso na faculdade, fortalecer a retenção e a persistência, e melhorar o desempenho acadêmico. A mentoria e a orientação personalizadas ajudam os estudantes a criar hábitos de estudo mais fortes, elevar sua média e manter o foco na formatura. O apoio com auxílio financeiro esclarece as dúvidas sobre como pagar os estudos.",
			stats: [
				{ value: "2024", label: "Fundação" },
				{ value: "7", label: "Serviços Principais" },
				{ value: "8", label: "Instituições Parceiras" },
				{ value: "100%", label: "Gratuito p/ Estudantes" },
			],
		},
		gallery: {
			tag: "Galeria",
			title: "A vida dentro",
			titleEm: "da comunidade ARISE",
			desc: "Um retrato dos mentores, estudantes e momentos por trás da missão.",
			cta: "Ver Galeria Completa",
			pageDesc:
				"Um retrato dos mentores, estudantes e momentos por trás da missão da ARISE.",
			photoLabel: "Foto",
			backLink: "Voltar ao Início",
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
			founderRole: "Fundador e Diretor Executivo",
			founderBio:
				"O Dr. Wedam tem mais de quinze anos de experiência de liderança no ensino superior, passando por gestão de matrículas, secretaria acadêmica e serviços estudantis. É autor de “Arise From Where You Are”, livro baseado em sua pesquisa de doutorado em sete faculdades comunitárias de cinco estados.",
			founderCta: "Visitar Site do Fundador",
			founderPhotoAlt:
				"Retrato do Dr. Hamza Seidu Wedam, Fundador e Diretor Executivo da ARISE Initiative",
			supportTag: "Equipe",
			members: [
				{
					id: "team-vedad",
					src: "/assets/vedad-delic.png",
					name: "Vedad Delic, Ph.D.",
					role: "Redator de Propostas",
					bio: "Professor na Rutgers New Jersey Medical School e Cientista Pesquisador no East Orange VA NJ Health Care System. Já captou milhões de dólares em financiamento federal competitivo para pesquisa.",
					email: "vedad.delic@rutgers.edu",
				},
				{
					id: "team-tyrone",
					src: "/assets/tyrone-taylor.png",
					name: "Tyrone Taylor",
					role: "Gerente de Subvenções",
					bio: "Diretor Financeiro aposentado do VA New Jersey Health Care System, com três décadas de experiência liderando finanças federais, orçamento e programas de mentoria para carreiras no serviço público.",
					email: "tcap156@verizon.net",
				},
				{
					id: "team-sadia",
					src: "/assets/sadia-zafar.jpg",
					photoPosition: "center top",
					name: "Sadia Zafar",
					role: "Mentora e Consultora de Carreira em Saúde",
					bio: "Professora Assistente Clínica na Fairleigh Dickinson University e Assistente Médica certificada, especializada em psiquiatria. Orienta estudantes que buscam carreiras em medicina e ciências da saúde, oferecendo mentoria, planejamento de carreira e desenvolvimento profissional.",
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
			copyright: "ARISE Initiative, Inc.",
		},
		seo: {
			title:
				"ARISE Initiative, Inc. | Mentoria Estudantil Gratuita em Nova Jersey",
			description:
				"A ARISE Initiative, Inc. é uma organização sem fins lucrativos 501(c)(3) de Nova Jersey que ajuda estudantes a persistir, se formar e prosperar por meio de mentoria, coaching acadêmico, orientação e apoio com auxílio financeiro, tudo gratuito. Fundada pelo Dr. Hamza Seidu Wedam.",
		},
	},
	es: {
		nav: {
			about: "Sobre Nosotros",
			mission: "Misión",
			services: "Servicios",
			gallery: "Galería",
			team: "Equipo",
			apply: "Inscribirse",
			contact: "Contacto",
		},
		hero: {
			subword: "Initiative",
			tagline: "“Rise From Where You Are.”",
			acronym:
				"ARISE significa Advancing Resilience, Inspiration, Success, and Empowerment.",
			desc: "ARISE Initiative, Inc. ayuda a los estudiantes a perseverar, graduarse y prosperar. Ofrecemos mentoría, coaching, asesoría, desarrollo de liderazgo y orientación sobre ayuda financiera, todo completamente gratuito para el estudiante. ARISE fue fundada por el Dr. Hamza Seidu Wedam y surgió de su investigación doctoral sobre el éxito estudiantil.",
			cta1: "Ver Galería",
			cta2: "Conoce al Fundador",
			cta3: "Inscríbete Ahora",
		},
		about: {
			tag: "Sobre ARISE",
			title: "Nacida de la investigación,",
			titleEm: "construida con cuidado",
			p1: "ARISE Initiative, Inc. es una organización sin fines de lucro 501(c)(3) con sede en Nueva Jersey, dedicada a ayudar a los estudiantes a perseverar, graduarse y prosperar. El Dr. Hamza Seidu Wedam fundó ARISE después de que su investigación doctoral sobre programas de éxito estudiantil lo convenciera de una verdad simple: con el apoyo adecuado, los estudiantes que de otro modo podrían quedar en el camino pueden lograr el éxito académico.",
			p2: "Ofrecemos mentoría, coaching académico, asesoría, desarrollo de liderazgo, orientación sobre ayuda financiera y asesoramiento profesional, todo dentro de una comunidad que trata a cada estudiante como una persona íntegra. Nuestros programas dan la bienvenida a estudiantes de todos los orígenes. Prestamos especial atención a los estudiantes de primera generación y con pocos recursos, y a cualquier persona motivada a crecer que simplemente carezca de una red de apoyo.",
			quote:
				"Un sistema de apoyo estructurado, centrado en la dignidad, abierto a todos, que convierte el potencial desapercibido en impulso real.",
			quoteCite: "Por qué los estudiantes se unen a ARISE",
		},
		mission: {
			tag: "Nuestra Misión",
			title: "Ayudando a los estudiantes a",
			titleEm: "ARISE* desde donde están",
			titleFootnote: '*en inglés, "arise" significa levantarse, alzarse.',
			text: "La misión de ARISE es ayudar a estudiantes de todos los orígenes a tener éxito académico, profesional y personal a través de mentoría, coaching, asesoría, desarrollo de liderazgo, orientación sobre ayuda financiera y asesoramiento profesional. Existimos para eliminar las barreras que desvían a estudiantes capaces, activar el potencial que ha sido pasado por alto y formar estudiantes seguros y resilientes.",
			serveText:
				"ARISE atiende a estudiantes de todo origen racial, étnico, cultural, de género y socioeconómico. Prestamos especial atención a estudiantes de primera generación, estudiantes de universidades comunitarias y de cuatro años, personas que regresan a la fuerza laboral y líderes emergentes que necesitan estructura y apoyo para alcanzar sus metas. Nuestras puertas están abiertas a todos.",
			statusNote:
				"ARISE Initiative, Inc. es una organización sin fines de lucro 501(c)(3) registrada en Nueva Jersey.",
		},
		services: {
			tag: "Lo Que Ofrecemos",
			title: "Un modelo integrado de",
			titleEm: "apoyo",
			items: [
				{
					title: "Mentoría",
					desc: "Conectamos a los estudiantes con modelos a seguir positivos y líderes comunitarios que brindan orientación, responsabilidad y aliento.",
				},
				{
					title: "Coaching Académico",
					desc: "Los estudiantes desarrollan hábitos de estudio, gestión del tiempo, establecimiento de metas y hábitos de persistencia que impulsan el éxito académico.",
				},
				{
					title: "Asesoría Académica y Universitaria",
					desc: "Guiamos a los estudiantes en la selección de cursos, la planificación de su carrera y la inscripción para mantenerlos encaminados hacia la graduación.",
				},
				{
					title: "Ayuda Financiera",
					desc: "Ayudamos a los estudiantes a acceder a becas, subvenciones y ayuda financiera, y también ofrecemos apoyo con útiles escolares.",
				},
				{
					title: "Desarrollo de Liderazgo",
					desc: "Los estudiantes fortalecen su comunicación, trabajo en equipo, participación cívica y habilidades de liderazgo de servicio.",
				},
				{
					title: "Preparación Profesional",
					desc: "Elaboración de currículum, preparación para entrevistas, prácticas profesionales y apoyo en la colocación laboral.",
				},
				{
					title: "Construcción de Comunidad",
					desc: "Talleres, sesiones dirigidas por expertos y una cultura de reconocimiento que ayuda a los estudiantes a sentirse vistos y apoyados.",
				},
			],
		},
		impact: {
			tag: "Por Qué Importa",
			title: "Convirtiendo el potencial en",
			titleEm: "éxito",
			text: "ARISE está diseñada para aumentar la matrícula universitaria, fortalecer la retención y la persistencia, y mejorar el rendimiento académico. La mentoría y asesoría personalizadas ayudan a los estudiantes a desarrollar mejores hábitos de estudio, elevar su promedio y mantenerse enfocados en la graduación. La orientación sobre ayuda financiera aclara la confusión sobre cómo pagar los estudios.",
			stats: [
				{ value: "2024", label: "Fundación" },
				{ value: "7", label: "Servicios Principales" },
				{ value: "8", label: "Instituciones Asociadas" },
				{ value: "100%", label: "Gratis p/ Estudiantes" },
			],
		},
		gallery: {
			tag: "Galería",
			title: "La vida dentro",
			titleEm: "de la comunidad ARISE",
			desc: "Un vistazo a los mentores, estudiantes y momentos detrás de la misión.",
			cta: "Ver Galería Completa",
			pageDesc:
				"Un vistazo a los mentores, estudiantes y momentos detrás de la misión de ARISE.",
			photoLabel: "Foto",
			backLink: "Volver al Inicio",
		},
		quoteBanner: {
			text: "“Vienen por un mentor que cree en ellos, un coach que los ayuda a mantenerse en el camino correcto, y un asesor que hace que la universidad se sienta manejable en lugar de abrumadora.”",
			cite: "Por qué los estudiantes se unen a ARISE",
		},
		team: {
			tag: "Nuestro Equipo",
			title: "Liderados por la",
			titleEm: "experiencia",
			founderLabel: "Fundador y Director Ejecutivo",
			founderName: "Hamza Seidu Wedam, Ed.D.",
			founderRole: "Fundador y Director Ejecutivo",
			founderBio:
				"El Dr. Wedam aporta más de quince años de experiencia de liderazgo en educación superior, abarcando la gestión de matrículas, operaciones de registro académico y servicios estudiantiles. Es autor de “Arise From Where You Are”, un libro basado en su investigación doctoral realizada en siete universidades comunitarias de cinco estados.",
			founderCta: "Visitar el Sitio del Fundador",
			founderPhotoAlt:
				"Retrato del Dr. Hamza Seidu Wedam, Fundador y Director Ejecutivo de ARISE Initiative",
			supportTag: "Equipo",
			members: [
				{
					id: "team-vedad",
					src: "/assets/vedad-delic.png",
					name: "Vedad Delic, Ph.D.",
					role: "Redactor de Propuestas",
					bio: "Profesor en Rutgers New Jersey Medical School y Científico Investigador en East Orange VA NJ Health Care System. Ha conseguido millones de dólares en financiamiento federal competitivo para investigación.",
					email: "vedad.delic@rutgers.edu",
				},
				{
					id: "team-tyrone",
					src: "/assets/tyrone-taylor.png",
					name: "Tyrone Taylor",
					role: "Gerente de Subvenciones",
					bio: "Director Financiero jubilado del VA New Jersey Health Care System, con tres décadas de experiencia liderando finanzas federales, presupuestos y programas de mentoría para carreras de servicio público.",
					email: "tcap156@verizon.net",
				},
				{
					id: "team-sadia",
					src: "/assets/sadia-zafar.jpg",
					photoPosition: "center top",
					name: "Sadia Zafar",
					role: "Mentora y Asesora de Carrera en Salud",
					bio: "Profesora Clínica Asistente en Fairleigh Dickinson University y Asistente Médica certificada, especializada en psiquiatría. Guía a estudiantes que buscan carreras en medicina y ciencias de la salud, brindando mentoría, planificación profesional y desarrollo profesional.",
				},
			],
		},
		apply: {
			tag: "Comienza Ahora",
			title: "¿Listo para",
			titleEm: "inscribirte?",
			desc: "Escanea el código QR con tu teléfono, o toca el botón de abajo para abrir nuestro formulario de inscripción. Solo toma unos minutos y es completamente gratis.",
			cta: "Abrir el Formulario de Inscripción",
			qrAlt: "Código QR que enlaza al formulario de inscripción de ARISE",
			qrHint: "Escanea con la cámara de tu teléfono",
		},
		contact: {
			tag: "Participa",
			title: "Sé socio de",
			titleEm: "ARISE",
			desc: "Ya seas estudiante, institución, mentor o colaborador, nos encantaría saber de ti.",
			locationLabel: "Ubicación",
			location: "Nueva Jersey, EE. UU.",
			emailLabel: "Correo Electrónico",
			instagramLabel: "Instagram",
		},
		footer: {
			tagline: "“Rise From Where You Are.”",
			founderLink: "Fundada por el Dr. Hamza Seidu Wedam. Visita su sitio",
			copyright: "ARISE Initiative, Inc.",
		},
		seo: {
			title:
				"ARISE Initiative, Inc. | Mentoría Estudiantil Gratuita en Nueva Jersey",
			description:
				"ARISE Initiative, Inc. es una organización sin fines de lucro 501(c)(3) de Nueva Jersey que ayuda a estudiantes a perseverar, graduarse y prosperar a través de mentoría gratuita, coaching académico, asesoría, desarrollo de liderazgo y orientación sobre ayuda financiera. Fundada por el Dr. Hamza Seidu Wedam.",
		},
	},
};
