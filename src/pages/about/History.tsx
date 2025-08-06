import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const History = () => {
  return (
    <>
      <Helmet>
        <title>School History - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Learn about the history and journey of GD Goenka Public School in Rudrapur." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School History</h1>
            <p className="text-xl">Our Journey of Excellence</p>
          </div>
        </div>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-school-primary/20"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* 1990 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="text-2xl font-bold text-school-primary">1990</h3>
                        <p className="text-gray-700">Foundation of GD Goenka Group</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-school-primary"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-700">The GD Goenka Group was established with a vision to provide quality education across India.</p>
                      </div>
                    </div>
                  </div>

                  {/* 2000 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="text-2xl font-bold text-school-primary">2000</h3>
                        <p className="text-gray-700">Expansion to Multiple Cities</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-school-primary"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-700">The group expanded its presence to multiple cities, establishing schools with state-of-the-art facilities.</p>
                      </div>
                    </div>
                  </div>

                  {/* 2010 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="text-2xl font-bold text-school-primary">2010</h3>
                        <p className="text-gray-700">Introduction of Modern Teaching Methods</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-school-primary"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-700">Implementation of innovative teaching methodologies and technology integration in education.</p>
                      </div>
                    </div>
                  </div>

                  {/* 2015 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="text-2xl font-bold text-school-primary">2015</h3>
                        <p className="text-gray-700">Establishment in Rudrapur</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-school-primary"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-700">GD Goenka Public School, Rudrapur was established to serve the educational needs of the region.</p>
                      </div>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="text-2xl font-bold text-school-primary">2020</h3>
                        <p className="text-gray-700">Digital Transformation</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-school-primary"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-700">Implementation of comprehensive digital learning platforms and smart classroom technology.</p>
                      </div>
                    </div>
                  </div>

                  {/* Present */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="text-2xl font-bold text-school-primary">Present</h3>
                        <p className="text-gray-700">Continuing Excellence</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-school-primary"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-gray-700">Maintaining high standards of education and preparing students for future challenges.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Key Milestones</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-school-primary mb-4">30+</div>
                <h3 className="text-xl font-semibold mb-3">Years of Excellence</h3>
                <p className="text-gray-700">
                  Decades of providing quality education and shaping young minds
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-school-primary mb-4">50+</div>
                <h3 className="text-xl font-semibold mb-3">Schools</h3>
                <p className="text-gray-700">
                  Nationwide presence with a commitment to educational excellence
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-school-primary mb-4">100K+</div>
                <h3 className="text-xl font-semibold mb-3">Alumni</h3>
                <p className="text-gray-700">
                  Successful graduates making a difference in various fields
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

export default History; 