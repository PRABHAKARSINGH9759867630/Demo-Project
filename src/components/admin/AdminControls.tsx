import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Settings, Edit, Map, Image, FileText, Layout, Download, MessageSquare, Layers } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';
import { useAdmin } from '@/context/AdminContext';

export const AdminControls = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Initialize admin mode from localStorage
  useEffect(() => {
    const adminMode = localStorage.getItem('adminMode') === 'true';
    setIsAdminMode(adminMode);
  }, []);
  
  const handleToggleAdminMode = () => {
    // If not in admin mode, show login dialog
    if (!isAdminMode) {
      setShowLoginDialog(true);
      return;
    }
    
    // If already in admin mode, log out
    localStorage.setItem('adminMode', 'false');
    setIsAdminMode(false);
    toast.success('Admin mode disabled');
  };
  
  const handleLogin = () => {
    // Simple authentication - in a real app, this would call an API
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('adminMode', 'true');
      setIsAdminMode(true);
      setShowLoginDialog(false);
      toast.success('Admin mode enabled');
      
      // Clear form
      setUsername('');
      setPassword('');
    } else {
      toast.error('Invalid credentials');
    }
  };
  
  const navigateToPageEditor = (pageId: string) => {
    navigate(`/admin/edit/${pageId}`);
  };
  
  return (
    <>
      {/* Desktop Admin Controls */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 shadow-2xl">
        {isAdminMode && (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="shadow-lg bg-yellow-500 hover:bg-yellow-600 text-white transform transition-transform hover:scale-105"
              >
                <Edit size={18} className="mr-1" /> Edit Content
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] border-l border-gray-200 dark:border-gray-800">
              <SheetHeader>
                <SheetTitle className="text-xl font-heading">Edit Site Content</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => navigateToPageEditor('home')}
                >
                  <Layout size={16} className="mr-2" />
                  Edit Home Page
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => navigateToPageEditor('about')}
                >
                  <FileText size={16} className="mr-2" />
                  Edit About Page
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    const event = new CustomEvent('toggle-map-edit');
                    window.dispatchEvent(event);
                  }}
                >
                  <Map size={16} className="mr-2" />
                  Edit Location Map
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    const event = new CustomEvent('toggle-gallery-edit');
                    window.dispatchEvent(event);
                  }}
                >
                  <Image size={16} className="mr-2" />
                  Edit Gallery Images
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    const event = new CustomEvent('toggle-downloads-edit');
                    window.dispatchEvent(event);
                  }}
                >
                  <Download size={16} className="mr-2" />
                  Manage Downloads
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
        
        <Button
          onClick={handleToggleAdminMode}
          variant={isAdminMode ? "destructive" : "default"}
          size="sm"
          className="shadow-lg transform transition-transform hover:scale-105"
        >
          <Settings size={18} className="mr-1" />
          {isAdminMode ? "Exit Admin Mode" : "Enter Admin Mode"}
        </Button>
      </div>
      
      {/* Admin Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading">Administrator Login</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                autoComplete="username"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                autoComplete="current-password"
              />
            </div>
            <Button onClick={handleLogin} className="w-full mt-4">
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminControls;
