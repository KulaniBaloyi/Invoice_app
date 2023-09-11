import React from 'react'

const Customers = () => {
  return (
<div className='p-5 flex flex-col gap-5'> 
<div className='w-1/2 p-2 rounded-md bg-white'>Search...</div>
<section className='grid grid-cols-9 '>
    <h1 className='p-2 col-span-3'>Customer</h1>
    <h1 className='p-2 col-span-3'>Email</h1>
    <h1 className='p-2 col-span-2'>Date</h1>
    <h1 className='p-2 col-span-1'>Action</h1>
</section>
<section className='grid grid-cols-9 bg-white p-5'>
    <h1 className='p-2 col-span-3'>Kulani</h1>
    <h1 className='p-2 col-span-3'>Kulani17@yahoo.com</h1>
    <h1 className='p-2 col-span-2'>11 Sep 2023</h1>
    <h1 className='p-2 col-span-1'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
</svg>

    </h1>
</section>
<section className='self-end'>Rows per page:  10    1-2 of 2    %  [1]  %</section>
</div>
  )
}

export default Customers