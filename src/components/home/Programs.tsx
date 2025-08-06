import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import EditableContent from '@/components/EditableContent';
import EditableImage from '@/components/EditableImage';

const Programs = () => {
  const [activeTab, setActiveTab] = useState('early');

  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  const programs = [
    {
      id: 'early',
      title: 'Early Years prabhakar',
      ages: 'Ages 2-5',
      description: 'Nurturing early development through play-based learning and discovery.',
      image: '/lovable-uploads/p04.jpg',
      link: '/academics/early-years'
    },
    {
      id: 'primary',
      title: 'Primary School',
      ages: 'Ages 6-10',
      description: 'Building strong foundations through engaging curriculum and activities.',
      image: '/lovable-uploads/p03.jpg',
      link: '/academics/primary-school'
    },
    {
      id: 'middle',
      title: 'Middle School',
      ages: 'Ages 11-13',
      description: 'Developing critical thinking and subject specialization skills.',
      image: '/lovable-uploads/p02.jpg',
      link: '/academics/middle-school'
    },
    {
      id: 'senior',
      title: 'Senior School',
      ages: 'Ages 14-18',
      description: 'Preparing for higher education with specialized academic streams.',
      image: '/lovable-uploads/p01.jpg',
      link: '/academics/senior-school'
    }
  ];

  const activeProgram = programs.find(program => program.id === activeTab) || programs[0];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <EditableContent
            id="programs-title"
            type="heading"
            content="Academic Excellence"
            onSave={handleSave}
            className="text-3xl font-bold text-school-primary mb-4"
          />
          <div className="w-24 h-1 bg-school-accent mx-auto mb-6"></div>
          <EditableContent
            id="programs-description"
            type="text"
            content="We offer a comprehensive curriculum designed to nurture students at every stage of their educational journey."
            onSave={handleSave}
            className="max-w-3xl mx-auto text-gray-600 mb-12"
          />
        </div>

        {/* Program Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {programs.map((program) => (
            <button
              key={program.id}
              className={`px-5 py-3 rounded-md font-medium transition-colors ${
                activeTab === program.id
                  ? 'bg-school-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(program.id)}
            >
              <EditableContent
                id={`program-tab-${program.id}-title`}
                type="text"
                content={program.title}
                onSave={handleSave}
                className="inline-block"
              />
            </button>
          ))}
        </div>

        {/* Program Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          {/* Image Side */}
          <div className="order-2 md:order-1">
            <EditableImage
              id={`program-image-${activeProgram.id}`}
              src={activeProgram.image}
              alt={activeProgram.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <div className="inline-block px-3 py-1 bg-school-secondary/30 text-school-primary rounded-full mb-4">
              <EditableContent
                id={`program-${activeProgram.id}-ages`}
                type="text"
                content={activeProgram.ages}
                onSave={handleSave}
                className="inline-block"
              />
            </div>
            <EditableContent
              id={`program-content-${activeProgram.id}-title`}
              type="heading"
              content={activeProgram.title}
              onSave={handleSave}
              className="text-3xl font-bold text-school-primary mb-4"
            />
            <EditableContent
              id={`program-${activeProgram.id}-description`}
              type="text"
              content={activeProgram.description}
              onSave={handleSave}
              className="text-gray-700 mb-8 text-lg"
            />

            <div className="space-y-4 mb-8">
              {activeTab === 'early' && (
                <>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="early-feature-1"
                      type="text"
                      content="Child-centered approach focusing on social, emotional, and cognitive development"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="early-feature-2"
                      type="text"
                      content="Activity-based learning with emphasis on creativity and exploration"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="early-feature-3"
                      type="text"
                      content="Foundation for language, numeracy, and motor skills development"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                </>
              )}

              {activeTab === 'primary' && (
                <>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="primary-feature-1"
                      type="text"
                      content="Core subjects including English, Mathematics, Science, and Social Studies"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="primary-feature-2"
                      type="text"
                      content="Project-based learning to develop research and presentation skills"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="primary-feature-3"
                      type="text"
                      content="Introduction to languages, arts, and physical education"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                </>
              )}

              {activeTab === 'middle' && (
                <>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="middle-feature-1"
                      type="text"
                      content="Advanced study of core subjects with specialized teaching"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="middle-feature-2"
                      type="text"
                      content="Development of critical thinking and analytical skills"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="middle-feature-3"
                      type="text"
                      content="Introduction to technology, design thinking, and collaborative projects"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                </>
              )}

              {activeTab === 'senior' && (
                <>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="senior-feature-1"
                      type="text"
                      content="CBSE curriculum with specialized streams: Science, Commerce, and Humanities"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="senior-feature-2"
                      type="text"
                      content="College and career counseling for higher education preparation"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="bg-school-secondary/20 p-1 rounded mr-3 mt-1">
                      <ChevronRight className="text-school-primary" size={16} />
                    </div>
                    <EditableContent
                      id="senior-feature-3"
                      type="text"
                      content="Leadership development and community service opportunities"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </div>
                </>
              )}
            </div>

            <Link to={activeProgram.link} className="bg-school-primary hover:bg-school-dark text-white px-6 py-3 rounded-md font-medium inline-flex items-center">
              <EditableContent
                id={`program-${activeProgram.id}-cta`}
                type="text"
                content="Learn More"
                onSave={handleSave}
                className="inline-flex items-center"
              />
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/academics" className="border-2 border-school-primary text-school-primary hover:bg-school-primary hover:text-white px-6 py-3 rounded-md font-medium transition-colors">
            <EditableContent
              id="view-all-programs"
              type="text"
              content="View All Academic Programs"
              onSave={handleSave}
              className="inline-block"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
