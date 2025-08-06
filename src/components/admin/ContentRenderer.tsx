
import { useEffect } from 'react';
import { useEditableContent } from '@/hooks/use-editable-content';

interface ContentRendererProps {
  contentId: string;
  defaultContent?: string;
}

const ContentRenderer = ({ contentId, defaultContent = '' }: ContentRendererProps) => {
  const { content, isEditing } = useEditableContent(`page-${contentId}`, 'section', { 
    html: defaultContent, 
    css: '' 
  });
  
  // Add custom CSS to the page
  useEffect(() => {
    if (!content.css) return;
    
    // Create a style element for the custom CSS
    const styleEl = document.createElement('style');
    styleEl.id = `style-${contentId}`;
    styleEl.innerHTML = content.css;
    document.head.appendChild(styleEl);
    
    return () => {
      // Clean up the style element when component unmounts
      const existingStyle = document.getElementById(`style-${contentId}`);
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, [content.css, contentId]);
  
  if (isEditing) {
    return null; // Don't render content when editing
  }
  
  if (!content.html) {
    return (
      <div className="py-8 text-center text-gray-500">
        {defaultContent || 'No content available. Edit this section to add content.'}
      </div>
    );
  }
  
  return (
    <div 
      className="content-renderer"
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  );
};

export default ContentRenderer;
