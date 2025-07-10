import Link from 'next/link'

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Issues</h1>
        </div>
        
        <div className="text-center">
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-700 mb-4">
              This page will display all issues from The Harvard Advocate. 
              We'll be integrating with Sanity CMS to fetch the actual data.
            </p>
            <p className="text-sm text-gray-600">
              Next steps: Implement Sanity queries and migrate the existing 
              IssuesList component from the React app.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 