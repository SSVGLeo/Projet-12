import { motion } from "framer-motion";

const ProjectSingle = ({ title, category, image, link }) => {
  console.log(link, title, category, image);
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
      <div className="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark card">
        <div className="card-image">
          <img
            src={image}
            className="rounded-t-xl border-none"
            alt="Single Project"
          />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Single Project"
        >
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-sm text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-sm text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
