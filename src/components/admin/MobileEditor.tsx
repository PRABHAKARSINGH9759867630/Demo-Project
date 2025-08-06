import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MobileEditorProps {
  onSave: (settings: MobileSettings) => void;
  initialSettings?: MobileSettings;
}

interface MobileSettings {
  hideElements: string[];
  fontSize: {
    base: string;
    headings: string;
  };
  spacing: {
    padding: string;
    margin: string;
  };
  menuStyle: 'hamburger' | 'bottom' | 'top';
  showBackToTop: boolean;
}

const defaultSettings: MobileSettings = {
  hideElements: [],
  fontSize: {
    base: '16px',
    headings: '24px'
  },
  spacing: {
    padding: '16px',
    margin: '8px'
  },
  menuStyle: 'hamburger',
  showBackToTop: true
};

const MobileEditor: React.FC<MobileEditorProps> = ({ onSave, initialSettings = defaultSettings }) => {
  const [settings, setSettings] = useState<MobileSettings>(initialSettings);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('mobile');

  const handleSettingChange = (key: keyof MobileSettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleNestedSettingChange = (
    parentKey: keyof MobileSettings,
    childKey: string,
    value: string
  ) => {
    setSettings(prev => {
      const parent = prev[parentKey] as Record<string, string>;
      return {
        ...prev,
        [parentKey]: {
          ...parent,
          [childKey]: value
        }
      };
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Mobile Editor</h2>
        <div className="flex items-center space-x-4">
          <Button
            variant={previewMode === 'mobile' ? 'default' : 'outline'}
            onClick={() => setPreviewMode('mobile')}
          >
            Mobile
          </Button>
          <Button
            variant={previewMode === 'desktop' ? 'default' : 'outline'}
            onClick={() => setPreviewMode('desktop')}
          >
            Desktop
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preview */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div
              className={`relative ${
                previewMode === 'mobile'
                  ? 'w-[375px] h-[667px] mx-auto border-8 border-gray-800 rounded-[3rem]'
                  : 'w-full h-[600px]'
              }`}
            >
              <div className="w-full h-full bg-white overflow-auto">
                {/* Preview content will go here */}
                <div className="p-4">
                  <h1 className="text-2xl font-bold mb-4">Preview Content</h1>
                  <p>This is how your content will look on {previewMode} devices.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="layout">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="layout">Layout</TabsTrigger>
                <TabsTrigger value="typography">Typography</TabsTrigger>
                <TabsTrigger value="navigation">Navigation</TabsTrigger>
              </TabsList>

              <TabsContent value="layout" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label>Padding</Label>
                    <Input
                      type="text"
                      value={settings.spacing.padding}
                      onChange={(e) =>
                        handleNestedSettingChange('spacing', 'padding', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Margin</Label>
                    <Input
                      type="text"
                      value={settings.spacing.margin}
                      onChange={(e) =>
                        handleNestedSettingChange('spacing', 'margin', e.target.value)
                      }
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="typography" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label>Base Font Size</Label>
                    <Input
                      type="text"
                      value={settings.fontSize.base}
                      onChange={(e) =>
                        handleNestedSettingChange('fontSize', 'base', e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label>Heading Font Size</Label>
                    <Input
                      type="text"
                      value={settings.fontSize.headings}
                      onChange={(e) =>
                        handleNestedSettingChange('fontSize', 'headings', e.target.value)
                      }
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="navigation" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label>Menu Style</Label>
                    <Select
                      value={settings.menuStyle}
                      onValueChange={(value) =>
                        handleSettingChange('menuStyle', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hamburger">Hamburger Menu</SelectItem>
                        <SelectItem value="bottom">Bottom Navigation</SelectItem>
                        <SelectItem value="top">Top Navigation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="back-to-top"
                      checked={settings.showBackToTop}
                      onCheckedChange={(checked) =>
                        handleSettingChange('showBackToTop', checked)
                      }
                    />
                    <Label htmlFor="back-to-top">Show Back to Top Button</Label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <Button
                className="w-full"
                onClick={() => onSave(settings)}
              >
                Save Mobile Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobileEditor; 