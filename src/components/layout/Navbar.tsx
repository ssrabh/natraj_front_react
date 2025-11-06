import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { pathname } = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/bootcamp", label: "Bootcamp" },
        { path: "/faq", label: "FAQ" },
        { path: "/contact", label: "Contact" },
    ];

    // 🧠 Hide navbar on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                } bg-white/80 backdrop-blur-md shadow-sm`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="text-2xl font-bold text-blue-600 tracking-tight hover:text-blue-700 transition-colors"
                >
                    Natraj<span className="text-gray-800">Bootcamp</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={closeMenu}
                            className={`text-sm font-medium transition-colors ${pathname === link.path
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        to="/payment"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                    >
                        Enrol Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 hover:text-blue-600 transition"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white border-t border-gray-200 flex flex-col items-center space-y-4 py-6 shadow-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={closeMenu}
                            className={`text-base font-medium transition-colors ${pathname === link.path
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        to="/payment"
                        onClick={closeMenu}
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                    >
                        Enrol Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
