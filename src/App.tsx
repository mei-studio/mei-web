import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="fixed left-0 right-0 top-0 z-50 bg-gray-50">
          <div className="mx-auto flex w-full max-w-xl items-center justify-between border-b-2 border-[#6daace] px-6 pb-4 pt-16">
            <img src="/src/assets/mei.svg" alt="mei" className="h-12 w-auto" />
            <div className="flex gap-6">
              <Link
                to="/"
                className="text-sm font-normal text-gray-500 underline decoration-gray-300 decoration-1 underline-offset-4 transition-colors hover:text-gray-900 hover:decoration-gray-500"
              >
                inicio
              </Link>
              <Link
                to="/about"
                className="text-sm font-normal text-gray-500 underline decoration-gray-300 decoration-1 underline-offset-4 transition-colors hover:text-gray-900 hover:decoration-gray-500"
              >
                nosotros
              </Link>
              <Link
                to="/contact"
                className="text-sm font-normal text-gray-500 underline decoration-gray-300 decoration-1 underline-offset-4 transition-colors hover:text-gray-900 hover:decoration-gray-500"
              >
                contacto
              </Link>
            </div>
          </div>
        </nav>
        <div className="mx-auto w-full max-w-xl px-6 pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
