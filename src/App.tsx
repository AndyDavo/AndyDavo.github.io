import { FC } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Contact from './components/sections/Contact'

const App: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Pensionable.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
