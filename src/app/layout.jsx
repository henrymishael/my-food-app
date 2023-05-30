import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Food App',
  description: 'First project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' flex justify-center h-screen min-w-[360px] m-auto bg-[#f2f2f2] shadow-2xl border-4 border-white sm:min-h-[100%] sm:w-[100%] md:min-h-[100%] md:w-[100%] lg:min-h-[100%] lg:w-[100%] xl:min-h-[100%] xl:w-[100%]  2xl:hidden'>    
        {children}
        </div>
      </body>
    </html>
  )
}
