import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Raleway } from "next/font/google";


const raleway = Raleway({subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
  )
}
