import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  const handleNavigation = (section: string) => {
    if (section === 'dashboard') {
      setCurrentView('dashboard');
    } else if (section === 'landing') {
      setCurrentView('landing');
    }
  };

  return (
    <ThemeProvider>
      {currentView === 'landing' ? (
        <LandingPage onNavigate={handleNavigation} />
      ) : (
        <Dashboard onNavigate={handleNavigation} />
      )}
    </ThemeProvider>
  );
}

export default App;
