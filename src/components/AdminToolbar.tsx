import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useImageEditor } from '@/context/ImageEditorContext';
import { Image as ImageIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useAdmin } from '@/context/AdminContext';

const AdminToolbar: React.FC = () => {
  const { isAdminMode, isEditing, toggleEditing } = useAdmin();
  const { isEditingEnabled, toggleEditing: toggleImageEditing } = useImageEditor();

  if (!isAdminMode) return null;

  return (
    <Card className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 p-4 shadow-lg">
      <div className="flex items-center gap-4">
        <Button
          variant={isEditing ? 'default' : 'outline'}
          onClick={toggleEditing}
          className="min-w-[120px]"
        >
          {isEditing ? 'Stop Editing' : 'Start Editing'}
        </Button>
        <Button
          variant="destructive"
          onClick={() => {
            localStorage.removeItem('adminToken');
            localStorage.setItem('adminMode', 'false');
            window.location.reload();
          }}
        >
          Exit Admin Mode
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={isEditingEnabled ? "default" : "outline"}
                size="icon"
                onClick={toggleImageEditing}
                className="relative"
              >
                <ImageIcon className="h-4 w-4" />
                {isEditingEnabled && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isEditingEnabled ? 'Image Editing Enabled' : 'Enable Image Editing'}</p>
              <p className="text-xs text-muted-foreground">Double-click any image to edit</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
};

export default AdminToolbar; 