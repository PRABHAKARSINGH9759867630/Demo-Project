import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const textEffects = [
  "Text Fade",
  "Glow Text",
  "Slide In Text",
  "Text Pop",
  "Letter Bounce",
  "Text Morph",
  "Text Stretch",
  "Text Pulse",
  "Text Flicker",
  "Underline Hover",
  "Zoom In Text",
  "Wave Text",
  "Text Glow Ripple",
  "Text Fade Slide",
  "Typewriter Effect",
  "Text Shift",
  "Text Lift",
  "Expand Text",
  "Shadow Play",
  "Shimmer Text"
];

const TextEditor = () => {
  const [text, setText] = useState("");
  const [selectedEffect, setSelectedEffect] = useState<string>("Text Fade");
  const [previewText, setPreviewText] = useState("");

  const getEffectClass = (effect: string) => {
    const effectMap: { [key: string]: string } = {
      "Text Fade": "transition-opacity duration-300 hover:opacity-75",
      "Glow Text": "transition-all duration-300 hover:text-blue-500 hover:drop-shadow-[0_0_0.3em_#3b82f6]",
      "Slide In Text": "transition-all duration-300 hover:translate-x-2",
      "Text Pop": "transition-all duration-300 hover:scale-110",
      "Letter Bounce": "transition-all duration-300 hover:animate-bounce",
      "Text Morph": "transition-all duration-300 hover:skew-x-12",
      "Text Stretch": "transition-all duration-300 hover:scale-x-110",
      "Text Pulse": "transition-all duration-300 hover:animate-pulse",
      "Text Flicker": "transition-all duration-300 hover:opacity-50",
      "Underline Hover": "transition-all duration-300 hover:underline",
      "Zoom In Text": "transition-all duration-300 hover:scale-110",
      "Wave Text": "transition-all duration-300 hover:animate-wave",
      "Text Glow Ripple": "transition-all duration-300 hover:text-blue-500 hover:drop-shadow-[0_0_0.5em_#3b82f6]",
      "Text Fade Slide": "transition-all duration-300 hover:opacity-75 hover:translate-x-2",
      "Typewriter Effect": "transition-all duration-300 hover:animate-typewriter",
      "Text Shift": "transition-all duration-300 hover:translate-y-[-2px]",
      "Text Lift": "transition-all duration-300 hover:translate-y-[-5px]",
      "Expand Text": "transition-all duration-300 hover:tracking-wider",
      "Shadow Play": "transition-all duration-300 hover:drop-shadow-lg",
      "Shimmer Text": "transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500",
      "Text Glow": "transition-all duration-300 hover:text-blue-500 hover:drop-shadow-[0_0_0.3em_#3b82f6]",
      "Text Slide": "transition-all duration-300 hover:translate-x-4",
      "Text Bounce": "transition-all duration-300 hover:animate-bounce",
      "Text Morph": "transition-all duration-300 hover:skew-x-12",
      "Text Stretch": "transition-all duration-300 hover:scale-x-110",
      "Text Pulse": "transition-all duration-300 hover:animate-pulse",
      "Text Flicker": "transition-all duration-300 hover:opacity-50",
      "Text Underline": "transition-all duration-300 hover:underline",
      "Text Zoom": "transition-all duration-300 hover:scale-110",
      "Text Wave": "transition-all duration-300 hover:animate-wave",
      "Text Fade Slide": "transition-all duration-300 hover:opacity-75 hover:translate-x-2",
      "Text Typewriter": "transition-all duration-300 hover:animate-typewriter",
      "Text Expand": "transition-all duration-300 hover:tracking-wider",
      "Text Shadow": "transition-all duration-300 hover:drop-shadow-lg",
      "Text Shimmer": "transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
    };
    return effectMap[effect] || effectMap["Text Fade"];
  };

  const handlePreview = () => {
    setPreviewText(text);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <Textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[100px]"
        />
        
        <Select value={selectedEffect} onValueChange={setSelectedEffect}>
          <SelectTrigger>
            <SelectValue placeholder="Select text effect" />
          </SelectTrigger>
          <SelectContent>
            {textEffects.map((effect) => (
              <SelectItem key={effect} value={effect}>
                {effect}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="p-4">
        <div className="min-h-[100px] flex items-center justify-center">
          <p className={`text-lg ${getEffectClass(selectedEffect)}`}>
            {previewText || "Preview text will appear here"}
          </p>
        </div>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => setText("")}>Clear</Button>
        <Button onClick={handlePreview}>Preview</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default TextEditor; 