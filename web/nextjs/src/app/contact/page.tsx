import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact The Harvard Advocate - Get in touch with our editorial board, subscribe, donate, or report technical issues.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          
          <div className="border-b border-black pb-4 mb-8">
            <h1 className="text-3xl font-bold text-center font-serif">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-gray-800 leading-relaxed">
              You can reach the content board heads at the following emails:
            </p>
            
            <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
              <p><strong>Art: </strong>
                <a href="mailto:art@theharvardadvocate.com" className="text-blue-800 underline">
                  art@theharvardadvocate.com
                </a>
              </p>
              <p><strong>Features: </strong>
                <a href="mailto:features@theharvardadvocate.com" className="text-blue-800 underline">
                  features@theharvardadvocate.com
                </a>
              </p>
              <p><strong>Fiction: </strong>
                <a href="mailto:fiction@theharvardadvocate.com" className="text-blue-800 underline">
                  fiction@theharvardadvocate.com
                </a>
              </p>
              <p><strong>Poetry: </strong>
                <a href="mailto:poetry@theharvardadvocate.com" className="text-blue-800 underline">
                  poetry@theharvardadvocate.com
                </a>
              </p>
            </div>
            
            <p className="text-gray-800 leading-relaxed mt-6">
              To arrange a subscription, visit the{" "}
              <Link href="/subscribe" className="text-blue-800 underline">
                subscribe page
              </Link>{" "}
              or email us at{" "}
              <a href="mailto:hermes@theharvardadvocate.com" className="text-blue-800 underline">
                hermes@theharvardadvocate.com
              </a>.
            </p>
            
            <div className="mt-6 text-left max-w-2xl mx-auto">
              <p className="text-gray-800 leading-relaxed">
                <strong>Donate</strong><br />
                Thank you for considering your donation to The Harvard Advocate. We
                would love to hear more from you if you are arranging a donation –
                visit our{" "}
                <Link href="/donate" className="text-blue-800 underline">
                  Donate page
                </Link>{" "}
                or contact us at{" "}
                <a href="mailto:president@theharvardadvocate.com" className="text-blue-800 underline">
                  president@theharvardadvocate.com
                </a>{" "}
                to let us know more details.
              </p>
              
              <p className="text-gray-800 leading-relaxed mt-6">
                <strong>Location</strong><br />
                We are located at 21 South Street, Cambridge, Massachusetts 02138.
                We are in the building most weekdays in the afternoon. Alumni
                members are always welcome to stop by.
              </p>
              
              <p className="text-gray-800 leading-relaxed mt-6">
                <strong>Support Us</strong><br />
                Follow us on{" "}
                <a
                  href="https://www.instagram.com/harvardadvocate/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-800 underline"
                >
                  Instagram
                </a>{" "}
                and{" "}
                <a
                  href="https://www.twitter.com/harvardadvocate/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-800 underline"
                >
                  Twitter
                </a>!
              </p>
              
              <p className="text-gray-800 leading-relaxed mt-6">
                <strong>See an error?</strong><br />
                To contact the webmaster or report a technical issue, email{" "}
                <a href="mailto:tech@theharvardadvocate.com" className="text-blue-800 underline">
                  tech@theharvardadvocate.com
                </a>.
              </p>
              
              <p className="text-gray-800 leading-relaxed mt-6">
                All other inquiries can be sent to{" "}
                <a href="mailto:president@theharvardadvocate.com" className="text-blue-800 underline">
                  president@theharvardadvocate.com
                </a>.
              </p>
            </div>

            {/* Subscribe Button */}
            <div className="mt-8 text-center">
              <a
                href="https://dashboard.mailerlite.com/forms/324641/84914182071256382/share"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-black px-6 py-3 border-2 border-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors duration-200"
              >
                Subscribe to our mailing list
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 