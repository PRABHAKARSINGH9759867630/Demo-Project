import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EditableContent from '@/components/EditableContent';

const testimonials = [
  {
    id: 1,
    quote: "GD Goenka Rudrapur has provided my child with not just academic excellence but a holistic environment that nurtures their creativity and critical thinking skills.",
    author: "Priya Sharma",
    role: "Parent of Grade 8 Student",
    avatar: "/lovable-uploads/d650c2f7-42af-4bb8-aed2-f277df847b82.png"
  },
  {
    id: 2,
    quote: "The school's focus on integrating technology with traditional learning has greatly benefited my son. The teachers are incredibly supportive and create an engaging learning atmosphere.",
    author: "Rajesh Kumar",
    role: "Parent of Grade 5 Student",
    avatar: "/lovable-uploads/53834f68-b16e-4ca7-ae9d-670a0dba4d8d.png"
  },
  {
    id: 3,
    quote: "I've seen tremendous growth in my daughter's confidence since she joined GD Goenka Rudrapur. The emphasis on both academics and co-curricular activities has helped her discover her strengths.",
    author: "Anjali Verma",
    role: "Parent of Grade 10 Student",
    avatar: "/lovable-uploads/p03.jpg"
  },
  {
    id: 4,
    quote: "The international exposure and modern teaching methodologies at GD Goenka have prepared my child well for future challenges. I'm impressed with the school's commitment to excellence.",
    author: "Vikram Singh",
    role: "Parent of Grade 12 Student",
    image: '/lovable-uploads/p03.jpg',
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const handleSave = (content: string) => {
    console.log('Saving content:', content);
    // Here you would typically save to your backend
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts with carousel
  const handleManualChange = (index: number) => {
    setCurrent(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const next = () => handleManualChange((current + 1) % testimonials.length);
  const prev = () => handleManualChange((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-school-primary bg-opacity-5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <EditableContent
            id="testimonials-subtitle"
            type="text"
            content="Testimonials"
            onSave={handleSave}
            className="text-xl text-school-accent font-medium mb-2"
          />
          <EditableContent
            id="testimonials-title"
            type="heading"
            content="What Our Community Says"
            onSave={handleSave}
            className="text-3xl font-bold text-school-primary mb-4"
          />
          <div className="w-24 h-1 bg-school-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative px-4">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <svg className="w-12 h-12 text-school-accent opacity-20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 8v6c0 3.314-2.686 6-6 6H4v4h4c5.523 0 10-4.477 10-10V8h-8zm18 0v6c0 3.314-2.686 6-6 6h-1v4h4c5.523 0 10-4.477 10-10V8h-7z" />
                        </svg>
                      </div>
                      <blockquote>
                        <EditableContent
                          id={`testimonial-${testimonial.id}-quote`}
                          type="text"
                          content={testimonial.quote}
                          onSave={handleSave}
                          className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6"
                        />
                      </blockquote>
                      <div className="flex flex-col items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-school-accent mb-4"
                        />
                        <div className="text-center">
                          <EditableContent
                            id={`testimonial-${testimonial.id}-author`}
                            type="heading"
                            content={testimonial.author}
                            onSave={handleSave}
                            className="font-bold text-lg text-school-primary"
                          />
                          <EditableContent
                            id={`testimonial-${testimonial.id}-role`}
                            type="text"
                            content={testimonial.role}
                            onSave={handleSave}
                            className="text-gray-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-school-primary rounded-full p-2 shadow-md transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next} 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-school-primary rounded-full p-2 shadow-md transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualChange(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? 'bg-school-accent' : 'bg-gray-300'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
