import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
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
  MessageSquare as MessageIcon,
  LogOut as LogOutIcon,
  Eye as EyeIcon,
  Save as SaveIcon,
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Strikethrough as StrikethroughIcon,
  AlignLeft as AlignLeftIcon,
  AlignCenter as AlignCenterIcon,
  AlignRight as AlignRightIcon,
  AlignJustify as AlignJustifyIcon,
  List as ListIcon,
  ListOrdered as ListOrderedIcon,
  Link as LinkIcon,
  Table as TableIcon
} from "lucide-react";
import Index from '../Index';
import About from '../About';
import Academics from '../Academics';
import Admissions from '../Admissions';
import CampusLife from '../CampusLife';
import Gallery from '../Gallery';
import NewsEvents from '../NewsEvents';
import Contact from '../Contact';

interface Page {
  id: string;
  title: string;
  path: string;
  sections: Section[];
}

interface Section {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'image' | 'gallery' | 'video' | 'slider' | 'table' | 'form' | 'grid';
  images?: string[];
  layout?: 'full' | 'half' | 'grid' | 'carousel';
  style?: {
    backgroundColor?: string;
    textColor?: string;
    padding?: string;
    margin?: string;
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    textAlign?: string;
    border?: string;
    borderRadius?: string;
    filter?: string;
  };
}

const tools = [
  { id: "photo", name: "Photo Editor", icon: <ImageIcon className="w-4 h-4" /> },
  { id: "text", name: "Text Editor", icon: <TextIcon className="w-4 h-4" /> },
  { id: "settings", name: "Page Settings", icon: <SettingsIcon className="w-4 h-4" /> }
];

const transitionEffects = [
  "Smooth Hover",
  "Scale & Glide",
  "Bounce Shift",
  "Fade In & Out",
  "Twist & Scale",
  "Hover Glow",
  "Floating Effects",
  "Bounce Magic",
  "Transform Pulse",
  "Opacity Shift",
  "Hover Bloom",
  "Slide & Shine",
  "Fade Surge",
  "Pulse Shift",
  "Zoom Magic",
  "Drift & Lift",
  "Glow Fade",
  "Flip Flicker",
  "Sway Bounce",
  "Stretch & Glow",
  "Tilt Rush",
  "Glow Bounce",
  "Hover Shift",
  "Ripple Effect",
  "Wave Glide",
  "Hover Swirl",
  "Pop & Zoom",
  "Bounce Spark",
  "Morph Motion",
  "Flip Elevate"
];

const textEffects = [
  "Text Fade",
  "Glow Text",
  "Slide In Text",
  "Text Pop",
  "Letter Bounce",
  "Text Morph",
  "Text Stretch",
  "Text Pulse",
  "Text Flicker",
  "Underline Hover",
  "Zoom In Text",
  "Wave Text",
  "Text Glow Ripple",
  "Text Fade Slide",
  "Typewriter Effect",
  "Text Shift",
  "Text Lift",
  "Expand Text",
  "Shadow Play",
  "Shimmer Text"
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [selectedTool, setSelectedTool] = useState<string>("");
  const [editingElement, setEditingElement] = useState<{id: string, type: 'title' | 'content' | 'image'} | null>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [showStylePanel, setShowStylePanel] = useState(false);
  const [selectedEffect, setSelectedEffect] = useState<string>("");

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }

    // Load pages data
    setPages([
      {
        id: '1',
        title: 'Home',
        path: '/',
        sections: [
          { 
            id: '1', 
            title: 'Notice Ticker', 
            content: 'Live notice updates from the school', 
            type: 'text',
            layout: 'full'
          },
          { 
            id: '2', 
            title: 'Hero Section', 
            content: 'Dynamic hero section with banners and call-to-action', 
            type: 'slider',
            layout: 'full'
          },
          { 
            id: '3', 
            title: 'About Section', 
            content: 'School overview and key features', 
            type: 'text',
            layout: 'full'
          },
          { 
            id: '4', 
            title: 'Programs', 
            content: 'Academic programs from Early Years to Senior School', 
            type: 'grid',
            layout: 'grid'
          },
          { 
            id: '5', 
            title: 'Testimonials', 
            content: 'Parent and student testimonials', 
            type: 'text',
            layout: 'full'
          },
          { 
            id: '6', 
            title: 'Campus Life', 
            content: 'Activities and facilities available at school', 
            type: 'grid',
            layout: 'grid'
          },
          { 
            id: '7', 
            title: 'News', 
            content: 'Latest news and updates from the school', 
            type: 'text',
            layout: 'full'
          },
          { 
            id: '8', 
            title: 'Call to Action', 
            content: 'Contact and inquiry section', 
            type: 'text',
            layout: 'full'
          }
        ]
      },
      {
        id: '2',
        title: 'About',
        path: '/about',
        sections: [
          { 
            id: '1', 
            title: 'Vision & Mission', 
            content: 'Our vision and mission', 
            type: 'text',
            layout: 'full'
          },
          { 
            id: '2', 
            title: 'History', 
            content: 'School history', 
            type: 'text',
            layout: 'full'
          }
        ]
      },
      {
        id: '3',
        title: 'Academics',
        path: '/academics',
        sections: [
          { 
            id: '1', 
            title: 'Curriculum', 
            content: 'Our curriculum details', 
            type: 'text',
            layout: 'full'
          },
          { 
            id: '2', 
            title: 'Faculty', 
            content: 'Our teaching staff', 
            type: 'gallery',
            layout: 'grid'
          }
        ]
      },
      {
        id: '4',
        title: 'Admissions',
        path: '/admissions',
        sections: [
          { 
            id: '1', 
            title: 'Admission Process', 
            content: 'How to apply', 
            type: 'text',
            layout: 'full'
          },
          { 
            id: '2', 
            title: 'Application Form', 
            content: '', 
            type: 'form',
            layout: 'full'
          }
        ]
      },
      {
        id: '5',
        title: 'Campus Life',
        path: '/campus-life',
        sections: [
          { 
            id: '1', 
            title: 'Activities', 
            content: 'Student activities', 
            type: 'gallery',
            layout: 'grid'
          },
          { 
            id: '2', 
            title: 'Events', 
            content: 'Upcoming events', 
            type: 'table',
            layout: 'full'
          }
        ]
      },
      {
        id: '6',
        title: 'Gallery',
        path: '/gallery',
        sections: [
          { 
            id: '1', 
            title: 'Photo Gallery', 
            content: '', 
            type: 'gallery',
            layout: 'grid',
            images: []
          }
        ]
      },
      {
        id: '7',
        title: 'News & Events',
        path: '/news-events',
        sections: [
          { 
            id: '1', 
            title: 'Latest News', 
            content: '', 
            type: 'text',
            layout: 'full'
          },
          { 
            id: '2', 
            title: 'Upcoming Events', 
            content: '', 
            type: 'table',
            layout: 'full'
          }
        ]
      },
      {
        id: '8',
        title: 'Contact',
        path: '/contact',
        sections: [
          { 
            id: '1', 
            title: 'Contact Information', 
            content: '', 
            type: 'text',
            layout: 'half'
          },
          { 
            id: '2', 
            title: 'Contact Form', 
            content: '', 
            type: 'form',
            layout: 'half'
          }
        ]
      }
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handlePageSelect = (page: Page) => {
    setSelectedPage(page);
    setEditingElement(null);
    setShowStylePanel(false);
  };

  const handleDoubleClick = (sectionId: string, type: 'title' | 'content' | 'image') => {
    if (!previewMode) {
      setEditingElement({ id: sectionId, type });
      setShowStylePanel(true);
    }
  };

  const handleUpdate = (sectionId: string, updates: Partial<Section>) => {
    if (selectedPage) {
      const updatedPages = pages.map(page => {
        if (page.id === selectedPage.id) {
          return {
            ...page,
            sections: page.sections.map(section =>
              section.id === sectionId ? { ...section, ...updates } : section
            )
          };
        }
        return page;
      });
      setPages(updatedPages);
    }
  };

  const handleStyleUpdate = (sectionId: string, styleUpdates: Partial<Section['style']>) => {
    if (selectedPage) {
      const updatedPages = pages.map(page => {
        if (page.id === selectedPage.id) {
          return {
            ...page,
            sections: page.sections.map(section =>
              section.id === sectionId 
                ? { 
                    ...section, 
                    style: { ...section.style, ...styleUpdates }
                  }
                : section
            )
          };
        }
        return page;
      });
      setPages(updatedPages);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, sectionId: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      
      const updatedPages = pages.map(page => {
        if (page.id === selectedPage?.id) {
          return {
            ...page,
            sections: page.sections.map(section =>
              section.id === sectionId 
                ? { 
                    ...section, 
                    images: section.type === 'image' 
                      ? [imageUrl] 
                      : [...(section.images || []), imageUrl]
                  }
                : section
            )
          };
        }
        return page;
      });
      
      setPages(updatedPages);
    }
  };

  const getEffectClass = (effect: string) => {
    const effectMap: { [key: string]: string } = {
      "Smooth Hover": "transition-all duration-300 hover:scale-105",
      "Scale & Glide": "transition-all duration-500 hover:scale-110 hover:translate-y-[-10px]",
      "Bounce Shift": "transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] hover:animate-bounce",
      "Fade In & Out": "transition-opacity duration-300 hover:opacity-75",
      "Twist & Scale": "transition-all duration-300 hover:scale-110 hover:rotate-3",
      "Hover Glow": "transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50",
      "Floating Effects": "transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl",
      "Bounce Magic": "transition-all duration-300 hover:animate-bounce",
      "Transform Pulse": "transition-all duration-300 hover:scale-105 animate-pulse",
      "Opacity Shift": "transition-opacity duration-300 hover:opacity-80",
      "Hover Bloom": "transition-all duration-300 hover:scale-110 hover:brightness-110",
      "Slide & Shine": "transition-all duration-300 hover:translate-x-2 hover:shadow-lg",
      "Fade Surge": "transition-all duration-300 hover:opacity-90 hover:scale-105",
      "Pulse Shift": "transition-all duration-300 hover:animate-pulse hover:translate-y-[-5px]",
      "Zoom Magic": "transition-all duration-300 hover:scale-125",
      "Drift & Lift": "transition-all duration-300 hover:translate-y-[-8px] hover:rotate-2",
      "Glow Fade": "transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/30",
      "Flip Flicker": "transition-all duration-300 hover:rotate-y-180",
      "Sway Bounce": "transition-all duration-300 hover:rotate-3 hover:animate-bounce",
      "Stretch & Glow": "transition-all duration-300 hover:scale-x-110 hover:shadow-lg",
      "Tilt Rush": "transition-all duration-300 hover:rotate-6 hover:scale-105",
      "Glow Bounce": "transition-all duration-300 hover:animate-bounce hover:shadow-lg hover:shadow-blue-500/50",
      "Hover Shift": "transition-all duration-300 hover:translate-x-4 hover:translate-y-[-4px]",
      "Ripple Effect": "transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30",
      "Wave Glide": "transition-all duration-300 hover:animate-wave",
      "Hover Swirl": "transition-all duration-300 hover:rotate-12 hover:scale-110",
      "Pop & Zoom": "transition-all duration-300 hover:scale-110 hover:animate-pulse",
      "Bounce Spark": "transition-all duration-300 hover:animate-bounce hover:brightness-110",
      "Morph Motion": "transition-all duration-300 hover:skew-x-12 hover:scale-105",
      "Flip Elevate": "transition-all duration-300 hover:rotate-y-180 hover:translate-y-[-5px]"
    };
    return effectMap[effect] || effectMap["Smooth Hover"];
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Helmet>
        <title>Admin Dashboard - Goenka School</title>
      </Helmet>

      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Pages</h2>
          <Select 
            value={selectedPage?.id} 
            onValueChange={(value) => {
              const page = pages.find(p => p.id === value);
              if (page) setSelectedPage(page);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a page" />
            </SelectTrigger>
            <SelectContent>
              {pages.map((page) => (
                <SelectItem key={page.id} value={page.id}>
                  <div className="flex items-center gap-2">
                    <LayoutIcon className="w-4 h-4" />
                    {page.title}
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

        <div className="p-4 border-t">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-600 hover:text-red-700"
            onClick={handleLogout}
          >
            <LogOutIcon className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Live Preview */}
        <div className="flex-1 p-6 overflow-auto border-r">
          {selectedPage ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{selectedPage.title}</h1>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setPreviewMode(!previewMode)}
                  >
                    <EyeIcon className="w-4 h-4 mr-2" />
                    {previewMode ? "Edit Mode" : "Preview"}
                  </Button>
                  <Button>
                    <SaveIcon className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>

              {/* Live Page Preview */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                {selectedPage.title === 'Home' && <Index />}
                {selectedPage.title === 'About' && <About />}
                {selectedPage.title === 'Academics' && <Academics />}
                {selectedPage.title === 'Admissions' && <Admissions />}
                {selectedPage.title === 'Campus Life' && <CampusLife />}
                {selectedPage.title === 'Gallery' && <Gallery />}
                {selectedPage.title === 'News & Events' && <NewsEvents />}
                {selectedPage.title === 'Contact' && <Contact />}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a page to view and edit its content
            </div>
          )}
        </div>

        {/* Tools Panel */}
        {selectedTool && (
          <div className="w-96 bg-white p-6 overflow-auto">
            {selectedTool === "photo" && (
              <Card>
                <CardHeader>
                  <CardTitle>Photo Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Upload Image</h3>
                      <Button className="w-full mt-2">
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Choose Image
                      </Button>
                    </div>
                    <div>
                      <h3 className="font-medium">Effects</h3>
                      <div className="mt-2">
                        <Select value={selectedEffect} onValueChange={setSelectedEffect}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select effect" />
                          </SelectTrigger>
                          <SelectContent>
                            {transitionEffects.map((effect) => (
                              <SelectItem key={effect} value={effect}>
                                {effect}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTool === "text" && (
              <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-lg">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <TextIcon className="h-5 w-5" />
                    Text Editor
                  </h2>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Formatting Tools */}
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <div className="flex flex-wrap gap-3">
                      {/* Text Style */}
                      <div className="flex gap-1 bg-white p-1 rounded-md shadow-sm">
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <BoldIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <ItalicIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <UnderlineIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <StrikethroughIcon className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Alignment */}
                      <div className="flex gap-1 bg-white p-1 rounded-md shadow-sm">
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <AlignLeftIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <AlignCenterIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <AlignRightIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <AlignJustifyIcon className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Lists */}
                      <div className="flex gap-1 bg-white p-1 rounded-md shadow-sm">
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <ListIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <ListOrderedIcon className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Insert */}
                      <div className="flex gap-1 bg-white p-1 rounded-md shadow-sm">
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <LinkIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 hover:bg-blue-50 hover:text-blue-600">
                          <TableIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Font Controls */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                      <Select>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                          <SelectItem value="xlarge">Extra Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                      <Select>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="arial">Arial</SelectItem>
                          <SelectItem value="times">Times New Roman</SelectItem>
                          <SelectItem value="roboto">Roboto</SelectItem>
                          <SelectItem value="opensans">Open Sans</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Color Controls */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                      <div className="flex gap-2 items-center">
                        <div className="relative">
                          <input type="color" className="w-10 h-10 rounded cursor-pointer border border-gray-300 shadow-sm" />
                        </div>
                        <Button variant="outline" size="sm" className="h-10 text-gray-600 hover:text-gray-800">
                          Reset
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                      <div className="flex gap-2 items-center">
                        <div className="relative">
                          <input type="color" className="w-10 h-10 rounded cursor-pointer border border-gray-300 shadow-sm" />
                        </div>
                        <Button variant="outline" size="sm" className="h-10 text-gray-600 hover:text-gray-800">
                          Reset
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content Editor */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      className="w-full h-40 p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your text here..."
                    />
                  </div>

                  {/* Text Effects */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Text Effects</label>
                    <Select value={selectedEffect} onValueChange={setSelectedEffect}>
                      <SelectTrigger className="bg-white border-gray-300">
                        <SelectValue placeholder="Select effect" />
                      </SelectTrigger>
                      <SelectContent>
                        {textEffects.map((effect) => (
                          <SelectItem key={effect} value={effect}>
                            {effect}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Spacing Controls */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Line Height</label>
                      <Select>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select line height" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Single</SelectItem>
                          <SelectItem value="1.5">1.5</SelectItem>
                          <SelectItem value="2">Double</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Letter Spacing</label>
                      <Select>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select spacing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="wide">Wide</SelectItem>
                          <SelectItem value="wider">Wider</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
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
                        value={selectedPage?.title}
                        onChange={(e) => {
                          if (selectedPage) {
                            setSelectedPage({
                              ...selectedPage,
                              title: e.target.value
                            });
                          }
                        }}
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
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; 