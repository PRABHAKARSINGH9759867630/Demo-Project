import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import EditableContent from '@/components/EditableContent';

const ContactInfo = () => {
  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  return (
    <div>
      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
        <EditableContent
          id="contact-info-title"
          type="heading"
          content="Contact Information"
          onSave={handleSave}
          className="text-3xl font-bold mb-6 text-school-primary"
        />
        <EditableContent
          id="contact-info-description"
          type="text"
          content="We're here to answer any questions you may have about our school, admissions process, or programs."
          onSave={handleSave}
          className="mb-8 text-gray-700"
        />

        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="w-6 h-6 text-school-primary mr-4 mt-1" />
            <div>
              <EditableContent
                id="address-title"
                type="heading"
                content="Our Address"
                onSave={handleSave}
                className="font-semibold text-gray-900 mb-1"
              />
              <EditableContent
                id="address-content"
                type="text"
                content="200 Mtrs, Inside Dibdiba Gate,\nRudrapur - Bilaspur Road"
                onSave={handleSave}
                className="text-gray-700"
              />
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="w-6 h-6 text-school-primary mr-4 mt-1" />
            <div>
              <EditableContent
                id="phone-title"
                type="heading"
                content="Phone Numbers"
                onSave={handleSave}
                className="font-semibold text-gray-900 mb-1"
              />
              <EditableContent
                id="phone-content"
                type="text"
                content="+91 7060037789\n+91 7060047789"
                onSave={handleSave}
                className="text-gray-700"
              />
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="w-6 h-6 text-school-primary mr-4 mt-1" />
            <div>
              <EditableContent
                id="email-title"
                type="heading"
                content="Email Address"
                onSave={handleSave}
                className="font-semibold text-gray-900 mb-1"
              />
              <EditableContent
                id="email-content"
                type="text"
                content="admissions@gdgoenkarudrapur.com\ncontact@gdgoenkarudrapur.com\nadmin@gdgoenkarudrapur.com"
                onSave={handleSave}
                className="text-gray-700"
              />
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="w-6 h-6 text-school-primary mr-4 mt-1" />
            <div>
              <EditableContent
                id="hours-title"
                type="heading"
                content="Office Hours"
                onSave={handleSave}
                className="font-semibold text-gray-900 mb-1"
              />
              <EditableContent
                id="hours-content"
                type="text"
                content="Monday - Saturday: 8:00 AM - 4:00 PM\nClosed on Sundays and School Holidays"
                onSave={handleSave}
                className="text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
