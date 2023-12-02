import Image from 'next/image'
import Main from './Main'
import Email from './Email'

export default function Home() {
  return (
    <main className="flex h-full items-start">
      <Main/>
      <Email/>
    </main>
  )
}
