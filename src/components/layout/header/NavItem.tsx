
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  item: {
    label: string;
    link: string;
    submenu?: Array<{ label: string; link: string }>;
  };
  setIsOpen: (isOpen: boolean) => void;
}

const NavItem = ({ item, setIsOpen }: NavItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsDropdownOpen(true)} 
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Link
        to={item.link}
        className="nav-link flex items-center px-3 py-2 text-sm font-medium hover:text-school-accent transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
        {item.submenu && <ChevronDown size={16} className="ml-1" />}
      </Link>

      {item.submenu && isDropdownOpen && (
        <div className="absolute left-0 mt-1 w-56 origin-top-left bg-white dark:bg-gray-800 border rounded-md shadow-lg z-50 animate-fade-in">
          <div className="py-1">
            {item.submenu.map((submenuItem, idx) => (
              <Link
                key={idx}
                to={submenuItem.link}
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
              >
                {submenuItem.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavItem;
