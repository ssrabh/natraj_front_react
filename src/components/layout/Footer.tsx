import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-white text-lg font-semibold mb-3">Natraj Bootcamp</h3>
                    <p className="text-sm leading-relaxed">
                        Empowering entrepreneurs to launch profitable packaging factories with
                        70+ years of Natraj Industries legacy.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/bootcamp" className="hover:text-white">Bootcamp</Link></li>
                        <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                        <li><Link to="/terms" className="hover:text-white">Terms of Use</Link></li>
                        <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Contact</h4>
                    <p className="text-sm">Email: info@natrajbootcamp.com</p>
                    <p className="text-sm">Phone: +91 98765 43210</p>
                    <p className="text-sm mt-2">Faridabad, Haryana, India</p>
                </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-8">
                © {new Date().getFullYear()} Natraj Industries. All Rights Reserved.
            </p>
        </footer>
    );
}
