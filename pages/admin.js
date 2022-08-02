import dynamic from 'next/dynamic';

const config = {
 
};

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then(async (cms) => {
    //  const widget = await import('netlify-cms-widget-mdx').then((module) => module);

      cms.init();

    //   c ms.registerWidget('mdx', widget.MdxControl, widget.MdxPreview)
    }),
  { ssr: false, loading: () => <p>Loading Admin...</p> },
);

const Admin = () => {
  return <CMS />;
};

export default Admin;