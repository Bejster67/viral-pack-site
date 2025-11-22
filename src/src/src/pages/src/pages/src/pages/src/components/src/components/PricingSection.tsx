// WERSJA Z GUMROAD LINK
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600">
            One-time payment. Lifetime access. No subscriptions.
          </p>
        </div>

        <Card className="p-8 md:p-12 border-2 border-purple-200 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Viral Content Starter Pack 1.0
            </h3>
            <p className="text-gray-600">Everything you need to go viral</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-2xl text-gray-400 line-through">$49.99</span>
            <span className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              $9.99
            </span>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-yellow-800 font-semibold">
              🔥 Limited Time Offer - 80% OFF
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">50 Viral Hooks (worth $19.99)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">20 Ready-to-Use Scripts (worth $14.99)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">10 AI Content Prompts (worth $9.99)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">10 Viral Content Ideas (worth $9.99)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">BONUS: "How to Go Viral" Guide (worth $9.99)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Instant Digital Download</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">Lifetime Access</span>
            </div>
          </div>

          <a
            href="https://bejster.gumroad.com/l/khwqfp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-8 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Instant Access - $9.99
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <p className="text-center text-sm text-gray-500 mt-6">
            Secure payment via Gumroad • 30-day money-back guarantee
          </p>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still not sure? Here's what you get:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <span>✓ Instant Download</span>
            <span>✓ No Monthly Fees</span>
            <span>✓ Works for Any Niche</span>
            <span>✓ Beginner Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
