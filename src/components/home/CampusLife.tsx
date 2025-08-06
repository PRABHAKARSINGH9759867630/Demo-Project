import { Link } from 'react-router-dom';
import EditableContent from '@/components/EditableContent';

const CampusLife = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  const activities = [
    {
      title: 'Sports Excellence',
      icon: 'dumbbell',
      image: '/lovable-uploads/3b4192f0-3e9e-478b-8119-16154dcdd429.png',
      categories: ['Cricket', 'Basketball', 'Football', 'Swimming', 'Athletics'],
      description: 'Comprehensive sports program with state-of-the-art facilities for physical development.',
      link: '/campus-life/sports'
    },
    {
      title: 'Arts & Culture',
      icon: 'palette',
      image: '/lovable-uploads/1e9bf642-84a6-49de-95d6-870d42dbfd8a.png',
      categories: ['Music', 'Dance', 'Drama', 'Painting', 'Sculpture'],
      description: 'Encouraging creativity through visual arts, music, dance, and theatrical performances.',
      link: '/campus-life/arts'
    },
    {
      title: 'Creative Workshops',
      icon: 'pen-tool',
      image: '/lovable-uploads/53834f68-b16e-4ca7-ae9d-670a0dba4d8d.png',
      categories: ['Robotics', 'Coding', 'Craft', 'Design', 'Photography'],
      description: 'Hands-on workshops to develop practical skills and nurture innovation.',
      link: '/campus-life/workshops'
    },
    {
      title: 'Technology Clubs',
      icon: 'cpu',
      image: '/lovable-uploads/cabba075-1032-4749-ad12-7f10d0ce34cf.png',
      categories: ['Coding', 'Robotics', 'AI', '3D Printing', 'App Development'],
      description: 'Exploring cutting-edge technology through clubs and special interest groups.',
      link: '/campus-life/tech-clubs'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <EditableContent
            id="campus-life-title"
            type="heading"
            content="Campus Life"
            onSave={handleSave}
            className="text-3xl font-bold text-school-primary mb-4"
          />
          <div className="w-24 h-1 bg-school-accent mx-auto mb-6"></div>
          <EditableContent
            id="campus-life-subtitle"
            type="heading"
            content="Beyond Academics"
            onSave={handleSave}
            className="text-4xl font-bold mb-6"
          />
          <EditableContent
            id="campus-life-description"
            type="text"
            content="At GD Goenka Rudrapur, we believe in holistic development. Our diverse range of co-curricular activities ensures that students discover and nurture their unique talents."
            onSave={handleSave}
            className="max-w-3xl mx-auto text-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <EditableContent
                  id={`activity-${index}-title`}
                  type="heading"
                  content={activity.title}
                  onSave={handleSave}
                  className="text-2xl font-bold text-school-primary mb-2"
                />
                <EditableContent
                  id={`activity-${index}-description`}
                  type="text"
                  content={activity.description}
                  onSave={handleSave}
                  className="text-gray-600 mb-4"
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.categories.map((category, catIdx) => (
                    <EditableContent
                      key={catIdx} 
                      id={`activity-${index}-category-${catIdx}`}
                      type="text"
                      content={category}
                      onSave={handleSave}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    />
                  ))}
                </div>
                <Link 
                  to={activity.link} 
                  className="text-school-accent hover:underline font-medium inline-flex items-center"
                >
                  <EditableContent
                    id={`activity-${index}-link`}
                    type="text"
                    content="Learn More"
                    onSave={handleSave}
                    className="inline-flex items-center"
                  />
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/campus-life" 
            className="bg-school-primary hover:bg-school-dark text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
          >
            <EditableContent
              id="explore-campus-life"
              type="text"
              content="Explore Campus Life"
              onSave={handleSave}
              className="inline-flex items-center"
            />
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
