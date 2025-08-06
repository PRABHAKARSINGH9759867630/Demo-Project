import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Mentors = () => {
  return (
    <>
      <Helmet>
        <title>Our Mentors - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Meet our experienced mentors and faculty members at GD Goenka Public School in Rudrapur." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Mentors</h1>
            <p className="text-xl">Guiding Lights of Excellence</p>
          </div>
        </div>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Chairman */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&w=300" 
                  alt="Chairman" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-school-primary mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-gray-600 mb-4">Chairman</p>
                <p className="text-gray-700">
                  With over 30 years of experience in education, Dr. Kumar leads our institution with vision and dedication.
                </p>
              </div>

              {/* Principal */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300" 
                  alt="Principal" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-school-primary mb-2">Dr. Anita Sharma</h3>
                <p className="text-gray-600 mb-4">Principal</p>
                <p className="text-gray-700">
                  Dr. Sharma brings a wealth of knowledge and a progressive approach to education.
                </p>
              </div>

              {/* Vice Principal */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300" 
                  alt="Vice Principal" 
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-school-primary mb-2">Mr. Sunil Verma</h3>
                <p className="text-gray-600 mb-4">Vice Principal</p>
                <p className="text-gray-700">
                  Mr. Verma oversees academic excellence and student development programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Department Heads */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Department Heads</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Science */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300" 
                  alt="Science Head" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-school-primary mb-2">Dr. Meera Patel</h3>
                <p className="text-gray-600 mb-2">Science Department</p>
                <p className="text-gray-700 text-sm">
                  Ph.D. in Physics with 15 years of teaching experience
                </p>
              </div>

              {/* Mathematics */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300" 
                  alt="Mathematics Head" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-school-primary mb-2">Mr. Rajesh Singh</h3>
                <p className="text-gray-600 mb-2">Mathematics Department</p>
                <p className="text-gray-700 text-sm">
                  M.Sc. in Mathematics with expertise in advanced calculus
                </p>
              </div>

              {/* Languages */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300" 
                  alt="Languages Head" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-school-primary mb-2">Mrs. Priya Sharma</h3>
                <p className="text-gray-600 mb-2">Languages Department</p>
                <p className="text-gray-700 text-sm">
                  M.A. in English Literature with 12 years of experience
                </p>
              </div>

              {/* Social Sciences */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300" 
                  alt="Social Sciences Head" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-school-primary mb-2">Mr. Amit Kumar</h3>
                <p className="text-gray-600 mb-2">Social Sciences Department</p>
                <p className="text-gray-700 text-sm">
                  M.A. in History with specialization in Indian History
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Highlights */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Faculty Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">100+</div>
                <h3 className="text-xl font-semibold mb-3">Qualified Teachers</h3>
                <p className="text-gray-700">
                  Highly qualified and experienced faculty members
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">15+</div>
                <h3 className="text-xl font-semibold mb-3">Years Average Experience</h3>
                <p className="text-gray-700">
                  Our teachers bring extensive experience to the classroom
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">50+</div>
                <h3 className="text-xl font-semibold mb-3">Research Papers</h3>
                <p className="text-gray-700">
                  Published research work by our faculty members
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

export default Mentors; 