import React from "react";
import Head from "next/head";

import AOS from 'aos';
import 'aos/dist/aos.css';
// Component imports; adjust paths based on your folder structure
import Banner from "@/components/Home/Banners/Banner";
import Banner6 from '@/components/Home/Banners/Banner6';
import Banner7 from '@/components/Home/Banners/Banner7';
import Banner2 from "@/components/Home/Banners/Banner2";
import NewThisWeek from '@/components/Home/Containers/ThisWeek';
import VideosContainer from '@/components/Home/Containers/VideosContainer';
import GardeningCalendar from '@/components/Home/Containers/GardeningCalendar';
import NewintheBlog from '@/components/Home/Containers/NewintheBlog';
import Gallery from '@/components/Home/Gallery/Gallery';
import Gallery2 from '@/components/Home/Gallery/Gallery2';
import MoreAboutJericho from '@/components/Home/MoreAboutJericho/MoreAboutJericho';
import CallButton from "../components/Contact/CallButton";
import MapButtonHome from "@/components/Home/MapButton/MapButtonHome";
import HoursButton from "@/components/Home/HoursButton/HoursButton";

import PromotionsContainer from '@/components/Home/Containers/PromotionsContainer';
import Banner3 from "@/components/Home/Banners/Banner3";
import Timetable from "@/components/Timetable/Timetable";
import Bulletin from "@/components/Bulletin/Bulletin";




export default function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Head>
     
      <title>Jericho Nursery | All your Yard and Garden needs</title>
   
      <meta
        name="description"
        content="Discover Albuquerque’s top-rated garden center. Jericho Nursery offers plants, flowers, trees, gardening supplies, expert advice, and unbeatable local service."
      />
      <meta property="og:title" content="Jericho Nursery | All your Yard and Garden needs" />
      <meta
        property="og:description"
        content="Shop plants, flowers, trees, and gardening supplies at Jericho Nursery. Locally owned, expert-run, and fully stocked for every season."
      />
      <meta
        property="og:image"
        content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.jerichonursery.com/" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />

      <link rel="canonical" href="https://www.jerichonursery.com/" />
    </Head>


      <div className={`home`}>  
        {/* <div className="welcome">
          <div className="w">
            <p className="w_1">Welcome to</p>
            <h1 className="w_2">Jericho Nursery</h1>
            <p className="w_3">All your Yard and Garden needs</p>
          </div>
        </div> */}


 <Bulletin />

        <div className="hours_and">


          <CallButton />
          <MapButtonHome />
          <HoursButton />
        </div>

        <div className="desktop_hours_and">
     
         
          <Timetable />
 
       
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

          <Banner3 />
        
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
            <Banner7 />
     
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
