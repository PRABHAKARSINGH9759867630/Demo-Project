import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface Animation {
  name: string;
  type: 'fade' | 'slide' | 'zoom' | 'bounce';
  duration: number;
  delay: number;
  easing: string;
}

interface DesignToolsProps {
  onSave: (settings: DesignSettings) => void;
  initialSettings?: DesignSettings;
}

interface DesignSettings {
  animations: Animation[];
  parallax: {
    enabled: boolean;
    intensity: number;
  };
  background: {
    type: 'color' | 'image' | 'video';
    value: string;
    overlay: boolean;
    overlayColor: string;
    overlayOpacity: number;
  };
  effects: {
    blur: number;
    brightness: number;
    contrast: number;
    grayscale: number;
  };
}

const defaultSettings: DesignSettings = {
  animations: [
    {
      name: 'Fade In',
      type: 'fade',
      duration: 500,
      delay: 0,
      easing: 'ease-in-out'
    }
  ],
  parallax: {
    enabled: false,
    intensity: 0.5
  },
  background: {
    type: 'color',
    value: '#ffffff',
    overlay: false,
    overlayColor: '#000000',
    overlayOpacity: 0.5
  },
  effects: {
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0
  }
};

const DesignTools: React.FC<DesignToolsProps> = ({ onSave, initialSettings = defaultSettings }) => {
  const [settings, setSettings] = useState<DesignSettings>(initialSettings);
  const [previewElement, setPreviewElement] = useState<HTMLElement | null>(null);

  const handleSettingChange = (key: keyof DesignSettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleNestedSettingChange = (
    parentKey: keyof DesignSettings,
    childKey: string,
    value: any
  ) => {
    setSettings(prev => {
      const parent = prev[parentKey] as Record<string, any>;
      return {
        ...prev,
        [parentKey]: {
          ...parent,
          [childKey]: value
        }
      };
    });
  };

  const addAnimation = () => {
    setSettings(prev => ({
      ...prev,
      animations: [
        ...prev.animations,
        {
          name: 'New Animation',
          type: 'fade',
          duration: 500,
          delay: 0,
          easing: 'ease-in-out'
        }
      ]
    }));
  };

  const removeAnimation = (index: number) => {
    setSettings(prev => ({
      ...prev,
      animations: prev.animations.filter((_, i) => i !== index)
    }));
  };

  const updateAnimation = (index: number, updates: Partial<Animation>) => {
    setSettings(prev => ({
      ...prev,
      animations: prev.animations.map((anim, i) =>
        i === index ? { ...anim, ...updates } : anim
      )
    }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Design Tools</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preview */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div
              className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center"
              style={{
                background: settings.background.type === 'color' ? settings.background.value : 'none',
                filter: `
                  blur(${settings.effects.blur}px)
                  brightness(${settings.effects.brightness}%)
                  contrast(${settings.effects.contrast}%)
                  grayscale(${settings.effects.grayscale}%)
                `
              }}
            >
              <div
                className="p-8 bg-white rounded-lg shadow-lg"
                ref={setPreviewElement}
              >
                <h3 className="text-xl font-bold mb-2">Preview Element</h3>
                <p>This element will show your applied effects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="animations">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="animations">Animations</TabsTrigger>
                <TabsTrigger value="background">Background</TabsTrigger>
                <TabsTrigger value="effects">Effects</TabsTrigger>
              </TabsList>

              <TabsContent value="animations" className="space-y-4">
                <div className="space-y-4">
                  {settings.animations.map((animation, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">Animation {index + 1}</h4>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeAnimation(index)}
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label>Name</Label>
                          <Input
                            value={animation.name}
                            onChange={(e) =>
                              updateAnimation(index, { name: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <Label>Type</Label>
                          <Select
                            value={animation.type}
                            onValueChange={(value) =>
                              updateAnimation(index, { type: value as Animation['type'] })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fade">Fade</SelectItem>
                              <SelectItem value="slide">Slide</SelectItem>
                              <SelectItem value="zoom">Zoom</SelectItem>
                              <SelectItem value="bounce">Bounce</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Duration (ms)</Label>
                          <Input
                            type="number"
                            value={animation.duration}
                            onChange={(e) =>
                              updateAnimation(index, { duration: Number(e.target.value) })
                            }
                          />
                        </div>
                        <div>
                          <Label>Delay (ms)</Label>
                          <Input
                            type="number"
                            value={animation.delay}
                            onChange={(e) =>
                              updateAnimation(index, { delay: Number(e.target.value) })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button onClick={addAnimation}>Add Animation</Button>
                </div>
              </TabsContent>

              <TabsContent value="background" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label>Background Type</Label>
                    <Select
                      value={settings.background.type}
                      onValueChange={(value) =>
                        handleNestedSettingChange('background', 'type', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="color">Color</SelectItem>
                        <SelectItem value="image">Image</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {settings.background.type === 'color' && (
                    <div>
                      <Label>Color</Label>
                      <Input
                        type="color"
                        value={settings.background.value}
                        onChange={(e) =>
                          handleNestedSettingChange('background', 'value', e.target.value)
                        }
                      />
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="overlay"
                      checked={settings.background.overlay}
                      onCheckedChange={(checked) =>
                        handleNestedSettingChange('background', 'overlay', checked)
                      }
                    />
                    <Label htmlFor="overlay">Enable Overlay</Label>
                  </div>
                  {settings.background.overlay && (
                    <>
                      <div>
                        <Label>Overlay Color</Label>
                        <Input
                          type="color"
                          value={settings.background.overlayColor}
                          onChange={(e) =>
                            handleNestedSettingChange('background', 'overlayColor', e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label>Overlay Opacity</Label>
                        <Slider
                          value={[settings.background.overlayOpacity * 100]}
                          onValueChange={([value]) =>
                            handleNestedSettingChange('background', 'overlayOpacity', value / 100)
                          }
                          max={100}
                          step={1}
                        />
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="effects" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label>Blur</Label>
                    <Slider
                      value={[settings.effects.blur]}
                      onValueChange={([value]) =>
                        handleNestedSettingChange('effects', 'blur', value)
                      }
                      max={20}
                      step={1}
                    />
                  </div>
                  <div>
                    <Label>Brightness</Label>
                    <Slider
                      value={[settings.effects.brightness]}
                      onValueChange={([value]) =>
                        handleNestedSettingChange('effects', 'brightness', value)
                      }
                      max={200}
                      step={1}
                    />
                  </div>
                  <div>
                    <Label>Contrast</Label>
                    <Slider
                      value={[settings.effects.contrast]}
                      onValueChange={([value]) =>
                        handleNestedSettingChange('effects', 'contrast', value)
                      }
                      max={200}
                      step={1}
                    />
                  </div>
                  <div>
                    <Label>Grayscale</Label>
                    <Slider
                      value={[settings.effects.grayscale]}
                      onValueChange={([value]) =>
                        handleNestedSettingChange('effects', 'grayscale', value)
                      }
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <Button
                className="w-full"
                onClick={() => onSave(settings)}
              >
                Save Design Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DesignTools; 