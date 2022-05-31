import me from '../me.jpg'

const Statement = () => {
  return (
    <div className='flex flex-col items-center w-1/3 h-full'>
      <h1 className='text-black dark:text-slate-200 text-5xl'>Michael Muniz</h1>
      <p className='dark:text-white w-2/3'>
        Hello and welcome to my personal portfolio! My name is Michael Muniz and I'm
        a Full Stack Developer from New York City and new to Hamilton Ontario. I 
        specialize in writing back end apis with Ruby on Rails, and front ends with 
        React.js
      </p>
      <img src={me} alt='Picture of Michael' className='rounded-full w-4/12' /> 
    </div>
  )
}

export default Statement
