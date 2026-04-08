import { Heart, Users, Sparkles, Award, Shield } from "lucide-react";

export function AboutPage() {
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
        <h1 className="text-3xl font-medium text-slate-900 mb-6">About</h1>

        {/* App Info */}
        <div className="rounded-[2.5rem] p-8 shadow-xl text-center" style={containerStyle}>
          <div
            className="w-24 h-24 rounded-[2rem] mx-auto mb-4 flex items-center justify-center shadow-md"
            style={accentGradient}
          >
            {/* Swapped to black text */}
            <Heart className="w-12 h-12 text-black" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-1">MindLuma</h2>
          <p className="text-slate-600 text-sm">Version 2.4.1</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Build 2026.04.05</p>
        </div>

        {/* Mission */}
        <div className="rounded-[2.5rem] p-6 shadow-xl" style={containerStyle}>
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 shadow-sm"
              style={accentGradient}
            >
              {/* Swapped to black text */}
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Our Mission</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Empowering individuals to achieve holistic wellness through mindful practices, expert guidance, and community support.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="rounded-[2.5rem] p-6 shadow-xl" style={containerStyle}>
          <h3 className="text-lg font-medium text-slate-900 mb-5">What We Offer</h3>
          <div className="space-y-4">
            {[
              { Icon: Users, text: "Connect with certified wellness experts" },
              { Icon: Award, text: "Track your progress with personalized insights" },
              { Icon: Shield, text: "Bank-level security for your private data" },
              { Icon: Heart, text: "Daily wellness activities & journal" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-[0.85rem] flex items-center justify-center shadow-sm"
                  style={accentGradient}
                >
                  {/* Swapped to black text */}
                  <item.Icon className="w-5 h-5 text-black" />
                </div>
                <p className="text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team / Stats */}
        <div className="rounded-[2.5rem] p-6 shadow-xl" style={containerStyle}>
          <h3 className="text-lg font-medium text-slate-900 mb-4">Our Impact</h3>
          <div className="grid grid-cols-3 gap-3 text-center mb-4">
            {[
              { label: "Users", val: "67K+" },
              { label: "Experts", val: "67+" },
              { label: "Rating", val: "4.8★" }
            ].map((stat, i) => (
              <div key={i} className="rounded-[1.5rem] p-3 shadow-sm" style={accentGradient}>
                {/* Swapped to black text */}
                <p className="text-xl font-bold text-black">{stat.val}</p>
                <p className="text-[10px] text-black/70 uppercase font-bold tracking-tight">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 text-center italic">
            Built by professionals dedicated to accessible mental health.
          </p>
        </div>

        {/* Legal */}
        <div className="rounded-[2.5rem] p-6 shadow-xl" style={containerStyle}>
          <div className="flex justify-center gap-4 text-xs font-medium text-slate-600">
            <button className="hover:text-slate-900 transition-colors">Terms</button>
            <span className="opacity-30">•</span>
            <button className="hover:text-slate-900 transition-colors">Privacy</button>
            <span className="opacity-30">•</span>
            <button className="hover:text-slate-900 transition-colors">Licenses</button>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-4 tracking-wide uppercase">
            © 2026 MINDLUMA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
}
