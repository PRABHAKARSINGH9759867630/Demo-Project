import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import EditableContent from '@/components/EditableContent';

// Sample news and events data
const newsItems = [
  {
    id: 1,
    title: 'Annual Sports Day a Grand Success',
    date: 'April 5, 2025',
    image: '/lovable-uploads/3b4192f0-3e9e-478b-8119-16154dcdd429.png',
    excerpt: 'Students showcased their athletic talents in track and field events, team sports, and individual competitions.',
    link: '/news-events/sports-day-2025'
  },
  {
    id: 2,
    title: 'Science Exhibition Highlights Student Innovation',
    date: 'March 22, 2025',
    image: '/lovable-uploads/c200610e-ed1b-413f-827d-497b926daef9.png',
    excerpt: 'Students from grades 6-12 presented innovative projects tackling real-world problems through scientific solutions.',
    link: '/news-events/science-exhibition-2025'
  },
  {
    id: 3,
    title: 'Cultural Festival Celebrates Diversity',
    date: 'February 15, 2025',
    image: '/lovable-uploads/1e9bf642-84a6-49de-95d6-870d42dbfd8a.png',
    excerpt: 'A vibrant showcase of art, music, dance, and culinary traditions from around the world.',
    link: '/news-events/cultural-festival-2025'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Parent-Teacher Conference',
    date: 'April 25, 2025',
    time: '9:00 AM - 3:00 PM',
    location: 'School Campus',
    link: '/events/parent-teacher-conference'
  },
  {
    id: 2,
    title: 'Inter-School Debate Competition',
    date: 'May 5, 2025',
    time: '10:00 AM - 1:00 PM',
    location: 'Auditorium',
    link: '/events/debate-competition'
  },
  {
    id: 3,
    title: 'Summer Camp Registration',
    date: 'May 15, 2025',
    time: 'All Day',
    location: 'Online',
    link: '/events/summer-camp-registration'
  },
  {
    id: 4,
    title: 'Annual Alumni Meet',
    date: 'June 10, 2025',
    time: '5:00 PM - 8:00 PM',
    location: 'School Campus',
    link: '/events/alumni-meet-2025'
  }
];

const News = () => {
  const [activeTab, setActiveTab] = useState('news');

  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <EditableContent
            id="news-subtitle"
            type="text"
            content="Stay Updated"
            onSave={handleSave}
            className="text-xl text-school-accent font-medium mb-2"
          />
          <EditableContent
            id="news-title"
            type="heading"
            content="News & Events"
            onSave={handleSave}
            className="text-3xl font-bold text-school-primary mb-4"
          />
          <div className="w-24 h-1 bg-school-accent mx-auto mb-8"></div>

          {/* Tabs */}
          <div className="inline-flex border rounded-lg p-1 bg-gray-100 mb-8">
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'news' ? 'bg-school-primary text-white' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('news')}
            >
              <EditableContent
                id="news-tab"
                type="text"
                content="Latest News"
                onSave={handleSave}
                className="inline-block"
              />
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'events' ? 'bg-school-primary text-white' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('events')}
            >
              <EditableContent
                id="events-tab"
                type="text"
                content="Upcoming Events"
                onSave={handleSave}
                className="inline-block"
              />
            </button>
          </div>
        </div>

        {/* News Content */}
        <div className={activeTab === 'news' ? 'block' : 'hidden'}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <EditableContent
                      id={`news-${news.id}-date`}
                      type="text"
                      content={news.date}
                      onSave={handleSave}
                      className="inline-block"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-school-primary mb-2 hover:text-school-accent transition-colors">
                    <Link to={news.link}>
                      <EditableContent
                        id={`news-${news.id}-title`}
                        type="heading"
                        content={news.title}
                        onSave={handleSave}
                        className="inline-block"
                      />
                    </Link>
                  </h4>
                  <EditableContent
                    id={`news-${news.id}-excerpt`}
                    type="text"
                    content={news.excerpt}
                    onSave={handleSave}
                    className="text-gray-600 mb-4"
                  />
                  <Link to={news.link} className="text-school-accent font-medium hover:underline inline-flex items-center">
                    <EditableContent
                      id={`news-${news.id}-read-more`}
                      type="text"
                      content="Read More"
                      onSave={handleSave}
                      className="inline-flex items-center"
                    />
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/news-events" className="inline-flex items-center text-school-primary hover:text-school-accent font-medium">
              <EditableContent
                id="view-all-news"
                type="text"
                content="View All News"
                onSave={handleSave}
                className="inline-flex items-center"
              />
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>

        {/* Events Content */}
        <div className={activeTab === 'events' ? 'block' : 'hidden'}>
          <div className="max-w-3xl mx-auto">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="mb-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <Link to={event.link}>
                  <h4 className="text-xl font-bold text-school-primary mb-2 hover:text-school-accent transition-colors">
                    <EditableContent
                      id={`event-${event.id}-title`}
                      type="heading"
                      content={event.title}
                      onSave={handleSave}
                      className="inline-block"
                    />
                  </h4>
                </Link>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 mb-2">
                  <div className="flex items-center mb-2 sm:mb-0 sm:mr-8">
                    <svg className="w-4 h-4 mr-2 text-school-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <EditableContent
                      id={`event-${event.id}-date`}
                      type="text"
                      content={event.date}
                      onSave={handleSave}
                      className="inline-block"
                    />
                  </div>
                  <div className="flex items-center mb-2 sm:mb-0 sm:mr-8">
                    <svg className="w-4 h-4 mr-2 text-school-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <EditableContent
                      id={`event-${event.id}-time`}
                      type="text"
                      content={event.time}
                      onSave={handleSave}
                      className="inline-block"
                    />
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-school-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <EditableContent
                      id={`event-${event.id}-location`}
                      type="text"
                      content={event.location}
                      onSave={handleSave}
                      className="inline-block"
                    />
                  </div>
                </div>
                <Link to={event.link} className="text-school-accent font-medium hover:underline inline-flex items-center mt-2">
                  <EditableContent
                    id={`event-${event.id}-view-details`}
                    type="text"
                    content="View Details"
                    onSave={handleSave}
                    className="inline-flex items-center"
                  />
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/events" className="inline-flex items-center text-school-primary hover:text-school-accent font-medium">
              <EditableContent
                id="view-all-events"
                type="text"
                content="View All Events"
                onSave={handleSave}
                className="inline-flex items-center"
              />
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
