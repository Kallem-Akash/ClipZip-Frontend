import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import VideoDownloader from "./pages/VideoDownloader"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/downloader" element={<VideoDownloader />} />
      </Routes>
    </Router>
  )
}

export default App
