import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
const Hero = () => {
  return (
    <section className="relative w-full sm:h-screen mx-auto h-[70vh]">
      <div
        className={`absolute inset-0 top-[120px] sm:max-w-7xl w-full mx-auto ${styles.paddingX} items-start gap-5 sm:flex-nowrap sm:flex sm:flex-row`}
      >
        <div className="flex flex-row gap-5">
        <div className='flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
          <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>TARUN</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Fueling Innovation <br className='sm:block hidden' />
          as a Full Stack Developer
          </p>
          </div>
        </div>
        <div className="sm:w-[65%] h-[65%] sm:h-[75%] w-full -mt-8 z-10 border-2 border-white"><ComputersCanvas /></div>
        
      </div>
      
      
      
    </section>
  )
}

export default Hero