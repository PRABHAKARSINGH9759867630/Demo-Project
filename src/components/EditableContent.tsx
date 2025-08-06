import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { useAdmin } from '@/context/AdminContext';
import { useEditableContent } from '@/hooks/use-editable-content';
import { Textarea } from '@/components/ui/textarea';

interface EditableContentProps {
  id: string;
  type: 'text' | 'heading' | 'image' | 'video' | 'button';
  content: string;
  onSave?: (content: string) => void;
  className?: string;
  children?: React.ReactNode;
}

const EditableContent: React.FC<EditableContentProps> = ({
  id,
  type,
  content,
  onSave,
  className = '',
  children
}) => {
  const { isAdminMode, isEditing } = useAdmin();
  const { content: storedContent, updateContent } = useEditableContent(id, type, content);
  const [isHovered, setIsHovered] = useState(false);
  const [editedContent, setEditedContent] = useState(storedContent);
  const [isEditingContent, setIsEditingContent] = useState(false);

  // Reset edited content when content prop changes
  useEffect(() => {
    setEditedContent(storedContent);
  }, [storedContent]);

  const handleDoubleClick = () => {
    if (!isAdminMode || !isEditing) return;
    setIsEditingContent(true);
  };

  const handleSave = () => {
    try {
      updateContent(editedContent);
      if (onSave) {
        onSave(editedContent);
      }
      setIsEditingContent(false);
      toast.success('Content saved successfully');
    } catch (error) {
      console.error('Error saving content:', error);
      toast.error('Failed to save content');
    }
  };

  const handleCancel = () => {
    setEditedContent(storedContent);
    setIsEditingContent(false);
    toast.info('Changes discarded');
  };

  const renderContent = () => {
    if (isEditingContent) {
      return (
        <Card className="p-4 shadow-lg border-2 border-primary">
          {type === 'text' || type === 'heading' ? (
            <Textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full min-h-[200px] font-sans text-base"
              autoFocus
            />
          ) : (
            <Input
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full"
              autoFocus
            />
          )}
          <div className="flex gap-2 mt-2">
            <Button onClick={handleSave} className="flex-1">Save</Button>
            <Button variant="outline" onClick={handleCancel} className="flex-1">Cancel</Button>
          </div>
        </Card>
      );
    }

    return children || storedContent;
  };

  return (
    <div
      className={`relative ${className} ${
        isAdminMode && isEditing 
          ? 'cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all duration-200' 
          : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={handleDoubleClick}
    >
      {renderContent()}
      
      {isAdminMode && isEditing && isHovered && !isEditingContent && (
        <div className="absolute -top-8 left-0 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg z-50">
          Double-click to edit {type}
        </div>
      )}
    </div>
  );
};

export default EditableContent; 