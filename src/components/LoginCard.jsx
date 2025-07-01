
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../Logins/SupabaseClient"

const LoginCard = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        setMessage("✅ Logged in successfully")

        // Navigate to video downloader after successful login
        setTimeout(() => {
          navigate("/downloader")
        }, 1000)
      } else {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setMessage("✅ Signed up successfully.")
      }
    } catch (err) {
      setMessage("❌ " + err.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setMessage("")
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-sm sm:max-w-md bg-gray-800 border border-gray-700 shadow-2xl mx-4 sm:mx-0 rounded-lg">
        <div className="space-y-1 px-4 sm:px-6 pt-6">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white">Welcome to ClipZip</h3>
          <p className="text-center text-gray-400 text-sm sm:text-base">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </p>
        </div>
        <div className="space-y-4 sm:space-y-6 px-4 sm:px-6 pb-6 pt-4">
          {/* Toggle Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-full sm:flex-1 py-2 sm:py-3 font-semibold transition-all text-sm sm:text-base rounded-md ${
                isLogin
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                  : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-full sm:flex-1 py-2 sm:py-3 font-semibold transition-all text-sm sm:text-base rounded-md ${
                !isLogin
                  ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                  : "bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Message Display */}
          {message && (
            <div
              className={`p-3 rounded-md text-sm text-center ${
                message.includes("✅")
                  ? "bg-green-900/50 border border-green-700 text-green-300"
                  : "bg-red-900/50 border border-red-700 text-red-300"
              }`}
            >
              {message}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleAuth} className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-300 text-sm sm:text-base block">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 text-sm sm:text-base h-10 sm:h-11 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-300 text-sm sm:text-base block">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isLogin ? "Enter your password" : "Create a password"}
                required
                className="w-full bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 text-sm sm:text-base h-10 sm:h-11 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-2 sm:py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Toggle Link */}
          <p className="text-center text-xs sm:text-sm text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={toggleMode} className="text-purple-400 hover:text-purple-300 underline font-medium">
              {isLogin ? "Sign up here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginCard