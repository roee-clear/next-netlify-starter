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
            label: 'Home',
            name: 'home',
            file: 'content/pages/home.md',
            fields: [
              {
                label: 'Hero Title',
                name: 'hero_title',
                widget: 'string',
              },
              {
                label: 'Hero Description',
                name: 'hero_description',
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