import "./globals.css";

export const metadata = {
  title: "Space-Tourism",
  description: "My website",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body cz-shortcut-listen="true">
        {children}
        </body>
    </html>
  );
}
