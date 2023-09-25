import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';

import emailjs from '@emailjs/browser';

import HigherOrderComp from './HigherOrderComp';
import { slideIn } from '../utils/motion';
import Social from './Social';
const Contact = () => {
  const formRef = useRef();
  const [form , setForm] = useState({
    name:"",
    email:"",
    message:"",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const { REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAIL_SERVICE_ID, REACT_APP_EMAIL_PUBLIC_KEY } = process.env;
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(form.name === "" || form.email === "" || form.message === "" ){
      setLoading(false)
      return alert("Please Fill all the field")
    }
    emailjs
      .send(
        REACT_APP_EMAIL_SERVICE_ID,
        REACT_APP_EMAIL_TEMPLATE,
        {
          from_name: form.name,
          to_name: "Tarun",
          from_email: form.email,
          to_email: "ttarunn0709@gmail.com",
          message: form.message,
        },
        REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:flex-row flex flex-col-reverse gap-10 flex-wrap overflow-hidden' id='contact'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-transparent p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form  ref={formRef} onSubmit={handleSubmit} className='flex mt-12 flex-col gap-8'>
        <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto'
      >
        <Social/>
      </motion.div>
    </div>
  )
}

export default HigherOrderComp(Contact, 'contact')