import React from 'react'

const Users = () => {
  return (
    <div  className='bg-white p-5 flex flex-col gap-5 '>
      <h1 className='text-xl font-semibold'>User Settings</h1>
      <section className='border-b flex p-5 gap-5'>
        <div className='flex-[.1] flex flex-col gap-5 items-center'>
          <p className='border bg-neutral-200 aspect-square w-20 rounded-lg'></p>
          <p className='text-teal-500 text-lg'>Change</p>

        </div>
        <div className='flex-[.8] flex flex-col gap-5'>
          <h1 className='text-xl font-semibold'>Kulani</h1>
          <div className='rounded-lg p-5 bg-teal-50 w-[90%] aspect-[16/4] flex flex-col gap-5'>
            <h2 className='font-semibold'>Need to send unlimited Documents?</h2>
            <p>Grow your business faster by upgrading to unlimited features.</p>
            <p className='rounded-md p-2 bg-teal-500 text-white self-start'>Upgrade now</p>
          </div>
        </div>
        <div className='flex-[.1] text-lg text-right text-teal-800 font-semibold'>Edit</div>
      </section>
      <section className='p-5 flex gap-5 border-b'>
        <div className='flex-[.1] '>Email</div>
        <div className='flex-[.9] font-semibold' >Kulani17.kb@gmail.com</div>
      </section>
      <section className='p-5 flex gap-5'>
        <div className='flex-[.1] '>Password</div>
        <div className='flex-[.8] font-semibold' >* * * * * * * * </div>
        <div className='flex-[.1] text-teal-800 font-semibold text-right'>Reset</div>
      </section>
    </div>
  )
}

export default Users