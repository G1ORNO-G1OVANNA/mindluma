import { useState } from "react";
import { X, MessageCircle, Calendar, Star } from "lucide-react";

export function Connect() {
  const [selectedExpert, setSelectedExpert] = useState<string | null>(null);

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

  const profiles = [
    {
      name: "Dr. Pooja Tiwari",
      experience: 8,
      age: 34,
      gender: "Female",
      specialty: "Wellness Coach",
      image: "https://static.vecteezy.com/system/resources/thumbnails/042/970/523/small/ai-generated-middle-aged-indian-female-doctor-in-blue-scrubs-smiling-looking-in-camera-woman-medic-professional-hospital-physician-confident-practitioner-or-surgeon-at-work-blurred-background-photo.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWxsbmVzcyUyMGNvYWNoJTIwcG9ydHJhaXQlMjB3b21hbnxlbnwxfHx8fDE3NzUwNjM0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Dr. Manish Shah",
      experience: 5,
      age: 31,
      gender: "Male",
      specialty: "Therapist",
      image: "https://media.easy-peasy.ai/fb97cb03-6b72-4b00-ac27-f2c1ecd44e98/42bde7f4-8e1c-4205-bffe-5a23feae468a.png?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXBpc3QlMjBwb3J0cmFpdCUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUwNjM0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Dr. Anjali Desai",
      experience: 6,
      age: 29,
      gender: "Female",
      specialty: "Meditation Guide",
      image: "https://txcdn-prod-a1art.xiaopiu.com/assets/application/app_1915261421550190594/form/1e288c19-9671-4fcf-9812-9290c9feafff.jpg?crop=entropy&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY29hY2glMjBwb3J0cmFpdCUyMGFzaWFufGVufDF8fHx8MTc3NTA2MzQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Dr. Ryan Gostling",
      experience: 7,
      age: 32,
      gender: "Male",
      specialty: "Yoga Instructor",
      image: "https://people.com/thmb/M2MenwUQddbvtDObvF0uXXsJEd4=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Ryan-Gosling-Trailer-for-Project-Hail-Mary-063025-1-ae0a19bbc0d74f59928c45959f6176d2.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1MDEzMzY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Dr. Priya Sharma",
      experience: 4,
      age: 28,
      gender: "Female",
      specialty: "Fitness Trainer",
      image: "https://thumbs.dreamstime.com/b/beautiful-brunette-indian-young-doctor-woman-11788357.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwaGlzcGFuaWMlMjB3b21hbnxlbnwxfHx8fDE3NzUwNjM0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
  ];

  // Detailed View
  if (selectedExpert) {
    const expert = profiles.find(p => p.name === selectedExpert);
    return (
      <div className="p-6" style={backgroundStyle}>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-slate-900 font-medium">Expert Profile</h2>
            <button
              onClick={() => setSelectedExpert(null)}
              className="w-10 h-10 rounded-[1rem] flex items-center justify-center shadow-md border border-white/20 transition-all active:scale-90"
              style={accentGradient}
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>

          <div className="rounded-[2.5rem] p-6 shadow-xl space-y-6" style={containerStyle}>
            <div className="rounded-[2rem] overflow-hidden aspect-square shadow-lg p-1" style={accentGradient}>
              <img src={expert?.image} alt={expert?.name} className="w-full h-full object-cover rounded-[1.8rem]" />
            </div>

            <div className="rounded-[1.5rem] p-5 shadow-md" style={accentGradient}>
              <h3 className="text-xl font-bold text-black">{expert?.name}</h3>
              <p className="text-black/80 font-medium">{expert?.specialty}</p>

              {/* Added Age and Gender display */}
              <p className="text-black/70 text-sm font-semibold mt-1 uppercase tracking-tight">
                {expert?.gender} • {expert?.age} Years Old
              </p>

              <div className="flex items-center gap-1 mt-2 text-black">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="text-xs ml-2 font-bold uppercase tracking-tighter">({expert?.experience} years exp.)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] shadow-sm transition-all hover:scale-[1.02] active:scale-95 border border-white/20" style={accentGradient}>
                <MessageCircle className="mb-1 text-black" />
                <span className="text-xs font-bold text-black uppercase tracking-tight">Message</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] shadow-sm transition-all hover:scale-[1.02] active:scale-95 border border-white/20" style={accentGradient}>
                <Calendar className="mb-1 text-black" />
                <span className="text-xs font-bold text-black uppercase tracking-tight">Book</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="p-6" style={backgroundStyle}>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-medium text-slate-900">Connect with Experts</h1>

        <div className="space-y-4">
          {profiles.map((profile, index) => (
            <button
              key={index}
              onClick={() => setSelectedExpert(profile.name)}
              className="w-full rounded-[2.5rem] p-4 flex items-center gap-4 shadow-xl hover:scale-[1.02] transition-transform active:scale-95 border border-white/10"
              style={containerStyle}
            >
              <div className="w-16 h-16 rounded-[1.2rem] overflow-hidden flex-shrink-0 shadow-md p-0.5" style={accentGradient}>
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-[1.1rem]"
                />
              </div>
              <div
                className="flex-1 text-left rounded-[1.5rem] p-4 shadow-sm"
                style={accentGradient}
              >
                <h3 className="text-base font-bold text-black leading-tight">{profile.name}</h3>
                {/* Added Age and Gender display in list */}
                <p className="text-[10px] text-black font-bold uppercase tracking-tight opacity-90">
                   {profile.gender} • {profile.age} yrs
                </p>
                <p className="text-[10px] text-black/70 mt-0.5 uppercase tracking-widest font-bold">
                  {profile.experience} years exp.
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
