import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gallery app -leo33',
  description: 'Generated by Lewis Gitonga',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
