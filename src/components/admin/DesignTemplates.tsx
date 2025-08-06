import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Template {
  id: string;
  name: string;
  category: 'business' | 'education' | 'portfolio' | 'blog';
  thumbnail: string;
  description: string;
}

const templates: Template[] = [
  {
    id: 'edu-1',
    name: 'Modern Education',
    category: 'education',
    thumbnail: '/templates/education-1.jpg',
    description: 'A modern and clean design perfect for educational institutions.'
  },
  {
    id: 'edu-2',
    name: 'Classic Academy',
    category: 'education',
    thumbnail: '/templates/education-2.jpg',
    description: 'A traditional design with a professional look.'
  },
  {
    id: 'business-1',
    name: 'Corporate Pro',
    category: 'business',
    thumbnail: '/templates/business-1.jpg',
    description: 'Professional business template with modern features.'
  },
  {
    id: 'portfolio-1',
    name: 'Creative Portfolio',
    category: 'portfolio',
    thumbnail: '/templates/portfolio-1.jpg',
    description: 'Showcase your work with this creative portfolio template.'
  }
];

interface DesignTemplatesProps {
  onSelectTemplate: (template: Template) => void;
}

const DesignTemplates: React.FC<DesignTemplatesProps> = ({ onSelectTemplate }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<Template['category']>('education');

  const filteredTemplates = templates.filter(template => template.category === selectedCategory);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Choose a Template</h2>
      
      {/* Category Filter */}
      <div className="flex gap-4 mb-6">
        {['education', 'business', 'portfolio', 'blog'].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category as Template['category'])}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={template.thumbnail}
                alt={template.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <Button
                onClick={() => onSelectTemplate(template)}
                className="w-full"
              >
                Use Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DesignTemplates; 