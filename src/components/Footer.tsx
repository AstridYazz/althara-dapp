export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="text-xl font-bold">Althara Pacta</span>
            </div>
            <p className="text-gray-400">
              Decentralized and transparent government tendering platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Create Tender</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Submit Bid</a></li>
              <li><a href="#" className="hover:text-white transition-colors">View Tenders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Escrow System</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Technology</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Filecoin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ethereum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stellar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Smart Contracts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Althara Pacta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
