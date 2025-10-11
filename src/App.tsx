import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import SupabaseTest from './components/SupabaseTest';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'test'>('test');

  const handleNavigation = (section: string) => {
    if (section === 'dashboard') {
      setCurrentView('dashboard');
    } else if (section === 'test') {
      setCurrentView('test');
    } else if (section === 'landing') {
      setCurrentView('landing');
    }
  };

  return (
    <>
      {currentView === 'landing' ? (
        <LandingPage onNavigate={handleNavigation} />
      ) : currentView === 'test' ? (
        <SupabaseTest />
      ) : (
        <Dashboard onNavigate={handleNavigation} />
      )}
    </>
  );
}

export default App;
