import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import EditableContent from '@/components/EditableContent';

// Banner images with higher quality images
const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600',
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

const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden">
      {/* Banner Images with enhanced animation */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 w-full h-full transition-all duration-1500 ${
            index === currentBanner ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Banner Content with enhanced styling */}
      <div className="container mx-auto h-full flex items-center relative z-10">
        <Card className={`max-w-2xl border-none bg-transparent shadow-none transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <CardContent className="p-0 text-white">
            <EditableContent
              id={`banner-${banners[currentBanner].id}-title`}
              type="heading"
              content={banners[currentBanner].title}
              onSave={handleSave}
              className="font-heading text-5xl font-bold mb-6 text-white leading-tight"
            />
            <EditableContent
              id={`banner-${banners[currentBanner].id}-subtitle`}
              type="text"
              content={banners[currentBanner].subtitle}
              onSave={handleSave}
              className="text-xl mb-8 text-gray-200 leading-relaxed"
            />
            <div className="flex flex-wrap gap-4">
              <Link 
                to={banners[currentBanner].link} 
                className="bg-school-accent hover:bg-school-accent/90 text-white px-6 py-3 rounded-md font-medium flex items-center group"
              >
                <EditableContent
                  id={`banner-${banners[currentBanner].id}-cta`}
                  type="text"
                  content={banners[currentBanner].cta}
                  onSave={handleSave}
                  className="inline-flex items-center"
                />
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-md font-medium"
              >
                <EditableContent
                  id="learn-more-cta"
                  type="text"
                  content="Learn More"
                  onSave={handleSave}
                  className="inline-block"
                />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Banner Indicators with improved styling */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentBanner(index);
                setIsAnimating(false);
              }, 500);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentBanner ? 'w-8 bg-school-accent' : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
