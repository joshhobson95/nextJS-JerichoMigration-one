import React from "react";
import Head from "next/head";
import { Raleway } from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Component imports; adjust paths based on your folder structure
import Banner from "@/components/Home/Banners/Banner";
import Banner6 from '@/components/Home/Banners/Banner6';
import Banner7 from '@/components/Home/Banners/Banner7';
import NewThisWeek from '@/components/Home/Containers/ThisWeek';
import VideosContainer from '@/components/Home/Containers/VideosContainer';
import GardeningCalendar from '@/components/Home/Containers/GardeningCalendar';
import NewintheBlog from '@/components/Home/Containers/NewintheBlog';
import Gallery from '@/components/Home/Gallery/Gallery';
import Gallery2 from '@/components/Home/Gallery/Gallery2';
import MoreAboutJericho from '@/components/Home/MoreAboutJericho/MoreAboutJericho';
import CallButton from "./contact/CallButton";
import MapButtonHome from "@/components/Home/MapButton/MapButtonHome";
import HoursButton from "@/components/Home/HoursButton/HoursButton";
import Popup from '@/components/Home/Popup/Popup';
import PromotionsContainer from '@/components/Home/Containers/PromotionsContainer';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
      <title>Jericho Nursery</title>
        <meta name="description" content="Welcome to Jericho Nursery, a leading provider of quality plants and gardening supplies. Discover our wide selection of products and services for all your gardening needs." />
        <meta name="keywords" content="Jericho Nursery, plants, gardening, supplies, Albuqueruque, New Mexico, Southwest, xeric, xeriscape, flower, frequent, club, alameda, north valley, abq, horticulture, garden experts, hobson, jericho, nursery, all, your, yard, and, garden, needs" />
      </Head>

      <div className={`home ${raleway.className}`}>  
        <div className="welcome">
          <div className="w">
            <h4 className="w_1">Welcome to</h4>
            <h1 className="w_2">Jericho Nursery</h1>
            <h4 className="w_3">All your Yard and Garden needs</h4>
          </div>
        </div>

        <Popup />

        <div className="hours_and">
          <CallButton />
          <MapButtonHome />
          <HoursButton />
        </div>

        <div className="desktop_hours_and">
          <h3>505-899-7555</h3>
          <h3>Monday–Saturday 9–6 | Sundays 11–5</h3>
          <h3>101 Alameda Blvd</h3>
        </div>

        <Gallery />

        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <NewintheBlog />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <Banner7 />
          <PromotionsContainer />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <NewThisWeek />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <Banner6 />
          <VideosContainer />
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <GardeningCalendar />
        </div>

        <Gallery2 />
        <MoreAboutJericho />
        <Banner />

      </div>
    </>
  );
}
