'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/common/getText';

interface LocaleString {
  en: string;
  ta: string;
}

interface DropdownItem {
  title: LocaleString;
  link: string;
}

interface MenuItem {
  title: LocaleString;
  link: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface Navigation {
  logo?: {
    asset?: {
      url?: string;
    };
  };
  headline?: LocaleString;
  subheadline?: LocaleString;
  menuItems?: MenuItem[];
  themeToggle?: boolean;
}

interface NavigationBarProps {
  navigation: Navigation;
}

export default function NavigationBar({ navigation }: NavigationBarProps) {
  const { logo, menuItems = [], themeToggle = true } = navigation;
  const [mounted, setMounted] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (dropdownOpen) setDropdownOpen(null);
      if (themeMenuOpen) setThemeMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen, themeMenuOpen]);

  if (!mounted) return null;

  return (
    <header className={`sticky top-0 z-50 ${
      theme === 'dark' 
        ? 'bg-dmk-dark-background text-dmk-dark-text' 
        : 'bg-dmk-light-background text-dmk-light-text'
    } shadow-sm border-b ${
      theme === 'dark' 
        ? 'border-dmk-dark-border' 
        : 'border-dmk-light-border'
    }`}>
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo and Headline */}
        <div className="flex items-center space-x-4">
          {logo?.asset?.url && (
            <Image
              src={logo.asset.url}
              alt={getText({ en: 'DMK Logo', ta: 'திமுக சின்னம்' }, currentLanguage)}
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
            />
          )}
        </div>
        
        {/* <div className="flex-1 text-center">
          {navigation.headline && (
            <h1 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-dmk-dark-primary' : 'text-dmk-light-primary'
            }`}>
              {getText(navigation.headline, currentLanguage)}
            </h1>
          )}
          {navigation.subheadline && (
            <p className={`text-sm ${
              theme === 'dark' ? 'text-dmk-dark-secondary' : 'text-dmk-light-secondary'
            }`}>
              {getText(navigation.subheadline, currentLanguage)}
            </p>
          )}
        </div> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const href = item.link === '/home' ? '/' : item.link;
            const isActive = pathname === href;
            const itemTitle = getText(item.title, currentLanguage);

            return (
              <div key={itemTitle} className="relative group">
                <div className="flex items-center">
                  <Link
                    href={href}
                    className={`px-3 py-2 text-sm font-medium ${
                      isActive 
                        ? 'text-dmk-red' 
                        : theme === 'dark' 
                          ? 'text-dmk-dark-text hover:text-dmk-red' 
                          : 'text-dmk-light-text hover:text-dmk-red'
                    } transition-colors`}
                  >
                    {itemTitle}
                  </Link>

                  {item.hasDropdown && (
                    <svg
                      className={`ml-1 h-4 w-4 ${
                        theme === 'dark' 
                          ? 'text-dmk-dark-secondary' 
                          : 'text-dmk-light-secondary'
                      } group-hover:text-dmk-red`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>

                {item.hasDropdown && item.dropdownItems && (
                  <div className={`absolute left-0 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 ${
                    theme === 'dark' 
                      ? 'bg-dmk-dark-background ring-dmk-dark-border' 
                      : 'bg-dmk-light-background ring-dmk-light-border'
                  }`}>
                    <div className="py-1">
                      {item.dropdownItems.map((drop) => {
                        const dropTitle = getText(drop.title, currentLanguage);
                        const isDropActive = pathname === drop.link;
                        
                        return (
                          <Link
                            key={dropTitle}
                            href={drop.link}
                            className={`block px-4 py-2 text-sm ${
                              isDropActive
                                ? 'bg-dmk-red text-white'
                                : theme === 'dark'
                                  ? 'text-dmk-dark-text hover:bg-dmk-dark-hover'
                                  : 'text-dmk-light-text hover:bg-dmk-light-hover'
                            }`}
                          >
                            {dropTitle}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          {themeToggle && (
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setThemeMenuOpen(!themeMenuOpen);
                }}
                className={`p-2 rounded-full ${
                  theme === 'dark' 
                    ? 'hover:bg-dmk-dark-hover' 
                    : 'hover:bg-dmk-light-hover'
                }`}
                aria-label={getText({ en: 'Toggle theme', ta: 'தீம் மாற்று' }, currentLanguage)}
              >
                {theme === 'dark' ? '🌙' : '☀️'}
              </button>

              {themeMenuOpen && (
                <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg ring-1 ring-opacity-5 z-50 ${
                  theme === 'dark' 
                    ? 'bg-dmk-dark-background ring-dmk-dark-border' 
                    : 'bg-dmk-light-background ring-dmk-light-border'
                }`}>
                  <div className="py-1">
                    <button
                      onClick={() => setTheme('light')}
                      className={`block w-full px-4 py-2 text-left text-sm ${
                        theme === 'light'
                          ? 'bg-dmk-red text-white'
                          : theme === 'dark'
                            ? 'text-dmk-dark-text hover:bg-dmk-dark-hover'
                            : 'text-dmk-light-text hover:bg-dmk-light-hover'
                      }`}
                    >
                      {getText({ en: 'Light', ta: 'வெளிர்' }, currentLanguage)}
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`block w-full px-4 py-2 text-left text-sm ${
                        theme === 'dark'
                          ? 'bg-dmk-red text-white'
                          : theme === 'dark'
                            ? 'text-dmk-dark-text hover:bg-dmk-dark-hover'
                            : 'text-dmk-light-text hover:bg-dmk-light-hover'
                      }`}
                    >
                      {getText({ en: 'Dark', ta: 'இருள்' }, currentLanguage)}
                    </button>
                    <button
                      onClick={() => setTheme('system')}
                      className={`block w-full px-4 py-2 text-left text-sm ${
                        theme === 'system'
                          ? 'bg-dmk-red text-white'
                          : theme === 'dark'
                            ? 'text-dmk-dark-text hover:bg-dmk-dark-hover'
                            : 'text-dmk-light-text hover:bg-dmk-light-hover'
                      }`}
                    >
                      {getText({ en: 'System', ta: 'அமைப்பு' }, currentLanguage)}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full ${
              theme === 'dark' 
                ? 'hover:bg-dmk-dark-hover' 
                : 'hover:bg-dmk-light-hover'
            }`}
            aria-label={getText({ en: 'Toggle menu', ta: 'மெனுவை மாற்று' }, currentLanguage)}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t ${
          theme === 'dark' 
            ? 'bg-dmk-dark-background border-dmk-dark-border' 
            : 'bg-dmk-light-background border-dmk-light-border'
        }`}>
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => {
              const href = item.link === '/home' ? '/' : item.link;
              const isActive = pathname === href;
              const itemTitle = getText(item.title, currentLanguage);
              const isOpen = dropdownOpen === itemTitle;

              return (
                <div key={itemTitle} className={`border-b ${
                  theme === 'dark' 
                    ? 'border-dmk-dark-border' 
                    : 'border-dmk-light-border'
                } pb-2 last:border-0`}>
                  <div className="flex justify-between items-center">
                    <Link
                      href={href}
                      onClick={() => {
                        if (!item.hasDropdown) setMobileMenuOpen(false);
                      }}
                      className={`block py-2 text-sm font-medium ${
                        isActive
                          ? 'text-dmk-red'
                          : theme === 'dark'
                            ? 'text-dmk-dark-text'
                            : 'text-dmk-light-text'
                      }`}
                    >
                      {itemTitle}
                    </Link>

                    {item.hasDropdown && (
                      <button
                        onClick={() => setDropdownOpen(isOpen ? null : itemTitle)}
                        className="p-2"
                      >
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          } ${
                            theme === 'dark' 
                              ? 'text-dmk-dark-secondary' 
                              : 'text-dmk-light-secondary'
                          }`}
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
                    )}
                  </div>

                  {item.hasDropdown && isOpen && item.dropdownItems && (
                    <div className={`pl-4 mt-1 space-y-1 ${
                      theme === 'dark' 
                        ? 'border-l border-dmk-dark-border' 
                        : 'border-l border-dmk-light-border'
                    }`}>
                      {item.dropdownItems.map((drop) => {
                        const dropTitle = getText(drop.title, currentLanguage);
                        const isDropActive = pathname === drop.link;
                        
                        return (
                          <Link
                            key={dropTitle}
                            href={drop.link}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block py-1.5 text-sm ${
                              isDropActive
                                ? 'text-dmk-red'
                                : theme === 'dark'
                                  ? 'text-dmk-dark-secondary hover:text-dmk-red'
                                  : 'text-dmk-light-secondary hover:text-dmk-red'
                            }`}
                          >
                            {dropTitle}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-2 flex justify-between items-center">
              <LanguageSwitcher mobileView />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}