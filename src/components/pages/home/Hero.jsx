import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-32">
      <div className="relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              <span>Trusted by 10,000+ families</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Compassionate Care for Your{" "}
              <span className="text-indigo-600">Loved Ones</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Connect with verified, professional caregivers. From childcare to
              specialized elderly support, we make caregiving easy, secure, and
              accessible for every family.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Explore Services
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition"
              >
                How it Works
              </Link>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 relative">
            <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full"></div>
            <Image
              width={400}
              height={40}
              src="https://picsum.photos/seed/carehero/800/800"
              alt="Caregiving"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover ring-8 ring-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
