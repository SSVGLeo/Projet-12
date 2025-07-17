// Import images
import WebImage2 from '../images/kasa.png';
import MobileImage1 from '../images/ohmyfood.png';
import MobileImage2 from '../images/nina.png';
import UIImage1 from '../images/argent-bank.png';

export const projectsData = [
	{
		id: 1,
		title: 'Kasa, immobilier',
		category: 'React',
		img: WebImage2,
		link: "https://ssvgleo.github.io/Projet-7-Kasa/",
		github: "https://github.com/SSVGLeo/Projet-7-Kasa",
		ProjectInfo: {
			ObjectivesDetails: "Ce projet à pour but d'initer au framework React et la notion de développement orienté objet via les composents.",
			ProjectDetails: [
				{
					id: 1,
					details: "Utilisations de composents réutilisables et de props.",
				},
				{
					id: 2,
					details: "Apprentissage de React Router pour créer une navigation dynamique.",
				},
			]
		}
	},
	{
		id: 2,
		title: 'Nina Carducci',
		category: 'Javascript',
		img: MobileImage2,
		link: "https://ssvgleo.github.io/Projet-8-OC/",
		github: "https://github.com/SSVGLeo/Projet-8-OC",
		ProjectInfo: {
			ObjectivesDetails: "Amélioration du SEO de la page de Nina Carducci, photographe indépendante.",
			ProjectDetails: [
				{
					id: 1,
					details: "Utilisation de lighthouse pour réaliser une analyse du SEO de la page.",
				},
				{
					id: 1,
					details: "Amélioration des performances, de l'accessibilité et de la compatibilité des navigateurs.",
				},
			]
		}
	},
	{
		id: 3,
		title: 'Argent Bank',
		category: 'React',
		img: UIImage1,
		link: "https://ssvgleo.github.io/Projet-10-OC/",
		github: "https://github.com/SSVGLeo/Projet-10-OC",
		ProjectInfo: {
			ObjectivesDetails: "Projet d'application bancaire en React. Utilisation du state tout en utilisant des Fetchs d'API REST.",
			ProjectDetails: [
				{
					id: 1,
					details: "Utilisation de React Redux pour manipuler le state.",
				},
				{
					id: 2,
					details: "MangoDB utiliser pour enregistrer les données de l'utilisateur.",
				},
			]
		}
	},
	{
		id: 4,
		title: 'Ohmyfood',
		category: 'HTML/CSS',
		img: MobileImage1,
		link: "https://ssvgleo.github.io/Projet-4-fichiers/",
		github: "https://github.com/SSVGLeo/Projet-4-fichiers",
		ProjectInfo: {
			ObjectivesDetails: "Réalisation d'une maquette de site de commande de restauration en HTML/CSS.",
			ProjectDetails: [
				{
					id: 1,
					details: "Utilisation de figma pour réaliser la maquette.",
				},
				{
					id: 2,
					details: "Réalisation d'animations CSS pour améliorer l'expérience utilisateur.",
				},
			]
		}
	},
];
