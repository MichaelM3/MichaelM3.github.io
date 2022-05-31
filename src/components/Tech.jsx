import html from '../WebDevSvgs/html-svgrepo-com.svg'
import css from '../WebDevSvgs/css3-svgrepo-com.svg'
import js from '../WebDevSvgs/js-official-svgrepo-com.svg'
import node from '../WebDevSvgs/node-js-svgrepo-com.svg'
import npm from '../WebDevSvgs/npm-svgrepo-com.svg'
import react from '../WebDevSvgs/react-svgrepo-com.svg'
import redux from '../WebDevSvgs/redux-svgrepo-com.svg'
import ruby from '../WebDevSvgs/ruby-svgrepo-com.svg'
import rails from '../WebDevSvgs/rails-svgrepo-com.svg'
import go from '../WebDevSvgs/go-svgrepo-com.svg'
import python from '../WebDevSvgs/python-svgrepo-com.svg'
import docker from '../WebDevSvgs/docker-svgrepo-com.svg'
import ts from '../WebDevSvgs/typescript-icon-svgrepo-com.svg'
import git from '../WebDevSvgs/github-svgrepo-com.svg'

const Tech = () => {

  const tech = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css }, 
    { name: "Javascript", icon: js },
    { name: "Typescript", icon: ts },
    { name: "Node", icon: node },
    { name: "NPM", icon: npm },
    { name: "React", icon: react }, 
    { name: "Redux", icon: redux },
    { name: "Ruby", icon: ruby },
    { name: "Rails", icon: rails },
    { name: "Go", icon: go },
    { name: "Python", icon: python },
    { name: "Docker", icon: docker },
    { name: "Git", icon: git },
  ]

  const displayTech = tech.map((skill, index) => {
    return (
      <span key={index} className='flex flex-col items-center'>
        <p className='dark:text-white'>{skill.name}</p>
        <img src={skill.icon} className='object-contain w-[100px] h-[100px]' />
      </span>
    )
  })

  return (
    <div className="flex flex-col items-center w-1/3 h-full">
      <h2 className='text-4xl dark:text-white mb-6'>TECH</h2>
      <div className='flex flex-wrap justify-center space-x-3'>
        {displayTech}
      </div>
    </div>
  )
}

export default Tech
