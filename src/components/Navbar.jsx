import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b">
      <h1 className="text-xl font-bold">Steelworks</h1>

      <div className="space-x-6 font-medium">
        <a href="#/" className="hover:text-blue-600">Home</a>
        <a href="#/products" className="hover:text-blue-600">Products</a>
        <a href="#/services" className="hover:text-blue-600">Services</a>
        <a href="#/contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
