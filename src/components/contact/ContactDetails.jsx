import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { useLanguage } from "../../translation/LanguageContext";
import { translations } from "../../translation/translation";

const contacts = [
	{
		id: 1,
		name: 'Corny-sur-Moselle, France',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'troupleo@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+33 7 82 89 06 23',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	const {language} = useLanguage();

	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					{translations[language].contact.details}
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								<p>{contact.name}</p>
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
