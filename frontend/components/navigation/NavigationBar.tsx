'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

interface DropdownItem {
  title: string;
  link: string;
}

interface MenuItem {
  title: string;
  link?: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

interface Navigation {
  logo?: {
    asset?: {
      url?: string;
    };
  };
  menuItems?: MenuItem[];
  themeToggle?: boolean;
}

interface NavigationBarProps {
  navigation: Navigation;
}

export default function NavigationBar({ navigation }: NavigationBarProps) {
  const { logo, menuItems = [], themeToggle = true } = navigation;
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { setTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // 1. Grab the current path
  const pathname = usePathname();

  return (
    <header style={{backgroundColor:"#ecf5fe"}} className="sticky top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          {logo?.asset?.url && (
            <Image
              src={logo.asset.url}
              alt="Company Logo"
              width={140}
              height={40}
              priority
            />
          )}
        </div>

        {/* Menu and Theme Toggle */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => {
              // 2. Normalize href (treat '/home' as '/')
              const href = item.link === '/home' ? '/'  : item.link || '';
              // 3. Determine if this top-level item is active
              const isActive = pathname === href;

              return (
                <div key={item.title} className="relative inline-block text-left">
                  <button
                    type="button"
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === item.title ? null : item.title
                      )
                    }
                    className="inline-flex items-center px-4 py-2"
                    aria-expanded={dropdownOpen === item.title}
                    aria-haspopup={item.hasDropdown}
                  >
                    {/* 4. Apply active class here */}
                    <Link
                      target={href === '/login' ? '_blank' : '_self'}
                      href={href === '/login' ? "https://app.bizmagnets.ai" : href}
                      onClick={() => setDropdownOpen(null)}
                      className={`${
                        isActive ? 'text-orange-500' : 'text-gray-700'
                      }`}
                    >
                      {item.title}
                    </Link>

                    {item.hasDropdown && (
                      <svg
                        className="ml-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown items */}
                  {item.hasDropdown &&
                    dropdownOpen === item.title &&
                    item.dropdownItems && (
                      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                          {item.dropdownItems.map((drop) => {
                            const subHref = drop.link;
                            const subActive = pathname === subHref;
                            return (
                              <Link
                                key={drop.link}
                                href={subHref}
                                onClick={() => setDropdownOpen(null)}
                               className={`block px-4 py-2 text-sm hover:bg-gray-100 
                                `}
                              >
                                {drop.title}
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

{mobileMenuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md px-4 py-2 space-y-2 z-40">
    {menuItems.map((item) => {
      const href = item.link === '/home' ? '/' : item.link || '';
      const isActive = pathname === href;
      const isOpen = dropdownOpen === item.title;

      return (
        <div key={item.title}>
          <div className="flex  items-center">
            <Link
              href={href}
              onClick={() => {
                if (!item.hasDropdown) setMobileMenuOpen(false);
                if (item.hasDropdown) setDropdownOpen(isOpen ? null : item.title);
              }}
              className={`block text-gray-700 dark:text-white py-2 ${
                isActive ? 'text-orange-500' : ''
              }`}
            >
              {item.title}
            </Link>

            {item.hasDropdown && (
              <button
                onClick={() =>
                  setDropdownOpen(isOpen ? null : item.title)
                }
                className="text-sm text-gray-700 dark:text-white px-2"
              >
                {isOpen ? '▲' : '▼'}
              </button>
            )}
          </div>

          {item.hasDropdown && isOpen && item.dropdownItems && (
            <div className="pl-4 space-y-1">
              {item.dropdownItems.map((drop) => (
                <Link
                  key={drop.link}
                  href={drop.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-gray-700 dark:text-white text-sm`}
                >
                  {drop.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    })}
  </div>
)}

          {/* Theme toggle */}
          <div className="md:hidden"
            >
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </div>
          {themeToggle && (
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen((prev) => !prev)}
                className="text-gray-700 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                🌓
              </button>

              {themeMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-50">
                  <button
                    onClick={() => setTheme('light')}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Light
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => setTheme('system')}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    System
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
