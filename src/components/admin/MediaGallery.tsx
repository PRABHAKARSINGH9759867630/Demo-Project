import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'icon';
  url: string;
  thumbnail?: string;
  name: string;
  category: string;
  tags: string[];
}

interface MediaGalleryProps {
  onSelect: (item: MediaItem) => void;
  onUpload?: (file: File) => Promise<void>;
}

const defaultMedia: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200',
    name: 'School Building',
    category: 'education',
    tags: ['school', 'building', 'architecture']
  },
  {
    id: '2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200',
    name: 'Students in Class',
    category: 'education',
    tags: ['students', 'classroom', 'learning']
  },
  {
    id: '3',
    type: 'video',
    url: 'https://example.com/video1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=200',
    name: 'Campus Tour',
    category: 'education',
    tags: ['campus', 'tour', 'video']
  }
];

const categories = ['All', 'Education', 'Business', 'Nature', 'People', 'Technology'];

const MediaGallery: React.FC<MediaGalleryProps> = ({ onSelect, onUpload }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'image' | 'video' | 'icon'>('all');
  const [isUploading, setIsUploading] = useState(false);

  const filteredMedia = defaultMedia.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesType && matchesSearch;
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onUpload) return;

    setIsUploading(true);
    try {
      await onUpload(file);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Media Gallery</h2>

      <div className="space-y-6">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search media..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedType === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedType('all')}
            >
              All
            </Button>
            <Button
              variant={selectedType === 'image' ? 'default' : 'outline'}
              onClick={() => setSelectedType('image')}
            >
              Images
            </Button>
            <Button
              variant={selectedType === 'video' ? 'default' : 'outline'}
              onClick={() => setSelectedType('video')}
            >
              Videos
            </Button>
            <Button
              variant={selectedType === 'icon' ? 'default' : 'outline'}
              onClick={() => setSelectedType('icon')}
            >
              Icons
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Media Grid */}
        <ScrollArea className="h-[600px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMedia.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onSelect(item)}
              >
                <CardContent className="p-4">
                  <div className="aspect-video relative mb-2">
                    {item.type === 'image' && (
                      <img
                        src={item.thumbnail || item.url}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                    )}
                    {item.type === 'video' && (
                      <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold truncate">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>

        {/* Upload Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Upload Media</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Label htmlFor="file-upload">Choose a file</Label>
              <Input
                id="file-upload"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
            </div>
            <Button
              onClick={() => document.getElementById('file-upload')?.click()}
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery; 