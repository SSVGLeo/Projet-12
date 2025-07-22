import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useLanguage } from "../../translation/LanguageContext";
import { translations } from "../../translation/translation";

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);
  const [isSending, SetIsSending] = useState(false);
  const {language} = useLanguage();
  const t = translations[language].contact.form

  const sendEmail = (e) => {
    e.preventDefault();
	SetIsSending(true);

	const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      setStatusMessage(t.fillFields);
      setStatusType("error");
	  SetIsSending(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage(t.validEmail);
      setStatusType("error");
	  SetIsSending(false);
      return;
    }

    emailjs
      .sendForm("service_7flvbg1", "template_a5ughno", form.current, {
        publicKey: "oZ1QqKyEtWEzNKX7f",
      })
      .then(() => {
        console.log("SUCCESS!");
        setStatusMessage(t.success);
        setStatusType("success");
        form.current.reset();
		SetIsSending(false);
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        setStatusMessage(t.error);
        setStatusType("error");
		SetIsSending(false);
      });
  };
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <h1 className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            {translations[language].contact.details}
          </h1>
          <FormInput
            inputLabel="NOM Prénom"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText={t.namePlaceholder}
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText={t.emailPlaceholder}
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Objet"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText={t.subjectPlaceholder}
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button title={isSending ? t.sending : t.send} disabled={isSending} type="submit" aria-label="Send Message" />
          </div>
        </form>
        {statusMessage && (
          <div
            className={`mt-4 text-sm px-4 py-2 rounded ${
              statusType === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
