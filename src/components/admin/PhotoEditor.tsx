import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  RotateCcw, 
  RotateCw, 
  FlipHorizontal, 
  FlipVertical,
  ZoomIn,
  ZoomOut,
  Crop,
  Image as ImageIcon,
  Filter,
  Droplet,
  Sun,
  Moon,
  Contrast,
  Layers
} from 'lucide-react';

interface PhotoEditorProps {
  imageUrl: string;
  onSave: (updates: PhotoStyle) => void;
  onCancel: () => void;
}

export interface PhotoStyle {
  width?: string;
  height?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  borderRadius?: string;
  filter?: string;
  transform?: string;
  opacity?: number;
  brightness?: number;
  contrast?: number;
  saturate?: number;
  blur?: number;
  grayscale?: number;
  sepia?: number;
  hueRotate?: number;
  invert?: number;
  border?: string;
  boxShadow?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
  zIndex?: number;
  transition?: string;
  animation?: string;
}

const PhotoEditor: React.FC<PhotoEditorProps> = ({ imageUrl, onSave, onCancel }) => {
  const [style, setStyle] = useState<PhotoStyle>({
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '0px',
    filter: 'none',
    transform: 'none',
    opacity: 1,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    hueRotate: 0,
    invert: 0,
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    padding: '0px',
    margin: '0px',
    position: 'relative',
    zIndex: 1,
    transition: 'none',
    animation: 'none'
  });

  const handleStyleChange = (property: keyof PhotoStyle, value: any) => {
    setStyle(prev => ({ ...prev, [property]: value }));
  };

  const handleSave = () => {
    onSave(style);
  };

  const getImageStyle = () => {
    return {
      ...style,
      filter: `brightness(${style.brightness}%) contrast(${style.contrast}%) saturate(${style.saturate}%) blur(${style.blur}px) grayscale(${style.grayscale}%) sepia(${style.sepia}%) hue-rotate(${style.hueRotate}deg) invert(${style.invert}%)`,
    };
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5" />
          Photo Editor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Preview */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="w-full h-auto"
              style={getImageStyle()}
            />
          </div>

          {/* Controls */}
          <div>
            <Tabs defaultValue="basic">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="filters">Filters</TabsTrigger>
                <TabsTrigger value="effects">Effects</TabsTrigger>
                <TabsTrigger value="layout">Layout</TabsTrigger>
              </TabsList>

              <TabsContent value="basic">
                <div className="space-y-4">
                  <div>
                    <Label>Size</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="text"
                        placeholder="Width"
                        value={style.width}
                        onChange={(e) => handleStyleChange('width', e.target.value)}
                      />
                      <Input
                        type="text"
                        placeholder="Height"
                        value={style.height}
                        onChange={(e) => handleStyleChange('height', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Object Fit</Label>
                    <Select
                      value={style.objectFit}
                      onValueChange={(value) => handleStyleChange('objectFit', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select fit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cover">Cover</SelectItem>
                        <SelectItem value="contain">Contain</SelectItem>
                        <SelectItem value="fill">Fill</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="scale-down">Scale Down</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Border Radius</Label>
                    <Input
                      type="text"
                      placeholder="Border radius"
                      value={style.borderRadius}
                      onChange={(e) => handleStyleChange('borderRadius', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Opacity</Label>
                    <Slider
                      value={[style.opacity * 100]}
                      onValueChange={([value]) => handleStyleChange('opacity', value / 100)}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="filters">
                <div className="space-y-4">
                  <div>
                    <Label>Brightness</Label>
                    <Slider
                      value={[style.brightness]}
                      onValueChange={([value]) => handleStyleChange('brightness', value)}
                      min={0}
                      max={200}
                      step={1}
                    />
                  </div>

                  <div>
                    <Label>Contrast</Label>
                    <Slider
                      value={[style.contrast]}
                      onValueChange={([value]) => handleStyleChange('contrast', value)}
                      min={0}
                      max={200}
                      step={1}
                    />
                  </div>

                  <div>
                    <Label>Saturation</Label>
                    <Slider
                      value={[style.saturate]}
                      onValueChange={([value]) => handleStyleChange('saturate', value)}
                      min={0}
                      max={200}
                      step={1}
                    />
                  </div>

                  <div>
                    <Label>Blur</Label>
                    <Slider
                      value={[style.blur]}
                      onValueChange={([value]) => handleStyleChange('blur', value)}
                      min={0}
                      max={20}
                      step={0.1}
                    />
                  </div>

                  <div>
                    <Label>Grayscale</Label>
                    <Slider
                      value={[style.grayscale]}
                      onValueChange={([value]) => handleStyleChange('grayscale', value)}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>

                  <div>
                    <Label>Sepia</Label>
                    <Slider
                      value={[style.sepia]}
                      onValueChange={([value]) => handleStyleChange('sepia', value)}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>

                  <div>
                    <Label>Hue Rotate</Label>
                    <Slider
                      value={[style.hueRotate]}
                      onValueChange={([value]) => handleStyleChange('hueRotate', value)}
                      min={0}
                      max={360}
                      step={1}
                    />
                  </div>

                  <div>
                    <Label>Invert</Label>
                    <Slider
                      value={[style.invert]}
                      onValueChange={([value]) => handleStyleChange('invert', value)}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="effects">
                <div className="space-y-4">
                  <div>
                    <Label>Transform</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        onClick={() => handleStyleChange('transform', 'rotate(-90deg)')}
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Rotate Left
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleStyleChange('transform', 'rotate(90deg)')}
                      >
                        <RotateCw className="w-4 h-4 mr-2" />
                        Rotate Right
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleStyleChange('transform', 'scaleX(-1)')}
                      >
                        <FlipHorizontal className="w-4 h-4 mr-2" />
                        Flip Horizontal
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleStyleChange('transform', 'scaleY(-1)')}
                      >
                        <FlipVertical className="w-4 h-4 mr-2" />
                        Flip Vertical
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label>Border</Label>
                    <Input
                      type="text"
                      placeholder="Border (e.g., 2px solid black)"
                      value={style.border}
                      onChange={(e) => handleStyleChange('border', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Box Shadow</Label>
                    <Input
                      type="text"
                      placeholder="Box shadow"
                      value={style.boxShadow}
                      onChange={(e) => handleStyleChange('boxShadow', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Background Color</Label>
                    <Input
                      type="color"
                      value={style.backgroundColor}
                      onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="layout">
                <div className="space-y-4">
                  <div>
                    <Label>Position</Label>
                    <Select
                      value={style.position}
                      onValueChange={(value) => handleStyleChange('position', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relative">Relative</SelectItem>
                        <SelectItem value="absolute">Absolute</SelectItem>
                        <SelectItem value="fixed">Fixed</SelectItem>
                        <SelectItem value="sticky">Sticky</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Z-Index</Label>
                    <Input
                      type="number"
                      value={style.zIndex}
                      onChange={(e) => handleStyleChange('zIndex', parseInt(e.target.value))}
                    />
                  </div>

                  <div>
                    <Label>Padding</Label>
                    <Input
                      type="text"
                      placeholder="Padding"
                      value={style.padding}
                      onChange={(e) => handleStyleChange('padding', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Margin</Label>
                    <Input
                      type="text"
                      placeholder="Margin"
                      value={style.margin}
                      onChange={(e) => handleStyleChange('margin', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Transition</Label>
                    <Input
                      type="text"
                      placeholder="Transition (e.g., all 0.3s ease)"
                      value={style.transition}
                      onChange={(e) => handleStyleChange('transition', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Animation</Label>
                    <Input
                      type="text"
                      placeholder="Animation"
                      value={style.animation}
                      onChange={(e) => handleStyleChange('animation', e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoEditor; 