import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout title="About DJ Events">
      <h1>About Page</h1>
      <p>This is an CRUD app to find the latest DJ and other musical events</p>
      <p>Built with:</p>
      <ul>
        <li>Nextjs</li>
        <li>React</li>
        <li>React Icons</li>
        <li>Backend built with Strapi and hosted on Heroku</li>
        <li>Image hosting with Cloudnary</li>
        <li>React-Toastify</li>
        <li>Cookie Authentication</li>
      </ul>
    </Layout>
  );
}
