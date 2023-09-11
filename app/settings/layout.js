import Link from "next/link"
export default function SrttingLayout({ children }) {
    return <main>
        <header className="p-5 border rounded-md mt-5 flex gap-5 items-center">
            <Link href={"/settings/users"}>Users</Link>
            <Link href={"/settings/business"}>Businesss</Link>
            <Link href={"/settings/general"}>General</Link>
            <Link href={"/settings/document"}>Document</Link>
            <Link href={"/settings/subscription"}>Subscription</Link>
          
        </header>
        {children}
    </main>
}