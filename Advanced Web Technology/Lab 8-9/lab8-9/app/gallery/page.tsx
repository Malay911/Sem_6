import Link from 'next/link';
import React from 'react';

export default function GalleryPage() {
    const items = [1, 2, 3, 4, 5, 6];

    return (
        <div className="max-w-7xl mx-auto p-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Project Gallery</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    This page demonstrates <strong className="text-blue-600">Route Interception</strong>.
                    Click an item to open it in a modal without leaving the current view.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {items.map((id) => (
                    <Link
                        key={id}
                        href={`/items/${id}`}
                        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-blue-400 transition-all duration-300"
                    >
                        <div className="h-48 bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors relative overflow-hidden">
                            <span className="text-6xl font-bold text-slate-200 group-hover:text-blue-200 transition-colors select-none">#{id}</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Project Work {id}</h3>
                            <p className="text-slate-500 text-sm mt-2">A conceptual demonstration of Next.js features.</p>
                            <div className="mt-4 flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                View Details &rarr;
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
