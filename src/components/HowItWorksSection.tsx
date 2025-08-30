export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How <span className="text-blue-600">Althara Pacta</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple three-step process ensures transparency and efficiency in every transaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Create Tender</h3>
            <p className="text-gray-600">
              Government creates a tender with project specifications, timeline, and budget. 
              Documents are uploaded to Filecoin for immutable storage.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Submit Bid</h3>
            <p className="text-gray-600">
              Vendors submit competitive bids with project plans and documents. 
              All bid information is stored on Filecoin with CIDs in Soroban.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Public View</h3>
            <p className="text-gray-600">
              All documents, bids, and escrow transactions are publicly available. 
              Complete transparency ensures accountability and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
