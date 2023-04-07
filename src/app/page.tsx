import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='border w-5 h-5 border-slate-600'></div>
    </main>
  )
}
