"use client"

import { useState,useEffect } from "react"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMounted,setIsMounted] = useState(false)
  const [heading,setHeading]= useState(null)
  const [isOpen,setIsOpen] = useState(false)
  const path = usePathname()

 
  useEffect(()=>{
    setIsMounted(true)

    switch (path) {
      // This case checks whether the current pathname includes the '/settings' string.
      case path.includes('/settings'):
        setHeading('Settings');
        break;
      
      // This case is executed if the current pathname does not include the '/settings' string.
      default:
        // Do nothing.
        break;
    }
 

  },[path])

  if(!isMounted)return


  return (
   <header className='border p-5 flex items-center justify-between'>
    <h1 className='font-bold text-3xl'>{path}</h1>
    <div className='flex gap-1 items-center'>
   
        <h2 className='font-semibold text-gray-800'>Kulani</h2>
    
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer relative rounded-full aspect-square h-12 bg-gradient-to-r from via-orange-600 from-orange-600 to-sky-900'>
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