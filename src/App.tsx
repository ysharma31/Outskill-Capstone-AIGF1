import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import SupabaseTest from './components/SupabaseTest';
import MillsTest from './components/MillsTest';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard' | 'test' | 'mills'>('mills');

  const handleNavigation = (section: string) => {
    if (section === 'dashboard') {
      setCurrentView('dashboard');
    } else if (section === 'test') {
      setCurrentView('test');
    } else if (section === 'mills') {
      setCurrentView('mills');
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
      ) : currentView === 'mills' ? (
        <MillsTest />
      ) : (
        <Dashboard onNavigate={handleNavigation} />
      )}
    </>
  );
}

export default App;
