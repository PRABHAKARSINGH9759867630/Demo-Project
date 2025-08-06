import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditableContent from '@/components/EditableContent';

const Academics = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  return (
    <>
      <Helmet>
        <title>Academics - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Explore our academic programs at GD Goenka Public School, Rudrapur. We offer a comprehensive curriculum from early years to senior secondary levels." />
      </Helmet>

      <Header />
      <main>
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <EditableContent
              id="academics-title"
              type="heading"
              content="Academic Excellence"
              onSave={handleSave}
              className="text-4xl md:text-5xl font-bold mb-4"
            />
            <EditableContent
              id="academics-subtitle"
              type="text"
              content="Providing a comprehensive, balanced and student-centered educational experience"
              onSave={handleSave}
              className="text-xl max-w-3xl mx-auto"
            />
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <EditableContent
                id="approach-title"
                type="heading"
                content="Our Educational Approach"
                onSave={handleSave}
                className="text-3xl font-bold text-school-primary mb-4"
              />
              <EditableContent
                id="approach-description"
                type="text"
                content="At GD Goenka Public School, Rudrapur, we believe in nurturing each child's unique potential through a holistic educational approach that balances academic rigor with character development."
                onSave={handleSave}
                className="max-w-3xl mx-auto text-gray-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-school-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <EditableContent
                  id="curriculum-title"
                  type="heading"
                  content="CBSE Curriculum"
                  onSave={handleSave}
                  className="text-xl font-semibold mb-3 text-school-primary"
                />
                <EditableContent
                  id="curriculum-description"
                  type="text"
                  content="Our school follows the CBSE curriculum, which is known for its comprehensive and balanced approach to education."
                  onSave={handleSave}
                  className="text-gray-700"
                />
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-school-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <EditableContent
                  id="learning-title"
                  type="heading"
                  content="Inquiry-Based Learning"
                  onSave={handleSave}
                  className="text-xl font-semibold mb-3 text-school-primary"
                />
                <EditableContent
                  id="learning-description"
                  type="text"
                  content="We encourage students to ask questions, explore concepts, and develop critical thinking skills through hands-on activities."
                  onSave={handleSave}
                  className="text-gray-700"
                />
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-school-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-school-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 115.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <EditableContent
                  id="attention-title"
                  type="heading"
                  content="Personalized Attention"
                  onSave={handleSave}
                  className="text-xl font-semibold mb-3 text-school-primary"
                />
                <EditableContent
                  id="attention-description"
                  type="text"
                  content="With smaller class sizes, our teachers can provide individualized attention to help each student reach their full potential."
                  onSave={handleSave}
                  className="text-gray-700"
                />
              </div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-school-primary hover:bg-school-dark">
                <Link to="/academics/curriculum">
                  Learn More About Our Curriculum
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <EditableContent
              id="programs-title"
              type="heading"
              content="Academic Programs"
              onSave={handleSave}
              className="text-3xl font-bold mb-12 text-center text-school-primary"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <EditableContent
                    id="early-years-image"
                    type="image"
                    content="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800"
                    onSave={handleSave}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <EditableContent
                    id="early-years-title"
                    type="heading"
                    content="Early Years Program"
                    onSave={handleSave}
                    className="text-2xl font-semibold mb-2 text-school-primary"
                  />
                  <EditableContent
                    id="early-years-age"
                    type="text"
                    content="Ages 2-5"
                    onSave={handleSave}
                    className="text-gray-600 mb-2"
                  />
                  <EditableContent
                    id="early-years-description"
                    type="text"
                    content="Our Early Years program focuses on developing foundational skills through play-based learning, creative activities, and age-appropriate academics."
                    onSave={handleSave}
                    className="text-gray-700 mb-4"
                  />
                  <Link to="/academics/early-years" className="text-school-primary hover:text-school-dark font-medium inline-flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <EditableContent
                    id="primary-image"
                    type="image"
                    content="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800"
                    onSave={handleSave}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <EditableContent
                    id="primary-title"
                    type="heading"
                    content="Primary School"
                    onSave={handleSave}
                    className="text-2xl font-semibold mb-2 text-school-primary"
                  />
                  <EditableContent
                    id="primary-age"
                    type="text"
                    content="Classes 1-5"
                    onSave={handleSave}
                    className="text-gray-600 mb-2"
                  />
                  <EditableContent
                    id="primary-description"
                    type="text"
                    content="The Primary School curriculum builds strong foundations in core subjects while encouraging curiosity, creativity, and critical thinking skills."
                    onSave={handleSave}
                    className="text-gray-700 mb-4"
                  />
                  <Link to="/academics/primary-school" className="text-school-primary hover:text-school-dark font-medium inline-flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <EditableContent
                    id="middle-image"
                    type="image"
                    content="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800"
                    onSave={handleSave}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <EditableContent
                    id="middle-title"
                    type="heading"
                    content="Middle School"
                    onSave={handleSave}
                    className="text-2xl font-semibold mb-2 text-school-primary"
                  />
                  <EditableContent
                    id="middle-age"
                    type="text"
                    content="Classes 6-8"
                    onSave={handleSave}
                    className="text-gray-600 mb-2"
                  />
                  <EditableContent
                    id="middle-description"
                    type="text"
                    content="Middle School students deepen their understanding of core subjects and develop essential skills for higher education and beyond."
                    onSave={handleSave}
                    className="text-gray-700 mb-4"
                  />
                  <Link to="/academics/middle-school" className="text-school-primary hover:text-school-dark font-medium inline-flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video">
                  <EditableContent
                    id="senior-image"
                    type="image"
                    content="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800"
                    onSave={handleSave}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <EditableContent
                    id="senior-title"
                    type="heading"
                    content="Senior School"
                    onSave={handleSave}
                    className="text-2xl font-semibold mb-2 text-school-primary"
                  />
                  <EditableContent
                    id="senior-age"
                    type="text"
                    content="Classes 9-12"
                    onSave={handleSave}
                    className="text-gray-600 mb-2"
                  />
                  <EditableContent
                    id="senior-description"
                    type="text"
                    content="Our Senior School prepares students for higher education and future careers through rigorous academics, specialization options, and leadership opportunities."
                    onSave={handleSave}
                    className="text-gray-700 mb-4"
                  />
                  <Link to="/academics/senior-school" className="text-school-primary hover:text-school-dark font-medium inline-flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <EditableContent
                  id="calendar-title"
                  type="heading"
                  content="Academic Calendar"
                  onSave={handleSave}
                  className="text-3xl font-bold mb-6 text-school-primary"
                />
                <EditableContent
                  id="calendar-description"
                  type="text"
                  content="Our academic year is divided into two terms, with regular assessments and examinations to track student progress. The school calendar includes important dates such as:"
                  onSave={handleSave}
                  className="mb-6 text-gray-700"
                />
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-5 w-5 text-school-accent" />
                    <EditableContent
                      id="calendar-item-1"
                      type="text"
                      content="Term start and end dates"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-5 w-5 text-school-accent" />
                    <EditableContent
                      id="calendar-item-2"
                      type="text"
                      content="Examination schedules"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-5 w-5 text-school-accent" />
                    <EditableContent
                      id="calendar-item-3"
                      type="text"
                      content="Parent-teacher meetings"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-5 w-5 text-school-accent" />
                    <EditableContent
                      id="calendar-item-4"
                      type="text"
                      content="School events and celebrations"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-5 w-5 text-school-accent" />
                    <EditableContent
                      id="calendar-item-5"
                      type="text"
                      content="Holidays and breaks"
                      onSave={handleSave}
                      className="text-gray-700"
                    />
                  </li>
                </ul>
                <Button asChild className="bg-school-primary hover:bg-school-dark">
                  <Link to="/academics/calendar">
                    View Academic Calendar
                  </Link>
                </Button>
              </div>
              <div>
                <EditableContent
                  id="calendar-image"
                  type="image"
                  content="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800"
                  onSave={handleSave}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-school-primary text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <EditableContent
                  id="faculty-image"
                  type="image"
                  content="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"
                  onSave={handleSave}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <EditableContent
                  id="faculty-title"
                  type="heading"
                  content="Meet Our Faculty"
                  onSave={handleSave}
                  className="text-3xl font-bold mb-6"
                />
                <EditableContent
                  id="faculty-description"
                  type="text"
                  content="Our dedicated team of experienced educators is committed to nurturing students' academic growth and personal development. Our teachers:"
                  onSave={handleSave}
                  className="mb-6"
                />
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <EditableContent
                      id="faculty-item-1"
                      type="text"
                      content="Hold advanced degrees in their respective fields"
                      onSave={handleSave}
                      className="text-white"
                    />
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <EditableContent
                      id="faculty-item-2"
                      type="text"
                      content="Receive regular professional development and training"
                      onSave={handleSave}
                      className="text-white"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Academics;
