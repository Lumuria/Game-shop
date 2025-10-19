import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'الرئيسية', end: true },
    { 
      to: '/about', 
      label: 'من نحن',
      dropdown: [
        { to: '/about/team', label: 'فريق العمل' },
        { to: '/about/mission', label: 'رسالتنا' },
        { to: '/about/contact', label: 'اتصل بنا' }
      ]
    },
    { to: '/attacks', label: 'الهجمات' },
    { to: '/prevention', label: 'الحماية' },
    { to: '/tools', label: 'الأدوات' },
    { to: '/news', label: 'الأخبار' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-card shadow-2xl backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Enhanced */}
          <Link 
            to="/" 
            className="flex items-center gap-3 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 group"
            aria-label="الصفحة الرئيسية"
          >
            <div className="relative">
              <Shield className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="hidden sm:block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              الأمن السيبراني
            </span>
          </Link>

          {/* Desktop Navigation Enhanced */}
          <nav className="hidden md:flex items-center gap-2" role="navigation" aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <div 
                key={item.to} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.to)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => 
                    `nav-link-modern flex items-center gap-1 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive ? 'active bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                    }`
                  }
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </NavLink>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.to && (
                  <div className="absolute top-full left-0 mt-2 w-48 glass-card rounded-xl shadow-2xl border border-gray-200 animate-fade-in-up">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.to}
                          to={dropdownItem.to}
                          className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                        >
                          {dropdownItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/tools"
              className="btn-modern btn-primary px-6 py-3 hover-lift interactive-card"
            >
              ابدأ الآن
            </Link>
          </div>

          {/* Mobile Menu Button Enhanced */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="فتح القائمة"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 h-6 w-6 text-gray-600 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
              }`} />
              <X className={`absolute inset-0 h-6 w-6 text-gray-600 transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Enhanced */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-card rounded-2xl mt-4 mb-4 border border-gray-200">
            <nav className="py-4" role="navigation">
              {navItems.map((item) => (
                <div key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => 
                      `block px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 ${
                        isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                  {item.dropdown && (
                    <div className="pl-6 bg-gray-50">
                      {item.dropdown.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.to}
                          to={dropdownItem.to}
                          className="block px-6 py-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-6 pt-4">
                <Link
                  to="/tools"
                  className="btn-modern btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ابدأ الآن
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
