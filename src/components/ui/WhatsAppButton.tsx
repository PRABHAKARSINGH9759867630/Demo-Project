
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const phoneNumber = '+917060037789';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello, I'm interested in learning more about GD Goenka Public School, Rudrapur.`;

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-3 w-64 animate-fade-in">
          <button 
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={() => setIsTooltipVisible(false)}
            aria-label="Close tooltip"
          >
            <X size={16} />
          </button>
          <p className="text-gray-800 mb-3">Have questions? Chat with us on WhatsApp!</p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium inline-block"
          >
            Start Chat
          </a>
        </div>
      )}
      
      {/* WhatsApp Button */}
      <button
        onClick={toggleTooltip}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        aria-label="WhatsApp Contact"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
