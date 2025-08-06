import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ChairmansMessage = () => {
  return (
    <>
      <Helmet>
        <title>Chairman's Message - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Read the Chairman's message from GD Goenka Public School in Rudrapur." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chairman's Message</h1>
            <p className="text-xl">A Message from Our Chairman</p>
          </div>
        </div>

        {/* Message Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=1000" 
                  alt="Chairman" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-semibold text-school-primary">Dr. Rajesh Kumar</h3>
                  <p className="text-gray-600">Chairman</p>
                  <p className="text-gray-600">GD Goenka Group of Schools</p>
                </div>
              </div>
              <div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Dear Parents and Students,
                  </p>
                  <p className="text-gray-700 mb-6">
                    It gives me immense pleasure to welcome you to GD Goenka Public School, Rudrapur. As the Chairman of the GD Goenka Group of Schools, I am proud to be part of an institution that has been at the forefront of educational excellence for decades.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our journey in education began with a simple yet powerful vision: to create learning environments that nurture young minds and prepare them for the challenges of tomorrow. Today, that vision has grown into a network of schools that are recognized for their academic excellence and holistic approach to education.
                  </p>
                  <p className="text-gray-700 mb-6">
                    At GD Goenka Public School, Rudrapur, we are committed to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Providing world-class education that combines traditional values with modern teaching methodologies</li>
                    <li>Creating an environment that fosters innovation, creativity, and critical thinking</li>
                    <li>Developing well-rounded individuals who are prepared for global challenges</li>
                    <li>Nurturing leadership qualities and social responsibility</li>
                    <li>Building a strong foundation for lifelong learning</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Our state-of-the-art infrastructure, experienced faculty, and comprehensive curriculum are designed to provide students with the best possible learning experience. We believe in empowering our students to become confident, compassionate, and competent individuals who can make a positive impact on society.
                  </p>
                  <p className="text-gray-700">
                    I invite you to join us in this journey of excellence and discovery. Together, we can create a future where our students become leaders who shape the world with their knowledge, skills, and values.
                  </p>
                  <p className="text-gray-700 mt-6">
                    Best wishes,<br />
                    Dr. Rajesh Kumar<br />
                    Chairman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Our Legacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">30+</div>
                <h3 className="text-xl font-semibold mb-3">Years of Excellence</h3>
                <p className="text-gray-700">
                  Decades of educational leadership and innovation
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">50+</div>
                <h3 className="text-xl font-semibold mb-3">Schools</h3>
                <p className="text-gray-700">
                  Nationwide presence with a commitment to quality education
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">100K+</div>
                <h3 className="text-xl font-semibold mb-3">Students</h3>
                <p className="text-gray-700">
                  Alumni making a difference across the globe
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

export default ChairmansMessage; 