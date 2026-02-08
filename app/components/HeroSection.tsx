export default function HeroSection() {
  return (
    <section className="py-16 px-8 max-w-[1440px] mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Pick your plan, choose your seats</h1>
        <div className='border border-gray-200 p-4 rounded-lg'>
          <p className="text-md text-gray-600">
            Seats give you access to Figma products:
          </p>
          <div className="flex flex-wrap">
            {['FigJam', 'Figma Slides', 'Dev Mode', 'Figma Design', 'Figma Draw', 'Figma Buzz', 'Figma Sites', 'Figma Make'].map((product, index) => (
              <div key={index} className="flex items-center p-1 gap-1">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <span className="text-sm font-medium">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}