import React from "react";

import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Cards from "../Components/Cards/Cards";
import Subscriptions from "../Components/Subscriptions/Subscriptions";
import Props from "../Components/Props/Props";
import Activities from "../Components/Activities/Activities";
import Testimonial from "../Components/Testimonial/Testimonial";
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
    <Props />
    <Activities />
    <Yoga />
    <Gallery />
    <Testimonial />
    <Map />
    <Footer />
  </>
);

export default Home;
