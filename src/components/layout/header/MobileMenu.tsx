import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ChevronDown, ChevronUp } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: any[];
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, navItems, setIsOpen }: MobileMenuProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  if (!isOpen) return null;
  
  const handleSubmenuToggle = (label: string) => {
    if (openSubmenu === label) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(label);
    }
  };
  
  return (
    <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
      <div className="container mx-auto py-4">
        <div className="max-h-[70vh] overflow-y-auto">
          {navItems.map((item, index) => (
            <div key={index} className="py-1 border-b border-gray-100 dark:border-gray-800 last:border-0">
              {item.submenu ? (
                <div>
                  <button
                    className={cn(
                      "flex items-center justify-between w-full px-4 py-2 text-base font-medium transition-colors",
                      isActive(item.link) 
                        ? "text-school-primary" 
                        : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                    onClick={() => handleSubmenuToggle(item.label)}
                  >
                    {item.label}
                    {openSubmenu === item.label ? 
                      <ChevronUp size={16} className="ml-1" /> :
                      <ChevronDown size={16} className="ml-1" />
                    }
                  </button>
                  {openSubmenu === item.label && (
                    <div className="pl-8 mt-1 space-y-1 bg-gray-50 dark:bg-gray-800 animate-fade-in">
                      {item.submenu.map((submenuItem: any, idx: number) => (
                        <Link
                          key={idx}
                          to={submenuItem.link}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            isActive(submenuItem.link)
                              ? "text-school-primary bg-gray-100 dark:bg-gray-700"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {submenuItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={cn(
                    "block px-4 py-2 text-base font-medium transition-colors",
                    isActive(item.link)
                      ? "text-school-primary"
                      : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 px-4 flex justify-between items-center">
          <ThemeToggle />
          <Link
            to="/parent-login"
            className="flex items-center justify-center w-3/4 bg-school-primary text-white px-4 py-2 rounded hover:bg-school-dark transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <LogIn size={18} className="mr-2" />
            Parent Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
