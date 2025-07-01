import { Heart, Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-8 sm:mt-16 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between md:items-center text-xs sm:text-sm text-gray-400 w-full">
          <div className="text-center md:text-left flex-shrink-0">
            <p>&copy; 2025 ClipZip. All rights reserved.</p>
          </div>

          {/*}

          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-6 text-center flex-shrink-0">
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap">
              Contact
            </a>
          </div>
          */}

          <div className="text-center md:text-right flex-shrink-0">
            <p className="flex items-center justify-center md:justify-end space-x-1 whitespace-nowrap">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse flex-shrink-0" />
              <span>by</span>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                Akash
              </a>
              {/* Social Media Icons - After branding */}
              <span className="ml-3 flex items-center space-x-2 flex-shrink-0">
              <a
              href="mailto:akashgoud018@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Send Email"
              >
                  <Mail className="w-4 h-4 flex-shrink-0" />
              </a>

                <a
                  href="https://github.com/AkashAkki018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 flex-shrink-0" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kallemakash018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                </a>
                
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
