import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export const metadata = {
    title: "Shop | Metta Muse — Sustainable Handcrafted Products",
    description:
        "Discover our curated collection of sustainable, handcrafted bags, backpacks and accessories at Metta Muse. Shop now.",
    keywords:
        "sustainable fashion, handcrafted bags, recycled backpack, metta muse shop",
    openGraph: {
        title: "Shop | Metta Muse",
        description:
            "Discover our curated collection of sustainable, handcrafted products.",
        url: "https://appscrip-task-nihal.netlify.app",
        siteName: "Metta Muse",
        type: "website",
        images: [
            {
                url: "https://appscrip-task-nihal.netlify.app/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Metta Muse — Sustainable Handcrafted Products",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Shop | Metta Muse",
        description: "Discover our curated collection of sustainable products.",
        url: "https://appscrip-task-nihal.netlify.app",
        publisher: {
            "@type": "Organization",
            name: "Metta Muse",
            url: "https://appscrip-task-nihal.netlify.app",
        },
    };

    return (
        <html lang="en" >
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
