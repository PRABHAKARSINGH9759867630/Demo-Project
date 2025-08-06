import React, { createContext, useContext, useState } from 'react';
import { PhotoStyle } from '@/components/admin/PhotoEditor';

interface ImageEditorContextType {
  isEditingEnabled: boolean;
  toggleEditing: () => void;
  saveImageStyle: (imageId: string, style: PhotoStyle) => void;
  getImageStyle: (imageId: string) => PhotoStyle | undefined;
}

const ImageEditorContext = createContext<ImageEditorContextType | undefined>(undefined);

export const ImageEditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditingEnabled, setIsEditingEnabled] = useState(false);
  const [imageStyles, setImageStyles] = useState<Record<string, PhotoStyle>>({});

  const toggleEditing = () => {
    setIsEditingEnabled(prev => !prev);
  };

  const saveImageStyle = (imageId: string, style: PhotoStyle) => {
    setImageStyles(prev => ({
      ...prev,
      [imageId]: style
    }));
  };

  const getImageStyle = (imageId: string) => {
    return imageStyles[imageId];
  };

  return (
    <ImageEditorContext.Provider
      value={{
        isEditingEnabled,
        toggleEditing,
        saveImageStyle,
        getImageStyle
      }}
    >
      {children}
    </ImageEditorContext.Provider>
  );
};

export const useImageEditor = () => {
  const context = useContext(ImageEditorContext);
  if (context === undefined) {
    throw new Error('useImageEditor must be used within an ImageEditorProvider');
  }
  return context;
}; 