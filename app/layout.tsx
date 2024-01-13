import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './component-styles.css'
import { Footer, Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car hub',
  description: 'Best place to find and rent the car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body >
        <Header/>
          <div style={{minHeight:'max-content'}}>
          {children}
          </div>
        <Footer/>
      </body>
    </html>
  )
}
