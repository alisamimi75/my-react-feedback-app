import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AbouticonLink = () => {
  return (
    <div className='text-white flex justify-end w-full text-5xl '>
    <Link to={"/about"} className='cursor-pointer flex hover:text-pink-400 items-center'>
    Abaut Us
    <FaQuestion size={35} className='hover:text-pink-400'/>
    </Link>
        
    </div>
  )
}

export default AbouticonLink