import Link from "next/link"
const Invoices = () => {
  return (
    <div className='p-5 flex flex-col'> 
    <div className='w-1/2 p-2 rounded-md bg-white'>Search...</div>
    <section className='grid grid-cols-9 '>
        <h1 className='p-2 col-span-3'>Invoice</h1>
        <h1 className='p-2 col-span-2'>Status</h1>
        <h1 className='p-2 col-span-2'>Date</h1>
        <h1 className='p-2 col-span-2'>Amount</h1>
    </section>
    <Link href="/documents/invoices/invoice-1">
    <section className='grid grid-cols-9 bg-white p-5 items-center border-b'>
        <h1 className='p-2 col-span-3 flex flex-col'>
            <p>Kulani</p>
            <p>#invoice-1</p>
        </h1>
        <h1 className='p-2 col-span-2 flex gap-2 items-center'>
            <p className="h-2 aspect-square rounded-full bg-sky-500"></p>
            Sent</h1>
        <h1 className='p-2 col-span-3 flex flex-col gap-1'>
            <p className="font-semibold"><span className="rounded-sm font-normal p-1 text-xs bg-amber-100 text-amber-800">issued</span> R1,275.00</p>
            <p className="font-semibold"><span className="rounded-sm font-normal p-1 text-xs bg-teal-100 text-teal-800">issued</span> R1,275.00</p>
        </h1>
       
        <h1 className='p-2 '>R1,275.00</h1>
    </section>
    </Link>
    
    {/** */}
    <Link href="/documents/invoices/invoice-2">
    <section className='grid grid-cols-9 bg-white p-5 items-center'>
        <h1 className='p-2 col-span-3 flex flex-col'>
            <p>Kulani</p>
            <p>#invoice-2</p>
        </h1>
        <h1 className='p-2 col-span-2 flex gap-2 items-center'>
            <p className="h-2 aspect-square rounded-full bg-emerald-500"></p>
            Sent</h1>
        <h1 className='p-2 col-span-3 flex flex-col gap-1'>
            <p className="font-semibold"><span className="rounded-sm font-normal p-1 text-xs bg-amber-100 text-amber-800">issued</span> R1,275.00</p>
            <p className="font-semibold"><span className="rounded-sm font-normal p-1 text-xs bg-teal-100 text-teal-800">issued</span> R1,275.00</p>
        </h1>
       
        <h1 className='p-2 '>R1,275.00</h1>
    </section>
    </Link>
   
    <section className='self-end'>Rows per page:  10    1-2 of 2    %  [1]  %</section>
    </div>
  )
}

export default Invoices