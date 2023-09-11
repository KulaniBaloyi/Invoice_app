import React from 'react'

const Subscription = () => {
  return (
   <div  className='min-h-screen bg-white grid place-content-center shadow-sm shadow-neutral-200 border border-t-0'>
    <div className=' aspect-video h-[400px] grid grid-cols-2 gap-8'>
      <div className='flex flex-col justify-between rounded-lg p-5 border border-t-[12px] '>
        <div className='flex flex-col justify-between gap-5'>
          <h1 className='text-3xl font-semibold'>Free</h1>
          <p>For trying things out</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-semibold'>0  <span className='text-xl'>USD</span></h1>
          <p className='rounded-md border p-3 bg-gray-200 text-gray-400'>Current plant</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='flex gap-5 items-center text-gray-500'> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-teal-500">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
</svg> Up to 5 Documents
</p>
<p className='flex gap-5 items-center text-gray-500'> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-teal-500">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
</svg>Unlimited Proposals
</p>
       

        </div>
      </div>
      {/** */}
      <div className='flex flex-col justify-between rounded-lg p-5 border border-t-[12px] border-t-teal-500'>
        <div className='flex flex-col justify-between gap-5'>
          <h1 className='text-3xl font-semibold'>Scale up <span className='rounded-md bg-[#fcd34d] p-1 text-sm font-semibold'>Best value</span></h1>
          <p>For your business growing faster. Unlimited all features.</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-gray-500'><span className='text-teal-500 text-4xl font-semibold'>9.99</span> <span className='text-teal-500 text-xl'>USD</span> /mo</h1>
          <p className='rounded-md border p-3 bg-teal-500 text-white '>Upgrade</p>
        </div>
        <div className='flex flex-col justify-between'>
          <p className='flex gap-5 items-center text-gray-500'> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-teal-500">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
</svg> Unlimited Documents

</p>
<p className='flex gap-5 items-center text-gray-500'> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-teal-500">
  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
</svg>Unlimited Proposals
</p>
       

        </div>
      </div>
    </div>
   </div>
  )
}

export default Subscription