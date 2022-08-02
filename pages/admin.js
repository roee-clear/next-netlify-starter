import dynamic from 'next/dynamic';

const config = {  
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'roee-clear/next-netlify-starter',
      branch: 'main',
    },
    media_folder: 'public/img',
    public_folder: 'img',
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            label: 'Test',
            name: 'test',
            file: 'content/pages/test.md',
            fields: [
              {
                label: 'Test Title',
                name: 'test_title',
                widget: 'string',
              },
              {
                label: 'Test Description',
                name: 'test_description',
                widget: 'markdown',
              },
            ],
          },
        ],
      },
    ],  
};

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then(async (cms) => {
    //  const widget = await import('netlify-cms-widget-mdx').then((module) => module);

      cms.init({config});

    //   c ms.registerWidget('mdx', widget.MdxControl, widget.MdxPreview)
    }),
  { ssr: false, loading: () => <p>Loading Admin...</p> },
);

const Admin = () => {
  return <CMS />;
};

export default Admin;