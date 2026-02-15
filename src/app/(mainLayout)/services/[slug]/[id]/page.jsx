"use client";
import React, { useState, use } from "react";
import { Clock, MapPin, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

const LOCATIONS = {
  divisions: ["Dhaka", "Chattogram", "Sylhet"],
  districts: {
    Dhaka: ["Dhaka North", "Dhaka South", "Gazipur"],
    Chattogram: ["Chattogram City", "Cox's Bazar"],
    Sylhet: ["Sylhet City", "Moulvibazar"],
  },
};

const BookingPage = ({ params }) => {
  const router = useRouter();
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const service = services.find((s) => s.id === id);

  const [formData, setFormData] = useState({
    duration: 1,
    division: "",
    district: "",
    city: "",
    area: "",
    address: "",
  });

  if (!service)
    return <div className="text-center py-20">Service not found</div>;

  const totalCost = formData.duration * service.hourlyRate;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.division || !formData.address)
      return alert("Please fill in location details");

    console.log("Booking Data:", {
      serviceId: service.id,
      ...formData,
      totalCost,
    });
    router.push("/my-booking");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8 flex items-center space-x-4">
        <Link
          href={`/service/${service.id}`}
          className="p-2 hover:bg-slate-100 rounded-lg transition"
        >
          <X size={20} />
        </Link>
        <h2 className="text-2xl font-bold text-slate-800">
          Booking Confirmation
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-indigo-500" />
                <span>Duration</span>
              </h3>
              <div>
                <label className="block text-sm text-slate-500 mb-2">
                  Hours Needed
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="24"
                    step="1"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        duration: Number(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <span className="text-lg font-bold text-indigo-600 w-12 text-center">
                    {formData.duration}h
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-100">
              <h3 className="font-bold text-slate-800 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-indigo-500" />
                <span>Location Details</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
                    Division
                  </label>
                  <select
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm"
                    value={formData.division}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        division: e.target.value,
                        district: "",
                      })
                    }
                  >
                    <option value="">Select Division</option>
                    {LOCATIONS.divisions.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
                    District
                  </label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm"
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                  >
                    <option value="">Select District</option>
                    {(LOCATIONS.districts[formData.division] || []).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">
                  Full Address
                </label>
                <textarea
                  required
                  placeholder="House No, Road No, Building Name..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm min-h-[100px]"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition cursor-pointer"
            >
              Confirm & Book Now
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-indigo-600 rounded-2xl p-6 text-white sticky top-24">
            <h3 className="text-lg font-bold mb-6">Price Summary</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between opacity-80">
                <span>{service.title}</span>
                <span>${service.hourlyRate}/hr</span>
              </div>
              <div className="flex justify-between opacity-80">
                <span>Duration</span>
                <span>{formData.duration} Hours</span>
              </div>
              <div className="flex justify-between opacity-80">
                <span>Platform Fee</span>
                <span>FREE</span>
              </div>
              <div className="pt-4 border-t border-indigo-400 flex justify-between text-xl font-bold">
                <span>Total Cost</span>
                <span>${totalCost}</span>
              </div>
            </div>
            <div className="mt-8 flex items-start space-x-2 text-xs opacity-70 leading-relaxed">
              <ShieldCheck className="flex-shrink-0 w-4 h-4 mt-0.5" />
              <p>Secure payment processed after service confirmation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
