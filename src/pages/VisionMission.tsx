
import React from 'react';
import { Helmet } from 'react-helmet';

const VisionMission = () => {
  return (
    <>
      <Helmet>
        <title>Vision & Mission - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Learn about the vision and mission of GD Goenka Public School, Rudrapur." />
      </Helmet>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-school-primary mb-8">Vision & Mission</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-school-primary">Our Vision</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="mb-4">
              Education is the apprentice of life. Our vision is to provide value based education with new innovations and ideas so that our pupils grow into aesthetically rich, intellectually aware and integrated young people, capable of fulfilling their dreams and aspirations.


              </p>
              <p>
              Our vision is to strengthen the basic foundation and thereafter allow the latent talent to fully develop. Creative energies need a caring & nurturing environment and this is what we endevour to provide.
              </p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-school-primary">Our Mission</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <ul className="list-disc pl-5 space-y-3">
                <li>We embark on the mission of creating individuals who are confident about their potential and are goal oriented, sensitive to their environment and above all, co-creators of their own destiny. Our aim is to help a child realise his/her inner strength and give him a conducive environment to grow & evolve as a good social being and a global citizen.</li>
                <li>At G.D. Goenka Public School, we aim to provide an academic environment which treats each child as a unique individual and develops him/her to the maximum potential and to provide variety of learning experiences which promote integrative growth in all areas, be it the physical, intellectual, moral or social.</li>
                
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-2 text-school-primary">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-school-accent">1. Integrity</h3>
                <p>We uphold the highest standards of honesty, transparency, and ethical conduct in all our actions and decisions.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-school-accent">2. Excellence</h3>
                <p>We strive for the highest quality in everything we do—academics, activities, and service—encouraging continuous growth and innovation.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-school-accent">3. Respect</h3>
                <p>We are accountable for our actions, committed to our duties, and dedicated to creating a positive impact on our community and environment.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-school-accent">4. Responsibility</h3>
                <p>We encourage creative thinking, adaptability, and the courage to explore new ideas and solutions.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
