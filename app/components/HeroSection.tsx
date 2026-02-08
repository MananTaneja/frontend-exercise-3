export default function HeroSection() {
  return (
    <section className="py-16 px-8 max-w-[1440px] mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Pick your plan, choose your seats</h1>
        <p className="text-xl text-gray-600 mb-10">
          Seats give you access to Figma products:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['FigJam', 'Figma Slides', 'Dev Mode', 'Figma Design', 'Figma Draw', 'Figma Buzz', 'Figma Sites', 'Figma Make'].map((product, index) => (
            <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
              <div className="w-10 h-10 bg-gray-200 rounded-full mb-2"></div>
              <span className="text-sm font-medium">{product}</span>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm">Prices in USD</p>
      </div>
    </section>
  );
}