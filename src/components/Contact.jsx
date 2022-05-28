import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <h2 className="dark:text-white text-3xl">Contact Me</h2>
      <div className='flex items-center justify-evenly'>
        <a href='https://github.com/michaelm3'><FaGithub size={100}/></a>
        <a href='https://www.linkedin.com/in/michael-muniz94'><FaLinkedin size={100}/></a>
        <a href='https://medium.com/@michaelmuniz'><FaMedium size={100}/></a>
      </div>  
    </div>
  )
}

export default Contact

