import { Suspense } from 'react'
import './globals.css'
import { Gabarito } from 'next/font/google'
import Preloader from './Preloader.jsx'
const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Tade | Software Engineer',
  description: 'Akintade David Portfolio Website',
  image: './images/meta.png'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Suspense fallback={<Preloader />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
