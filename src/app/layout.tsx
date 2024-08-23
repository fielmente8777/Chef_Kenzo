import type { Metadata } from "next";
import "./globals.scss";
import { Call, Footer, NavBar, Whatsapp } from "@/components";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chef Kenzo - Catering Services",
  description: "We know you&#39;re here for the food shots??🤤",
  keywords: "Catering, Catering Service, Catering Booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="clarity-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nqorxhu8vm");`,
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <Footer />
        <Whatsapp />
        <Call />
      </body>
    </html>
  );
}
