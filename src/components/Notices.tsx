import React from 'react';
import EditableContent from '@/components/EditableContent';
import { Megaphone } from 'lucide-react';

const Notices: React.FC = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  const notices = [
    {
      id: 'notice-1',
      content: 'Admission for academic year 2025-26 now open'
    },
    {
      id: 'notice-2',
      content: 'Parent-Teacher meeting scheduled for April 25, 2025'
    },
    {
      id: 'notice-3',
      content: 'Summer camp registration starts on May 15'
    },
    {
      id: 'notice-4',
      content: 'New sports facilities inaugurated - Basketball and Tennis courts open for students'
    }
  ];

  return (
    <div className="bg-primary text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Megaphone className="h-5 w-5 mr-2" />
            <span className="font-semibold mr-4">Notice:</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex space-x-8 animate-marquee">
              {notices.map((notice) => (
                <EditableContent
                  key={notice.id}
                  id={notice.id}
                  type="text"
                  content={notice.content}
                  onSave={handleSave}
                  className="whitespace-nowrap"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices; 