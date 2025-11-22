export default function FAQSection() {
  const faqs = [
    { q: "Is this beginner friendly?", a: "Absolutely. Everything is plug & play." },
    { q: "Will this work in my niche?", a: "Yes — hooks & scripts are universal." },
    { q: "Do I get lifetime access?", a: "Yes, you can download everything instantly." },
    { q: "Is there a refund?", a: "Yes, you have a 30-day money-back guarantee." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">FAQ</h2>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 border rounded-xl bg-gray-50">
              <h3 className="font-semibold text-lg">{f.q}</h3>
              <p className="text-gray-700 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
