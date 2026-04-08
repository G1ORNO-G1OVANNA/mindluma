import { Home, BookText, Users } from "lucide-react";

interface BottomNavProps {
  activePage: 'home' | 'journal' | 'connect';
  setActivePage: (page: 'home' | 'journal' | 'connect') => void;
}

export function BottomNav({ activePage, setActivePage }: BottomNavProps) {
  const navItems = [
    { id: 'home' as const, icon: Home, label: "Home" },
    { id: 'journal' as const, icon: BookText, label: "Journal" },
    { id: 'connect' as const, icon: Users, label: "Connect" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto px-4">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className="flex flex-col items-center justify-center gap-1 flex-1"
            >
              <div
                className={`p-3 rounded-[1.25rem] transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-500"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <span
                className={`text-xs ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
