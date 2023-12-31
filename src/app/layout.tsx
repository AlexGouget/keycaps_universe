import type { Metadata } from 'next'
import {Inter, Libre_Baskerville, Montserrat} from 'next/font/google'
import './globals.scss'
import dynamic from "next/dynamic";

const montserrat = Montserrat({ subsets: ['latin'] })

//dynamic import


export const metadata: Metadata = {
  title: 'Keycaps Universe',
  description: 'Generated by create next app',
}


//dynamic import Navigation
const Navigation = dynamic(() => import("@/components/navigation/Navigation"), {ssr: false})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} hero-pattern w-full`}>
         <Navigation />
      {children}
      </body>
    </html>
  )
}
