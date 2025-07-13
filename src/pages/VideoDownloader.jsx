import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LogOut, Download, ExternalLink, CheckCircle } from "lucide-react"
import { supabase } from "../Supabase/SupabaseClient"
import VideoHero from "../components/VideoHero"
import Footer from "../components/Footer"

const VideoDownloader = () => {
  const navigate = useNavigate()
  const [authChecked, setAuthChecked] = useState(false)
  // Check authentication on mount
  useEffect(() => {
    let unsub;
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return navigate("/", { replace: true });
      setAuthChecked(true);
      unsub = supabase.auth.onAuthStateChange((_e, session) => {
        if (!session?.user) navigate("/", { replace: true });
      }).data.subscription.unsubscribe;
    })();
    return () => unsub && unsub();
  }, [navigate]);

  /* ─── state ─── */
  const [url, setUrl] = useState("")
  const [medias, setMedias] = useState([])
  const [error, setError] = useState("")
  const [title, setTitle] = useState("")
  const [thumb, setThumb] = useState("")
  const [source, setSrc] = useState("")
  const [duration, setDur] = useState("")
  const [page, setPage] = useState("")
  const [loading, setLoading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)
  const [logoutLoading, setLogoutLoading] = useState(false)

  /* ─── fetch API ─── */
  const handleDownload = async () => {
    setError("")
    setMedias([])
    setTitle("")
    setThumb("")
    setSrc("")
    setDur("")
    setPage("")
    setLoading(true)
    setDownloadComplete(false)

    try {
      const r = await fetch(`${import.meta.env.VITE_API_URL}/api/download`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      if (!r.ok) throw new Error("server")

      const d = await r.json()

      if (d.error) {
        setError(d.message)
        return
      }

      /* meta */
      setTitle(d.title || "")
      setThumb(d.thumbnail || "")
      setSrc(d.source || "")
      setDur(typeof d.duration === "number" ? `00:${d.duration.toString().padStart(2, "0")}` : d.duration || "")
      setPage(d.url || url)

      /* show ALL medias */
      const arr = Object.values(d).find(Array.isArray) || []
      setMedias(arr)

      if (!arr.length) setError("No downloadable formats.")
    } catch {
      setError("Fetch failed.")
    } finally {
      setLoading(false)
    }
  }

  /* ─── handle download click ─── */
  const handleDownloadClick = (e) => {
    // Show download complete message
    setDownloadComplete(true)

    // Hide message after 3 seconds
    setTimeout(() => {
      setDownloadComplete(false)
    }, 3000)
  }

  /* ─── handle logout ─── */
  const handleLogout = async () => {
    setLogoutLoading(true)

    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      // Navigate to homepage after successful logout
      navigate("/")
    } catch (error) {
      console.error("Logout error:", error.message)
      // Still navigate even if logout fails
      navigate("/")
    } finally {
      setLogoutLoading(false)
    }
  }

  /* ─── helpers ─── */
  const needImgProxy = ["instagram", "facebook", "twitter"].includes(source?.toLowerCase())

  /* ─── UI ─── */
  if (!authChecked) {
    // Optionally, show a loading spinner or nothing while checking auth
    return null;
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between" style={{ minHeight: "48px" }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ flexShrink: 0 }}>
              Clip<span className="text-purple-400">Zip</span>
            </h2>
            <div className="flex items-center space-x-4 sm:space-x-6" style={{ flexShrink: 0 }}>
              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors font-semibold text-sm sm:text-base"
              >
                Portfolio
              </a>
              <button
                onClick={handleLogout}
                disabled={logoutLoading}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                <LogOut className="w-4 h-4" />
                <span>{logoutLoading ? "Logging out..." : "Logout"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center">
        <VideoHero onSubmit={handleDownload} url={url} setUrl={setUrl} loading={loading} />

        {/* Download Complete Message */}
        {downloadComplete && (
          <div className="mt-6 p-4 bg-green-900/50 border border-green-700 rounded-lg flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <p className="text-green-300 font-semibold">Download Done!</p>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-900/50 border border-red-700 rounded-lg">
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {/* Thumbnail */}
        {thumb && (
          <div className="w-80 h-44 mt-8 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
            <img
              src={needImgProxy ? `${import.meta.env.VITE_API_URL}/api/img-proxy?url=${encodeURIComponent(thumb)}` : thumb}
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Title */}
        {title && <h2 className="text-xl font-bold mt-6 text-center max-w-2xl text-white">{title}</h2>}

        {/* Meta info with labels */}
        {(duration || source || page) && (
          <div className="mt-4 space-y-2 text-center">
            {duration && (
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-purple-400">Duration:</span> {duration}
              </div>
            )}
            {source && (
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-purple-400">Source:</span> {source}
              </div>
            )}
            {page && (
              <div className="text-sm">
                <a
                  href={page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline flex items-center justify-center space-x-1"
                >
                  <span>Watch Original</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Download buttons */}
        {medias.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-8 justify-center max-w-4xl">
            {medias.map((m, i) => (
              <a
                key={i}
                href={`${import.meta.env.VITE_API_URL}/api/proxy?url=${encodeURIComponent(m.url)}`}
                download={`${title || "video"}_${m.quality || "download"}.mp4`}
                onClick={handleDownloadClick}
                className="px-6 py-3 flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 no-underline"
              >
                <Download className="w-4 h-4" />
                <span>{m.quality?.replace(/^(mp4|webm)\s*$$/i, "").replace(/$$$/, "") || "Video"}</span>
              </a>
            ))}
          </div>
        )}

        {/* No results message */}
        {!loading && !error && !medias.length && url && (
          <div className="mt-12 text-center text-gray-400">
            <Download className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Enter a video URL above to get started!</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default VideoDownloader
