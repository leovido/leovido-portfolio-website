import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Search className="w-24 h-24 text-slate-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-slate-300 text-lg max-w-md mx-auto">
            Sorry, the project you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 rounded-xl transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
