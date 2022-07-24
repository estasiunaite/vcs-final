import React from "react";

import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Cards from "../Components/Cards/Cards";
import Subscriptions from "../Components/Subscriptions/Subscriptions";
import Food from "../Components/Food/Food";
import Activities from "../Components/Activities/Activities";
import Testimonial from "../Components/Testimonial/Testimonial";
import Gallery from "../Components/Gallery/Gallery";
import Map from "../Components/Map/Map";
import Footer from "../Components/Footer/Footer";
import Calendar from "../Components/Calendar/Calendar";
import Yoga from "../Components/Yoga/Yoga";

const Home = () => (
  <>
    <Header />
    <Hero />
    <Calendar />
    <Cards />
    <Subscriptions />
    <Food />
    <Activities />
    <Yoga />
    <Gallery />
    <Testimonial />
    <Map />
    <Footer />
  </>
);

export default Home;
