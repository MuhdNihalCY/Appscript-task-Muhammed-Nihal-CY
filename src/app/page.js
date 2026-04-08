import ProductGrid from '@/components/product-grid/product-grid';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 }, // Revalidate every hour to keep data fresh
  });

  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <section className="page-header">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>
      <ProductGrid products={products} />
    </main>
  );
}