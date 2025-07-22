import profileImage from "../../images/Leobio.png";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import { useLanguage } from "../../translation/LanguageContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);
  const { language } = useLanguage();

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>
      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}
          >
            {bio.bio[language]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
