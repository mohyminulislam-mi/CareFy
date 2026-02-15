import { ArrowRight, Baby, Thermometer, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  const Service = [
    {
      id: "1",
      type: "baby",
      title: "Baby Care & Sitting",
      slug: "Baby-Care-and-Sitting",
      description: "Expert care for your little ones when you are away.",
      longDescription:
        "Our baby care specialists are trained in early childhood development and safety. Whether you need a few hours of help or full-day care, we provide a nurturing environment for your children.",
      hourlyRate: 15,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1666299880508-bffece864e96?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Age-appropriate activities",
        "Meal preparation",
        "Safety first approach",
        "24/7 Availability",
      ],
    },
    {
      id: "2",
      type: "elderly",
      title: "Elderly Care",
      slug: "Elderly-Care",
      description: "Compassionate assistance for our respected seniors.",
      longDescription:
        "Dignified and professional care for elderly family members. We assist with daily living activities, medication reminders, and companionship to ensure a high quality of life.",
      hourlyRate: 20,
      imageUrl:
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Mobility assistance",
        "Medication tracking",
        "Social companionship",
        "Light housekeeping",
      ],
    },
    {
      id: "3",
      type: "sick",
      title: "Sick People Service",
      slug: "Sick-People-Service",
      description: "Specialized home care for recovery and health support.",
      longDescription:
        "Recovering from illness or surgery requires special attention. Our trained caregivers provide the medical support and daily care needed to facilitate a smooth recovery at home.",
      hourlyRate: 25,
      imageUrl:
        "https://images.unsplash.com/photo-1550792436-181701c71f63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Vitals monitoring",
        "Wound care support",
        "Exercise assistance",
        "Doctor appointment coordination",
      ],
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Care Solutions
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Specialized support tailored to your unique family needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Service.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl border border-slate-100 p-2 shadow-sm hover:shadow-xl transition-all group overflow-hidden"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                width={200}
                height={50}
                src={s.imageUrl}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className="px-4 pb-6 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  {s.type === "baby" && <Baby size={20} />}
                  {s.type === "elderly" && <UserPlus size={20} />}
                  {s.type === "sick" && <Thermometer size={20} />}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{s.title}</h3>
              </div>
              <p className="text-slate-600 text-sm">{s.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <span className="text-indigo-600 font-bold">
                  ${s.hourlyRate}
                  <span className="text-slate-400 text-xs font-normal">
                    /hr
                  </span>
                </span>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-indigo-600 font-semibold text-sm flex items-center hover:translate-x-1 transition"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
