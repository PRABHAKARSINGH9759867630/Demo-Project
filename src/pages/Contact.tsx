import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';
import EditableContent from '@/components/EditableContent';

const Contact = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Get in touch with GD Goenka Public School, Rudrapur. Contact us for admissions, inquiries, or to schedule a campus visit." />
      </Helmet>

      <main>
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <EditableContent
              id="contact-title"
              type="heading"
              content="Contact Us"
              onSave={handleSave}
              className="text-4xl md:text-5xl font-bold mb-4"
            />
            <EditableContent
              id="contact-subtitle"
              type="text"
              content="We'd love to hear from you"
              onSave={handleSave}
              className="text-xl"
            />
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form Component */}
              <ContactForm />

              {/* Contact Information and Map Components */}
              <div>
                <ContactInfo />
                <LocationMap />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
