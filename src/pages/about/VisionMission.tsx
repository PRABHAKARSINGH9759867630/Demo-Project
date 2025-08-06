import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EditableImage from '@/components/EditableImage';

const VisionMission = () => {
  return (
    <>
      <Helmet>
        <title>Vision & Mission - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Learn about the vision and mission of GD Goenka Public School in Rudrapur." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision & Mission</h1>
            <p className="text-xl">Our Commitment to Excellence in Education</p>
          </div>
        </div>

        {/* Vision Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-school-primary">Our Vision</h2>
                <p className="mb-4 text-gray-700">
                  To create a nurturing educational environment that empowers students to become global citizens, lifelong learners, and responsible leaders of tomorrow.
                </p>
                <p className="text-gray-700">
                  We envision a school where every student discovers their unique potential and develops the skills, knowledge, and character to make a positive impact on the world.
                </p>
              </div>
              <div>
                <EditableImage
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000"
                  alt="Vision"
                  id="vision-image"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <EditableImage
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000"
                  alt="Mission"
                  id="mission-image"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-school-primary">Our Mission</h2>
                <p className="mb-4 text-gray-700">
                  To provide comprehensive education that balances academic excellence with character development, cultural awareness, and physical fitness, enabling students to realize their full potential.
                </p>
                <p className="text-gray-700">
                  We are committed to:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                  <li>Fostering academic excellence through innovative teaching methods</li>
                  <li>Nurturing creativity and critical thinking</li>
                  <li>Developing strong moral values and character</li>
                  <li>Promoting cultural awareness and global citizenship</li>
                  <li>Encouraging physical fitness and healthy living</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-school-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-school-primary">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in all endeavors, encouraging students to aim high and achieve their best.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-school-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-school-primary">Respect</h3>
                <p className="text-gray-700">
                  We foster respect for self, others, and the environment, creating a harmonious community.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-school-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-school-primary">Innovation</h3>
                <p className="text-gray-700">
                  We embrace innovation and creativity, preparing students for the challenges of a rapidly changing world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VisionMission; 