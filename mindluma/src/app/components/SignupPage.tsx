interface SignupPageProps {
  onNavigate: () => void;
}

export function SignupPage({ onNavigate }: SignupPageProps) {
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
    <div className="flex items-center justify-center p-6" style={backgroundStyle}>
      <div
        className="w-full max-w-md rounded-[3rem] p-10 shadow-2xl border border-white/10"
        style={containerStyle}
      >
        <h1 className="text-3xl font-medium text-center mb-10 text-slate-900 tracking-tight">Sign Up</h1>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-4 rounded-[1.5rem] border-none focus:ring-2 focus:ring-[#7B8CC1] text-black font-semibold shadow-sm placeholder-black/40"
            style={accentGradient}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-[1.5rem] border-none focus:ring-2 focus:ring-[#7B8CC1] text-black font-semibold shadow-sm placeholder-black/40"
            style={accentGradient}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-4 rounded-[1.5rem] border-none focus:ring-2 focus:ring-[#7B8CC1] text-black font-semibold shadow-sm placeholder-black/40"
            style={accentGradient}
          />

          <button
            onClick={onNavigate}
            className="w-full p-5 rounded-[1.8rem] shadow-lg hover:scale-[1.02] active:scale-95 transition-all mt-6 border border-white/20"
            style={accentGradient}
          >
            <span className="text-black font-bold uppercase tracking-widest text-sm">Create Account</span>
          </button>

          <p className="text-center text-xs font-bold text-slate-500 mt-6 uppercase tracking-tight">
            Already have an account?{' '}
            <button
              onClick={onNavigate}
              className="text-slate-900 hover:underline transition-all"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
