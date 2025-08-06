import React, { useState, useRef, useEffect } from 'react';
import { useEditableContent } from '@/hooks/use-editable-content';

interface Position {
  x: number;
  y: number;
}

interface DraggableElementProps {
  id: string;
  type: 'text' | 'image' | 'video' | 'button';
  initialPosition?: Position;
  children: React.ReactNode;
  onPositionChange?: (position: Position) => void;
  onResize?: (size: { width: number; height: number }) => void;
  style?: React.CSSProperties;
}

const DraggableElement: React.FC<DraggableElementProps> = ({
  id,
  type,
  initialPosition = { x: 0, y: 0 },
  children,
  onPositionChange,
  onResize,
  style = {}
}) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [size, setSize] = useState({ width: 'auto', height: 'auto' });
  const elementRef = useRef<HTMLDivElement>(null);
  const { isEditing } = useEditableContent(id, 'section', {});

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isEditing) return;
    
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isResizeHandle = e.target === element.querySelector('.resize-handle');

    if (isResizeHandle) {
      setIsResizing(true);
    } else {
      setIsDragging(true);
    }

    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = rect.left;
    const startTop = rect.top;
    const startWidth = rect.width;
    const startHeight = rect.height;

    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = startWidth + (e.clientX - startX);
        const newHeight = startHeight + (e.clientY - startY);
        setSize({ width: `${newWidth}px`, height: `${newHeight}px` });
        onResize?.({ width: newWidth, height: newHeight });
      } else {
        const newX = startLeft + (e.clientX - startX);
        const newY = startTop + (e.clientY - startY);
        setPosition({ x: newX, y: newY });
        onPositionChange?.({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={elementRef}
      className={`relative ${isEditing ? 'cursor-move' : ''}`}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        ...style
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
      {isEditing && (
        <>
          <div className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-blue-500 opacity-50" />
          <div className="absolute -top-6 left-0 bg-gray-800 text-white px-2 py-1 rounded text-sm">
            {type}
          </div>
        </>
      )}
    </div>
  );
};

export default DraggableElement; 