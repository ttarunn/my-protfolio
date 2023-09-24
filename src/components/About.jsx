import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import HigherOrderComp from './HigherOrderComp';
import { myImg } from '../assets';

const ServiceCard = ({ title, icon })=> {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div  className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] px-5 py-12 min-h-[280px] flex justify-evenly flex-col items-center'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-lg font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <div id='about' className='mt-16 sm:-mt-8'>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText} >Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.div variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-xl max-w-5xl gap-10 leading-[30px] flex justify-around text-justify flex-wrap lg:flex-nowrap'> 
    <img src={myImg} alt='img' className='w-56 h-56 rounded-full border-red-100 border-2 p-1'/>
    <p>I'm a Full Stack Developer with a burning ambition for my work. I dive headfirst into the world of technology, and I'm constantly fueled by the desire to excel. For me, each coding challenge is an opportunity to innovate and create something remarkable. In this ever-changing landscape of web and software development, I embrace challenges with enthusiasm, pushing the boundaries of what's possible. I'm on a relentless journey of growth, learning, and making a tangible impact in the digital sphere. My work is not just a profession; it's a passion and a commitment to achieving greatness in one line of code at a time.</p>
        
      </motion.div>
        
        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index)=> {
            return <ServiceCard key={service.title} index={index} {...service}/>
          })}
        </div>
    </div>
  )
}

export default HigherOrderComp(About, 'About')