import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

export const metadata = {
  title: "EventSpace",
  description: "EventSpace is a platform for finding and booking unique event spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
