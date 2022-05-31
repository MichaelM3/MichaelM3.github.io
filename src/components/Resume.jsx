import resume from '../resumePic.jpg'

const SoftSkills = () => {
  return (
    <div className="flex flex-col items-center w-1/3 h-full">
      <h2 className="text-4xl dark:text-white mb-6">Resume</h2>
      <img src={resume} className="overflow-hidden"/>
    </div>
  )
}

export default SoftSkills
