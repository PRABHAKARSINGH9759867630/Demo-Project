import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MediaItem } from '@/hooks/use-media-library';

interface MediaDetailsProps {
  item: MediaItem;
  onUpdate: (id: string, updates: Partial<MediaItem>) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}

const MediaDetails: React.FC<MediaDetailsProps> = ({
  item,
  onUpdate,
  onDelete,
  onClose
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedCategory, setEditedCategory] = useState(item.category);
  const [newTag, setNewTag] = useState('');

  const handleSave = () => {
    onUpdate(item.id, {
      name: editedName,
      category: editedCategory
    });
    setIsEditing(false);
  };

  const handleAddTag = () => {
    if (newTag.trim() && !item.tags.includes(newTag.trim())) {
      onUpdate(item.id, {
        tags: [...item.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    onUpdate(item.id, {
      tags: item.tags.filter(t => t !== tag)
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold">Media Details</h2>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>

        {/* Preview */}
        <div className="mb-6">
          {item.type === 'image' && (
            <img
              src={item.url}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          )}
          {item.type === 'video' && (
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
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

        {/* Details */}
        <div className="space-y-4">
          {isEditing ? (
            <>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave}>Save</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-semibold">Name</h3>
                <p>{item.name}</p>
              </div>
              <div>
                <h3 className="font-semibold">Type</h3>
                <p className="capitalize">{item.type}</p>
              </div>
              <div>
                <h3 className="font-semibold">Category</h3>
                <p className="capitalize">{item.category}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 px-2 py-1 rounded-full text-sm flex items-center gap-1"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  <Input
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleAddTag();
                      }
                    }}
                  />
                  <Button onClick={handleAddTag}>Add</Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setIsEditing(true)}>Edit</Button>
                <Button
                  variant="destructive"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaDetails; 