import { useState } from 'react';
import { SignupPage } from './components/SignupPage';
import { LoginPage } from './components/LoginPage';
import { MainApp } from './components/MainApp';

type View = 'signup' | 'login' | 'app';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('signup');

  return (
    <div className="min-h-screen">
      {currentView === 'signup' && <SignupPage onNavigate={() => setCurrentView('login')} />}
      {currentView === 'login' && <LoginPage onNavigate={() => setCurrentView('app')} onSignup={() => setCurrentView('signup')} />}
      {currentView === 'app' && <MainApp />}
    </div>
  );
}
