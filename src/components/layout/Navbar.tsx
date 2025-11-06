import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    Natraj Bootcamp
                </Link>

                <div className="hidden md:flex space-x-6 text-gray-700">
                    <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link to="/bootcamp" className="hover:text-blue-600 transition">Bootcamp</Link>
                    <Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link>
                    <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
                </div>

                <Link
                    to="/payment"
                    className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Enrol Now
                </Link>
            </div>
        </nav>
    );
}

