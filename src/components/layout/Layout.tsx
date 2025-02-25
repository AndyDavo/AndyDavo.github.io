import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import CompanyLogo from '../../assets/images/logos/CompanyNameAndLogo.svg';

interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'Logic ETL', path: '/solutions#logic-etl' },
      { label: 'Data ETL', path: '/solutions#data-etl' },
      { label: 'Analytics', path: '/solutions#analytics' },
      { label: 'Integration', path: '/solutions#integration' },
      { label: 'Consulting', path: '/solutions#consulting' },
    ],
  },
  { label: 'Use Cases', path: '/use-cases' },
  { label: 'For Stakeholders', path: '/stakeholders' },
  {
    label: 'Technology',
    path: '/technology',
    children: [
      { label: 'Our Approach', path: '/technology#approach' },
      { label: 'Agent Fleet', path: '/technology#agent-fleet' },
      { label: 'AI Capabilities', path: '/technology#ai-capabilities' },
      { label: 'Partners', path: '/technology#partners' },
      { label: 'Security', path: '/technology#security' },
    ],
  },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-light">
      <header className="bg-white shadow-card sticky top-0 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={CompanyLogo} alt="pensionable.ai" className="h-8" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navigation.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    // Dropdown
                    <div
                      className="group inline-flex items-center"
                      onMouseEnter={() => toggleDropdown(item.label)}
                      onMouseLeave={() => toggleDropdown(item.label)}
                    >
                      <button className="inline-flex items-center px-3 py-2 text-grey hover:text-navy">
                        {item.label}
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-card py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 text-grey hover:text-navy hover:bg-gradient-light"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular link
                    <Link
                      to={item.path}
                      className={`px-3 py-2 ${
                        location.pathname === item.path
                          ? 'text-navy font-medium'
                          : 'text-grey hover:text-navy'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 text-grey hover:text-navy"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full flex items-center justify-between px-4 py-2 text-grey hover:text-navy"
                      >
                        {item.label}
                        <svg
                          className={`ml-1 h-4 w-4 transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.label && (
                        <div className="bg-gradient-light">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-8 py-2 text-grey hover:text-navy"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 ${
                        location.pathname === item.path
                          ? 'text-navy font-medium'
                          : 'text-grey hover:text-navy'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white shadow-card mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-grey">
            © {new Date().getFullYear()} pensionable.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
