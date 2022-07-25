import React from "react";

import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Cards from "../Components/Cards/Cards";
import Subscriptions from "../Components/Subscriptions/Subscriptions";
import Equipment from "../Components/Equipment/Equipment";
import Studio from "../Components/Studio/Studio";
// import Testimonial from "../Components/Testimonial/Testimonial";
import Gallery from "../Components/Gallery/Gallery";
import Map from "../Components/Map/Map";
import Footer from "../Components/Footer/Footer";
import Yoga from "../Components/Yoga/Yoga";

const Home = () => (
  <>
    <Header />
    <Hero />
    <Cards />
    <Subscriptions />
    <Equipment />
    <Studio />
    <Yoga />
    <Gallery />
    {/* <Testimonial /> */}
    <Map />
    <Footer />
  </>
);

export default Home;
