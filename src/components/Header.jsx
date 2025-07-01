import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full" style={{ minHeight: "48px" }}>
          <div className="flex items-center space-x-2" style={{ flexShrink: 0 }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">ClipZip</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" style={{ flexShrink: 0 }}>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Support
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
            >
              Portfolio
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            style={{ flexShrink: 0 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4 w-full">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Support
              </a>
              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
              >
                Portfolio
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
