import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Raleway } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Optional: track route changes as pageviews
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag?.("config", "G-QTXV1CLD6E", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <div className={raleway.className}>
      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QTXV1CLD6E"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QTXV1CLD6E');
        `}
      </Script>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
