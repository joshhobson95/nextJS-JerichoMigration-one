import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Raleway } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const raleway = Raleway({subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
    <div className={raleway.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
