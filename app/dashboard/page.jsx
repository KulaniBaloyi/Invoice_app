
"use client"
import { useState,useEffect } from "react"
const Dashboard = () => {
    const [isMounted,setIsMounted]=useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted)return
    return (
      <div className="my-5">
        <h1 className="text-3xl">Hi <span className="font-semibold ">Kulani</span></h1>
        <div className="flex my-5 gap-5 ">
           
            <div className=" flex-[.7] grid grid-cols-2 gap-5 ">
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-2 p-5 flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h1 className="uppercase text-xl font-semibold">Create Document</h1>
                        <p className="border rounded-full px-6 py-2">More</p>
                    </div>
                    <div className="flex justify-between items-center gap-5">
                        <h1 className="w-full rounded-xl border p-8">Create Invoice</h1>
                        <p className="w-full rounded-xl border p-8">Create propusal</p>
                    </div>

                </div>
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-1 p-5 flex flex-col justify-between">
                    <h1>Total Payments received</h1>
                    <p>R 0.00</p>
                    <p>Overdue 0 invoices</p>
                </div>
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-1 p-5 flex flex-col justify-between flex-wrap">
                    <p>SEPTEMBER INVOICE AMOUNT</p>
                    <p className="flex flex-col gap-1">
                        <p>R1,275.00</p>
                        <p>Paid R0.00  Unpaid R1 600</p>
                    </p>
                </div>
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-2 aspect-video">
                    
                </div>
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-2 p-16"></div>
                
            </div>
            <div className="flex-[.3] flex flex-col gap-5">
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-mdw-full flex flex-col gap-5 p-5">
                    <h1 className="font-semibold">Upgrade to unlock unlimited Documents</h1>
                    <p>Send as many documents as you want by upgrading your plan.</p>
                    <p className="uppercase text-teal-500 bg-teal-500/20 p-2 rounded-md">view plans</p>
                </div>
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md p-5 w-full">
                    <h1 className="font-semibold uppercase text-gray-500">Recent activity</h1>
                    <p className="p-3 capitalize text-gray-500 text-center">No data</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Dashboard