import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto">
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
        <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
          Contact sales
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Get started for free
        </button>
      </div>
    </header>
  );
}