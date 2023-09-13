
import Header from './components/Header'
import Menu from './components/Menu'
import './globals.css'

export const metadata = {
  title: 'invoice app',
  description: 'A invoice app that allows a person to create a keep track of products and purchase history',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className='grid grid-cols-1 lg:grid-cols-5 relative'>
        <div className='absolute bottom-5 right-5 z-50 bg-sky-500 grid place-content-center p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white">
  <path fillRule="evenodd" d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zM13.25 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm-6.5 4a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5a.75.75 0 01.75-.75zm4-1.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" clipRule="evenodd" />
</svg>
            </div>
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
