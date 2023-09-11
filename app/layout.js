
import Header from './components/Header'
import Menu from './components/Menu'
import './globals.css'
import Link from 'next/link'



export const metadata = {
  title: 'invoice app',
  description: 'A invoice app that allows a person to create a keep track of products and purchase history',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className='grid grid-cols-5'>
          <Menu/>
          <main className='border col-span-4 p-10 h-[100dvh] overflow-y-auto bg-gray-100'>
          <Header/>
        {children}
      
          </main>
        </div>
       
        </body>
    </html>
  )
}
