export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tagline */}
        <p className="text-lg text-gray-600 mb-6 font-medium">
          Decentralize. Transparent. Secure.
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Where <span className="text-blue-600">Blockchain</span> Meets <br />
          <span className="text-blue-600">Government</span> Transparency
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Althara Pacta is a decentralized platform that connects governments and vendors for transparent, 
          corruption-free tendering. Built on secure blockchain technology, we make public procurement 
          transparent, auditable, and efficient. With live progress updates and immutable records, 
          every transaction is publicly verifiable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Create a Tender
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
            View All Tenders
          </button>
        </div>
      </div>
    </section>
  );
}
