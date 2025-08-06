import { useState, useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import EditableContent from '@/components/EditableContent';

const notices = [
  { id: 1, text: 'Admission for academic year 2025-26 now open', link: '/admissions' },
  { id: 2, text: 'Parent-Teacher meeting scheduled for April 25, 2025', link: '/events/parent-teacher-meeting' },
  { id: 3, text: 'Summer camp registration starts on May 15', link: '/events/summer-camp' },
  { id: 4, text: 'New sports facilities inaugurated - Basketball and Tennis courts open for students', link: '/campus-life/sports' },
];

const NoticeTicker = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  // Auto rotate notices
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex(prev => (prev + 1) % notices.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Pause rotation on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume rotation on mouse leave
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="bg-school-primary text-white py-3 sticky top-0 z-40 animate-fade-in" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto flex items-center px-4">
        <div className="flex items-center justify-center rounded-full bg-white/20 w-8 h-8 mr-3">
          <Bell className="flex-shrink-0" size={18} />
        </div>
        <EditableContent
          id="notice-label"
          type="text"
          content="Notice:"
          onSave={handleSave}
          className="font-medium mr-4 hidden sm:block"
        />
        <div className="overflow-hidden flex-1 relative h-6">
          {notices.map((notice, index) => (
            <div
              key={notice.id}
              className={`whitespace-nowrap absolute w-full transition-all duration-500 ${
                index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a href={notice.link} className="hover:underline">
                <EditableContent
                  id={`notice-${notice.id}-text`}
                  type="text"
                  content={notice.text}
                  onSave={handleSave}
                  className="inline-block"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex ml-4 space-x-1">
          {notices.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-2 h-2 p-0 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white/40'}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to notice ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeTicker;
