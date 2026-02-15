import React from "react";
import { CheckCircle, Clock, ShieldCheck } from "lucide-react";

const Trust = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: <ShieldCheck className="text-indigo-600" />,
          title: "Verified Caregivers",
          desc: "Every professional undergoes a rigorous background check.",
        },
        {
          icon: <Clock className="text-indigo-600" />,
          title: "24/7 Support",
          desc: "We are here whenever your family needs a helping hand.",
        },
        {
          icon: <CheckCircle className="text-indigo-600" />,
          title: "Safe Payments",
          desc: "Secure booking and transparent pricing models.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex space-x-4 p-8 bg-white rounded-2xl shadow-sm border border-slate-100"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
            {item.icon}
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trust;
