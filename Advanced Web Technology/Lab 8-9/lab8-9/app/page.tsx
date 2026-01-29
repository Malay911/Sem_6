import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white text-center px-4">
      <div className="max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Middleware & Intecepting Routes Demo
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          This lab demonstrates advanced Next.js 15 features including <span className="text-blue-600 font-semibold">Route Interception</span>,
          <span className="text-blue-600 font-semibold"> Route Handlers</span>, and <span className="text-blue-600 font-semibold">Middleware Authentication</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="/gallery"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Explore Gallery
          </Link>
          <Link
            href="/pages/login"
            className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl shadow-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition transform hover:-translate-y-1"
          >
            Login Page
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-lg transition duration-300">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Intercepting Routes</h3>
            <p className="text-slate-600 leading-relaxed">Clicking an item opens a URL-shareable modal instead of a full page, preserving context.</p>
          </div>
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-lg transition duration-300">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Middleware Auth</h3>
            <p className="text-slate-600 leading-relaxed">Protects routes, manages secure cookies, and handles redirects automatically.</p>
          </div>
          <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:shadow-lg transition duration-300">
            <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 017.143 7.143c.241.489.798.808 1.347.604l4.423-1.106c.497-.124.852-.575.852-1.091v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a1.062 1.062 0 00-1.21.380z" /></svg>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Route Handlers</h3>
            <p className="text-slate-600 leading-relaxed">Custom API endpoints handling dynamic parameters and JSON responses.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page