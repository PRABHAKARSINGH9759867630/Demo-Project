import React from 'react';
import { Link } from 'react-router-dom';
import EditableContent from '@/components/EditableContent';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Logo from './header/Logo';
import DesktopNav from './header/DesktopNav';
import MobileMenuButton from './header/MobileMenuButton';
import MobileMenu from './header/MobileMenu';
import { getNavItems } from './header/navigation';
import { Megaphone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const navItems = getNavItems();

  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  // Handle header background change and transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // When scrolled more than 50px, apply solid background
      if (currentScrollY > 50) {
        setIsScrolled(true);
        setIsAtTop(false);
      } else {
        setIsScrolled(false);
        // Only set isAtTop to true when completely at the top
        setIsAtTop(currentScrollY <= 5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add smooth scrolling behavior to the whole page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const navigationItems = [
    { id: 'nav-home', content: 'Home', path: '/' },
    { id: 'nav-about', content: 'About Us', path: '/about' },
    { id: 'nav-messages', content: 'Messages', path: '/messages' },
    { id: 'nav-mentors', content: 'Our Mentors', path: '/mentors' },
    { id: 'nav-academics', content: 'Academics', path: '/academics' },
    { id: 'nav-admission', content: 'Admission', path: '/admission' },
    { id: 'nav-more', content: 'More', path: '/more' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${isScrolled 
            ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
            : isAtTop 
              ? 'bg-transparent py-6' 
              : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4'}`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <EditableContent
              id="logo-text"
              type="heading"
              content="GD Goenka Rudrapur"
              onSave={handleSave}
              className="text-2xl font-bold text-primary"
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav navItems={navItems} setIsOpen={setIsOpen} />

          {/* Mobile Menu Button */}
          <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Mobile Menu Dropdown */}
        <MobileMenu isOpen={isOpen} navItems={navItems} setIsOpen={setIsOpen} />
      </header>
      <div className="h-24"></div> {/* Spacer to prevent content from hiding under fixed header */}
    </>
  );
};

export default Header;
