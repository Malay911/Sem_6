'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = () => {
            const hasToken = document.cookie.split(';').some((item) => item.trim().startsWith('token='));
            setIsLoggedIn(hasToken);
        };
        checkLoginStatus();
    }, []);

    const handleLogout = () => {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
        setIsLoggedIn(false);
        router.push('/pages/login');
        router.refresh();
    };

    return (
        <div className="p-4 border-b bg-white flex justify-between items-center shadow-sm">
            <div className="space-x-4">
                <Link href="/pages/home" className="text-gray-700 hover:text-blue-600 font-medium">
                    Home
                </Link>
                <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium">
                    Gallery (Demo)
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <>
                        <span className="text-sm text-green-600 font-medium hidden sm:inline">Logged In</span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <Link
                        href="/pages/login"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                        Log In
                    </Link>
                )}
            </div>
        </div>
    );
}
