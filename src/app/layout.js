import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-tertiary",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    display: "swap",
});

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
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
