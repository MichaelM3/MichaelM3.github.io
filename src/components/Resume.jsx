import { useState } from 'react'
import resume from '../resumePic.jpg'

const Resume = () => {

  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = (e) => {
    if (e.target.id === "modal") {
      setShowModal(false)
    }
  }

  return (
    <div className="flex flex-col items-center w-1/3 h-full">
      <h2 className="text-4xl dark:text-white mb-6">Resume</h2>
      <img src={resume} onClick={() => setShowModal(true)} className="overflow-hidden hover:cursor-zoom-in transition duration-300" />
      { showModal &&
        <div id="modal" onClick={handleCloseModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-3xl flex justify-center items-center'>
          <div className='bg-white p-2 rounded'>
            <img src={resume} />
          </div>
        </div>
      }
    </div>
  )
}

export default Resume 
