"use client"

import { useState,useEffect } from "react"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMounted,setIsMounted] = useState(false)
  const [heading,setHeading]= useState(null)
  const [isOpen,setIsOpen] = useState(false)
  const path = usePathname()

  // if(path =="/customers"){
  //   setHeading("Customers")
  // }

  useEffect(() => {
    setIsMounted(true)
    // This effect runs when the component is mounted.
 
  }, [path]);

  if(!isMounted)return


  return (
   <header className=' flex items-baseline justify-between'>
    <div className="flex flex-col gap-5">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:hidden w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    <h1 className='font-bold text-3xl capitalize'>{path.slice(path.lastIndexOf('/') + 1)}</h1>
    </div>
    
    <div className='flex gap-1 items-center'>
   
        <h2 className='font-semibold text-gray-800'>Kulani</h2>
    
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer relative rounded-full aspect-square h-12 bg-gradient-to-r from via-orange-600 from-orange-600 to-[#fcd34d]'>
      {isOpen&&<ul className="absolute right-0 top-16 shadow-md shadow-gray-600 p-5 border rounded-md bg-white z-30 w-56">
        <li className="border-b p-2 flex items-center gap-5">
          <p className="bg-gray-500 aspect-square border h-8  rounded-md"></p>
          <p>Kulani</p>
        </li>
        <li className="p-2 border-b">Add Company</li>
        <li className="p-2">Settings</li>
        <li className="p-2">Logout</li>
      </ul>}
    </div>
    </div>
   
    
   </header>
  )
}

export default Header