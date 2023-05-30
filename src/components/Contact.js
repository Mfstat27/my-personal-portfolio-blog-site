import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageTitleBanner from "./PageTitleBanner";

const Contact = () => {
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailNotSent, setEmailNotSent] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isCompanyValid, setIsCompanyValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  const emaiilJsTemplateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const emailJsServiceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const emailJsPublicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

  // emailJsPublicKey
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailJsServiceId, emaiilJsTemplateId, form.current, "blabla")
      .then(
        (result) => {
          console.log(result.text);
          setEmailSent(true);
          resetForm();
        },
        (error) => {
          console.log(error.text);
          setEmailNotSent(true);
          return error.text;
        }
      );
  };

  const handleNameValid = () => {};
  const handleEmailValid = () => {};
  const handlePhoneValid = () => {};
  const handleCompanyValid = () => {};
  const handleMessageValid = () => {};

  const handleFormValidation = () => {
    const allInputsValid =
      name.length >= 3 &&
      emailRegex.test(email) &&
      phoneRegex.test(phone) &&
      company.length >= 2 &&
      message.length >= 10;
    setIsDisabled(!allInputsValid);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setIsDisabled(!isDisabled);
  };

  return (
    <>
      <section className="website-pages-look-contact ">
        <div className="overlay ">
          <PageTitleBanner titleName="Hire Me" />
          <div className="contact-form">
            <form ref={form} onChange={() => handleFormValidation()}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Tracey or TT"
                name="user_name"
                minLength={3}
                maxLength={30}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />

              <label>Email</label>
              <input
                type="email"
                placeholder="an_email@gmail.com"
                name="user_email"
                value={email}
                pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />

              <label>Phone</label>
              <input
                type="tel"
                placeholder="999-999-9999"
                name="user_phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required={true}
              />

              <label>Company</label>
              <input
                type="text"
                placeholder="Tracey's Designs"
                name="user_company"
                minLength={2}
                maxLength={50}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required={true}
              />

              <label>Message</label>
              <textarea
                placeholder="Your Message"
                name="message"
                minLength={10}
                maxLength={200}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required={true}
              ></textarea>
            </form>
            <button
              disabled={isDisabled}
              onClick={(e) => {
                sendEmail(e);
              }}
            >
              {" "}
              Send
            </button>
            {emailSent && (
              <p class="display-message"> Your message has been sent.</p>
            )}
            {emailNotSent && (
              <p class="display-message error">
                {" "}
                Whoops! There was an error processing your request. Please try
                again.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
// {(e) => {sendEmail(e); resetForm()}}
// {() => resetForm}
export default Contact;
