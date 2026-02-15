import { CheckCircle } from "lucide-react";
import Link from "next/link";

async function getServices() {
  const res = await fetch("/services.json", {
    cache: "no-store",
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ServiceDetailPage = async ({ params }) => {
  const services = await getServices();
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="h-full">
            <img
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
                className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
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
