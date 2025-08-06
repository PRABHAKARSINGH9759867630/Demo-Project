import { Link } from 'react-router-dom';
import { Award, Users, BookOpen } from 'lucide-react';
import EditableContent from '@/components/EditableContent';

const About = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <EditableContent
            id="about-title"
            type="heading"
            content="About Our School"
            onSave={handleSave}
            className="text-3xl font-bold text-school-primary mb-4"
          />
          <div className="w-20 h-1 bg-school-accent mx-auto mb-6"></div>
          <EditableContent
            id="about-description"
            type="text"
            content="GD Goenka Public School, Rudrapur is committed to providing a stimulating learning environment that maximizes individual potential and ensures that students of all ability levels are well prepared to meet the challenges of education, work, and life."
            onSave={handleSave}
            className="max-w-3xl mx-auto text-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-school-primary/10 w-16 h-16 flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-school-primary" />
            </div>
            <EditableContent
              id="excellence-title"
              type="heading"
              content="Academic Excellence"
              onSave={handleSave}
              className="text-xl font-bold text-gray-800 mb-3"
            />
            <EditableContent
              id="excellence-description"
              type="text"
              content="Rigorous curriculum designed to challenge and inspire students to reach their full academic potential."
              onSave={handleSave}
              className="text-gray-600"
            />
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-school-primary/10 w-16 h-16 flex items-center justify-center mb-6">
              <Users size={32} className="text-school-primary" />
            </div>
            <EditableContent
              id="faculty-title"
              type="heading"
              content="Experienced Faculty"
              onSave={handleSave}
              className="text-xl font-bold text-gray-800 mb-3"
            />
            <EditableContent
              id="faculty-description"
              type="text"
              content="Dedicated teachers committed to student success, providing personalized attention to nurture each student's unique talents."
              onSave={handleSave}
              className="text-gray-600"
            />
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-school-primary/10 w-16 h-16 flex items-center justify-center mb-6">
              <Award size={32} className="text-school-primary" />
            </div>
            <EditableContent
              id="global-title"
              type="heading"
              content="Global Recognition"
              onSave={handleSave}
              className="text-xl font-bold text-gray-800 mb-3"
            />
            <EditableContent
              id="global-description"
              type="text"
              content="Internationally acclaimed educational standards preparing students for success in a competitive global environment."
              onSave={handleSave}
              className="text-gray-600"
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-school-primary">
            <EditableContent
              id="vision-title"
              type="heading"
              content="Our Vision"
              onSave={handleSave}
              className="text-2xl font-bold text-school-primary mb-4"
            />
            <EditableContent
              id="vision-description"
              type="text"
              content="To be a center of excellence in education that nurtures well-rounded individuals who are intellectually curious, emotionally intelligent, and socially responsible global citizens."
              onSave={handleSave}
              className="text-gray-700 mb-4"
            />
            <Link to="/about/vision-mission" className="text-school-primary font-medium hover:underline inline-flex items-center">
              <EditableContent
                id="vision-link"
                type="text"
                content="Learn More"
                onSave={handleSave}
                className="inline-flex items-center"
              />
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-school-accent">
            <EditableContent
              id="mission-title"
              type="heading"
              content="Our Mission"
              onSave={handleSave}
              className="text-2xl font-bold text-school-accent mb-4"
            />
            <EditableContent
              id="mission-description"
              type="text"
              content="To provide a holistic educational experience that combines academic excellence with character development, fostering creativity, critical thinking, and a lifelong love of learning."
              onSave={handleSave}
              className="text-gray-700 mb-4"
            />
            <Link to="/about/vision-mission" className="text-school-accent font-medium hover:underline inline-flex items-center">
              <EditableContent
                id="mission-link"
                type="text"
                content="Learn More"
                onSave={handleSave}
                className="inline-flex items-center"
              />
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/about" className="bg-school-primary hover:bg-school-dark text-white px-6 py-3 rounded-md font-medium inline-flex items-center">
            <EditableContent
              id="more-about-link"
              type="text"
              content="More About Us"
              onSave={handleSave}
              className="inline-flex items-center"
            />
            <ChevronRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

const ChevronRight = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
