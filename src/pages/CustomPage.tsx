
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ContentRenderer from '@/components/admin/ContentRenderer';

const CustomPage = () => {
  const { pageId } = useParams<{ pageId: string }>();
  
  return (
    <>
      <Helmet>
        <title>{pageId ? `${pageId.replace(/-/g, ' ')} | GD Goenka Rudrapur` : 'GD Goenka Rudrapur'}</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <ContentRenderer 
          contentId={pageId || 'custom-page'} 
          defaultContent={`
            <div class="text-center py-12">
              <h1 class="text-4xl font-bold mb-4 text-gradient">Welcome to our Custom Page</h1>
              <p class="text-xl mb-8">This page can be fully edited using the GrapesJS editor.</p>
              <div class="flex justify-center">
                <a href="#" class="button-3d bg-school-primary text-white px-6 py-3 rounded-lg">Learn More</a>
              </div>
            </div>
          `}
        />
      </div>
    </>
  );
};

export default CustomPage;
