
import React, { useState, useRef } from 'react';
import { useEditableContent } from '@/hooks/use-editable-content';
import { Button } from '@/components/ui/button';
import { Upload, Check } from 'lucide-react';

type MapData = {
  imageUrl: string;
  title: string;
};

const LocationMap = () => {
  const defaultMapData: MapData = {
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
    title: "School map location"
  };
  
  const { content: mapData, updateContent, isAdmin, isEditing } = 
    useEditableContent<MapData>('school-map', 'image', defaultMapData, 'toggle-map-edit');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleUpload = () => {
    if (previewImage) {
      updateContent({
        ...mapData,
        imageUrl: previewImage
      });
      setPreviewImage(null);
    }
  };
  
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4 text-school-primary">Our Location</h3>
      <div className="rounded-lg overflow-hidden h-80 shadow-md relative">
        <img 
          src={previewImage || mapData.imageUrl} 
          alt={mapData.title} 
          className="w-full h-full object-cover" 
        />
        
        {isAdmin && isEditing && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
            
            {!previewImage ? (
              <Button 
                onClick={() => fileInputRef.current?.click()} 
                className="bg-white text-black hover:bg-gray-100"
              >
                <Upload className="w-4 h-4 mr-2" /> Choose Image
              </Button>
            ) : (
              <div className="space-y-3">
                <Button 
                  onClick={handleUpload} 
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Check className="w-4 h-4 mr-2" /> Save Image
                </Button>
                <Button 
                  onClick={() => setPreviewImage(null)} 
                  variant="outline" 
                  className="bg-white text-black hover:bg-gray-100 block"
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationMap;
