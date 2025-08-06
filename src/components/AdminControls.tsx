import { useState } from 'react';
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
  const { isAdminMode, toggleAdminMode, isEditing, toggleEditing } = useAdmin();
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.setItem('adminMode', 'false');
    window.location.reload();
  };
  
  const handleLogin = () => {
    // Simple authentication - in a real app, this would call an API
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('adminToken', 'dummy-token');
      localStorage.setItem('adminMode', 'true');
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
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="sm"
            className="shadow-lg transform transition-transform hover:scale-105"
          >
            <Settings size={18} className="mr-1" />
            Admin Tools
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Admin Tools</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <Button 
              variant="outline" 
              className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleEditing}
            >
              <Edit size={16} className="mr-2" />
              {isEditing ? "Exit Edit Mode" : "Enter Edit Mode"}
            </Button>
            
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
              onClick={() => navigateToPageEditor('contact')}
            >
              <MessageSquare size={16} className="mr-2" />
              Edit Contact Page
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => navigateToPageEditor('gallery')}
            >
              <Image size={16} className="mr-2" />
              Edit Gallery
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => navigateToPageEditor('map')}
            >
              <Map size={16} className="mr-2" />
              Edit Location
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => navigateToPageEditor('downloads')}
            >
              <Download size={16} className="mr-2" />
              Manage Downloads
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Admin Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Login</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </DialogContent>
      </Dialog>
      </div>
  );
}; 