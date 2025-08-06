import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EditableContent from '@/components/EditableContent';

const About = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  return (
    <>
      <Helmet>
        <title>About Us - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Learn about GD Goenka Public School in Rudrapur, our history, vision, mission, and values." />
      </Helmet>

      <Header />
      <main>
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <EditableContent
              id="about-title"
              type="heading"
              content="About GD Goenka Public School"
              onSave={handleSave}
              className="text-4xl md:text-5xl font-bold mb-4"
            />
            <EditableContent
              id="about-subtitle"
              type="text"
              content="Rudrapur's Premier Educational Institution"
              onSave={handleSave}
              className="text-xl"
            />
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <EditableContent
                  id="history-title"
                  type="heading"
                  content="Our History"
                  onSave={handleSave}
                  className="text-3xl font-bold mb-6 text-school-primary"
                />
                <EditableContent
                  id="history-content-1"
                  type="text"
                  content="GD Goenka Public School, Rudrapur was established with a vision to provide world-class education that combines academic excellence with holistic development. The school is part of the prestigious GD Goenka Group of Schools, known for their commitment to quality education across India."
                  onSave={handleSave}
                  className="mb-4 text-gray-700"
                />
                <EditableContent
                  id="history-content-2"
                  type="text"
                  content="Since our inception, we have been dedicated to nurturing young minds and helping students discover their talents and abilities in a supportive learning environment."
                  onSave={handleSave}
                  className="mb-4 text-gray-700"
                />
              </div>
              <div>
                <EditableContent
                  id="history-image"
                  type="image"
                  content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000"
                  onSave={handleSave}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <EditableContent
                  id="vision-image"
                  type="image"
                  content="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000"
                  onSave={handleSave}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <EditableContent
                  id="vision-mission-title"
                  type="heading"
                  content="Vision & Mission"
                  onSave={handleSave}
                  className="text-3xl font-bold mb-6 text-school-primary"
                />
                <div className="mb-6">
                  <EditableContent
                    id="vision-title"
                    type="heading"
                    content="Our Vision"
                    onSave={handleSave}
                    className="text-xl font-semibold mb-3 text-school-accent"
                  />
                  <EditableContent
                    id="vision-content"
                    type="text"
                    content="To create a nurturing educational environment that empowers students to become global citizens, lifelong learners, and responsible leaders of tomorrow."
                    onSave={handleSave}
                    className="text-gray-700"
                  />
                </div>
                <div>
                  <EditableContent
                    id="mission-title"
                    type="heading"
                    content="Our Mission"
                    onSave={handleSave}
                    className="text-xl font-semibold mb-3 text-school-accent"
                  />
                  <EditableContent
                    id="mission-content"
                    type="text"
                    content="To provide comprehensive education that balances academic excellence with character development, cultural awareness, and physical fitness, enabling students to realize their full potential."
                    onSave={handleSave}
                    className="text-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <EditableContent
              id="values-title"
              type="heading"
              content="Our Core Values"
              onSave={handleSave}
              className="text-3xl font-bold mb-12 text-center text-school-primary"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-school-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <EditableContent
                  id="value-1-title"
                  type="heading"
                  content="Excellence"
                  onSave={handleSave}
                  className="text-xl font-semibold mb-3 text-school-primary"
                />
                <EditableContent
                  id="value-1-content"
                  type="text"
                  content="We strive for excellence in all endeavors, encouraging students to aim high and achieve their best."
                  onSave={handleSave}
                  className="text-gray-700"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-school-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <EditableContent
                  id="value-2-title"
                  type="heading"
                  content="Respect"
                  onSave={handleSave}
                  className="text-xl font-semibold mb-3 text-school-primary"
                />
                <EditableContent
                  id="value-2-content"
                  type="text"
                  content="We foster respect for self, others, and the environment, creating a harmonious community."
                  onSave={handleSave}
                  className="text-gray-700"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-school-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <EditableContent
                  id="value-3-title"
                  type="heading"
                  content="Innovation"
                  onSave={handleSave}
                  className="text-xl font-semibold mb-3 text-school-primary"
                />
                <EditableContent
                  id="value-3-content"
                  type="text"
                  content="We embrace innovation and creativity, preparing students for the challenges of a rapidly changing world."
                  onSave={handleSave}
                  className="text-gray-700"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <EditableContent
              id="leadership-title"
              type="heading"
              content="School Leadership"
              onSave={handleSave}
              className="text-3xl font-bold mb-12 text-center text-school-primary"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6 text-center">
                  <EditableContent
                    id="chairman-image"
                    type="image"
                    content="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=300"
                    onSave={handleSave}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <EditableContent
                    id="chairman-name"
                    type="heading"
                    content="Dr. Rajesh Kumar"
                    onSave={handleSave}
                    className="text-xl font-semibold text-school-primary"
                  />
                  <EditableContent
                    id="chairman-role"
                    type="text"
                    content="Chairman"
                    onSave={handleSave}
                    className="text-school-accent"
                  />
                </div>
                <EditableContent
                  id="chairman-bio"
                  type="text"
                  content="With over 30 years of experience in education, Dr. Kumar has been instrumental in establishing GD Goenka schools across India. His vision continues to guide our institution towards excellence in education."
                  onSave={handleSave}
                  className="text-gray-700"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6 text-center">
                  <EditableContent
                    id="principal-image"
                    type="image"
                    content="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300"
                    onSave={handleSave}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <EditableContent
                    id="principal-name"
                    type="heading"
                    content="Dr. Anita Sharma"
                    onSave={handleSave}
                    className="text-xl font-semibold text-school-primary"
                  />
                  <EditableContent
                    id="principal-role"
                    type="text"
                    content="Principal"
                    onSave={handleSave}
                    className="text-school-accent"
                  />
                </div>
                <EditableContent
                  id="principal-bio"
                  type="text"
                  content="Dr. Sharma brings a wealth of knowledge and a progressive approach to education. Under her leadership, the school has achieved remarkable academic results while nurturing students' overall development."
                  onSave={handleSave}
                  className="text-gray-700"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
