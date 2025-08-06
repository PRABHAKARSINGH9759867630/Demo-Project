import { useState, useEffect } from 'react';

export type EditableContent = {
  id: string;
  type: 'text' | 'heading' | 'image' | 'video' | 'button' | 'hero' | 'banner' | 'section';
  content: any;
  lastModified: string;
};

// This is a simplified version. In a real app, this would connect to a database
const getFromStorage = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  const item = localStorage.getItem(key);
  if (!item) return defaultValue;
  try {
    return JSON.parse(item);
  } catch {
    return defaultValue;
  }
};

const saveToStorage = (key: string, value: any) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

export function useEditableContent<T>(
  contentId: string,
  contentType: EditableContent['type'],
  defaultContent: T,
  eventName?: string
) {
  const [content, setContent] = useState<T>(() => {
    // Initialize with stored content or default content
    const storedContent = getFromStorage<EditableContent | null>(
      `content-${contentId}`,
      null
    );
    
    if (storedContent && storedContent.type === contentType) {
      return storedContent.content;
    }
    
    // If no stored content, save default content
    const contentData: EditableContent = {
      id: contentId,
      type: contentType,
      content: defaultContent,
      lastModified: new Date().toISOString()
    };
    
    saveToStorage(`content-${contentId}`, contentData);
    return defaultContent;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if user is admin (simplified - would use auth in real app)
  useEffect(() => {
    const adminMode = localStorage.getItem('adminMode') === 'true';
    setIsAdmin(adminMode);
  }, []);

  // Listen for edit toggle events from admin controls
  useEffect(() => {
    if (eventName && isAdmin) {
      const handleToggleEdit = () => {
        setIsEditing(prev => !prev);
      };
      
      window.addEventListener(eventName, handleToggleEdit);
      return () => {
        window.removeEventListener(eventName, handleToggleEdit);
      };
    }
  }, [eventName, isAdmin]);

  const updateContent = (newContent: T) => {
    setContent(newContent);
    
    const contentData: EditableContent = {
      id: contentId,
      type: contentType,
      content: newContent,
      lastModified: new Date().toISOString()
    };
    
    saveToStorage(`content-${contentId}`, contentData);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return {
    content,
    updateContent,
    isEditing,
    toggleEditMode,
    isAdmin
  };
}
