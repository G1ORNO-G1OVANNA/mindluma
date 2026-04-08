import { Bell, CheckCircle, Heart, Award, Users } from "lucide-react";

export function NotificationsPage() {
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

  const notifications = [
    {
      icon: CheckCircle,
      title: "Task Completed",
      message: "You've completed all your wellness tasks for today. Great job!",
      time: "2 minutes ago",
    },
    {
      icon: Heart,
      title: "Workout Reminder",
      message: "Time for your daily 30-minute workout session. Let's get moving!",
      time: "1 hour ago",
    },
    {
      icon: Award,
      title: "Achievement Unlocked",
      message: "You've meditated for 7 days in a row! Keep it up!",
      time: "3 hours ago",
    },
    {
      icon: Bell,
      title: "New Message",
      message: "Dr. Sarah Mitchell sent you a wellness tip for today.",
      time: "5 hours ago",
    },
    {
      icon: Users,
      title: "New Expert Available",
      message: "Dr. Michael Chen is now available for consultations.",
      time: "1 day ago",
    },
  ];

  return (
    <div className="p-6" style={backgroundStyle}>
      <div className="max-w-md mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-medium text-slate-900">Notifications</h1>
          <div
            className="w-10 h-10 rounded-[1rem] flex items-center justify-center text-sm font-bold shadow-md border border-white/20"
            style={accentGradient}
          >
            <span className="text-black">{notifications.length}</span>
          </div>
        </div>

        {/* Notification List */}
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <div
              key={index}
              className="rounded-[2.5rem] p-5 shadow-lg border border-white/10"
              style={containerStyle}
            >
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-[1.2rem] flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={accentGradient}
                >
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-1">{notification.title}</h3>
                  <p className="text-sm text-slate-600 mb-2 leading-relaxed font-medium">{notification.message}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{notification.time}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Clear All Button */}
        <button
          className="w-full rounded-[2rem] p-4 shadow-lg hover:scale-[1.02] active:scale-95 transition-all mt-4 border border-white/20"
          style={accentGradient}
        >
          <span className="text-black font-bold uppercase tracking-wider text-xs">Clear All Notifications</span>
        </button>
      </div>
    </div>
  );
}
