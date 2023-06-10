import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Showroom',
  description: 'Discover best car ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
