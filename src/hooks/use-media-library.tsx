import { useState, useCallback } from 'react';
import { uploadImage } from '@/utils/api';

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'icon';
  url: string;
  thumbnail?: string;
  name: string;
  category: string;
  tags: string[];
}

export function useMediaLibrary() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      // For images, use the existing uploadImage function
      if (file.type.startsWith('image/')) {
        const imageUrl = await uploadImage(file);
        
        const newItem: MediaItem = {
          id: Date.now().toString(),
          type: 'image',
          url: imageUrl,
          thumbnail: imageUrl,
          name: file.name,
          category: 'uploaded',
          tags: []
        };

        setMediaItems(prev => [...prev, newItem]);
      } else if (file.type.startsWith('video/')) {
        // For videos, we'll need to implement video upload
        // This is a placeholder for future implementation
        throw new Error('Video upload not implemented yet');
      } else {
        throw new Error('Unsupported file type');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload file');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteMedia = useCallback((id: string) => {
    setMediaItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateMedia = useCallback((id: string, updates: Partial<MediaItem>) => {
    setMediaItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, ...updates } : item
      )
    );
  }, []);

  const addTag = useCallback((id: string, tag: string) => {
    setMediaItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, tags: [...new Set([...item.tags, tag])] }
          : item
      )
    );
  }, []);

  const removeTag = useCallback((id: string, tag: string) => {
    setMediaItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, tags: item.tags.filter(t => t !== tag) }
          : item
      )
    );
  }, []);

  return {
    mediaItems,
    isLoading,
    error,
    handleUpload,
    deleteMedia,
    updateMedia,
    addTag,
    removeTag
  };
} 