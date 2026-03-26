/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Share2, Camera, Youtube, UserPlus, ChevronRight, ExternalLink, Play, Sparkles, LayoutGrid, Link2, Mail } from 'lucide-react';

const links = [
  {
    id: 1,
    label: 'NEW PORTFOLIO',
    title: '밀면 제조사 브랜딩 포트폴리오',
    url: 'https://example.com/portfolio',
    icon: ChevronRight
  },
  {
    id: 2,
    label: 'OFFICIAL SITE',
    title: 'AgenAile 웹사이트',
    url: 'https://agenaile.com',
    icon: ExternalLink
  },
  {
    id: 3,
    label: 'YOUTUBE CHANNEL',
    title: 'Stanleestudio 채널',
    url: 'https://youtube.com/stanleestudio',
    icon: Play
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex justify-center font-sans text-gray-900">
      <div className="w-full max-w-[480px] bg-[#f8f9fa] relative pb-32 shadow-sm min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-6">
          <div className="w-6"></div> {/* Spacer for centering */}
          <h1 className="text-sm font-semibold tracking-wide">The Editorial Architect</h1>
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
        </header>

        {/* Profile Section */}
        <section className="flex flex-col items-center mt-4 px-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full p-1 bg-gray-200 shadow-inner">
              <img 
                src="https://picsum.photos/seed/stanlee/200/200" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover border-4 border-[#1a1a1a]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#dbeafe] text-[#1e40af] text-[9px] font-bold px-3 py-1 rounded-full tracking-wider border border-white whitespace-nowrap shadow-sm">
              AVAILABLE
            </div>
          </div>

          <h2 className="text-3xl font-extrabold mt-6 mb-3 tracking-tight text-gray-800">Stanlee</h2>
          <p className="text-center text-gray-500 text-sm leading-relaxed max-w-[280px] font-medium">
            Helping modern brands tell better stories through editorial marketing.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-6 mb-10">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Camera className="w-6 h-6" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Youtube className="w-6 h-6" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <UserPlus className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Links Section */}
        <section className="px-6 flex flex-col gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-1">
                      {link.label}
                    </p>
                    <h3 className="font-semibold text-gray-800 text-base">
                      {link.title}
                    </h3>
                  </div>
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-gray-500 transition-colors" />
                </div>
              </a>
            );
          })}
        </section>

        {/* Featured Insight */}
        <section className="px-6 mt-8">
          <div className="bg-white p-6 rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div className="absolute top-2 right-4 text-gray-50">
              <Sparkles className="w-20 h-20 opacity-60" />
            </div>
            <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-4 relative z-10">
              FEATURED INSIGHT
            </p>
            <p className="text-lg font-medium text-gray-800 leading-snug mb-6 relative z-10">
              "Minimalism isn't the absence of things, it's the perfect amount of something."
            </p>
            <button className="bg-[#4a4a4a] text-white text-sm font-medium py-3 px-6 rounded-full hover:bg-gray-800 transition-colors relative z-10 shadow-md">
              Read the Manifesto
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto pt-16 pb-12 text-center flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 tracking-wider">
            <a href="#" className="hover:text-gray-600 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-gray-600 transition-colors">TERMS</a>
            <a href="#" className="hover:text-gray-600 transition-colors">CONTACT</a>
          </div>
          <p className="text-[10px] text-gray-400 tracking-wider">
            © 2024 THE EDITORIAL ARCHITECT
          </p>
        </footer>

        {/* Bottom Navigation */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] bg-white/95 backdrop-blur-md py-4 px-10 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 z-50">
          <div className="flex items-center justify-between">
            <button className="flex flex-col items-center gap-1.5 group">
              <LayoutGrid className="w-5 h-5 text-gray-800 group-hover:text-black transition-colors" />
              <span className="text-[9px] font-bold tracking-wider text-gray-800">PORTFOLIO</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 group">
              <Link2 className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <span className="text-[9px] font-bold tracking-wider text-gray-400">CONNECT</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 group">
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              <span className="text-[9px] font-bold tracking-wider text-gray-400">CONTACT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
