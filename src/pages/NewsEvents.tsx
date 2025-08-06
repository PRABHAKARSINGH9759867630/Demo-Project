
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';

const NewsEvents = () => {
  // Sample news data
  const allNews = [
    {
      id: 1,
      title: "Annual Science Exhibition Showcases Student Innovations",
      date: "April 15, 2025",
      category: "Events",
      excerpt: "Students from classes 6-12 presented their innovative science projects focusing on sustainable development and environmental conservation.",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800",
      slug: "annual-science-exhibition-2025"
    },
    {
      id: 2,
      title: "GD Goenka Rudrapur Wins Inter-School Sports Tournament",
      date: "April 5, 2025",
      category: "Sports",
      excerpt: "Our school teams brought home multiple trophies in basketball, football, and athletics at the district level inter-school sports competition.",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800",
      slug: "sports-tournament-victory"
    },
    {
      id: 3,
      title: "Cultural Fest 'Expressions' Celebrates Diversity",
      date: "March 28, 2025",
      category: "Events",
      excerpt: "The annual cultural festival featured performances showcasing India's rich cultural heritage through music, dance, and theatrical presentations.",
      image: "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?auto=format&fit=crop&w=800",
      slug: "cultural-fest-expressions"
    },
    {
      id: 4,
      title: "School Welcomes New Principal Dr. Anita Sharma",
      date: "March 15, 2025",
      category: "News",
      excerpt: "Dr. Anita Sharma, with over 25 years of experience in education, has joined GD Goenka Public School, Rudrapur as the new Principal.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800",
      slug: "new-principal-announcement"
    },
    {
      id: 5,
      title: "Students Participate in Regional Math Olympiad",
      date: "March 10, 2025",
      category: "Academics",
      excerpt: "15 students from our school qualified for the Regional Mathematics Olympiad, with 3 students advancing to the national level competition.",
      image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=800",
      slug: "math-olympiad-achievements"
    },
    {
      id: 6,
      title: "School Hosts Career Counseling Workshop for Senior Students",
      date: "February 25, 2025",
      category: "Events",
      excerpt: "Industry experts and university representatives provided guidance on career options, college admissions, and scholarship opportunities.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800",
      slug: "career-counseling-workshop"
    },
    {
      id: 7,
      title: "GD Goenka Initiates Green Campus Project",
      date: "February 18, 2025",
      category: "News",
      excerpt: "The school has launched a sustainability initiative focusing on waste management, water conservation, and increasing green cover on campus.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800",
      slug: "green-campus-initiative"
    },
    {
      id: 8,
      title: "National Level Art Competition Winners Announced",
      date: "February 10, 2025",
      category: "Achievements",
      excerpt: "Three students from our school won top prizes at the National Art Competition organized by the Ministry of Culture.",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800",
      slug: "art-competition-winners"
    }
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      date: "May 5, 2025",
      time: "9:00 AM - 1:00 PM",
      venue: "School Auditorium"
    },
    {
      id: 2,
      title: "Annual Sports Day",
      date: "May 12-14, 2025",
      time: "8:00 AM - 4:00 PM",
      venue: "School Sports Complex"
    },
    {
      id: 3,
      title: "Summer Camp Registration",
      date: "May 20, 2025",
      time: "10:00 AM - 3:00 PM",
      venue: "Administrative Block"
    },
    {
      id: 4,
      title: "Final Term Examinations Begin",
      date: "May 25, 2025",
      time: "9:00 AM - 12:00 PM",
      venue: "Respective Classrooms"
    }
  ];

  // Filter state
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'News', 'Events', 'Academics', 'Sports', 'Achievements'];

  // Filter news based on selected category
  const filteredNews = filter === 'All' 
    ? allNews 
    : allNews.filter(news => news.category === filter);

  return (
    <>
      <Helmet>
        <title>News & Events - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Stay updated with the latest news, events, and activities at GD Goenka Public School, Rudrapur." />
      </Helmet>

      <Header />
      <main>
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
            <p className="text-xl">Stay updated with the latest happenings at GD Goenka Rudrapur</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    filter === category
                      ? 'bg-school-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="aspect-[16/9]">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm bg-school-secondary/20 text-school-primary px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-school-primary">{news.title}</h3>
                    <p className="text-gray-700 mb-4">{news.excerpt}</p>
                    <Link to={`/news-events/${news.slug}`} className="text-school-primary hover:text-school-dark font-medium inline-flex items-center">
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No news items found for this category.</p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-primary mb-4">Upcoming Events</h2>
              <p className="max-w-3xl mx-auto text-gray-700">
                Mark your calendars for these important upcoming events at GD Goenka Public School, Rudrapur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex bg-white rounded-lg shadow-md p-6">
                  <div className="mr-4 bg-school-primary/10 p-3 rounded-lg flex flex-col items-center justify-center min-w-[80px]">
                    <Calendar className="h-6 w-6 text-school-primary mb-1" />
                    <span className="text-sm font-medium text-school-primary">{event.date}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-school-primary mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">Time: {event.time}</p>
                    <p className="text-gray-600 text-sm">Venue: {event.venue}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/academics/calendar" className="inline-flex items-center text-school-primary hover:text-school-dark font-medium">
                View Full Academic Calendar
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="bg-school-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                  <p className="mb-0">
                    Subscribe to our newsletter to receive the latest news, events, and updates from GD Goenka Public School, Rudrapur.
                  </p>
                </div>
                <div>
                  <Link to="/contact" className="bg-white text-school-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium inline-block w-full text-center">
                    Subscribe Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NewsEvents;
