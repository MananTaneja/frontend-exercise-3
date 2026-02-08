import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto border-b border-gray-200">
      <div className="flex items-center space-x-8">
        {/* Figma Logo Placeholder */}
        <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-lg">F</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-gray-900">Products</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Enterprise</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">Resources</Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900 font-medium">Log in</button>
        <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
          Contact sales
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
          Get started for free
        </button>
      </div>
    </header>
  );
}