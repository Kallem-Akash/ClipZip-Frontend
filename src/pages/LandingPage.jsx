import Header from "../components/Header"
import LoginCard from "../components/LoginCard"
import HeroContent from "../components/HeroContent"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]"
          style={{
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          {/* Login Card - Shows first on mobile, first on desktop */}
          <div
            className="order-1 lg:order-1 w-full flex justify-center items-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoginCard />
          </div>

          {/* Hero Content - Shows second on mobile, second on desktop */}
          <div
            className="order-2 lg:order-2 w-full flex items-center"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <HeroContent />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage
