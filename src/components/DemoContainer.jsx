import Demo from './Demo'
import { demos } from '../data'

const DemoContainer = () => {

  
  const displayDemos = demos.map(demo =>  {
    return <Demo key={demo.title} demo={demo} />
  })

  return (
    <div className='flex flex-col items-center w-full'>
      <h2 className="dark:text-white text-3xl">Projects</h2> 
      <div className='flex my-9 w-full overflow-auto space-x-4 overflow-y-hidden'>
        {displayDemos}
      </div>
    </div>
  )
}

export default DemoContainer
