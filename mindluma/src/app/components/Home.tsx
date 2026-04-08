import { Brain, Apple, Moon, Activity, PenTool, Dumbbell, Sprout, Droplets, Gamepad2, X, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Home() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<boolean[]>([false, false, false, false, false]);

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

  const icons = [
    { Icon: Brain, label: "Meditation", videoIds: ["ZToicYcHIOU", "inpok4MKVLM"] },
    { Icon: Dumbbell, label: "Yoga", videoIds: ["v7AYKMP6rOE", "COp7BR_Dvps"] },
    { Icon: Apple, label: "Diet", videoIds: ["SuNc0QRTvGA", "9VtxCxtsMAI"] },
    { Icon: Moon, label: "Sleep", videoIds: ["aXItOY0sLRY", "nm1TxQj9IsQ"] },
    { Icon: Activity, label: "Heart", videoIds: ["FkEyHX6IVU0", "OhOvsT-l_LE"] },
    { Icon: PenTool, label: "Doodle", isStatic: true },
    { Icon: Sprout, label: "TouchGrass", isTask: true },
    {
      Icon: Droplets,
      label: "Flow",
      videoIds: ["2caqzHWk2r8", "nVOtHnEcNJY"],
      customGradient: "linear-gradient(135deg, #FFC0CB 0%, #FFB6C1 40%, #FFA07A 100%)"
    },
    { Icon: Gamepad2, label: "GameJam", isGame: true },
  ];

  const progress = (checklist.filter(Boolean).length / checklist.length) * 100;

  // --- DOODLE VIEW ---
  if (selectedActivity === "Doodle") {
    return (
      <div className="p-6" style={backgroundStyle}>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-slate-900 font-medium">Daily Doodle</h2>
            <button onClick={() => setSelectedActivity(null)} className="w-10 h-10 rounded-[1rem] flex items-center justify-center shadow-md border border-white/20" style={accentGradient}>
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
          <div className="rounded-[2.5rem] p-6 shadow-xl border border-white/10" style={containerStyle}>
            <div className="rounded-[1.8rem] overflow-hidden shadow-md border border-white/20">
              <img src="/doodle.jpg" alt="Daily Doodle" className="w-full h-auto object-cover" />
            </div>
            <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Today's Inspiration</p>
          </div>
        </div>
      </div>
    );
  }

  // --- TOUCHGRASS VIEW ---
  if (selectedActivity === "TouchGrass") {
    const tasks = ["Sit on a bench for 10 mins", "Walk barefoot for 2 mins", "Identify 3 types of trees", "Talk to 3 random strangers", "Make a new friend within a month"];
    return (
      <div className="p-6" style={backgroundStyle}>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-slate-900 font-medium tracking-tight">Touch Grass</h2>
            <button onClick={() => setSelectedActivity(null)} className="w-10 h-10 rounded-[1rem] flex items-center justify-center shadow-md border border-white/20" style={accentGradient}>
              <X className="text-black" />
            </button>
          </div>
          <div className="rounded-[2.5rem] p-6 shadow-xl space-y-6 border border-white/10" style={containerStyle}>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Exposure Progress: {Math.round(progress)}%</p>
              <div className="w-full h-4 bg-black/5 rounded-full overflow-hidden border border-white/20">
                <div className="h-full transition-all duration-700" style={{ ...accentGradient, width: `${progress}%` }} />
              </div>
            </div>
            <div className="space-y-3">
              {tasks.map((task, i) => (
                <button key={i} onClick={() => { const n = [...checklist]; n[i]=!n[i]; setChecklist(n); }} className="w-full flex items-center gap-4 p-4 rounded-[1.8rem] border border-white/10 transition-all active:scale-95" style={checklist[i] ? accentGradient : { backgroundColor: "rgba(255,255,255,0.2)" }}>
                  <CheckCircle2 className={`w-6 h-6 ${checklist[i] ? 'text-black' : 'text-slate-400'}`} />
                  <span className={`text-xs font-bold uppercase text-left ${checklist[i] ? 'text-black' : 'text-slate-600'}`}>{task}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- GAMEJAM & STANDARD VIEWS ---
  if (selectedActivity) {
    const activity = icons.find(icon => icon.label === selectedActivity);
    const currentGrad = activity?.label === "Flow" ? { background: activity.customGradient } : accentGradient;

    return (
      <div className="p-6" style={backgroundStyle}>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-slate-900 font-medium">{selectedActivity}</h2>
            <button onClick={() => setSelectedActivity(null)} className="w-10 h-10 rounded-[1rem] flex items-center justify-center shadow-md border border-white/20" style={currentGrad}>
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
          {selectedActivity === "GameJam" ? (
             <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20" style={containerStyle}>
                <iframe srcDoc={`<style>body{margin:0;overflow:hidden;background:#83a3ca;}canvas{display:block;background:#70c5ce;width:100%;height:100%;}</style><canvas id="g"></canvas><script>const c=document.getElementById("g"),x=c.getContext("2d");c.width=400;c.height=400;let b={x:60,y:180,v:0,g:0.18},p=[],f=0,s=0;function d(){x.fillStyle="#70c5ce";x.fillRect(0,0,400,400);b.v+=b.g;b.y+=b.v;x.fillStyle="#000";x.fillRect(b.x,b.y,24,24);if(f%100==0)p.push({x:400,h:Math.random()*150+50});p.forEach((k,i)=>{k.x-=1.6;x.fillStyle="#7B8CC1";x.fillRect(k.x,0,45,k.h);x.fillRect(k.x,k.h+120,45,400);if(k.x<-50){p.splice(i,1);s++}if(b.x+24>k.x&&b.x<k.x+45&&(b.y<k.h||b.y+24>k.h+120))location.reload()});if(b.y>400||b.y<0)location.reload();x.fillStyle="rgba(0,0,0,0.5)";x.font="bold 20px sans-serif";x.fillText("Score: "+s,20,40);f++;requestAnimationFrame(d)}window.addEventListener("mousedown",()=>b.v=-4.2);d();</script>`} className="w-full h-full border-none" />
             </div>
          ) : (
            <div className="space-y-4">
              {activity?.videoIds?.map((videoId, index) => (
                <div key={index} className="rounded-[2.5rem] overflow-hidden shadow-xl border border-white/10" style={containerStyle}>
                  <div className="p-4"><div className="rounded-[1.8rem] overflow-hidden aspect-video bg-slate-800"><iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen className="w-full h-full" /></div></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6" style={backgroundStyle}>
      <div className="max-w-md mx-auto space-y-6">
        <div className="rounded-[2.5rem] p-6 shadow-xl border border-white/10" style={containerStyle}>
          <div className="grid grid-cols-3 gap-y-6 gap-x-4">
            {icons.map(({ Icon, label, customGradient }, index) => (
              <button key={index} className="flex flex-col items-center group" onClick={() => setSelectedActivity(label)}>
                <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-white/20" style={customGradient ? { background: customGradient } : accentGradient}>
                  <Icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] mt-3 font-bold uppercase tracking-widest text-slate-600 group-hover:text-slate-900 transition-colors text-center">{label}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] p-6 shadow-xl border border-white/10" style={containerStyle}>
          <h3 className="text-lg mb-4 text-slate-900 font-bold tracking-tight">Your Progress</h3>
          <div className="w-full aspect-[16/9] rounded-[1.8rem] overflow-hidden shadow-md border border-white/20 bg-white/20">
            {/* Updated with graph.jpg */}
            <img src="/graph.jpg" alt="Stats Graph" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
