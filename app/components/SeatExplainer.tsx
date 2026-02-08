export default function SeatExplainer() {
  return (
    <section className="py-16 px-8 max-w-[1440px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Not sure which seat is right for you?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Each seat gives you access to Figma products and features based on your role and needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Collab Seat */}
        <div className="border rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold">Collab seat</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Best for stakeholders who need to view, comment, and collaborate on designs.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Comment and react</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Prototype and inspect</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Share and present</span>
            </li>
          </ul>
          <div className="mt-4">
            <h4 className="font-bold mb-2">Includes access to:</h4>
            <div className="flex flex-wrap gap-2">
              {['Figma Design', 'Figma Slides', 'FigJam'].map((product, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{product}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Dev Seat */}
        <div className="border rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold">Dev seat</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Best for developers who need to handoff and collaborate on designs.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>All Collab features</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Inspect and copy code</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Dev Mode</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Advanced Dev Mode inspection</span>
            </li>
          </ul>
          <div className="mt-4">
            <h4 className="font-bold mb-2">Includes access to:</h4>
            <div className="flex flex-wrap gap-2">
              {['Figma Design', 'Figma Slides', 'FigJam', 'Dev Mode'].map((product, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{product}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Full Seat */}
        <div className="border rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold">Full seat</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Best for creators who need to design, prototype, and collaborate.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>All Collab and Dev features</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Design and prototype</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Create and edit files</span>
            </li>
          </ul>
          <div className="mt-4">
            <h4 className="font-bold mb-2">Includes access to:</h4>
            <div className="flex flex-wrap gap-2">
              {['Figma Design', 'Figma Slides', 'FigJam', 'Dev Mode', 'Figma Draw', 'Figma Buzz', 'Figma Sites', 'Figma Make'].map((product, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{product}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}