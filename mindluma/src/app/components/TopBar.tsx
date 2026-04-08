import { useState } from 'react';
import { Menu, Search, User, Bell, Shield, HelpCircle, Info, X } from 'lucide-react';

interface TopBarProps {
  onSearch?: (query: string) => void;
  onMenuItemClick?: (page: string) => void;
}

export function TopBar({ onSearch, onMenuItemClick }: TopBarProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchableItems = [
    "Meditation",
    "Yoga",
    "Diet",
    "Sleep",
    "Heart Rate",
    "Doodle",
    "Journal",
    "Connect",
    "Home"
  ];

  const filteredSuggestions = searchableItems.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (item: string) => {
    setSearchQuery(item);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(item);
    }
  };

  const menuItems = [
    { icon: User, label: "Profile", page: "profile" },
    { icon: Bell, label: "Notifications", page: "notifications" },
    { icon: Shield, label: "Permissions", page: "permissions" },
    { icon: HelpCircle, label: "Help and Support", page: "help" },
    { icon: Info, label: "About", page: "about" },
  ];

  const handleMenuItemClick = (page: string) => {
    setMenuOpen(false);
    if (onMenuItemClick) {
      onMenuItemClick(page);
    }
  };

  return (
    <>
      <div className="bg-#E8EBE0 shadow-md">
        <div className="flex items-center gap-3 p-4 max-w-md mx-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-3 hover:bg-gray-100 rounded-[1.25rem] transition-colors"
          >
            <Menu className="w-6 h-6 text-slate-700" />
          </button>

          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search activities, pages..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => searchQuery && setShowSuggestions(true)}
              className="w-full pl-12 pr-6 py-3 rounded-full bg-gray-100 border-2 border-transparent focus:border-blue-400 focus:outline-none text-slate-800 placeholder-slate-400"
            />

            {/* Search Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-[1.5rem] bg-white shadow-xl z-30 overflow-hidden">
                {filteredSuggestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(item)}
                    className="w-full px-6 py-3 text-left hover:bg-gray-100 transition-colors text-slate-800"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close suggestions */}
      {showSuggestions && (
        <div
          className="fixed inset-0 z-20"
          onClick={() => setShowSuggestions(false)}
        />
      )}

      {/* Menu Overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-white shadow-2xl z-50 animate-in slide-in-from-left">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl text-slate-800">Menu</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-[1rem] transition-colors"
                >
                  <X className="w-6 h-6 text-slate-700" />
                </button>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      className="w-full flex items-center gap-4 p-4 rounded-[1.5rem] hover:bg-gray-100 transition-colors text-left"
                      onClick={() => handleMenuItemClick(item.page)}
                    >
                      <div className="w-10 h-10 rounded-[1rem] bg-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-slate-800">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}