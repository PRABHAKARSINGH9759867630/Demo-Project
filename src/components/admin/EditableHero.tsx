import { useState, useEffect } from 'react';
import { ChevronRight, X, Check, Edit } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEditableContent } from '@/hooks/use-editable-content';

export type HeroBanner = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
};

type EditableHeroProps = {
  initialBanners: HeroBanner[];
};

const EditableHero = ({ initialBanners }: EditableHeroProps) => {
  const { content: banners, updateContent, isEditing, toggleEditMode, isAdmin } = 
    useEditableContent<HeroBanner[]>('hero-banners', 'hero', initialBanners);
  
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [editingBanner, setEditingBanner] = useState<HeroBanner | null>(null);

  // Reset editing state when edit mode is toggled
  useEffect(() => {
    if (!isEditing) {
      setEditingBanner(null);
    }
  }, [isEditing]);

  // Auto-rotate banners when not editing
  useEffect(() => {
    if (!isEditing) {
      const interval = setInterval(() => {
        if (!isEditing) {
          handleNextBanner();
        }
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isEditing]);

  const handlePrevBanner = () => {
    if (isAnimating || isEditing) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
      setIsAnimating(false);
    }, 500);
  };

  const handleNextBanner = () => {
    if (isAnimating || isEditing) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
      setIsAnimating(false);
    }, 500);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0] || !editingBanner) return;
    
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (event.target?.result) {
        setEditingBanner({
          ...editingBanner,
          image: event.target.result as string
        });
      }
    };
    
    reader.readAsDataURL(file);
  };

  const startEditing = (banner: HeroBanner) => {
    if (!isEditing) {
      toggleEditMode();
    }
    setEditingBanner({ ...banner });
  };

  const cancelEditing = () => {
    setEditingBanner(null);
    if (isEditing) {
      toggleEditMode();
    }
  };

  const saveEdits = () => {
    if (!editingBanner) return;
    
    const updatedBanners = banners.map(b => 
      b.id === editingBanner.id ? editingBanner : b
    );
    
    updateContent(updatedBanners);
    setEditingBanner(null);
    toggleEditMode();
  };

  const addNewBanner = () => {
    const newId = Math.max(...banners.map(b => b.id), 0) + 1;
    
    const newBanner: HeroBanner = {
      id: newId,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600',
      title: 'New Banner',
      subtitle: 'Click to edit this banner',
      cta: 'Learn More',
      link: '/about'
    };
    
    const updatedBanners = [...banners, newBanner];
    updateContent(updatedBanners);
    setCurrentBanner(updatedBanners.length - 1);
  };

  const deleteBanner = (id: number) => {
    if (banners.length <= 1) {
      alert('Cannot delete the last banner');
      return;
    }
    
    const updatedBanners = banners.filter(b => b.id !== id);
    updateContent(updatedBanners);
    
    if (currentBanner >= updatedBanners.length) {
      setCurrentBanner(updatedBanners.length - 1);
    }
  };

  return (
    <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden">
      {/* Banner Images */}
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

      {/* Admin Controls */}
      {isAdmin && (
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleEditMode}
            className="bg-white text-black hover:bg-gray-100"
          >
            {isEditing ? 'Exit Edit Mode' : 'Edit Hero'}
          </Button>
          
          {isEditing && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={addNewBanner}
                className="bg-white text-black hover:bg-gray-100"
              >
                Add Banner
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => startEditing(banners[currentBanner])}
                className="bg-white text-black hover:bg-gray-100"
              >
                Edit Current
              </Button>
            </>
          )}
        </div>
      )}

      {/* Navigation Arrows */}
      {!isEditing && banners.length > 1 && (
        <>
          <button
            onClick={handlePrevBanner}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm"
            aria-label="Previous banner"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={handleNextBanner}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm"
            aria-label="Next banner"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Banner Content */}
      <div className="container mx-auto h-full flex items-center relative z-10">
        <Card className={`max-w-2xl border-none bg-transparent shadow-none transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <CardContent className="p-0 text-white">
            {editingBanner && editingBanner.id === banners[currentBanner].id ? (
              <div className="space-y-4 bg-black/50 backdrop-blur-md p-6 rounded-lg border border-white/20">
                <h3 className="text-lg font-medium">Edit Banner</h3>
                <div>
                  <label className="block text-sm mb-1">Image</label>
                  <div className="flex gap-2">
                    <Input 
                      value={editingBanner.image} 
                      onChange={(e) => setEditingBanner({...editingBanner, image: e.target.value})}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Image URL"
                    />
                    <label className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md cursor-pointer">
                      Browse
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">Title</label>
                  <Input 
                    value={editingBanner.title} 
                    onChange={(e) => setEditingBanner({...editingBanner, title: e.target.value})}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Subtitle</label>
                  <Textarea 
                    value={editingBanner.subtitle} 
                    onChange={(e) => setEditingBanner({...editingBanner, subtitle: e.target.value})}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">CTA Text</label>
                  <Input 
                    value={editingBanner.cta} 
                    onChange={(e) => setEditingBanner({...editingBanner, cta: e.target.value})}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Link</label>
                  <Input 
                    value={editingBanner.link} 
                    onChange={(e) => setEditingBanner({...editingBanner, link: e.target.value})}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="flex justify-between pt-2">
                  <Button onClick={cancelEditing} variant="outline" size="sm">
                    <X className="mr-1 h-4 w-4" /> Cancel
                  </Button>
                  <Button onClick={saveEdits} variant="default" className="bg-green-600 hover:bg-green-700" size="sm">
                    <Check className="mr-1 h-4 w-4" /> Save
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <h1 className="font-heading text-5xl font-bold mb-6 text-white leading-tight">
                  {banners[currentBanner].title}
                </h1>
                <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                  {banners[currentBanner].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={banners[currentBanner].link} 
                    className="bg-school-accent hover:bg-school-accent/90 text-white px-6 py-3 rounded-md font-medium flex items-center group"
                  >
                    {banners[currentBanner].cta}
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/about" 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-md font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </>
            )}
            
            {isEditing && !editingBanner && (
              <div className="absolute -right-4 -top-4 flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => startEditing(banners[currentBanner])}
                  className="rounded-full h-9 w-9 bg-white text-black hover:bg-gray-100"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => deleteBanner(banners[currentBanner].id)}
                  className="rounded-full h-9 w-9 bg-white text-red-500 hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Banner Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isEditing) return;
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

export default EditableHero;
