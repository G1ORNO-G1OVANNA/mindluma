import { Shield, Eye, Lock, Bell, MapPin, Camera } from "lucide-react";
import { useState } from "react";

export function PermissionsPage() {
  const [permissions, setPermissions] = useState({
    camera: true,
    location: false,
    notifications: true,
    microphone: false,
    storage: true,
    contacts: false
  });

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

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const permissionItems = [
    {
      key: "camera" as const,
      icon: Camera,
      title: "Camera Access",
      description: "Allow app to access your camera for profile pictures and photos"
    },
    {
      key: "location" as const,
      icon: MapPin,
      title: "Location Services",
      description: "Enable location tracking for outdoor workout activities"
    },
    {
      key: "notifications" as const,
      icon: Bell,
      title: "Push Notifications",
      description: "Receive reminders and updates about your wellness journey"
    },
    {
      key: "microphone" as const,
      icon: Eye,
      title: "Microphone Access",
      description: "Allow audio for guided meditation sessions"
    },
    {
      key: "storage" as const,
      icon: Lock,
      title: "Storage Access",
      description: "Save your journal entries and progress data locally"
    },
    {
      key: "contacts" as const,
      icon: Shield,
      title: "Contacts Access",
      description: "Connect with friends and share wellness achievements"
    }
  ];

  return (
    <div className="p-6" style={backgroundStyle}>
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-3xl font-medium text-slate-900 mb-6">Permissions</h1>

        {/* Security Header Card */}
        <div className="rounded-[2.5rem] p-6 shadow-xl mb-6 border border-white/10" style={containerStyle}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-[1.2rem] flex items-center justify-center flex-shrink-0 shadow-sm" style={accentGradient}>
              <Shield className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Privacy & Security</h2>
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                Manage what information you share and control your settings.
              </p>
            </div>
          </div>
        </div>

        {/* Permission Toggles */}
        {permissionItems.map((item) => {
          const Icon = item.icon;
          const isEnabled = permissions[item.key];

          return (
            <div
              key={item.key}
              className="rounded-[2.5rem] p-5 shadow-lg border border-white/10"
              style={containerStyle}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-[1.2rem] flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300"
                  style={isEnabled ? accentGradient : { backgroundColor: "rgba(0,0,0,0.1)" }}
                >
                  <Icon className={`w-6 h-6 ${isEnabled ? 'text-black' : 'text-slate-500'}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 font-medium leading-tight">{item.description}</p>
                  <button
                    onClick={() => togglePermission(item.key)}
                    className="rounded-[1rem] px-5 py-2 text-xs font-bold uppercase tracking-widest shadow-md transition-all active:scale-95 border border-white/20"
                    style={isEnabled ? accentGradient : { backgroundColor: "rgba(255,255,255,0.3)", color: "#64748b" }}
                  >
                    {isEnabled ? "Enabled" : "Disabled"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
