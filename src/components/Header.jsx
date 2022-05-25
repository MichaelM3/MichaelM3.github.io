import me from '../me.jpg'
import { MoonIcon} from '@heroicons/react/solid'
import { SunIcon } from '@heroicons/react/outline'

const Header = ({ theme, setTheme }) => {

  const handleClick = () => {
    if (theme === "dark") {
      setTheme("light")
      localStorage.theme = "light"
    } else {
      setTheme("dark")
      localStorage.theme = "dark"
    }
  }

  return (
    <header className='flex flex-col items-center space-y-6'>
      <span className='flex'>
        <h1 className='text-black dark:text-slate-200 text-5xl'>Michael Muniz</h1>
        {theme === "light" ?
          <SunIcon onClick={handleClick} className='w-12 h-12 absolute right-12 hover:cursor-pointer'/>
          :
          <MoonIcon onClick={handleClick} className='w-12 h-12 absolute right-12 hover:cursor-pointer' />
        }
      </span>
      <p className='dark:text-white w-1/3'>
        Hello and welcome to my personal portfolio! My name is Michael Muniz and I'm
        a Full Stack Developer from New York City and new to Hamilton Ontario. I 
        specialize in writing back end apis with Ruby on Rails, and front ends with 
        React.js
      </p>
      <img src={me} alt='Picture of Michael' className='rounded-full w-2/12' /> 
    </header>
  )
}

export default Header
