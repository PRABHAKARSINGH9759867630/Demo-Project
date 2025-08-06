
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GrapesEditor from './GrapesEditor';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save } from 'lucide-react';
import { useEditableContent } from '@/hooks/use-editable-content';
import { toast } from 'sonner';

interface PageEditorProps {
  pagePath?: string;
}

const PageEditor = ({ pagePath }: PageEditorProps) => {
  const { pageId } = useParams<{ pageId: string }>();
  const navigate = useNavigate();
  const contentId = pageId || pagePath || 'home-page';
  
  const { content, updateContent, isAdmin } = useEditableContent(
    `page-${contentId}`,
    'section',
    { html: '', css: '' }
  );
  
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSave = (editorContent: string) => {
    setIsSaving(true);
    
    try {
      updateContent(JSON.parse(editorContent));
      toast.success('Page content saved successfully!');
    } catch (error) {
      console.error('Error saving page content:', error);
      toast.error('Failed to save page content. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };
  
  const handleBack = () => {
    navigate(-1);
  };
  
  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
        <p>You need admin privileges to access the page editor.</p>
        <Button onClick={handleBack} className="mt-4">Go Back</Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button variant="ghost" onClick={handleBack} className="mr-2">
            <ArrowLeft size={18} />
          </Button>
          <h2 className="text-2xl font-bold">Editing: {contentId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h2>
        </div>
        <Button disabled={isSaving} className="bg-school-accent hover:bg-school-accent/90">
          <Save size={18} className="mr-2" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <GrapesEditor 
          contentId={`page-${contentId}`}
          initialContent={content.html}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default PageEditor;
