import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/bootcamp", label: "Bootcamp" },
        { path: "/faq", label: "FAQ" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
                    Natraj Bootcamp
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    {navItems.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-semibold" : ""
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* CTA Button (Desktop Only) */}
                <Link
                    to="/payment"
                    className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all font-medium shadow-sm"
                >
                    Enrol Now
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md border-t border-gray-100">
                    <div className="flex flex-col space-y-3 px-6 py-4 text-gray-800 font-medium">
                        {navItems.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}

                        <Link
                            to="/payment"
                            onClick={() => setIsOpen(false)}
                            className="block bg-blue-600 text-white text-center px-5 py-2 rounded-md hover:bg-blue-700 transition-all"
                        >
                            Enrol Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
