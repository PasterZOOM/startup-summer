import { NextPage } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return <main className={inter.className}>Hello world</main>
}

export default Home
