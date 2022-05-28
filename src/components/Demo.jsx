const Demo = ({ demo: { title, link, description, tech } }) => {

  const displayTech = tech.map(item => <p key={item} className="dark:text-white">- {item}</p>)

  return (
    <div className="flex flex-col items-center">
      <h3 className="dark:text-white text-2xl">{title}</h3>
      <iframe className="w-[600px] h-[400px] shadow-slate-800 dark:shadow-white shadow-lg" src={link}></iframe> 
      <span>
        <h3>{description}</h3>
        {displayTech}
      </span>
    </div>
  )
}

export default Demo
