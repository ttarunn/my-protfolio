import React from 'react'
import { social } from '../constants'
import { Tilt } from 'react-tilt'
import HigherOrderComp from './HigherOrderComp'
const SocialCard = ({name, image, source_link}) => {
    return <>
    
        <Tilt>
            <img src={image} alt={name} className='sm:w-40  w-20 cursor-pointer' onClick={() => window.open(source_link, "_blank")}/>
        </Tilt>
    
    </>
}

const Social = () => {
  return (
    <>
    <h2 className='text-white font-black md:text-[40px] sm:text-[40px] xs:text-[20px] text-[20px] mb-10'>Connect With Me</h2>
    <p className='sm:text-[18px] text-[14px] text-secondary tracking-wider text-justify'>I'm here to engage with you on all things related to web development and technology. Whether you have questions, feedback, collaboration ideas, or any other opportunities, please feel free to reach out. Your input is invaluable in shaping better solutions, and I'm ready to join your team or partner on projects to create exceptional digital experiences together."</p>
    
    <div className='mt-20 flex flex-wrap sm:gap-20 gap-10 justify-center'>
      {social.map((project, idx)=> {
        return <SocialCard key={`project-${idx}`} index={idx} {...project}/>
      })}
    </div>
    </>
  )
}
export default Social
// export default HigherOrderComp(Social,"social")