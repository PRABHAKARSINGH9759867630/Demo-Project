import React from 'react';
import EditableContent from '@/components/EditableContent';

const Example: React.FC = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <EditableContent
        id="hero-title"
        type="heading"
        content="Welcome to Our School"
        onSave={handleSave}
        className="text-4xl font-bold mb-4"
      />

      <EditableContent
        id="hero-description"
        type="text"
        content="We are committed to providing quality education and fostering a nurturing environment for our students."
        onSave={handleSave}
        className="text-lg text-gray-600 mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <EditableContent
            id="feature-1-title"
            type="heading"
            content="Academic Excellence"
            onSave={handleSave}
            className="text-xl font-semibold mb-2"
          />
          <EditableContent
            id="feature-1-description"
            type="text"
            content="Our curriculum is designed to challenge and inspire students to achieve their full potential."
            onSave={handleSave}
            className="text-gray-600"
          />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <EditableContent
            id="feature-2-title"
            type="heading"
            content="Modern Facilities"
            onSave={handleSave}
            className="text-xl font-semibold mb-2"
          />
          <EditableContent
            id="feature-2-description"
            type="text"
            content="State-of-the-art classrooms, laboratories, and sports facilities to enhance the learning experience."
            onSave={handleSave}
            className="text-gray-600"
          />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <EditableContent
            id="feature-3-title"
            type="heading"
            content="Expert Faculty"
            onSave={handleSave}
            className="text-xl font-semibold mb-2"
          />
          <EditableContent
            id="feature-3-description"
            type="text"
            content="Our teachers are highly qualified and dedicated to nurturing young minds."
            onSave={handleSave}
            className="text-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Example; 