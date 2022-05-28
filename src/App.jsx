import { useEffect, useState } from 'react'
import './App.css'
import DemoContainer from './components/DemoContainer'
import Header from './components/Header'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const theme = localStorage.theme || null
    if (theme) {
      setTheme(theme)
    } else {
      // If no preference in local storage, check the users browser preffered theme
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
        localStorage.theme = "dark"
      }
    }

  }, [])
  
  return (
    <main className={theme}>
      <div className="flex flex-col items-center dark:bg-slate-800 h-screen p-6 overflow-auto">
        <Header theme={theme} setTheme={setTheme} />
        <hr className='w-full border-black dark:border-white my-9'/>
        <DemoContainer />
        <Contact />
      </div>
    </main>
  )
}

export default App
