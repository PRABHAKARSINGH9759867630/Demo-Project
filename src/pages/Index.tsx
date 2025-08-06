import React from 'react';
import EditableContent from '@/components/EditableContent';
import { Button } from '@/components/ui/button';
import { Helmet } from "react-helmet"
import EditableHero from "@/components/admin/EditableHero";
import About from "@/components/home/About";
import Programs from "@/components/home/Programs";
import Testimonials from "@/components/home/Testimonials";
import CampusLife from "@/components/home/CampusLife";
import News from "@/components/home/News";
import NoticeTicker from "@/components/home/NoticeTicker";
import CallToAction from "@/components/home/CallToAction";

// Initial banners data (will be editable)
const initialBanners = [
  {
    id: 1,
    image: 'https://drive.google.com/file/d/15h4KI2E6wJaQtOfrtMEBMOTVocQv9DSd/view?usp=sharing',
    title: 'Academic Excellence',
    subtitle: 'Providing Quality Education with Modern Facilities',
    cta: 'Apply Now',
    link: '/admissions'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1600',
    title: 'Begin Your Child\'s Educational Journey with Us',
    subtitle: 'We invite you to explore our campus, meet our faculty, and discover how GD Goenka Rudrapur can provide your child with a world-class education that prepares them for future success.',
    cta: 'Schedule a Campus Visit',
    link: '/contact'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600',
    title: 'Empowering Young Minds for a Bright Future',
    subtitle: 'GD Goenka Rudrapur is committed to providing a stimulating learning environment that maximizes individual potential.',
    cta: 'Discover Our Programs',
    link: '/academics'
  }
];

const Index: React.FC = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>GD Goenka Rudrapur | Home</title>
        <meta name="description" content="GD Goenka Rudrapur is a premier educational institution offering world-class education from nursery to higher secondary levels." />
      </Helmet>
      
      <NoticeTicker />
      <EditableHero initialBanners={initialBanners} />
      <About />
      <Programs />
      <Testimonials />
      <CampusLife />
      <News />
      <CallToAction />

      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <EditableContent
            id="hero-title"
            type="heading"
            content="Holistic development"
            onSave={handleSave}
            className="text-4xl md:text-5xl font-bold mb-6"
          />
          <EditableContent
            id="hero-description"
            type="text"
            content="Providing comprehensive and integrated growth of an individual across all aspects of Student life,edule a Campus Visit."
            onSave={handleSave}
            className="text-lg text-gray-600 mb-8 max-w-2xl"
          />
          <div className="flex gap-4">
            <Button>Learn More</Button>
            <Button variant="outline">Schedule a Campus Visit</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <EditableContent
            id="about-title"
            type="heading"
            content="About Our School"
            onSave={handleSave}
            className="text-3xl font-bold mb-6"
          />
          <EditableContent
            id="about-description"
            type="text"
            content="GD Goenka Public School, Rudrapur is committed to providing a stimulating learning environment that maximizes individual potential and ensures that students of all ability levels are well prepared to meet the challenges of education, work, and life."
            onSave={handleSave}
            className="text-gray-600 mb-12 max-w-3xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <EditableContent
                id="excellence-title"
                type="heading"
                content="Academic Excellence"
                onSave={handleSave}
                className="text-xl font-semibold mb-3"
              />
              <EditableContent
                id="excellence-description"
                type="text"
                content="Rigorous curriculum designed to challenge and inspire students to reach their full academic potential."
                onSave={handleSave}
                className="text-gray-600"
              />
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <EditableContent
                id="faculty-title"
                type="heading"
                content="Experienced Faculty"
                onSave={handleSave}
                className="text-xl font-semibold mb-3"
              />
              <EditableContent
                id="faculty-description"
                type="text"
                content="Dedicated teachers committed to student success, providing personalized attention to nurture each student's unique talents."
                onSave={handleSave}
                className="text-gray-600"
              />
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <EditableContent
                id="global-title"
                type="heading"
                content="Global Recognition"
                onSave={handleSave}
                className="text-xl font-semibold mb-3"
              />
              <EditableContent
                id="global-description"
                type="text"
                content="Internationally acclaimed educational standards preparing students for success in a competitive global environment."
                onSave={handleSave}
                className="text-gray-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <EditableContent
                id="vision-title"
                type="heading"
                content="Our Vision"
                onSave={handleSave}
                className="text-3xl font-bold mb-4"
              />
              <EditableContent
                id="vision-description"
                type="text"
                content="To be a center of excellence in education that nurtures well-rounded individuals who are intellectually curious, emotionally intelligent, and socially responsible global citizens."
                onSave={handleSave}
                className="text-gray-600 mb-6"
              />
              <Button>Learn More</Button>
            </div>

            <div>
              <EditableContent
                id="mission-title"
                type="heading"
                content="Our Mission"
                onSave={handleSave}
                className="text-3xl font-bold mb-4"
              />
              <EditableContent
                id="mission-description"
                type="text"
                content="To provide a holistic educational experience that combines academic excellence with character development, fostering creativity, critical thinking, and a lifelong love of learning."
                onSave={handleSave}
                className="text-gray-600 mb-6"
              />
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <EditableContent
            id="testimonials-title"
            type="heading"
            content="What Our Community Says"
            onSave={handleSave}
            className="text-3xl font-bold mb-12 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 'testimonial-1',
                content: "GD Goenka Rudrapur has provided my child with not just academic excellence but a holistic environment that nurtures their creativity and critical thinking skills.",
                author: "Priya Sharma",
                role: "Parent of Grade 8 Student"
              },
              {
                id: 'testimonial-2',
                content: "The school's focus on integrating technology with traditional learning has greatly benefited my son. The teachers are incredibly supportive and create an engaging learning atmosphere.",
                author: "Rajesh Kumar",
                role: "Parent of Grade 5 Student"
              },
              {
                id: 'testimonial-3',
                content: "I've seen tremendous growth in my daughter's confidence since she joined GD Goenka Rudrapur. The emphasis on both academics and co-curricular activities has helped her discover her strengths.",
                author: "Anjali Verma",
                role: "Parent of Grade 10 Student"
              },
              {
                id: 'testimonial-4',
                content: "The international exposure and modern teaching methodologies at GD Goenka have prepared my child well for future challenges. I'm impressed with the school's commitment to excellence.",
                author: "Vikram Singh",
                role: "Parent of Grade 12 Student"
              }
            ].map((testimonial) => (
              <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md">
                <EditableContent
                  id={`${testimonial.id}-content`}
                  type="text"
                  content={testimonial.content}
                  onSave={handleSave}
                  className="text-gray-600 mb-4"
                />
                <EditableContent
                  id={`${testimonial.id}-author`}
                  type="heading"
                  content={testimonial.author}
                  onSave={handleSave}
                  className="font-semibold"
                />
                <EditableContent
                  id={`${testimonial.id}-role`}
                  type="text"
                  content={testimonial.role}
                  onSave={handleSave}
                  className="text-sm text-gray-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <EditableContent
            id="contact-title"
            type="heading"
            content="Get In Touch"
            onSave={handleSave}
            className="text-3xl font-bold mb-6"
          />
          <EditableContent
            id="contact-description"
            type="text"
            content="Have questions about admissions, curriculum, or anything else? We're here to help. Reach out to us through any of these channels."
            onSave={handleSave}
            className="text-gray-600 mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Our Location</h3>
              <EditableContent
                id="address"
                type="text"
                content="200 Mtrs, Inside Dibdiba Gate, Rudrapur - Bilaspur Road"
                onSave={handleSave}
                className="text-gray-600"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <EditableContent
                id="phone"
                type="text"
                content="+91 7060037789, +91 7060047789"
                onSave={handleSave}
                className="text-gray-600"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <EditableContent
                id="email"
                type="text"
                content="admissions@gdgoenkarudrapur.com contact@gdgoenkarudrapur.com admin@gdgoenkarudrapur.com"
                onSave={handleSave}
                className="text-gray-600"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
