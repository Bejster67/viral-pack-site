export default function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Struggling to Get Views?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "You’re posting but nothing goes viral",
            "You run out of ideas fast",
            "Your hooks aren’t grabbing attention",
            "You don’t know what actually works",
            "You waste hours trying to write scripts",
            "Your content blends in with everyone else’s",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
