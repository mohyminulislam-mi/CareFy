import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutCarefy = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Visual Element */}
        <div className="md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden border-l-8 border-blue-600 shadow-2xl">
            <Image
              width={400}
              height={40}
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Caregiver assisting elderly"
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Experience Badge */}
          <div className="absolute bottom-6 right-6 bg-black text-white p-6 rounded-lg shadow-xl z-20">
            <p className="text-3xl font-bold text-blue-500">100%</p>
            <p className="text-xs uppercase tracking-widest font-semibold">
              Verified Carers
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span>
              Our Mission
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Making Care <br />
              <span className="text-blue-600 italic">Simple & Accessible</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Carefy is a premier web application designed to bridge the gap
              between families and professional caregivers. Whether it's for
              children, the elderly, or those requiring specialized medical
              attention, we ensure a seamless booking experience tailored to
              your specific timing and location.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-2 rounded-md mt-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">
                  Trust & Reliability
                </h3>
                <p className="text-gray-500">
                  Every caregiver on our platform undergoes a rigorous vetting
                  process to ensure your peace of mind.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-2 rounded-md mt-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">
                  Flexible Booking
                </h3>
                <p className="text-gray-500">
                  Book services for a few hours, a full day, or long-term care
                  based on your schedule.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-black transition-all duration-300 shadow-lg shadow-blue-200"
            >
              Book a Service
            </Link>
            <Link
              href="#services"
              className="border-2 border-black text-black px-10 py-4 rounded-lg font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              Join as a Carer
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutCarefy;
