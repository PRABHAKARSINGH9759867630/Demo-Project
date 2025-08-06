import React, { useState } from 'react';
import MediaGallery from '@/components/admin/MediaGallery';
import MediaDetails from '@/components/admin/MediaDetails';
import { useMediaLibrary, MediaItem } from '@/hooks/use-media-library';

const MediaLibrary: React.FC = () => {
  const {
    mediaItems,
    isLoading,
    error,
    handleUpload,
    deleteMedia,
    updateMedia
  } = useMediaLibrary();

  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const handleSelect = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Media Library</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Media Gallery */}
        <div className="lg:col-span-2">
          <MediaGallery
            onSelect={handleSelect}
            onUpload={handleUpload}
          />
        </div>

        {/* Media Details */}
        <div className="lg:col-span-1">
          {selectedItem ? (
            <MediaDetails
              item={selectedItem}
              onUpdate={updateMedia}
              onDelete={(id) => {
                deleteMedia(id);
                setSelectedItem(null);
              }}
              onClose={handleClose}
            />
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-500">
                Select a media item to view its details
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="mt-2">Uploading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaLibrary; 