// src/components/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
            <Navbar />
            <main className="flex-grow">
                <Outlet /> {/* ✅ renders child routes automatically */}
            </main>
            <Footer />
        </div>
    );
}
