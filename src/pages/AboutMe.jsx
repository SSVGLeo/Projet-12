import AboutMeBio from "../components/about/AboutMeBio";
import AboutClients from "../components/about/AboutClients";
import { AboutMeProvider } from "../context/AboutMeContext";
import { motion } from "framer-motion";
import { useLanguage } from "../translation/LanguageContext";

const About = () => {
	const { language } = useLanguage();
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <h2
          id="about-heading"
          className="text-3xl font-semibold mb-4 text-primary-dark dark:text-primary-light text-center"
        >
          {language === "fr" ? "À propos de moi" : "About Me"}
        </h2>
        <AboutMeBio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutClients />
      </motion.div>
    </AboutMeProvider>
  );
};

export default About;
