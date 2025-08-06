import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Messages = () => {
  return (
    <>
      <Helmet>
        <title>Messages - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Read messages from the school leadership and community members of GD Goenka Public School in Rudrapur." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Messages</h1>
            <p className="text-xl">Words from Our Community</p>
          </div>
        </div>

        {/* Messages Grid */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Chairman's Message */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start space-x-6">
                  <img 
                    src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=300" 
                    alt="Chairman" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-school-primary mb-2">Dr. Rajesh Kumar</h3>
                    <p className="text-gray-600 mb-4">Chairman</p>
                    <p className="text-gray-700">
                      "Our commitment to excellence in education goes beyond academic achievement. We strive to create well-rounded individuals who are prepared for the challenges of tomorrow."
                    </p>
                  </div>
                </div>
              </div>

              {/* Principal's Message */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start space-x-6">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300" 
                    alt="Principal" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-school-primary mb-2">Dr. Anita Sharma</h3>
                    <p className="text-gray-600 mb-4">Principal</p>
                    <p className="text-gray-700">
                      "At GD Goenka Public School, we believe in nurturing young minds and helping them discover their true potential through innovative education."
                    </p>
                  </div>
                </div>
              </div>

              {/* Parent's Message */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start space-x-6">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300" 
                    alt="Parent" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-school-primary mb-2">Mrs. Priya Singh</h3>
                    <p className="text-gray-600 mb-4">Parent</p>
                    <p className="text-gray-700">
                      "The school's focus on holistic development has helped my child grow not just academically, but as a confident and responsible individual."
                    </p>
                  </div>
                </div>
              </div>

              {/* Alumni Message */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start space-x-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300" 
                    alt="Alumni" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-school-primary mb-2">Rahul Verma</h3>
                    <p className="text-gray-600 mb-4">Alumni, Class of 2020</p>
                    <p className="text-gray-700">
                      "The foundation I received at GD Goenka Public School has been instrumental in my success at university and beyond."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Voices */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Community Voices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-school-primary mb-4">98%</div>
                <h3 className="text-xl font-semibold mb-3">Parent Satisfaction</h3>
                <p className="text-gray-700">
                  Parents rate our school's educational quality and facilities
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-school-primary mb-4">95%</div>
                <h3 className="text-xl font-semibold mb-3">Student Happiness</h3>
                <p className="text-gray-700">
                  Students report high satisfaction with their learning experience
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-school-primary mb-4">100%</div>
                <h3 className="text-xl font-semibold mb-3">Teacher Retention</h3>
                <p className="text-gray-700">
                  Our faculty members choose to stay and grow with us
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

export default Messages; 