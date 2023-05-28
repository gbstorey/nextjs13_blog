import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import MyProfilePic from "@/app/components/MyProfilePic";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Potentia WS Blog',
  description: 'Created by Garrett Storey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-800`}>
          <Navbar />
          <MyProfilePic />
          {children}
      </body>
    </html>
  )
}
