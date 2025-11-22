export default function BenefitsSection() {
  return (
    <section className="py-24 bg-purple-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Why It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Designed based on high-performing viral videos",
            "Optimized hooks that maximize watch time",
            "Zero guesswork – ready to post ideas",
            "AI prompts that save hours of writing",
            "Scripts inspired by top creators",
            "Perfect for beginners and advanced creators",
          ].map((text, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl shadow">
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
