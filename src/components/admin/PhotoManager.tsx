import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const transitionEffects = [
  "Smooth Hover",
  "Scale & Glide",
  "Bounce Shift",
  "Fade In & Out",
  "Twist & Scale",
  "Hover Glow",
  "Floating Effects",
  "Bounce Magic",
  "Transform Pulse",
  "Opacity Shift",
  "Hover Bloom",
  "Slide & Shine",
  "Fade Surge",
  "Pulse Shift",
  "Zoom Magic",
  "Drift & Lift",
  "Glow Fade",
  "Flip Flicker",
  "Sway Bounce",
  "Stretch & Glow",
  "Tilt Rush",
  "Glow Bounce",
  "Hover Shift",
  "Ripple Effect",
  "Wave Glide",
  "Hover Swirl",
  "Pop & Zoom",
  "Bounce Spark",
  "Morph Motion",
  "Flip Elevate"
];

const PhotoManager = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedEffect, setSelectedEffect] = useState<string>("Smooth Hover");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getEffectClass = (effect: string) => {
    const effectMap: { [key: string]: string } = {
      "Smooth Hover": "transition-all duration-300 hover:scale-105",
      "Scale & Glide": "transition-all duration-500 hover:scale-110 hover:translate-y-[-10px]",
      "Bounce Shift": "transition-all duration-300 hover:scale-105 hover:translate-y-[-5px] hover:animate-bounce",
      "Fade In & Out": "transition-opacity duration-300 hover:opacity-75",
      "Twist & Scale": "transition-all duration-300 hover:scale-110 hover:rotate-3",
      "Hover Glow": "transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50",
      "Floating Effects": "transition-all duration-500 hover:translate-y-[-10px] hover:shadow-xl",
      "Bounce Magic": "transition-all duration-300 hover:animate-bounce",
      "Transform Pulse": "transition-all duration-300 hover:scale-105 animate-pulse",
      "Opacity Shift": "transition-opacity duration-300 hover:opacity-80",
      "Hover Bloom": "transition-all duration-300 hover:scale-110 hover:brightness-110",
      "Slide & Shine": "transition-all duration-300 hover:translate-x-2 hover:shadow-lg",
      "Fade Surge": "transition-all duration-300 hover:opacity-90 hover:scale-105",
      "Pulse Shift": "transition-all duration-300 hover:animate-pulse hover:translate-y-[-5px]",
      "Zoom Magic": "transition-all duration-300 hover:scale-125",
      "Drift & Lift": "transition-all duration-300 hover:translate-y-[-8px] hover:rotate-2",
      "Glow Fade": "transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/30",
      "Flip Flicker": "transition-all duration-300 hover:rotate-y-180",
      "Sway Bounce": "transition-all duration-300 hover:rotate-3 hover:animate-bounce",
      "Stretch & Glow": "transition-all duration-300 hover:scale-x-110 hover:shadow-lg",
      "Tilt Rush": "transition-all duration-300 hover:rotate-6 hover:scale-105",
      "Glow Bounce": "transition-all duration-300 hover:animate-bounce hover:shadow-lg hover:shadow-blue-500/50",
      "Hover Shift": "transition-all duration-300 hover:translate-x-4 hover:translate-y-[-4px]",
      "Ripple Effect": "transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30",
      "Wave Glide": "transition-all duration-300 hover:animate-wave",
      "Hover Swirl": "transition-all duration-300 hover:rotate-12 hover:scale-110",
      "Pop & Zoom": "transition-all duration-300 hover:scale-110 hover:animate-pulse",
      "Bounce Spark": "transition-all duration-300 hover:animate-bounce hover:brightness-110",
      "Morph Motion": "transition-all duration-300 hover:skew-x-12 hover:scale-105",
      "Flip Elevate": "transition-all duration-300 hover:rotate-y-180 hover:translate-y-[-5px]"
    };
    return effectMap[effect] || effectMap["Smooth Hover"];
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="cursor-pointer"
        />
        
        <Select value={selectedEffect} onValueChange={setSelectedEffect}>
          <SelectTrigger>
            <SelectValue placeholder="Select transition effect" />
          </SelectTrigger>
          <SelectContent>
            {transitionEffects.map((effect) => (
              <SelectItem key={effect} value={effect}>
                {effect}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedImage && (
        <Card className="p-4">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={selectedImage}
              alt="Preview"
              className={`w-full h-full object-cover ${getEffectClass(selectedEffect)}`}
            />
          </div>
        </Card>
      )}

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default PhotoManager; 