// components/LanguageSwitcher.tsx
'use client'

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Language = 'en' | 'ta';

interface LanguageSwitcherProps {
  mobileView?: boolean;
  className?: string;
}

export function LanguageSwitcher({ mobileView = false, className = '' }: LanguageSwitcherProps) {
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ்' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  if (mobileView) {
    return (
      <div className={`space-y-2 ${className}`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{currentLang.label}</span>
          <svg
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        {isOpen && (
          <div className="space-y-1 pl-4 border-l border-gray-200 dark:border-gray-600">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-1.5 px-3 rounded-md ${
                  currentLanguage === lang.code
                    ? 'text-orange-500 dark:text-orange-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{currentLang.label}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black/5 dark:ring-white/10 z-50"
          role="menu"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentLanguage(lang.code as Language);
                setIsOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm ${
                currentLanguage === lang.code
                  ? 'bg-orange-50 dark:bg-gray-700 text-orange-600 dark:text-orange-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } first:rounded-t-md last:rounded-b-md`}
              role="menuitem"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}