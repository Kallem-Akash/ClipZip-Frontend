import { Monitor, Sparkles, Shield } from "lucide-react"

const HeroContent = () => {
  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-0 lg:pl-8 text-center sm:text-center md:mx-auto md:text-center lg:mx-0 lg:text-left">
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span style={{ display: "block" }}>Clip. Zip. Play.</span>
          <span className="text-purple-400" style={{ display: "block" }}>
            Instantly.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
          Paste your link. Pick a format. Watch in seconds—no ads, no hassle, just lightning-fast downloads from
          everywhere.
        </p>
      </div>

      {/* Key Features */}
      <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8">
        <div
          className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4"
          style={{ alignItems: "center" }}
        >
          <div className="flex flex-col items-center sm:block w-full sm:w-auto">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto sm:mx-0" style={{ flexShrink: 0 }}>
              <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
          <div className="text-center sm:text-left" style={{ flexGrow: 1 }}>
            <h3 className="text-base sm:text-lg font-semibold text-white">Works on every platform</h3>
            <p className="text-sm sm:text-base text-gray-400">Compatible with all major video platforms and devices</p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4"
          style={{ alignItems: "center" }}
        >
          <div className="flex flex-col items-center sm:block w-full sm:w-auto">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto sm:mx-0" style={{ flexShrink: 0 }}>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
          <div className="text-center sm:text-left" style={{ flexGrow: 1 }}>
            <h3 className="text-base sm:text-lg font-semibold text-white">Crystal-clear quality</h3>
            <p className="text-sm sm:text-base text-gray-400">Download in the highest quality available</p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4"
          style={{ alignItems: "center" }}
        >
          <div className="flex flex-col items-center sm:block w-full sm:w-auto">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto sm:mx-0" style={{ flexShrink: 0 }}>
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
          <div className="text-center sm:text-left" style={{ flexGrow: 1 }}>
            <h3 className="text-base sm:text-lg font-semibold text-white">Zero ads, zero distractions</h3>
            <p className="text-sm sm:text-base text-gray-400">Clean, fast experience without interruptions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent