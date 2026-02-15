import BackText from "@/components/button/BackText";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Move the data OUTSIDE the component or define it BEFORE using it
const services = [
  {
    id: "1",
    type: "baby",
    title: "Baby Care & Sitting",
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

const ServiceDetailPage = async ({ params }) => {
  // Await params if using Next.js 15
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Service not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-10">
        <BackText>return back</BackText>
      </div>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="grid lg:grid-cols-2">
          <div className="h-full">
            <Image
              width={300}
              height={80}
              src={service.imageUrl}
              className="w-full h-full object-cover min-h-[400px]"
              alt={service.title}
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs">
                Service Details
              </span>
              <h1 className="text-4xl font-extrabold text-slate-900">
                {service.title}
              </h1>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {service.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 text-slate-700 text-sm font-medium"
                >
                  <CheckCircle size={16} className="text-emerald-500" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-slate-400 text-xs font-semibold uppercase mb-1">
                  Standard Rate
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  ${service.hourlyRate}{" "}
                  <span className="text-lg font-normal text-slate-400">
                    /hr
                  </span>
                </p>
              </div>
              <Link
                href={`/booking/${service.id}`}
                className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 text-center"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
