'use client';

import { useRouter } from 'next/navigation';

export default function InterceptedItemPage({ params }: { params: { id: string } }) {
    const router = useRouter();

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full relative border-4 border-green-500">
                <button
                    onClick={() => router.back()}
                    className="absolute top-2 right-4 text-3xl font-bold"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-green-700">Intercepted Route (Modal)</h2>
                <p className="text-xl mt-4">Viewing Item {params.id} inside a modal!</p>
                <p className="mt-4 text-gray-600">The URL is /items/{params.id}, but we intercepted it to show this modal instead of the full page.</p>
                <button
                    onClick={() => router.back()}
                    className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                    Close Modal
                </button>
            </div>
        </div>
    );
}
