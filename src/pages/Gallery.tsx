import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';

// Define gallery categories and images
const galleryData = {
  'Campus': [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d977759?auto=format&fit=crop&w=800',
      alt: 'School Building Front View',
      caption: 'Our modern school building'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1562516710-38a6fa229b63?auto=format&fit=crop&w=800',
      alt: 'School Library',
      caption: 'Well-stocked library with extensive reading materials'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1613896640137-bb5b31496315?auto=format&fit=crop&w=800',
      alt: 'Science Lab',
      caption: 'State-of-the-art science laboratory'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800',
      alt: 'Computer Lab',
      caption: 'Modern computer lab with latest technology'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1633839335560-48dbcf66d489?auto=format&fit=crop&w=800',
      alt: 'School Playground',
      caption: 'Spacious playground for sports and recreation'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800',
      alt: 'Art Room',
      caption: 'Creative arts and crafts center'
    },
  ],
  'Events': [
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?auto=format&fit=crop&w=800',
      alt: 'Annual Day Celebration',
      caption: 'Students performing during Annual Day'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800',
      alt: 'Sports Day',
      caption: 'Students participating in sports day events'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800',
      alt: 'Science Exhibition',
      caption: 'Students presenting their science projects'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=800',
      alt: 'Republic Day',
      caption: 'Republic Day celebrations at school'
    },
  ],
  'Activities': [
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800',
      alt: 'Classroom Learning',
      caption: 'Interactive classroom session'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800',
      alt: 'Art and Craft',
      caption: 'Students engaged in creative activities'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800',
      alt: 'Music Class',
      caption: 'Students learning music'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?auto=format&fit=crop&w=800',
      alt: 'Yoga Session',
      caption: 'Morning yoga session'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=800',
      alt: 'Debate Competition',
      caption: 'Students participating in debate competition'
    },
  ],
  'Sports': [
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800',
      alt: 'Cricket Match',
      caption: 'Inter-school cricket tournament'
    },
    {
      id: 17,
      src: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&w=800',
      alt: 'Basketball Court',
      caption: 'Basketball practice session'
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=800',
      alt: 'Football Match',
      caption: 'School football team in action'
    },
    {
      id: 19,
      src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800',
      alt: 'Swimming Pool',
      caption: 'School swimming pool'
    },
    {
      id: 20,
      src: 'https://images.unsplash.com/photo-1582396118141-0f8b6edb9a31?auto=format&fit=crop&w=800',
      alt: 'Badminton Court',
      caption: 'Indoor badminton facility'
    },
  ]
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Campus');
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
    caption: string;
  }>(null);

  // Function to handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Function to open image in modal
  const openModal = (image: { src: string; alt: string; caption: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Helmet>
        <title>Gallery - GD Goenka Public School, Rudrapur</title>
        <meta name="description" content="Browse through our gallery showcasing GD Goenka Public School's campus, events, activities, and more." />
      </Helmet>

      <main>
        <div className="bg-gradient-to-r from-school-primary to-school-primary/80 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Gallery</h1>
            <p className="text-xl">Explore our school through images</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            {/* Gallery Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(galleryData).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? 'bg-school-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryData[activeCategory as keyof typeof galleryData].map((image) => (
                <div 
                  key={image.id} 
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-gray-700 text-sm">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedImage.alt}</h3>
                <p className="text-gray-700">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Gallery;
