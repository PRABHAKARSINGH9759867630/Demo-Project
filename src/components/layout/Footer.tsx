import React from 'react';
import { Link } from 'react-router-dom';
import EditableContent from '@/components/EditableContent';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

// Add this CSS at the top of the file, after imports
const footerStyles = `
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .gradient {
    --size: 750px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(hsl(222, 84, 60, 100%), hsl(164, 79, 71));
    animation: rotate var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 720px) {
    .gradient {
      --size: 500px;
    }
  }

  .footer-container {
    background-color: #071c39;
    background-image: url('/public/footer-bg.png');
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    display: flex;
    place-content: center;
    align-items: center;
  }

  .footer-content {
    position: relative;
    z-index: 1;
  }

  * {
    transition: all 0.5s ease-out;
  }
`;

const Footer: React.FC = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer-container">
        <div className="gradient"></div>
        <div className="footer-content">
          <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* School Info */}
                <div>
                  <EditableContent
                    id="footer-school-name"
                    type="heading"
                    content="GD Goenka Rudrapur"
                    onSave={handleSave}
                    className="text-xl font-bold mb-4"
                  />
                  <EditableContent
                    id="footer-description"
                    type="text"
                    content="Providing world-class education with global exposure and holistic development for students."
                    onSave={handleSave}
                    className="text-gray-400 mb-4"
                  />
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/GDGPSRudrapur" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                    <a href="https://www.instagram.com/gdgoenkarudrapur/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                    <a href="https://www.youtube.com/@gdgoenkarudrapur8342" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="YouTube">
                      <Youtube size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

                {/* Programs */}
                <div>
                  <EditableContent
                    id="footer-programs-title"
                    type="heading"
                    content="Programs"
                    onSave={handleSave}
                    className="text-lg font-semibold mb-4"
                  />
                  <ul className="space-y-2">
                    {[
                      'Early Years Program',
                      'Primary School',
                      'Middle School',
                      'Senior School',
                      'Co-curricular Activities',
                      'Sports Program'
                    ].map((program, index) => (
                      <li key={index}>
                        <EditableContent
                          id={`footer-program-${index}`}
                          type="text"
                          content={program}
                          onSave={handleSave}
                          className="text-gray-400 hover:text-white transition-colors"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <EditableContent
                    id="footer-contact-title"
                    type="heading"
                    content="Contact Us"
                    onSave={handleSave}
                    className="text-lg font-semibold mb-4"
                  />
                  <div className="space-y-2">
                    <EditableContent
                      id="footer-address"
                      type="text"
                      content="200 Mtrs, Inside Dibdiba Gate, Rudrapur - Bilaspur Road"
                      onSave={handleSave}
                      className="text-gray-400"
                    />
                    <EditableContent
                      id="footer-phone"
                      type="text"
                      content="+(91) 706-003-7789 +(91) 706-004-7789"
                      onSave={handleSave}
                      className="text-gray-400"
                    />
                    <EditableContent
                      id="footer-email"
                      type="text"
                      content="admissions@gdgoenkarudrapur.com"
                      onSave={handleSave}
                      className="text-gray-400"
                    />
                    <EditableContent
                      id="footer-hours"
                      type="text"
                      content="Monday - Saturday: 8:00 AM - 4:00 PM"
                      onSave={handleSave}
                      className="text-gray-400"
                    />
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <EditableContent
                    id="footer-links-title"
                    type="heading"
                    content="Quick Links"
                    onSave={handleSave}
                    className="text-lg font-semibold mb-4"
                  />
                  <ul className="space-y-2">
                    {[
                      'Admissions',
                      'Academic Calendar',
                      'News & Events',
                      'Gallery',
                      'Careers',
                      'Contact Us'
                    ].map((link, index) => (
                      <li key={index}>
                        <EditableContent
                          id={`footer-link-${index}`}
                          type="text"
                          content={link}
                          onSave={handleSave}
                          className="text-gray-400 hover:text-white transition-colors"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-800 mt-8 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <EditableContent
                    id="footer-copyright"
                    type="text"
                    content={`© ${currentYear} GD Goenka Rudrapur. All rights reserved.`}
                    onSave={handleSave}
                    className="text-gray-400 mb-4 md:mb-0"
                  />
                  <div className="flex space-x-6">
                    <EditableContent
                      id="footer-privacy"
                      type="text"
                      content="Privacy Policy"
                      onSave={handleSave}
                      className="text-gray-400 hover:text-white transition-colors"
                    />
                    <EditableContent
                      id="footer-terms"
                      type="text"
                      content="Terms of Service"
                      onSave={handleSave}
                      className="text-gray-400 hover:text-white transition-colors"
                    />
                    <EditableContent
                      id="footer-sitemap"
                      type="text"
                      content="Sitemap"
                      onSave={handleSave}
                      className="text-gray-400 hover:text-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
