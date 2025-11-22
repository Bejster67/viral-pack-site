export default function Footer() {
  return (
    <footer className="py-10 bg-gray-100 mt-20 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
        <p className="mb-2">© {new Date().getFullYear()} Viral Content Starter Pack</p>
        <p className="text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
}
