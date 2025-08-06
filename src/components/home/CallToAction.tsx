import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import EditableContent from '@/components/EditableContent';

const CallToAction = () => {
  const location = useLocation();
  
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };
  
  // Only show on specific pages
  const showOnPages = ['/', '/about', '/academics'];
  if (!showOnPages.includes(location.pathname)) {
    return null;
  }
  
  return <section className="py-16 bg-school-primary text-white">
      <div className="container mx-auto text-center">
        <EditableContent
          id="cta-subtitle"
          type="heading"
          content="Get In Touch"
          onSave={handleSave}
          className="text-3xl md:text-4xl font-bold mb-4"
        />
        <EditableContent
          id="cta-title"
          type="heading"
          content="Contact Us"
          onSave={handleSave}
          className="text-4xl md:text-5xl font-bold mb-8"
        />
        
        <EditableContent
          id="cta-description"
          type="text"
          content="Have questions about admissions, curriculum, or anything else? We're here to help. Reach out to us through any of these channels."
          onSave={handleSave}
          className="max-w-2xl mx-auto text-lg mb-10"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {/* Location */}
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="rounded-full p-4 bg-white/20 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <EditableContent
              id="location-title"
              type="heading"
              content="Our Location"
              onSave={handleSave}
              className="text-xl font-bold mb-2"
            />
            <EditableContent
              id="location-address"
              type="text"
              content="200 Mtrs, Inside Dibdiba Gate, Rudrapur - Bilaspur Road"
              onSave={handleSave}
              className="text-white/80"
            />
          </div>
          
          {/* Phone */}
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="rounded-full p-4 bg-white/20 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <EditableContent
              id="phone-title"
              type="heading"
              content="Phone"
              onSave={handleSave}
              className="text-xl font-bold mb-2"
            />
            <EditableContent
              id="phone-numbers"
              type="text"
              content="+91 7060037789, +91 7060047789"
              onSave={handleSave}
              className="text-white/80"
            />
          </div>
          
          {/* Email */}
          <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <div className="rounded-full p-4 bg-white/20 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <EditableContent
              id="email-title"
              type="heading"
              content="Email"
              onSave={handleSave}
              className="text-xl font-bold mb-2"
            />
            <EditableContent
              id="email-addresses"
              type="text"
              content="admissions@gdgoenkarudrapur.com contact@gdgoenkarudrapur.com admin@gdgoenkarudrapur.com"
              onSave={handleSave}
              className="text-white/80"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/admissions" className="bg-white text-school-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium inline-flex items-center">
            <EditableContent
              id="admission-cta"
              type="text"
              content="Apply for Admission"
              onSave={handleSave}
              className="inline-flex items-center"
            />
            <ChevronRight size={16} className="ml-2" />
          </Link>
          <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium inline-flex items-center">
            <EditableContent
              id="visit-cta"
              type="text"
              content="Schedule a Campus Visit"
              onSave={handleSave}
              className="inline-flex items-center"
            />
          </Link>
        </div>
      </div>
    </section>;
};

export default CallToAction;
