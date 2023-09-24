import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { tarun } from '../assets'
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 top-0 z-20 flex ${
      scrolled ? "bg-primary" : "bg-transparent"
    } fixed`}>
      <div className='w-full flex justify-between items-center mx-auto'>
        <Link to={'/'} className='flex items-center gap-2' onClick={()=> {
          setActive('')
          window.scrollTo(0, 0);
        }}>
          <img src={tarun} alt='tarun' className='w-20 h-9 object-contain'/>
        </Link>
        <ul className='list-none sm:flex flex-row gap-10 hidden'>
          {navLinks.map(nav => {
            return <li key={nav.id} className={`${active === nav.title ? 'text-white': 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=> {
              setActive(nav.title)
            }}>
              <a href={`${nav.title === "Resume" ? "https://drive.google.com/file/d/1rOzYDfMWB0AmxnWG8SIeyFeTXwTP5nXc/view" : "#"+nav.id}`}>{nav.title}</a>
            </li>
          })}
        </ul>
        <div className='sm:hidden flex flex-1 items-center justify-end'>
          {toggle ? <AiOutlineClose className='w-[28px] h-[28px] cursor-pointer object-contain' onClick={()=> setToggle(!toggle)}/>:<CgMenuRight className='w-[28px] h-[28px] cursor-pointer object-contain' onClick={()=> setToggle(!toggle)}/>}
        </div>
        <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`${nav.title === "Resume" ? "https://drive.google.com/file/d/1rOzYDfMWB0AmxnWG8SIeyFeTXwTP5nXc/view" : "#"+nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar