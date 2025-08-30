import Link from "next/link";

export default function TendersPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">All Tenders</h1>
        <p className="text-gray-600 text-center mb-8">
          This page will display all available government tenders. Coming soon!
        </p>
        <div className="text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
