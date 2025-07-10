import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            the harvard advocate
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            next.js migration dashboard
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Migration Status</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h3 className="font-medium text-green-600">✅ Completed</h3>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Next.js app setup</li>
                    <li>• Sanity client configuration</li>
                    <li>• TypeScript types</li>
                    <li>• About page migration</li>
                    <li>• Contact page migration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-blue-600">🔄 In Progress</h3>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Component migration</li>
                    <li>• Page routing</li>
                    <li>• Styling system</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 flex-wrap">
              <Link 
                href="/about" 
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              >
                About Page ✅
              </Link>
              <Link 
                href="/contact" 
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Contact Page ✅
              </Link>
              <Link 
                href="/issues" 
                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Issues Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
