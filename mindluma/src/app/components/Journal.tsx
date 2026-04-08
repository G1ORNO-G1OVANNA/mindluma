import { Pencil, Save, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Journal() {
  const [showJournalEntry, setShowJournalEntry] = useState(false);
  const [selectedChoreIndex, setSelectedChoreIndex] = useState<number | null>(null);
  const [entries, setEntries] = useState<{ [key: number]: string }>({});
  const [chores, setChores] = useState<string[]>([
    "Morning meditation",
    "Drink 8 glasses of water",
    "30-minute workout",
    "Healthy meal prep",
    "Evening gratitude journal",
  ]);

  const [currentChoreName, setCurrentChoreName] = useState("");
  const [currentEntryText, setCurrentEntryText] = useState("");

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

  useEffect(() => {
    const savedEntries = sessionStorage.getItem('journalEntries');
    const savedChores = sessionStorage.getItem('journalChores');
    if (savedEntries) { try { setEntries(JSON.parse(savedEntries)); } catch (e) { console.error(e); } }
    if (savedChores) { try { setChores(JSON.parse(savedChores)); } catch (e) { console.error(e); } }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('journalEntries', JSON.stringify(entries));
    sessionStorage.setItem('journalChores', JSON.stringify(chores));
  }, [entries, chores]);

  const handlePencilClick = (index: number) => {
    setSelectedChoreIndex(index);
    setCurrentChoreName(chores[index]);
    setCurrentEntryText(entries[index] || "");
    setShowJournalEntry(true);
  };

  const handleSave = () => {
    if (selectedChoreIndex !== null) {
      const updatedChores = [...chores];
      updatedChores[selectedChoreIndex] = currentChoreName;
      setChores(updatedChores);
      setEntries(prev => ({ ...prev, [selectedChoreIndex]: currentEntryText }));
    }
    closeEditor();
  };

  const closeEditor = () => {
    setShowJournalEntry(false);
    setCurrentEntryText("");
    setCurrentChoreName("");
    setSelectedChoreIndex(null);
  };

  // --- EDITOR VIEW ---
  if (showJournalEntry && selectedChoreIndex !== null) {
    return (
      <div className="p-6" style={backgroundStyle}>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-slate-900 font-medium">Edit Entry</h2>
            <button
              onClick={closeEditor}
              className="w-10 h-10 rounded-[1rem] flex items-center justify-center shadow-md border border-white/20 transition-all active:scale-90"
              style={accentGradient}
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>

          <div className="rounded-[2.5rem] p-6 shadow-xl" style={containerStyle}>
            <label className="block text-[10px] font-bold text-slate-500 mb-2 ml-2 uppercase tracking-widest">Activity Title</label>
            <input
              type="text"
              value={currentChoreName}
              onChange={(e) => setCurrentChoreName(e.target.value)}
              className="w-full mb-6 p-4 rounded-[1.25rem] border-none focus:ring-2 focus:ring-[#7B8CC1] text-black font-semibold shadow-sm"
              style={accentGradient}
            />

            <label className="block text-[10px] font-bold text-slate-500 mb-2 ml-2 uppercase tracking-widest">Reflection</label>
            <textarea
              value={currentEntryText}
              onChange={(e) => setCurrentEntryText(e.target.value)}
              placeholder="How did it go?..."
              className="w-full h-64 p-5 rounded-[1.5rem] border-none focus:ring-2 focus:ring-[#7B8CC1] resize-none text-black font-medium shadow-sm placeholder-black/40"
              style={accentGradient}
            />

            <button
              onClick={handleSave}
              className="w-full mt-6 py-4 rounded-[1.5rem] shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-white/20"
              style={accentGradient}
            >
              <Save className="w-5 h-5 text-black" />
              <span className="text-black font-bold uppercase tracking-wider text-sm">Save Journal</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- LIST VIEW ---
  return (
    <div className="p-6" style={backgroundStyle}>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-medium text-slate-900">Daily Journal</h1>

        <div className="space-y-4">
          {chores.map((chore, index) => (
            <div
              key={index}
              className="w-full rounded-[2.5rem] p-5 flex items-center justify-between shadow-xl border border-white/10"
              style={containerStyle}
            >
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">{chore}</h3>
                <p className="text-xs text-slate-600 line-clamp-2 italic font-medium">
                  {entries[index] || "No notes yet..."}
                </p>
              </div>
              <button
                onClick={() => handlePencilClick(index)}
                className="w-12 h-12 rounded-[1.25rem] flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition-all flex-shrink-0 border border-white/20"
                style={accentGradient}
              >
                <Pencil className="w-5 h-5 text-black" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
