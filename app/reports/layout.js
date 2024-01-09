import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <nav className='flex items-center justify-between'>
        <p className='rounded-md px-4 py-2 bg-white border flex gap-5 items-center my-5'>Last year
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-teal-500">
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
</svg>

        </p>
            <p className='rounded-md bg-teal-500 text-white px-4 py-2'>Export</p>
        </nav>
        {children}
    </div>
  )
}

export default layout
