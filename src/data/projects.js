// Import images
import WebImage2 from '../images/kasa.png';
import MobileImage1 from '../images/ohmyfood.png';
import MobileImage2 from '../images/nina.png';
import UIImage1 from '../images/argent-bank.png';

export const projectsData = [
	{
		id: 1,
		title: {
			fr: 'Kasa, immobilier',
			en: "Kasa, real estate",
		},
		category: 'React',
		img: WebImage2,
		link: "https://ssvgleo.github.io/Projet-7-Kasa/",
		github: "https://github.com/SSVGLeo/Projet-7-Kasa",
		ProjectInfo: {
			SeeSite: {
				fr: "Voir le site",
				en: "The website",
			},
			SeeCode: {
				fr: "Voir le code",
				en: "The code",
			},
			ObjectivesDetails: {
				fr: "Ce projet à pour but d'initer au framework React et la notion de développement orienté objet via les composents.",
				en : "This project's goal is to introduce the React framework and the concept of object-oriented development through components.",
			}, 
			ProjectDetails: [
				{
					id: 1,
					details: {
						fr: "Utilisations de composents réutilisables et de props.",
						en: "Use of reusable components and props.",
					} 
				},
				{
					id: 2,
					details: {
						fr: "Apprentissage de React Router pour créer une navigation dynamique.",
						en: "Learn React Router to create a dynamic navigation.",
					}
				},
			]
		}
	},
	{
		id: 2,
		title: {
			fr: 'Nina Carducci',
			en: "Nina Carducci",
		},
		category: 'Javascript',
		img: MobileImage2,
		link: "https://ssvgleo.github.io/Projet-8-OC/",
		github: "https://github.com/SSVGLeo/Projet-8-OC",
		ProjectInfo: {
			SeeSite: {
				fr: "Voir le site",
				en: "The website",
			},
			SeeCode: {
				fr: "Voir le code",
				en: "The code",
			},
			ObjectivesDetails: {
				fr: "Amélioration du SEO de la page de Nina Carducci, photographe indépendante.",
				en: "Improve Nina Carducci's page's SEO.",
			} ,
			ProjectDetails: [
				{
					id: 1,
					details: {
						fr:"Utilisation de lighthouse pour réaliser une analyse du SEO de la page.",
						en: "Used lighthouse to realize a SEO analysis of the page.", 
					} ,
				},
				{
					id: 2,
					details: {
						fr:"Amélioration des performances, de l'accessibilité et de la compatibilité des navigateurs.",
						en: "Upgraded performance, accessibility and browser compatibility.",
					},
				},
			]
		}
	},
	{
		id: 3,
		title: {
			fr: 'Argent Bank',
			en: "Argent Bank",
		},
		category: 'React',
		img: UIImage1,
		link: "https://ssvgleo.github.io/Projet-10-OC/",
		github: "https://github.com/SSVGLeo/Projet-10-OC",
		ProjectInfo: {
			SeeSite: {
				fr: "Voir le site",
				en: "The website",
			},
			SeeCode: {
				fr: "Voir le code",
				en: "The code",
			},
			ObjectivesDetails: {
				fr: "Projet d'application bancaire en React. Utilisation du state tout en utilisant des Fetchs d'API REST.",
				en: "Banking application in React. Using state with REST API Fetchs calls.",
			},
			ProjectDetails: [
				{
					id: 1,
					details: {
						fr: "Utilisation de React Redux pour manipuler le state.",
						en: "Using React Redux to manipulate the state.",
					} ,
				},
				{
					id: 2,
					details: {
						fr: "MangoDB utiliser pour enregistrer les données de l'utilisateur.",
						en: "Used MangoDB to save user's data.",
					},
				},
			]
		}
	},
	{
		id: 4,
		title: {
			fr: 'Ohmyfood',
			en: "Ohmyfood",
		},
		category: 'HTML/CSS',
		img: MobileImage1,
		link: "https://ssvgleo.github.io/Projet-4-fichiers/",
		github: "https://github.com/SSVGLeo/Projet-4-fichiers",
		ProjectInfo: {
			SeeSite: {
				fr: "Voir le site",
				en: "The website",
			},
			SeeCode: {
				fr: "Voir le code",
				en: "The code",
			},
			ObjectivesDetails: {
				fr: "Réalisation d'une maquette de site de commande de restauration en HTML/CSS.",
				en: "Produced a website order food mockup in HTML/CSS.",
			} ,
			ProjectDetails: [
				{
					id: 1,
					details: {
						fr: "Utilisation de figma pour réaliser la maquette.",
						en: "Used figma to realize the mockup.", 
					},
				},
				{
					id: 2,
					details: {
						fr: "Réalisation d'animations CSS pour améliorer l'expérience utilisateur.",
						en: "Produced CSS animations to improve user experience.",
					},
				},
			]
		}
	},
];
