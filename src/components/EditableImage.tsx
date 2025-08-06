import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PhotoEditor, { PhotoStyle } from './admin/PhotoEditor';
import { useImageEditor } from '@/context/ImageEditorContext';

interface EditableImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  id: string;
}

const EditableImage: React.FC<EditableImageProps> = ({
  src,
  alt = '',
  className = '',
  style = {},
  id
}) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const { isEditingEnabled, saveImageStyle, getImageStyle: getSavedStyle } = useImageEditor();
  const savedStyle = getSavedStyle(id);

  // Load image from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`editable-image-${id}`);
    if (saved) setPreviewSrc(saved);
  }, [id]);

  const handleDoubleClick = () => {
    if (isEditingEnabled) {
      setIsEditorOpen(true);
    }
  };

  const handleSave = (newStyle: PhotoStyle) => {
    saveImageStyle(id, newStyle);
    setIsEditorOpen(false);
  };

  const getCombinedStyle = () => {
    return {
      ...style,
      ...savedStyle,
      filter: savedStyle?.filter || 'none',
    };
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setPreviewSrc(dataUrl);
        localStorage.setItem(`editable-image-${id}`, dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <img
          src={previewSrc || src}
          alt={alt}
          className={`${className} ${isEditingEnabled ? 'cursor-pointer hover:ring-2 hover:ring-primary/50' : ''}`}
          style={getCombinedStyle()}
          onDoubleClick={handleDoubleClick}
        />
        {isEditingEnabled && (
          <input
            type="file"
            accept="image/*"
            style={{ position: 'absolute', top: 8, right: 8, zIndex: 10, background: 'white', borderRadius: 4 }}
            onChange={handleFileChange}
            title="Browse and change image"
          />
        )}
      </div>

      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent className="max-w-4xl">
          <PhotoEditor
            imageUrl={previewSrc || src}
            onSave={handleSave}
            onCancel={() => setIsEditorOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditableImage; 