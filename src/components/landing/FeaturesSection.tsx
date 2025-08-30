import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pick your <span className="text-blue-600">journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re a government creating tenders or a vendor submitting bids, 
            Althara Pacta offers a transparent path to public procurement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Government Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Governments</h3>
            <p className="text-gray-600 mb-6">
              Create transparent tenders with immutable document storage. Upload specifications to Filecoin 
              and manage the entire procurement process with full public visibility.
            </p>
            <Link href="/connect-wallet-government" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Create Tender →
            </Link>
          </div>

          {/* Vendor Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vendors</h3>
            <p className="text-gray-600 mb-6">
              Submit competitive bids with secure document storage. Access transparent tender information 
              and participate in fair, corruption-free procurement processes.
            </p>
            <Link href="/connect-wallet-vendor" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Submit Bid →
            </Link>
          </div>

          {/* Public Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Public View</h3>
            <p className="text-gray-600 mb-6">
              Access all tender documents, bids, and transactions publicly. Verify transparency 
              and audit the entire procurement process with blockchain-verified data.
            </p>
            <Link href="/tenders" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Explore Tenders →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
