import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav className='flex gap-5 items-center justify-between'>
          <ul className='flex items-center gap-2'>
          <h1>Documents </h1>
            <h1>/ Invoice </h1>
            <h1>/Create</h1>
          </ul>
          <p className='p-2 px-4 bg-teal-500 text-white rounded-md'>Save</p>
         
        </nav>
        {children}
    </div>
  )
}

export default layout