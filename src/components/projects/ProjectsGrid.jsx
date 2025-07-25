import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "../../translation/LanguageContext";
import { translations } from "../../translation/translation";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  const [selectedProject, setSelectedProject] = useState(null);

  const {language} = useLanguage();

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <h2 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          {translations[language].projects.title}
        </h2>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
        >
          {translations[language].projects.description}
        </h3>
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder={translations[language].projects.research}
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle
                title={project.title[language]}
                category={project.category}
                image={project.img}
                key={project.id}
                link={project.link}
                onClick={() => setSelectedProject(project)}
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle
                title={project.title[language]}
                category={project.category}
                image={project.img}
                key={project.id}
                link={project.link}
                onClick={() => setSelectedProject(project)}
              />
            ))
          : projects.map((project) => (
              <ProjectSingle
                title={project.title[language]}
                category={project.category}
                image={project.img}
                key={project.id}
                link={project.link}
                onClick={() => setSelectedProject(project)}
              />
            ))}
      </div>
	  {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
    </section>
  );
};

export default ProjectsGrid;
