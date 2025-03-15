import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark"> {/* Add "dark" class for dark mode */}
      <body>{children}</body>
    </html>
  );
}