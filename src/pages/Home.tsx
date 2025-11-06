import MainLayout from "../components/layout/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <section className="bg-white py-20 text-center text-gray-800">
                <div className="max-w-5xl mx-auto px-6">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">
                        Build Your Packaging Empire: Launch Your Factory in 90 Days!
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Get the 90-day execution plan, expert mentorship, and the Natraj legacy —
                        your complete blueprint for a profitable manufacturing unit.
                    </p>

                    <div className="mt-10 text-left">
                        <h2 className="text-2xl font-semibold mb-3">The Natraj Legacy</h2>
                        <p className="mb-3">
                            In 1962, Tanmay Nagpal’s grandfather established Natraj Industries as
                            India’s first corrugated box machine manufacturing unit — an innovation
                            personally recognized by Prime Minister Jawaharlal Nehru.
                        </p>
                        <p>
                            Today, Tanmay continues the legacy by helping entrepreneurs build their
                            own successful packaging factories with decades of proven expertise.
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
