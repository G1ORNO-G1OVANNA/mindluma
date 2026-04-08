import { MessageCircle, Mail, Phone, FileText, Video } from "lucide-react";

export function HelpPage() {
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

  const helpCategories = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Chat with our wellness experts 24/7",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email at support@mindluma.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us at 1-800-MindLuma",
      action: "Call Now"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch how-to guides and tips",
      action: "Watch Videos"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      action: "View Docs"
    }
  ];

  return (
    <div className="p-6" style={backgroundStyle}>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-medium text-slate-900 mb-6">Help & Support</h1>

        {/* Contact Methods */}
        <div className="rounded-[2.5rem] p-6 shadow-xl space-y-4 border border-white/10" style={containerStyle}>
          <h2 className="text-xl font-bold text-slate-900 mb-2 ml-2 tracking-tight">Contact Us</h2>
          {helpCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-4 rounded-[2rem] shadow-md hover:scale-[1.02] active:scale-95 transition-all border border-white/20"
                style={accentGradient}
              >
                <div className="w-12 h-12 rounded-[1.2rem] bg-black/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-base font-bold text-black leading-tight">{category.title}</h3>
                  <p className="text-xs text-black/70 font-medium uppercase tracking-tighter mt-0.5">{category.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Emergency Support */}
        <div className="rounded-[2.5rem] p-8 shadow-xl border border-white/10" style={containerStyle}>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Need Immediate Help?</h2>
          <p className="text-sm text-slate-700 mb-6 font-medium leading-relaxed">
            If you're experiencing a mental health emergency, please reach out to a crisis hotline immediately.
          </p>
          <button
            className="w-full rounded-[1.5rem] p-4 shadow-lg hover:scale-[1.02] active:scale-95 transition-all border border-white/20"
            style={accentGradient}
          >
            <span className="text-black font-bold uppercase tracking-widest text-xs">Crisis Resources</span>
          </button>
        </div>
      </div>
    </div>
  );
}
