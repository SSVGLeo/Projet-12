import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';
import { useLanguage } from "../../translation/LanguageContext";

const AboutClients = () => {
	const { clientsData, clientsHeading } = useContext(AboutMeContext);

	const {language} = useLanguage();

	return (
		<div className="mt-10 sm:mt-20">
			<h1 className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
				{clientsHeading[language]}
			</h1>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
