


const Page = ({params}) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5">
        <section className="border rounded-lg p-5 bg-white col-span-2 flex flex-col gap-5">
            <div className="grid grid-cols-5 gap-2">
                <div className="col-span-3 border p-2">
                    <div className="border p-5 rounded-md border-rose-500"></div>
                </div>
                <div className="col-span-2 border p-1 flex flex-col gap-2">
                    <div className="border p-2 border-cyan-500 rounded-md">invoice</div>
                    <div className="border p-2 border-cyan-500 rounded-md">purchase order</div>
                    <div className="border p-2 border-cyan-500 rounded-md">date</div>
                    <div className="border p-2 border-cyan-500 rounded-md">due date</div>
                </div>
            </div>
            <p className="p-5 bg-teal-100 rounded-md">Photo</p>
        </section>
        <section className="border rounded-lg p-5 bg-white shadow shadow-neutral-200">
            <ul className="flex flex-col gap-5">
                <li>Request a deposit</li>
                <li>Signature</li>
                <li>Recurring</li>
                <li>Overdue reminders are currently off. <span className="text-teal-500">Edit</span></li>
            </ul>
        </section>
    </div>
  )
}

export default Page