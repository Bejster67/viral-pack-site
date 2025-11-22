export default function ProductSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What Exactly Is Inside?
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          A complete viral-content toolkit that helps you blow up fast
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">🔥 50 Viral Hooks</h3>
            <p className="text-gray-600">Ready-made openers proven to boost watch time</p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">🎬 20 Ready Scripts</h3>
            <p className="text-gray-600">Full scripts tested on TikTok & IG Reels</p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">🤖 10 AI Prompts</h3>
            <p className="text-gray-600">Get instant content ideas in any niche</p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">💡 Viral Idea Pack</h3>
            <p className="text-gray-600">Exclusive, niche-flexible viral ideas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
