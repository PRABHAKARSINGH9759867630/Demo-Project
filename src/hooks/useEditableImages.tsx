import { useEffect } from 'react';
import { useImageEditor } from '@/context/ImageEditorContext';

export const useEditableImages = () => {
  const { isEditingEnabled } = useImageEditor();

  useEffect(() => {
    if (!isEditingEnabled) return;

    const handleDoubleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' && !target.closest('.editable-image')) {
        e.preventDefault();
        const img = target as HTMLImageElement;
        const id = img.getAttribute('data-id') || `img-${Math.random().toString(36).substr(2, 9)}`;
        img.setAttribute('data-id', id);
        img.classList.add('editable-image', 'cursor-pointer', 'hover:ring-2', 'hover:ring-primary/50');
        
        // Create a temporary EditableImage component
        const tempDiv = document.createElement('div');
        tempDiv.style.display = 'none';
        document.body.appendChild(tempDiv);
        
        // Import and render EditableImage
        import('@/components/EditableImage').then(({ default: EditableImage }) => {
          const root = document.createElement('div');
          tempDiv.appendChild(root);
          
          // @ts-ignore
          const ReactDOM = require('react-dom');
          ReactDOM.render(
            <EditableImage
              src={img.src}
              alt={img.alt || ''}
              id={id}
              className={img.className}
              style={img.style}
            />,
            root
          );
        });
      }
    };

    document.addEventListener('dblclick', handleDoubleClick);
    return () => {
      document.removeEventListener('dblclick', handleDoubleClick);
    };
  }, [isEditingEnabled]);
}; 