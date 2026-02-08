import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-4 text-white">Product</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white">What's new</Link></li>
            <li><Link href="#" className="hover:text-white">Features</Link></li>
            <li><Link href="#" className="hover:text-white">Templates</Link></li>
            <li><Link href="#" className="hover:text-white">Download</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-white">Plans</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white">Personal</Link></li>
            <li><Link href="#" className="hover:text-white">Professional</Link></li>
            <li><Link href="#" className="hover:text-white">Organization</Link></li>
            <li><Link href="#" className="hover:text-white">Enterprise</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-white">Use cases</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white">Design</Link></li>
            <li><Link href="#" className="hover:text-white">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-white">Wireframing</Link></li>
            <li><Link href="#" className="hover:text-white">Prototyping</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-white">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white">Blog</Link></li>
            <li><Link href="#" className="hover:text-white">Tutorials</Link></li>
            <li><Link href="#" className="hover:text-white">Events</Link></li>
            <li><Link href="#" className="hover:text-white">Help center</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#" className="hover:text-white">About us</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
            <li><Link href="#" className="hover:text-white">Partners</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-8 mb-4 md:mb-0">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-xs">F</span>
          </div>
          <span className="text-gray-300">© Figma</span>
        </div>

        <div className="flex space-x-6 text-gray-300">
          <Link href="#" className="hover:text-white">Privacy</Link>
          <Link href="#" className="hover:text-white">Terms</Link>
          <Link href="#" className="hover:text-white">Status</Link>
          <Link href="#" className="hover:text-white">Licensing</Link>
        </div>
      </div>
    </footer>
  );
}