import { useState } from 'react';
import { TopBar } from './TopBar';
import { BottomNav } from './BottomNav';
import { Home } from './Home';
import { Journal } from './Journal';
import { Connect } from './Connect';
import { AIAssistant } from './AIAssistant';
import { ProfilePage } from './ProfilePage';
import { NotificationsPage } from './NotificationsPage';
import { PermissionsPage } from './PermissionsPage';
import { HelpPage } from './HelpPage';
import { AboutPage } from './AboutPage';

type Page = 'home' | 'journal' | 'connect' | 'profile' | 'notifications' | 'permissions' | 'help' | 'about';

export function MainApp() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [showAI, setShowAI] = useState(false);

  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    // Navigate to pages
    if (lowerQuery === 'home') {
      setActivePage('home');
    } else if (lowerQuery === 'journal') {
      setActivePage('journal');
    } else if (lowerQuery === 'connect') {
      setActivePage('connect');
    }
    // For activity searches (Meditation, Yoga, etc.), they will be handled by the Home component
    // Just make sure we're on the home page
    else if (['meditation', 'yoga', 'diet', 'sleep', 'heart rate', 'doodle'].includes(lowerQuery)) {
      setActivePage('home');
      // The Home component will handle showing the activity details
    }
  };

  const handleMenuItemClick = (page: string) => {
    setActivePage(page as Page);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar onSearch={handleSearch} onMenuItemClick={handleMenuItemClick} />
      <main className="flex-1 pb-24">
        {activePage === 'home' && <Home />}
        {activePage === 'journal' && <Journal />}
        {activePage === 'connect' && <Connect />}
        {activePage === 'profile' && <ProfilePage />}
        {activePage === 'notifications' && <NotificationsPage />}
        {activePage === 'permissions' && <PermissionsPage />}
        {activePage === 'help' && <HelpPage />}
        {activePage === 'about' && <AboutPage />}
      </main>
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
      <AIAssistant showAI={showAI} setShowAI={setShowAI} />
    </div>
  );
}