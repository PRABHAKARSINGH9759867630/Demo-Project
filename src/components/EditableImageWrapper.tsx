import React, { useEffect, useState } from 'react';
import { useImageEditor } from '@/context/ImageEditorContext';
import EditableImage from './EditableImage';

interface EditableImageWrapperProps {
  children: React.ReactNode;
}

const EditableImageWrapper: React.FC<EditableImageWrapperProps> = ({ children }) => {
  const { isEditingEnabled } = useImageEditor();
  const [processedContent, setProcessedContent] = useState<React.ReactNode>(children);

  useEffect(() => {
    if (!isEditingEnabled) {
      setProcessedContent(children);
      return;
    }

    const processNode = (node: React.ReactNode): React.ReactNode => {
      if (!React.isValidElement(node)) {
        return node;
      }

      const element = node as React.ReactElement;

      // If it's an img element, wrap it with EditableImage
      if (element.type === 'img') {
        const imgProps = element.props;
        const id = imgProps.id || `img-${Math.random().toString(36).substr(2, 9)}`;
        
        return (
          <EditableImage
            key={id}
            src={imgProps.src}
            alt={imgProps.alt || ''}
            id={id}
            className={imgProps.className}
            style={imgProps.style}
          />
        );
      }

      // If it has children, process them recursively
      if (element.props.children) {
        const processedChildren = React.Children.map(element.props.children, processNode);
        return React.cloneElement(element, element.props, processedChildren);
      }

      return element;
    };

    const processed = React.Children.map(children, processNode);
    setProcessedContent(processed);
  }, [children, isEditingEnabled]);

  return <>{processedContent}</>;
};

export default EditableImageWrapper; 