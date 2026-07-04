import "./globals.css";
import { geist } from "@/lib/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}