import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Dr. Serena Blake | Therapy in Los Angeles",
  description: "Therapy for anxiety, relationships, and trauma recovery.",
  icons: {
    icon: "/logo.ico", // 👈 Favicon path (must be in /public/)
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.ico" />
        {/* Optional: add meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans text-gray-900 bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
