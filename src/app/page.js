import ProductGrid from "@/components/product-grid/product-grid";
import styles from "./page.module.css";
import FALLBACK_PRODUCTS from "@/lib/fallback-products"; // this was added because the fakestoreapi was unreliable during development, but in a real app you'd want better error handling/logging

export const metadata = {
    title: "Discover Our Products | Metta Muse",
    description:
        "Browse our full collection of sustainable, handcrafted bags, backpacks and accessories. Filter by category, fabric, and occasion.",
};

async function getProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products", {
            next: { revalidate: 3600 },
        });
        if (!res.ok) return FALLBACK_PRODUCTS; // return static products if API fails  - this was added because the fakestoreapi was unreliable during development, but in a real app you'd want better error handling/logging
        return res.json();
    } catch {
        return FALLBACK_PRODUCTS; // return static products if API fails - this was added because the fakestoreapi was unreliable during development, but in a real app you'd want better error handling/logging
    }
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
