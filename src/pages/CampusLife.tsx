import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CampusLife = () => {
  return (
    <>
      <Helmet>
        <title>Campus Life - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Experience the vibrant campus life at GD Goenka Public School, Rudrapur. Explore our facilities, co-curricular activities, sports programs, and student initiatives." />
      </Helmet>

      <Header />
      <main>
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Life</h1>
            <p className="text-xl max-w-3xl mx-auto">Explore the vibrant and enriching environment that makes up daily life at GD Goenka Public School, Rudrapur</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-primary mb-4">Life at GD Goenka</h2>
              <p className="max-w-3xl mx-auto text-gray-700">
                We believe in providing a well-rounded education that goes beyond academics. Our campus buzzes with activities that help students develop various skills, discover their passions, and grow into confident individuals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d977759?auto=format&fit=crop&w=800" 
                    alt="School Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">World-Class Infrastructure</h3>
                  <p className="text-gray-700 mb-4">
                    Our campus features modern classrooms, specialized labs, sports facilities, and creative spaces designed to enhance the learning experience.
                  </p>
                  <Link to="/campus-life/infrastructure" className="text-school-primary hover:text-school-dark font-medium inline-flex items-center">
                    Explore Our Campus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1564058701743-9a83df12ae46?auto=format&fit=crop&w=800" 
                    alt="Co-curricular Activities"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">Co-Curricular Activities</h3>
                  <p className="text-gray-700 mb-4">
                    From music and dance to robotics and debate, our diverse range of co-curricular activities helps students develop their talents and interests.
                  </p>
                  <Link to="/campus-life/co-curricular" className="text-school-primary hover:text-school-dark font-medium inline-flex items-center">
                    Discover Activities
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800" 
                    alt="Sports Program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">Sports & Physical Education</h3>
                  <p className="text-gray-700 mb-4">
                    Our comprehensive sports program includes training in various sports, annual athletic meets, and participation in inter-school competitions.
                  </p>
                  <Link to="/campus-life/sports" className="text-school-primary hover:text-school-dark font-medium inline-flex items-center">
                    Learn About Sports
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-school-primary">School Events</h2>
                <p className="mb-6 text-gray-700">
                  Throughout the academic year, our school hosts various events that celebrate learning, creativity, culture, and achievement:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2 text-school-accent">Annual Day</h3>
                    <p className="text-gray-700">A grand celebration showcasing students' talents in performing arts.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2 text-school-accent">Sports Day</h3>
                    <p className="text-gray-700">An exciting event featuring athletic competitions and team sports.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2 text-school-accent">Science Exhibition</h3>
                    <p className="text-gray-700">Students showcase innovative projects and scientific explorations.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-2 text-school-accent">Cultural Festivals</h3>
                    <p className="text-gray-700">Celebrations of India's diverse cultural heritage through art, music, and dance.</p>
                  </div>
                </div>
                <Button asChild className="bg-school-primary hover:bg-school-dark">
                  <Link to="/campus-life/events">
                    View All Events
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?auto=format&fit=crop&w=800" 
                  alt="School Event"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Campus Infrastructure</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1562516710-38a6fa229b63?auto=format&fit=crop&w=800" 
                    alt="Modern Classrooms"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">Modern Classrooms</h3>
                  <p className="text-gray-700">
                    Spacious, well-ventilated classrooms equipped with smart boards and modern teaching aids.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1613896640137-bb5b31496315?auto=format&fit=crop&w=800" 
                    alt="Science Labs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">Science Labs</h3>
                  <p className="text-gray-700">
                    Well-equipped labs for Physics, Chemistry, and Biology with advanced equipment for hands-on learning.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800" 
                    alt="Computer Labs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">Computer Labs</h3>
                  <p className="text-gray-700">
                    State-of-the-art computer labs with the latest hardware and software for technology education.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800" 
                    alt="Art Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">Art & Music Studios</h3>
                  <p className="text-gray-700">
                    Dedicated spaces for visual arts, music, and dance to nurture students' creative expressions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1526718583451-e88ebf774771?auto=format&fit=crop&w=800" 
                    alt="Sports Facilities"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">Sports Facilities</h3>
                  <p className="text-gray-700">
                    Extensive sports infrastructure including playgrounds, courts, and training facilities for various sports.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800" 
                    alt="Library"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-school-primary">Library</h3>
                  <p className="text-gray-700">
                    A well-stocked library with books, periodicals, and digital resources to foster a love for reading and research.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-school-primary hover:bg-school-dark">
                <Link to="/campus-life/infrastructure">
                  View All Facilities
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-school-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Student Leadership</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We believe in nurturing leadership qualities in our students through various opportunities and responsibilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Student Council</h3>
                <p className="mb-4">
                  Our student council gives students a voice in school affairs and helps develop leadership skills through organizing events and initiatives.
                </p>
                <Link to="/campus-life/student-council" className="inline-flex items-center text-white hover:text-white/80 font-medium">
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Community Service</h3>
                <p className="mb-4">
                  Students engage in various community service activities that foster empathy, social responsibility, and a sense of giving back.
                </p>
                <Link to="/campus-life/community-service" className="inline-flex items-center text-white hover:text-white/80 font-medium">
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="mt-12">
              <Button asChild variant="secondary">
                <Link to="/gallery">
                  View Campus Gallery
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CampusLife;
