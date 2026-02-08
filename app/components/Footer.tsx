import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="hover:text-gray-900">What's new</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Features</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Templates</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Download</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Plans</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="hover:text-gray-900">Personal</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Professional</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Organization</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Enterprise</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Use cases</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="hover:text-gray-900">Design</Link></li>
            <li><Link href="#" className="hover:text-gray-900">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Wireframing</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Prototyping</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="hover:text-gray-900">Blog</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Tutorials</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Events</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Help center</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="hover:text-gray-900">About us</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Careers</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Contact</Link></li>
            <li><Link href="#" className="hover:text-gray-900">Partners</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-8 mb-4 md:mb-0">
          <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xs">F</span>
          </div>
          <span className="text-gray-600">© Figma</span>
        </div>

        <div className="flex space-x-6 text-gray-600">
          <Link href="#" className="hover:text-gray-900">Privacy</Link>
          <Link href="#" className="hover:text-gray-900">Terms</Link>
          <Link href="#" className="hover:text-gray-900">Status</Link>
          <Link href="#" className="hover:text-gray-900">Licensing</Link>
        </div>
      </div>
    </footer>
  );
}