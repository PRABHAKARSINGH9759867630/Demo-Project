import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ThemeToggle from './ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';

interface DesktopNavProps {
  navItems: any[];
  setIsOpen: (isOpen: boolean) => void;
}

const DesktopNav = ({ navItems, setIsOpen }: DesktopNavProps) => {
  const location = useLocation();
  
  // Split navigation items into primary and secondary sets
  const primaryNavItems = navItems.slice(0, 6);
  const secondaryNavItems = navItems.slice(6);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {primaryNavItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.submenu ? (
                <>
                  <NavigationMenuTrigger 
                    className={cn(
                      "bg-transparent hover:bg-transparent hover:text-school-primary",
                      isActive(item.link) && "text-school-primary"
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {item.submenu.map((submenuItem: any, idx: number) => (
                        <li key={idx}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={submenuItem.link}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                isActive(submenuItem.link) && "bg-accent/50"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{submenuItem.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link
                  to={item.link}
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-school-primary focus:text-school-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActive(item.link) && "text-school-primary"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </NavigationMenuItem>
          ))}

          {secondaryNavItems.length > 0 && (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-school-primary">
                More
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {secondaryNavItems.map((item: any, index: number) => (
                    <li key={index}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.link}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive(item.link) && "bg-accent/50"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <ThemeToggle />
        <Button asChild variant="default" className="bg-school-primary hover:bg-school-dark text-white">
          <Link to="/parent-login" className="flex items-center">
            <LogIn size={18} className="mr-2" />
            Parent Login
          </Link>
        </Button>
      </div>
    </>
  );
};

export default DesktopNav;
