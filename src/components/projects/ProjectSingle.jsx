import { motion } from "framer-motion";
import { useLanguage } from "../../translation/LanguageContext";
const ProjectSingle = ({ title, category, image, onClick }) => {
  const { language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div
        className="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark card cursor-pointer"
        onClick={onClick}
      >
        <div className="card-image">
          <img
            src={image}
            className="rounded-t-xl border-none w-inherit"
            alt="Single Project"
          />
        </div>

        <div className="text-center px-4 pt-3">
          <p className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light mb-2">
            {title}
          </p>
          <span className="text-sm text-ternary-dark dark:text-ternary-light">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
