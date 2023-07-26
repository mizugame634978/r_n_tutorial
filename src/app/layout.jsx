
import './globals.css'
import { Inter } from 'next/font/google'

//Appルーター（next13）ではPage Router(next12)での_document.jsや_app.jsは廃止されてlayout.jsに統合された
//https://zenn.dev/nbr41to/scraps/ca1c48fb3b0a52
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'layout.jsxです',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

