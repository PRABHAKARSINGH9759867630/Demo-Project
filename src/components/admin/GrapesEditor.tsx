
import { useEffect, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import { useEditableContent } from '@/hooks/use-editable-content';
import { toast } from 'sonner';
import './GrapesEditor.css';

interface GrapesEditorProps {
  contentId: string;
  initialContent?: string;
  onSave?: (content: string) => void;
}

const GrapesEditor = ({ contentId, initialContent = '', onSave }: GrapesEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<any>(null);
  const { isAdmin } = useEditableContent(contentId, 'section', {});

  useEffect(() => {
    if (!editorRef.current || editor) return;

    // Initialize GrapesJS editor
    const gjsEditor = grapesjs.init({
      container: editorRef.current,
      height: '70vh',
      width: 'auto',
      fromElement: false,
      storageManager: false,
      plugins: [gjsPresetWebpage],
      pageManager: {
        pages: []
      },
      deviceManager: {
        devices: [
          {
            id: 'desktop',
            name: 'Desktop',
            width: '',
          },
          {
            id: 'tablet',
            name: 'Tablet',
            width: '768px',
            widthMedia: '992px',
          },
          {
            id: 'mobilePortrait',
            name: 'Mobile',
            width: '320px',
            widthMedia: '575px',
          },
        ]
      },
      panels: {
        defaults: [
          {
            id: 'layers',
            el: '.panel__right',
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: false,
              cl: true,
              cr: false,
            },
          },
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-layers',
                active: true,
                label: 'Layers',
                command: 'show-layers',
              },
              {
                id: 'show-style',
                active: false,
                label: 'Styles',
                command: 'show-styles',
              },
            ],
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: 'D',
                command: 'set-device-desktop',
                active: true,
                className: 'fa fa-desktop',
              },
              {
                id: 'device-tablet',
                label: 'T',
                command: 'set-device-tablet',
                className: 'fa fa-tablet',
              },
              {
                id: 'device-mobile',
                label: 'M',
                command: 'set-device-mobile',
                className: 'fa fa-mobile',
              },
            ],
          }
        ]
      },
      blockManager: {
        appendTo: '.blocks-container'
      },
      layerManager: {
        appendTo: '.layers-container'
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: '3D',
            open: true,
            buildProps: ['transform', 'perspective', 'transform-style', 'backface-visibility'],
            properties: [
              {
                name: 'Transform',
                property: 'transform',
                type: 'composite',
                properties: [
                  { name: 'Rotate X', property: 'transform-rotate-x' },
                  { name: 'Rotate Y', property: 'transform-rotate-y' },
                  { name: 'Rotate Z', property: 'transform-rotate-z' },
                  { name: 'Scale', property: 'transform-scale' },
                ],
              },
              {
                name: 'Perspective',
                property: 'perspective',
                type: 'slider',
                units: ['px'],
                min: 0,
                max: 2000,
              },
              {
                name: 'Transform Style',
                property: 'transform-style',
                type: 'radio',
                options: [
                  { id: 'flat', value: 'flat', name: 'Flat' },
                  { id: 'preserve-3d', value: 'preserve-3d', name: '3D' },
                ]
              },
              {
                name: 'Backface Visibility',
                property: 'backface-visibility',
                type: 'radio',
                options: [
                  { id: 'visible', value: 'visible', name: 'Visible' },
                  { id: 'hidden', value: 'hidden', name: 'Hidden' },
                ]
              },
            ]
          },
          {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          },
          {
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],
          },
          {
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border', 'box-shadow', 'background'],
          },
          {
            name: 'Filters',
            open: false,
            buildProps: ['filter', 'backdrop-filter'],
            properties: [
              {
                name: 'Filter',
                property: 'filter',
                type: 'stack',
                properties: [
                  { name: 'Blur', property: 'blur', type: 'slider', units: ['px'], min: 0, max: 20 },
                  { name: 'Brightness', property: 'brightness', type: 'slider', min: 0, max: 2, step: 0.1 },
                  { name: 'Contrast', property: 'contrast', type: 'slider', min: 0, max: 2, step: 0.1 },
                  { name: 'Grayscale', property: 'grayscale', type: 'slider', min: 0, max: 1, step: 0.1 },
                ]
              },
              {
                name: 'Backdrop Filter',
                property: 'backdrop-filter',
                type: 'stack',
                properties: [
                  { name: 'Blur', property: 'blur', type: 'slider', units: ['px'], min: 0, max: 20 },
                  { name: 'Brightness', property: 'brightness', type: 'slider', min: 0, max: 2, step: 0.1 },
                ]
              }
            ]
          },
          {
            name: 'Animation',
            open: false,
            buildProps: ['transition', 'animation'],
          },
        ],
      },
      selectorManager: {
        appendTo: '.styles-container'
      },
      commands: {
        defaults: {
          'show-layers': {
            getRowEl(editor: any) { return editor.getContainer().closest('.editor-row'); },
            getLayersEl(row: any) { return row.querySelector('.layers-container'); },
            run(editor: any, sender: any) {
              const lmEl = this.getLayersEl(this.getRowEl(editor));
              lmEl.style.display = '';
            },
            stop(editor: any, sender: any) {
              const lmEl = this.getLayersEl(this.getRowEl(editor));
              lmEl.style.display = 'none';
            },
          },
          'show-styles': {
            getRowEl(editor: any) { return editor.getContainer().closest('.editor-row'); },
            getStyleEl(row: any) { return row.querySelector('.styles-container'); },
            run(editor: any, sender: any) {
              const smEl = this.getStyleEl(this.getRowEl(editor));
              smEl.style.display = '';
            },
            stop(editor: any, sender: any) {
              const smEl = this.getStyleEl(this.getRowEl(editor));
              smEl.style.display = 'none';
            },
          }
        }
      },
      canvas: {
        styles: [
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;700&display=swap',
          '/src/index.css',
          '/src/App.css'
        ],
      }
    });

    // Load initial content if available
    if (initialContent) {
      gjsEditor.setComponents(initialContent);
    }

    // Setup custom blocks for school website
    const blockManager = gjsEditor.BlockManager;
    
    // Hero section block
    blockManager.add('hero-section', {
      label: 'Hero Section',
      category: 'Sections',
      content: `
        <div class="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-school-primary to-school-dark">
          <div class="container mx-auto px-6 relative z-10 text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white font-heading">Your Education Journey Starts Here</h1>
            <p class="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">Discover a world of knowledge and opportunities at GD Goenka Rudrapur</p>
            <a href="#" class="bg-school-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">Learn More</a>
          </div>
          <div class="absolute inset-0 bg-black opacity-40"></div>
        </div>
      `,
      attributes: { class: '3d-block' }
    });

    // Info card block with 3D effect
    blockManager.add('3d-card', {
      label: '3D Card',
      category: 'Elements',
      content: `
        <div class="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:rotate-1" style="transform-style: preserve-3d; perspective: 1000px;">
          <h3 class="text-2xl font-bold mb-3 text-school-primary">Card Title</h3>
          <p class="text-gray-700">This is a 3D card with hover effects that add depth and interactivity.</p>
        </div>
      `,
      attributes: { class: '3d-block' }
    });

    // Faculty profile block
    blockManager.add('faculty-profile', {
      label: 'Faculty Profile',
      category: 'People',
      content: `
        <div class="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div class="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-school-secondary">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="Faculty Member" class="w-full h-full object-cover" />
          </div>
          <h3 class="text-xl font-bold mb-1 text-school-primary">Dr. Jane Smith</h3>
          <p class="text-gray-600 mb-3">Mathematics Department</p>
          <p class="text-center text-gray-700">PhD in Applied Mathematics with 15+ years of teaching experience.</p>
        </div>
      `,
      attributes: { class: '3d-block' }
    });

    // News announcement block
    blockManager.add('news-announcement', {
      label: 'News Announcement',
      category: 'Content',
      content: `
        <div class="bg-gradient-to-r from-school-light to-white p-6 rounded-lg shadow-md border-l-4 border-school-accent">
          <div class="flex items-center mb-4">
            <span class="text-school-accent text-2xl mr-3">📢</span>
            <h3 class="text-xl font-bold text-school-primary">Latest Announcement</h3>
          </div>
          <p class="text-gray-700 mb-4">School will be closed on Monday, May 10th due to staff professional development day.</p>
          <div class="text-right">
            <span class="text-sm text-gray-500">Posted: May 5, 2023</span>
          </div>
        </div>
      `,
      attributes: { class: '3d-block' }
    });

    // Gallery component block
    blockManager.add('image-gallery', {
      label: 'Image Gallery',
      category: 'Media',
      content: `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div class="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1584697964190-7383cbee8277?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80" alt="Gallery Image 1" class="w-full h-64 object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80" alt="Gallery Image 2" class="w-full h-64 object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80" alt="Gallery Image 3" class="w-full h-64 object-cover" />
          </div>
        </div>
      `,
      attributes: { class: '3d-block' }
    });

    // Save button functionality
    gjsEditor.Commands.add('save-content', {
      run: function(editor: any) {
        const html = editor.getHtml();
        const css = editor.getCss();
        const content = {
          html,
          css
        };
        
        if (onSave) {
          onSave(JSON.stringify(content));
          toast.success('Content saved successfully!');
        }
      }
    });

    // Add save button to editor
    gjsEditor.Panels.addButton('options', {
      id: 'save-content',
      className: 'fa fa-floppy-o',
      command: 'save-content',
      attributes: { title: 'Save Content' }
    });

    setEditor(gjsEditor);

    return () => {
      gjsEditor.destroy();
    };
  }, [onSave, initialContent]);

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="grapes-editor-container bg-gray-100 border rounded-lg shadow-lg">
      <div className="editor-header bg-school-primary text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Page Editor</h2>
        <p>Drag and drop elements to build your page</p>
      </div>
      <div className="editor-row" style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <div className="panel__left p-4 bg-white border-r" style={{ width: '15%', minWidth: '200px' }}>
          <div className="blocks-container overflow-auto" style={{ height: '100%' }}></div>
        </div>
        <div className="editor-canvas flex-grow">
          <div className="panel__devices bg-gray-200 p-2 flex justify-center space-x-2"></div>
          <div ref={editorRef} className="gjs-editor"></div>
        </div>
        <div className="panel__right p-4 bg-white border-l" style={{ width: '15%', minWidth: '200px', display: 'flex', flexDirection: 'column' }}>
          <div className="panel__switcher flex space-x-2 mb-3"></div>
          <div className="layers-container overflow-auto" style={{ flex: 1 }}></div>
          <div className="styles-container overflow-auto" style={{ flex: 1, display: 'none' }}></div>
        </div>
      </div>
    </div>
  );
};

export default GrapesEditor;
