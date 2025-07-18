import React from "react";
import { useLanguage } from "../../translation/LanguageContext";
import { translations } from "../../translation/translation";

const selectOptions = [
	'HTML/CSS',
	'Javascript',
	'React',
];

const ProjectsFilter = ({ setSelectProject }) => {
	const {language} = useLanguage();
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			{/* {translations[language].projects.category} */}
			<option value="all" className="text-sm sm:text-md">
				{translations[language].projects.category}
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
