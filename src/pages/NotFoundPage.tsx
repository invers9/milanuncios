import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-2xl p-10 text-center">
        <h1 className="animate-fade-in mb-4 text-9xl font-bold text-gray-200">404</h1>
        <p className="animate-fade-in-slow mb-8 text-xl text-gray-400">Oops! The page you’re looking for can’t be found.</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 animate-fade-in-slow inline-block rounded-lg px-10 py-4 text-lg font-semibold text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  )
}
