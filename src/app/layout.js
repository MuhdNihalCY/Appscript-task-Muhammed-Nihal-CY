import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
});

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

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

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </head>
            <body className={`${inter.variable} ${dmSans.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
