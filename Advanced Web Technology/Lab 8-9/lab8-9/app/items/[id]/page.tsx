import Link from 'next/link';
import { use } from 'react';

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                    <h1 className="text-4xl font-bold">Item {id}</h1>
                    <p className="mt-2 text-blue-100 opacity-90">Full Page View (Not Intercepted)</p>
                </div>

                <div className="p-8">
                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-700 leading-relaxed">
                            You are viewing the <strong>full page</strong> for Item {id}.
                        </p>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            This usually happens when you refresh the page or navigate directly to this URL.
                            Next.js renders this standard page component instead of the intercepted modal slot.
                        </p>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                        <Link
                            href="/gallery"
                            className="inline-flex items-center px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                        >
                            &larr; Back to Gallery
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
