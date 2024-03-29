import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miguel Colmenares Portfolio',
  description: '3D Portfolio showcasing projects from Miguel Colmenares',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
 
      <body className={inter.className}>
        
        <Navbar />
        {children}
        
        </body>
    </html>
  )
}
