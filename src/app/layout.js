import './globals.css';

export const metadata = {
  title: 'Shop | My Commerce',
  description: 'Discover our curated collection of sustainable, handcrafted products at My Commerce.',
  keywords: 'sustainable fashion, handcrafted bags, recycled backpack, metta muse shop',
  openGraph: {
    title: 'Shop | My Commerce',
    description: 'Discover our curated collection of sustainable, handcrafted products.',
    url: 'https://taskurl.netlify.app',
    siteName: 'My Commerce',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Shop | My Commerce',
    description: 'Discover our curated collection of sustainable products.',
    url: 'https://taskurl.netlify.app',
    publisher: {
      '@type': 'Organization',
      name: 'My Commerce',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}