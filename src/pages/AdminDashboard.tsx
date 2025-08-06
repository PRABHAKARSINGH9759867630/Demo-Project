import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Image as ImageIcon, 
  Type as TextIcon, 
  Layout as LayoutIcon,
  Settings as SettingsIcon,
  FileText as FileIcon,
  GalleryHorizontal as GalleryIcon,
  Newspaper as NewsIcon,
  Users as UsersIcon,
  Calendar as CalendarIcon,
  MessageSquare as MessageIcon
} from "lucide-react";

const pages = [
  { id: "home", name: "Home Page", icon: <LayoutIcon className="w-4 h-4" /> },
  { id: "about", name: "About Us", icon: <FileIcon className="w-4 h-4" /> },
  { id: "gallery", name: "Gallery", icon: <GalleryIcon className="w-4 h-4" /> },
  { id: "news", name: "News & Events", icon: <NewsIcon className="w-4 h-4" /> },
  { id: "faculty", name: "Faculty", icon: <UsersIcon className="w-4 h-4" /> },
  { id: "calendar", name: "Academic Calendar", icon: <CalendarIcon className="w-4 h-4" /> },
  { id: "contact", name: "Contact", icon: <MessageIcon className="w-4 h-4" /> }
];

const tools = [
  { id: "photo", name: "Photo Editor", icon: <ImageIcon className="w-4 h-4" /> },
  { id: "text", name: "Text Editor", icon: <TextIcon className="w-4 h-4" /> },
  { id: "settings", name: "Page Settings", icon: <SettingsIcon className="w-4 h-4" /> }
];

const AdminDashboard = () => {
  const [selectedPage, setSelectedPage] = useState("");
  const [selectedTool, setSelectedTool] = useState("");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Pages</h2>
          <Select value={selectedPage} onValueChange={setSelectedPage}>
            <SelectTrigger>
              <SelectValue placeholder="Select a page" />
            </SelectTrigger>
            <SelectContent>
              {pages.map((page) => (
                <SelectItem key={page.id} value={page.id}>
                  <div className="flex items-center gap-2">
                    {page.icon}
                    {page.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="p-4 border-t">
          <h2 className="text-lg font-semibold mb-4">Tools</h2>
          <div className="space-y-2">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={selectedTool === tool.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setSelectedTool(tool.id)}
              >
                <div className="flex items-center gap-2">
                  {tool.icon}
                  {tool.name}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {selectedPage ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                {pages.find(p => p.id === selectedPage)?.name}
              </h1>
              <Button variant="outline">Save Changes</Button>
            </div>

            {selectedTool === "photo" && (
              <Card>
                <CardHeader>
                  <CardTitle>Photo Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <h3 className="font-medium">Upload Image</h3>
                      <Button className="w-full">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Choose Image
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-medium">Effects</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select effect" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="smooth">Smooth Hover</SelectItem>
                          <SelectItem value="bounce">Bounce Shift</SelectItem>
                          <SelectItem value="fade">Fade In & Out</SelectItem>
                          <SelectItem value="glow">Hover Glow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTool === "text" && (
              <Card>
                <CardHeader>
                  <CardTitle>Text Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <h3 className="font-medium">Content</h3>
                      <textarea
                        className="w-full h-32 p-2 border rounded-md"
                        placeholder="Enter your text here..."
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-medium">Text Effects</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select effect" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fade">Text Fade</SelectItem>
                          <SelectItem value="glow">Glow Text</SelectItem>
                          <SelectItem value="slide">Slide In Text</SelectItem>
                          <SelectItem value="bounce">Letter Bounce</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTool === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Page Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Page Title</h3>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Enter page title"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Meta Description</h3>
                      <textarea
                        className="w-full h-20 p-2 border rounded-md"
                        placeholder="Enter meta description"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a page to view and edit its content
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 