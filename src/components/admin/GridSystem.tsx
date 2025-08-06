import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

interface GridSystemProps {
  onSettingsChange: (settings: GridSettings) => void;
  initialSettings?: GridSettings;
}

interface GridSettings {
  enabled: boolean;
  size: number;
  color: string;
  opacity: number;
  snapToGrid: boolean;
  snapThreshold: number;
  showGuides: boolean;
  guides: {
    horizontal: number[];
    vertical: number[];
  };
}

const defaultSettings: GridSettings = {
  enabled: true,
  size: 20,
  color: '#000000',
  opacity: 0.2,
  snapToGrid: true,
  snapThreshold: 5,
  showGuides: true,
  guides: {
    horizontal: [],
    vertical: []
  }
};

const GridSystem: React.FC<GridSystemProps> = ({
  onSettingsChange,
  initialSettings = defaultSettings
}) => {
  const [settings, setSettings] = useState<GridSettings>(initialSettings);
  const [isDragging, setIsDragging] = useState(false);
  const [currentGuide, setCurrentGuide] = useState<'horizontal' | 'vertical' | null>(null);
  const [guidePosition, setGuidePosition] = useState<number>(0);

  useEffect(() => {
    onSettingsChange(settings);
  }, [settings, onSettingsChange]);

  const handleSettingChange = (key: keyof GridSettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleNestedSettingChange = (
    parentKey: keyof GridSettings,
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

  const addGuide = (type: 'horizontal' | 'vertical', position: number) => {
    setSettings(prev => ({
      ...prev,
      guides: {
        ...prev.guides,
        [type]: [...prev.guides[type], position]
      }
    }));
  };

  const removeGuide = (type: 'horizontal' | 'vertical', position: number) => {
    setSettings(prev => ({
      ...prev,
      guides: {
        ...prev.guides,
        [type]: prev.guides[type].filter(p => p !== position)
      }
    }));
  };

  const handleMouseDown = (e: React.MouseEvent, type: 'horizontal' | 'vertical') => {
    setIsDragging(true);
    setCurrentGuide(type);
    setGuidePosition(type === 'horizontal' ? e.clientY : e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && currentGuide) {
      setGuidePosition(currentGuide === 'horizontal' ? e.clientY : e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging && currentGuide) {
      addGuide(currentGuide, guidePosition);
      setIsDragging(false);
      setCurrentGuide(null);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Grid System</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grid Preview */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div
              className="w-full h-[400px] bg-white relative"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {/* Grid Lines */}
              {settings.enabled && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, ${settings.color} ${settings.opacity}px, transparent ${settings.opacity}px),
                      linear-gradient(to bottom, ${settings.color} ${settings.opacity}px, transparent ${settings.opacity}px)
                    `,
                    backgroundSize: `${settings.size}px ${settings.size}px`
                  }}
                />
              )}

              {/* Guides */}
              {settings.showGuides && (
                <>
                  {settings.guides.horizontal.map((position, index) => (
                    <div
                      key={`h-${index}`}
                      className="absolute left-0 right-0 h-px bg-red-500 cursor-move"
                      style={{ top: position }}
                      onMouseDown={(e) => handleMouseDown(e, 'horizontal')}
                    />
                  ))}
                  {settings.guides.vertical.map((position, index) => (
                    <div
                      key={`v-${index}`}
                      className="absolute top-0 bottom-0 w-px bg-red-500 cursor-move"
                      style={{ left: position }}
                      onMouseDown={(e) => handleMouseDown(e, 'vertical')}
                    />
                  ))}
                </>
              )}

              {/* Guide Creation Areas */}
              <div
                className="absolute top-0 left-0 right-0 h-4 cursor-ns-resize"
                onMouseDown={(e) => handleMouseDown(e, 'horizontal')}
              />
              <div
                className="absolute top-0 left-0 bottom-0 w-4 cursor-ew-resize"
                onMouseDown={(e) => handleMouseDown(e, 'vertical')}
              />
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="grid-enabled"
                  checked={settings.enabled}
                  onCheckedChange={(checked) =>
                    handleSettingChange('enabled', checked)
                  }
                />
                <Label htmlFor="grid-enabled">Enable Grid</Label>
              </div>

              <div>
                <Label>Grid Size (px)</Label>
                <Slider
                  value={[settings.size]}
                  onValueChange={([value]) =>
                    handleSettingChange('size', value)
                  }
                  min={10}
                  max={100}
                  step={5}
                />
              </div>

              <div>
                <Label>Grid Color</Label>
                <Input
                  type="color"
                  value={settings.color}
                  onChange={(e) =>
                    handleSettingChange('color', e.target.value)
                  }
                />
              </div>

              <div>
                <Label>Grid Opacity</Label>
                <Slider
                  value={[settings.opacity * 100]}
                  onValueChange={([value]) =>
                    handleSettingChange('opacity', value / 100)
                  }
                  max={100}
                  step={1}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="snap-to-grid"
                  checked={settings.snapToGrid}
                  onCheckedChange={(checked) =>
                    handleSettingChange('snapToGrid', checked)
                  }
                />
                <Label htmlFor="snap-to-grid">Snap to Grid</Label>
              </div>

              {settings.snapToGrid && (
                <div>
                  <Label>Snap Threshold (px)</Label>
                  <Slider
                    value={[settings.snapThreshold]}
                    onValueChange={([value]) =>
                      handleSettingChange('snapThreshold', value)
                    }
                    min={1}
                    max={20}
                    step={1}
                  />
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Switch
                  id="show-guides"
                  checked={settings.showGuides}
                  onCheckedChange={(checked) =>
                    handleSettingChange('showGuides', checked)
                  }
                />
                <Label htmlFor="show-guides">Show Guides</Label>
              </div>

              {settings.showGuides && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Horizontal Guides</h4>
                    <div className="space-y-2">
                      {settings.guides.horizontal.map((position, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="number"
                            value={position}
                            onChange={(e) => {
                              const newGuides = [...settings.guides.horizontal];
                              newGuides[index] = Number(e.target.value);
                              handleSettingChange('guides', {
                                ...settings.guides,
                                horizontal: newGuides
                              });
                            }}
                          />
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeGuide('horizontal', position)}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Vertical Guides</h4>
                    <div className="space-y-2">
                      {settings.guides.vertical.map((position, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="number"
                            value={position}
                            onChange={(e) => {
                              const newGuides = [...settings.guides.vertical];
                              newGuides[index] = Number(e.target.value);
                              handleSettingChange('guides', {
                                ...settings.guides,
                                vertical: newGuides
                              });
                            }}
                          />
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeGuide('vertical', position)}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GridSystem; 