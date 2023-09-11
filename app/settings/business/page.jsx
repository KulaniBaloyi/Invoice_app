import React from 'react'

const Business = () => {
  return (
    <div  className='bg-white p-5 flex flex-col gap-5 '>
      <h1 className='text-xl font-semibold'>Business Settings</h1>
      <section className='border-b flex p-5 gap-5'>
        <div className='flex-[.1] flex flex-col gap-5 items-center'>
          <p className='border bg-neutral-200 aspect-square w-20 rounded-lg'></p>
          <p className='text-teal-500 text-lg'>Change</p>

        </div>
        <div className='flex-[.8] flex flex-col gap-5'>
          <h1 className='text-xl font-semibold'>South Africa</h1>
         
        </div>
        <div className='flex-[.1] text-lg text-right text-teal-800 font-semibold'>Edit</div>
      </section>
      <section className='p-5 flex gap-5 border-b'>
        <div className='flex-[.1] '>Business No</div>
        <div className='flex-[.8] font-semibold' >Tax Reg No.</div>
        <div className='flex-[.1] text-lg text-right text-teal-800 font-semibold'>Edit</div>
      </section>
      <section className='p-5 flex gap-5 border-b'>
        <div className='flex-[.1] '>Address</div>
        <div className='flex-[.8] font-semibold' >16 Drive street</div>
        <div className='flex-[.1] text-lg text-right text-teal-800 font-semibold'>Edit</div>
      </section>
    </div>
  )
}

export default Business