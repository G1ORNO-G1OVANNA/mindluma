import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";

export function ProfilePage() {
  const backgroundStyle = {
    backgroundImage: `url('/bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh'
  };

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.2)"
  };

  const accentGradient = {
    background: "linear-gradient(135deg, #7B8CC1 0%, #A3B5E0 40%, #8ECCC5 100%)"
  };

  return (
    <div className="p-6" style={backgroundStyle}>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-medium text-slate-900 mb-6">Profile</h1>

        {/* Profile Header */}
        <div className="rounded-[2.5rem] p-8 shadow-xl text-center" style={containerStyle}>
          <div className="relative inline-block mb-4">
            <div
              className="w-32 h-32 rounded-[2.5rem] p-1 shadow-lg"
              style={accentGradient}
            >
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
                alt="Profile"
                className="w-full h-full object-cover rounded-[2.3rem]"
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Jane Doe</h2>
          <p className="text-slate-600 font-medium">MindLuma Customer</p>
        </div>

        {/* Profile Details */}
        <div className="rounded-[2.5rem] p-6 shadow-xl space-y-5" style={containerStyle}>
          {[
            { Icon: Mail, label: "Email", value: "jane.doe@mindluma.com" },
            { Icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { Icon: MapPin, label: "Location", value: "San Francisco, CA" },
            { Icon: Calendar, label: "Member Since", value: "January 2024" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-[1rem] flex items-center justify-center shadow-sm flex-shrink-0"
                style={accentGradient}
              >
                <item.Icon className="w-6 h-6 text-black" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">{item.label}</p>
                <p className="text-base text-slate-900 font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="rounded-[2.5rem] p-6 shadow-xl" style={containerStyle}>
          <h3 className="text-lg font-medium text-slate-900 mb-4">Your Stats</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Days Active", val: "127" },
              { label: "Workouts", val: "48" },
              { label: "Goals Met", val: "92%" }
            ].map((stat, i) => (
              <div key={i} className="text-center rounded-[1.5rem] p-4 shadow-sm" style={accentGradient}>
                <p className="text-2xl font-bold text-black">{stat.val}</p>
                <p className="text-[10px] text-black/70 font-bold uppercase tracking-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
