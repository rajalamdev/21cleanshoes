import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '21Cleanshoes | Services',
  description: '21Cleanshoes',
}

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body className={`${inter.className}`}>{children}</body>
    // </html>
    <section className={`${inter.className}`}>{children}</section>
  )
}