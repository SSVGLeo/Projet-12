import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useLanguage } from "../../translation/LanguageContext";

const ProjectModal = ({ project, onClose }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-2xl"
              >
                <FiX />
              </button>
              <h2 className="text-xl font-bold mb-4 dark:text-ternary-light">{project.title[language]}</h2>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <img
                src={project.img}
                className="rounded-t-xl border-none"
                alt="Single Project"
              />
              <p className="text-lg m-4 text-center dark:text-ternary-light">
                {project.ProjectInfo.ObjectivesDetails[language]}
              </p>
              {project.ProjectInfo.ProjectDetails.map((block) => (
                <p key={block.id} className="mb-2 text-sm2 text-center dark:text-ternary-light">
                  {block.details[language]}
                </p>
              ))}
            </div>
            <div className="modal-footer mt-2 sm:mt-0 sm:px-0 py-5 border0-t text-center gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 m-4 bg-blue-600 text-primary-dark rounded-md dark:text-ternary-light hover:bg-indigo-600 hover:text-white transition"
                >
                  {project.ProjectInfo.SeeSite[language]}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 m-4 bg-gray-800 text-primary-dark rounded-md dark:text-ternary-light hover:bg-indigo-600 hover:text-white transition"
                >
                  {project.ProjectInfo.SeeCode[language]}
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectModal;
