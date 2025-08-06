import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrincipalsMessage = () => {
  return (
    <>
      <Helmet>
        <title>Principal's Message - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Read the Principal's message from GD Goenka Public School in Rudrapur." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Principal's Message</h1>
            <p className="text-xl">Welcome to GD Goenka Public School, Rudrapur</p>
          </div>
        </div>

        {/* Message Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000" 
                  alt="Principal" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-semibold text-school-primary">Dr. Anita Sharma</h3>
                  <p className="text-gray-600">Principal</p>
                  <p className="text-gray-600">GD Goenka Public School, Rudrapur</p>
                </div>
              </div>
              <div>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    Dear Parents and Students,
                  </p>
                  <p className="text-gray-700 mb-6">
                    Welcome to GD Goenka Public School, Rudrapur - a place where excellence meets opportunity. As the Principal, I am delighted to share our vision and commitment to providing world-class education that nurtures both academic excellence and character development.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our school is built on the foundation of the GD Goenka Group's rich legacy in education, combined with modern teaching methodologies and state-of-the-art facilities. We believe in creating an environment where every student can discover their unique potential and develop the skills necessary for success in the 21st century.
                  </p>
                  <p className="text-gray-700 mb-6">
                    At GD Goenka Public School, we focus on:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Academic excellence through innovative teaching methods</li>
                    <li>Holistic development through sports, arts, and cultural activities</li>
                    <li>Character building and value-based education</li>
                    <li>Global citizenship and cultural awareness</li>
                    <li>Leadership development and critical thinking</li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Our dedicated team of educators is committed to providing personalized attention to each student, ensuring that they receive the guidance and support needed to excel in their chosen path.
                  </p>
                  <p className="text-gray-700">
                    I invite you to join us in this journey of learning and growth. Together, we can create a future where our students become responsible global citizens and leaders of tomorrow.
                  </p>
                  <p className="text-gray-700 mt-6">
                    Warm regards,<br />
                    Dr. Anita Sharma<br />
                    Principal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">School Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">98%</div>
                <h3 className="text-xl font-semibold mb-3">Board Results</h3>
                <p className="text-gray-700">
                  Consistent high performance in board examinations
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">50+</div>
                <h3 className="text-xl font-semibold mb-3">Awards</h3>
                <p className="text-gray-700">
                  Recognition in various academic and extracurricular activities
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">100%</div>
                <h3 className="text-xl font-semibold mb-3">Placement</h3>
                <p className="text-gray-700">
                  Successful placement of students in top universities
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

export default PrincipalsMessage; 