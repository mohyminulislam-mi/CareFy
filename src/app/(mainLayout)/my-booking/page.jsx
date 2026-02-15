const { Calendar, Clock, MapPin } = require("lucide-react");
const { default: Link } = require("next/link");

const MyBookingsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-extrabold text-slate-800">My Bookings</h2>
        <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold">
          {bookings.length} Orders
        </span>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-slate-200">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <Calendar size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            No active bookings yet
          </h3>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">
            Explore our premium care services and book professional assistance
            for your family.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
          >
            Start Exploring
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Calendar size={28} />
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-bold text-slate-800 text-lg">
                      {b.serviceTitle}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        b.status === "Pending"
                          ? "bg-amber-100 text-amber-700"
                          : b.status === "Confirmed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" /> {b.duration} hours
                    </span>
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" />{" "}
                      {b.location.area || b.location.district},{" "}
                      {b.location.division}
                    </span>
                    <span className="flex items-center font-bold text-slate-800">
                      ${b.totalCost} Total
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 border-t md:border-t-0 pt-4 md:pt-0">
                <button className="flex-1 md:flex-none text-sm font-bold text-slate-600 px-6 py-2.5 rounded-lg hover:bg-slate-50 border border-slate-200">
                  Details
                </button>
                <button className="flex-1 md:flex-none text-sm font-bold text-indigo-600 px-6 py-2.5 rounded-lg hover:bg-indigo-50 transition border border-transparent">
                  Track Service
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
