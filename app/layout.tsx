import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
// import { Inter } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

//? this is if i added a new font
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Store',
  description: 'E-Store is a platform for buying and selling products',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        //?? this would be if i added a new font className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}>
        {children}
      </body>
    </html>
  )
}
