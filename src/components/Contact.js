import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PageTitleBanner from './PageTitleBanner';

const Contact = () => {
    const form = useRef();
    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")
    
 

    const emaiilJsTemplateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID
    const emailJsServiceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID
    const emailJsPublicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const phoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(emailJsServiceId, emaiilJsTemplateId, form.current, emailJsPublicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                });
    };

    const handleFormValidation = () => {
        const allInputsValid = (name.length >= 3 && emailRegex.test(email) && phoneRegex.test(phone) && company.length >= 2 && message.length >=10)
        console.log(allInputsValid, "form")
        setIsDisabled(!allInputsValid)
    }
    
    const resetForm = () => {
        setName("")
        setEmail("")
        setPhone("")
        setCompany("")
        setMessage("")
        setIsDisabled(!isDisabled)
    }
    return ( 
        <>
            <section className="website-pages-look-contact ">
                <div className='overlay '>
                    <PageTitleBanner titleName="Hire Me" />
                    <div className='contact-form'>
                        <form ref={form} onChange={() => handleFormValidation()}>
                    
                        
                            
                            <input type="text" placeholder="Name" name="user_name" minLength={3} maxLength={30} value={name} onChange={(e) => setName(e.target.value)} required={true}/>
                        
                        
                            <input type="email" placeholder="Email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
                        
                        
                            <input type="tel" placeholder="Phone 999-999-9999" name="user_phone" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required={true}/>
                        
                        
                            <input type="text" placeholder="Company" name="user_company" minLength={2} maxLength={50} value={company} onChange={(e) => setCompany(e.target.value)} required={true}/>
                        
                        
                            <textarea placeholder="Message" name="message" minLength={10} maxLength={200} value={message} onChange={(e) => setMessage(e.target.value)} required={true}></textarea>
                                                
                        </form>
                            <button disabled={isDisabled} onClick={(e) => {sendEmail(e); resetForm()}}> Send</button>
                    </div>
                </div>
             
            </section>

           
        </>
     );
     
}
// {(e) => {sendEmail(e); resetForm()}}
// {() => resetForm}
export default Contact;