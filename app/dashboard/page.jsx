
"use client"
import { useState,useEffect } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
const Dashboard = () => {
    const [isMounted,setIsMounted]=useState(false)
    const router = useRouter()

    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted)return
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip
      );
    return (
      <div className="my-5">
        <h1 className="text-3xl">Hi <span className="font-semibold ">Kulani</span></h1>
        <div className="flex flex-col lg:flex-row  my-5 gap-5 ">
           
            <div className=" flex-[.7] grid grid-cols-2 gap-5 ">
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-2 p-5 flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h1 className="uppercase text-xl font-semibold">Create Document</h1>
                        <p className="border rounded-full px-6 py-2">More</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                     
                      
                        <h1 onClick={()=>router.push("/documents/invoices/create")} className="cursor-pointer w-full rounded-xl border p-8 flex items-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-emerald-500">
  <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z" />
</svg>
                          Create Invoice</h1>
                          <h1 className="w-full rounded-xl border p-8 flex items-center gap-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-violet-500">
  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
</svg>

                          Create Proposal</h1>
                    </div>

                </div>
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-2 md:col-span-1 p-5 flex flex-col justify-between">
                    <h1 className="text-gray-500  uppercase">Total Payments received</h1>
                    <p className="text-xl">R <span className="font-bold text-3xl">6,657</span>.00</p>
                    <p><span className="text-red-500">Overdue</span> <span className="font-semibold">0 invoices</span></p>
                </div>
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-2 md:col-span-1 gap-5 p-5 flex flex-col justify-between flex-wrap">
                    <p className="text-gray-500  uppercase">SEPTEMBER INVOICE AMOUNT</p>
                    <p className="flex flex-col gap-1">
                    <p className="text-xl">R <span className="font-bold text-3xl">6,657</span>.00</p>
                        <p><span className="text-emerald-500">Paid</span> R0.00</p>
                        <p><span className="text-amber-500">Unpaid</span> R0.00</p>
                    </p>
                </div>
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-2 aspect-video">
                <Line
        data={{
          labels: [
            "2023-01",
            "2023-02",
            "2023-03",
            "2023-04",
            "2023-05",
            "2023-06",
            "2023-07",
          ],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],
              backgroundColor: "purple",
            },
          ],
        }}
      />
                <div>
     
    </div>
                </div>
                {/** */}
              <div className=" shadow-sm shadow-neutral-200 bg-white border rounded-md col-span-2 p-5 overflow-x-auto">
                  <section className="uppercase text-gray-500 border-b-2 pb-2 flex">
                    <h1 className="shrink-0 w-1/2">Invoice</h1>
                    <h1 className="shrink-0 w-1/2">Status</h1>
                    <h1 className="shrink-0 w-1/2">Date</h1>
                    <h1 className="shrink-0 w-1/2">Amount</h1>
                  </section>
                  <section className="uppercase text-gray-500 border-b-2 pb-2 flex">
                  <h1 className="shrink-0 w-1/2">Status</h1>
                    <h1 className="shrink-0 w-1/2">Status</h1>
                    <h1 className="shrink-0 w-1/2">Date</h1>
                    <h1 className="shrink-0 w-1/2">Amount</h1>
                  </section>
                 
    
     
    

                </div>
              {/** */}
            </div>
            <div className="flex-[.3] flex flex-col gap-5">
                <div className="shadow-sm shadow-neutral-200 bg-white border rounded-mdw-full flex flex-col gap-5 p-5">
                    <h1 className="font-semibold">Upgrade to unlock unlimited Documents</h1>
                    <p>Send as many documents as you want by upgrading your plan.</p>
                    <Link href="/settings/subscription">
                    <p className="uppercase text-teal-500 bg-teal-500/20 p-2 rounded-md">view plans</p>
                    </Link>
                </div>
                {/** */}
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