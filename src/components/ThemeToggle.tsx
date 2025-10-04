import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={toggleTheme}
        className="relative inline-flex items-center justify-center w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white dark:bg-gray-300 rounded-full shadow-md transform transition-transform duration-200 ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
        <Sun
          size={12}
          className={`absolute left-1 top-1 text-yellow-500 transition-opacity duration-200 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <Moon
          size={12}
          className={`absolute right-1 top-1 text-blue-400 transition-opacity duration-200 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </button>
    </div>
  );
}
