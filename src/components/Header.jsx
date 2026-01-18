export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900">Steelworks</h1>

        <nav className="space-x-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#tech" className="hover:text-blue-600">Tech</a>
          <a href="#products" className="hover:text-blue-600">Products</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
