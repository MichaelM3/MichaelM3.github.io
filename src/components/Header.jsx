import { FaSun, FaMoon } from 'react-icons/fa'
import Statement from './Statement'
import Resume from './Resume'
import Tech from './Tech'

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
    <header className='flex flex-col h-2/3 items-center space-y-6'>
      <span className='flex'>
        {theme === "light" ?
          <FaSun onClick={handleClick} size={36} className='absolute right-12 hover:cursor-pointer'/>
          :
          <FaMoon onClick={handleClick} size={36} className='absolute right-12 hover:cursor-pointer' />
        }
      </span>
      <div className='flex flex-row items-center space-x-6 h-full'>
        <Resume />
        <Statement />
        <Tech />
      </div>
    </header>
  )
}

export default Header
