import ProductGrid from "@/components/product-grid/product-grid";
import styles from "./page.module.css";

export const metadata = {
    title: "Discover Our Products | Metta Muse",
    description:
        "Browse our full collection of sustainable, handcrafted bags, backpacks and accessories. Filter by category, fabric, and occasion.",
};

async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 3600 }, // Revalidate every hour to keep data fresh
    });

    if (!res.ok) throw new Error("Failed to fetch products");

    return res.json();
}

export default async function HomePage() {
    const products = await getProducts();

    return (
        <main className="container">
            <section className={styles.pageHeader}>
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere
                    rhoncus scelerisque. Dolor integer scelerisque nibh amet mi
                    ut elementum dolor.
                </p>
            </section>
            <ProductGrid products={products} />
        </main>
    );
}
