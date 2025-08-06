import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Affiliations = () => {
  return (
    <>
      <Helmet>
        <title>Affiliations - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Learn about the affiliations and accreditations of GD Goenka Public School in Rudrapur." />
      </Helmet>

      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliations & Accreditations</h1>
            <p className="text-xl">Our Recognition and Partnerships</p>
          </div>
        </div>

        {/* Main Affiliations Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {/* CBSE Affiliation */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/CBSE_logo.svg/1200px-CBSE_logo.svg.png" 
                        alt="CBSE Logo" 
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-school-primary mb-4">Central Board of Secondary Education (CBSE)</h3>
                      <p className="text-gray-700 mb-4">
                        GD Goenka Public School, Rudrapur is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Our affiliation number is 1234567.
                      </p>
                      <p className="text-gray-700">
                        This affiliation ensures that our curriculum and examination system align with national standards, providing our students with a recognized and respected education.
                      </p>
                    </div>
                  </div>
                </div>

                {/* International Partnerships */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-school-primary mb-6">International Partnerships</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Cambridge Assessment International Education</h4>
                      <p className="text-gray-700">
                        Our partnership with Cambridge Assessment International Education allows us to offer internationally recognized qualifications and curricula.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">International Baccalaureate (IB)</h4>
                      <p className="text-gray-700">
                        We are an authorized IB World School, offering the IB Diploma Programme to prepare students for global universities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Memberships */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-school-primary mb-6">Professional Memberships</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <img 
                        src="https://example.com/indian-public-schools-conference.png" 
                        alt="IPSC Logo" 
                        className="w-20 h-20 object-contain mx-auto mb-4"
                      />
                      <h4 className="text-lg font-semibold mb-2">Indian Public Schools Conference</h4>
                    </div>
                    <div className="text-center">
                      <img 
                        src="https://example.com/national-progressive-schools-conference.png" 
                        alt="NPSC Logo" 
                        className="w-20 h-20 object-contain mx-auto mb-4"
                      />
                      <h4 className="text-lg font-semibold mb-2">National Progressive Schools Conference</h4>
                    </div>
                    <div className="text-center">
                      <img 
                        src="https://example.com/indian-schools-association.png" 
                        alt="ISA Logo" 
                        className="w-20 h-20 object-contain mx-auto mb-4"
                      />
                      <h4 className="text-lg font-semibold mb-2">Indian Schools Association</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-school-primary">Our Accreditations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">ISO 9001:2015</div>
                <h3 className="text-xl font-semibold mb-3">Quality Management</h3>
                <p className="text-gray-700">
                  Certified for maintaining high standards in educational services
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">ISO 14001:2015</div>
                <h3 className="text-xl font-semibold mb-3">Environmental Management</h3>
                <p className="text-gray-700">
                  Recognized for sustainable practices and environmental responsibility
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-school-primary mb-4">ISO 45001:2018</div>
                <h3 className="text-xl font-semibold mb-3">Health & Safety</h3>
                <p className="text-gray-700">
                  Certified for maintaining highest standards of health and safety
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

export default Affiliations; 