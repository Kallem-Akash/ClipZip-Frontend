import { Download, Loader2, Youtube, Instagram, Twitter, Music, Facebook } from "lucide-react"

const VideoHero = ({ onSubmit, url, setUrl, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (url.trim()) {
      onSubmit()
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Download Any <span className="text-purple-400">Video</span>
        </h1>
        <p className="text-gray-300 text-lg">Paste your video URL and download in seconds</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !url.trim()}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download Video</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-gray-800 rounded-lg flex flex-col items-center space-y-2">
          <Youtube className="w-8 h-8 text-red-500" />
          <div className="text-xs text-gray-400">YouTube</div>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg flex flex-col items-center space-y-2">
          <Instagram className="w-8 h-8 text-pink-500" />
          <div className="text-xs text-gray-400">Instagram</div>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg flex flex-col items-center space-y-2">
          <Facebook className="w-8 h-8 text-black bg-white rounded-full p-1" />
          <div className="text-xs text-gray-400">FaceBook</div>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg flex flex-col items-center space-y-2">
          <Twitter className="w-8 h-8 text-blue-400" />
          <div className="text-xs text-gray-400">Twitter(X)</div>
        </div>
      </div>
    </div>
  )
}

export default VideoHero
