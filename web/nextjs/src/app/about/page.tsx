import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The Harvard Advocate, founded in 1866, is the oldest continuously published collegiate literary magazine in the country.',
  openGraph: {
    description: 'The Harvard Advocate, founded in 1866, is the oldest continuously published collegiate literary magazine in the country.',
  },
}

export default function AboutPage() {
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
              About Us
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center mb-8">
            <p className="text-gray-800 leading-relaxed">
              The Harvard Advocate, founded in 1866, is the oldest continuously
              published collegiate literary magazine in the country. Over its long
              history, it can count T.S. Eliot, Conrad Aiken, and Norman Mailer
              among its members and e.e. cummings, Jack Kerouac, and Tom Wolfe as
              contributors to its pages. A quarterly magazine, The Advocate's
              mission is to publish the best art, fiction, poetry, and prose that
              the Harvard undergraduate community offers.
            </p>
            
            <p className="text-gray-800 leading-relaxed mt-6">
              When the Advocate was founded, it adopted the motto Dulce est
              Periculum (Danger is Sweet) which had been used by an earlier
              Harvard newspaper, the Collegian. The magazine originally avoided
              controversial topics, lest it be shut down by university
              authorities; by the time the editors were making the then-radical
              demand for coeducation at Harvard, the magazine had attracted the
              support of James Russell Lowell and Oliver Wendell Holmes, and its
              life was less precarious.
            </p>
            
            <p className="text-gray-800 leading-relaxed mt-6">
              The founding in 1873 of The Harvard Crimson newspaper (originally
              the Magenta), and in 1876, of the Harvard Lampoon humor magazine,
              led the Advocate by the 1880s to devote itself to essays, fiction,
              and poetry.
            </p>
            
            <p className="text-gray-800 leading-relaxed mt-6">
              Over the years, the undergraduate editors of and contributors to the
              Advocate have gone on to later fame, literary and otherwise.
              Theodore Roosevelt edited the magazine in 1880. Edwin Arlington
              Robinson, Wallace Stevens, E. E. Cummings, and T. S. Eliot all
              published their undergraduate poetry in the Advocate. Before World
              War II, undergraduates who worked on the Advocate included Malcolm
              Cowley, James Agee, Robert Fitzgerald, Leonard Bernstein, James
              Laughlin (who got into trouble with local police for publishing a
              racy story by Henry Miller) and Norman Mailer.
            </p>
            
            <p className="text-gray-800 leading-relaxed mt-6">
              The Harvard Advocate can be reached at 21 South Street, Cambridge,
              and at{' '}
              <a 
                href="mailto:president@theharvardadvocate.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                president@theharvardadvocate.com
              </a>
            </p>
          </div>

          {/* Image */}
          <div className="w-full max-w-md text-center">
            <div className="relative w-full h-auto">
              <Image
                src="/about.jpg"
                alt="Advocate House Drawing"
                width={450}
                height={300}
                className="w-full h-auto"
                priority={false}
              />
            </div>
            <figcaption className="text-sm text-gray-600 mt-2">
              Illustration by <em>Tosca Langbert '24</em>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  )
} 