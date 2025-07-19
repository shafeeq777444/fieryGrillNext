"use client"
import React from "react";

import Hero from "../components/Home/Hero.jsx";
import AboutBrief from "../components/Home/AboutBrief.jsx";
import ScrollingReviewCards from "../components/Home/Review.jsx";
import NewsLetter from "../components/Home/NewsLetter.jsx";
import DeliveryBrief from "../components/Home/DeliveryBrief.jsx";
import FoodAndPlansBrief from "../components/Home/FoodAndPlansBrief.jsx";
import AnimatedOnScroll from "../components/common/AnimatedScrollerOnWraaper.jsx";
import Offers from "../containers/home/Offers.jsx";

// import GlowButton from '../components/Buttons/GlowButton'
// import SwipableCardCarousel from '../components/Home/Gallery.js'
// import InstagramCard from '../components/Gallery/InstagramCard.jsx'
// import HeroAbout from '../components/Home/About.jsx'
// import CardList from '../containers/SocialCardList.jsx'


const Home = () => {
    return (
        <div className="bg-white"> 
          <Hero />
  <AnimatedOnScroll><Offers /></AnimatedOnScroll>
  <AnimatedOnScroll><AboutBrief /></AnimatedOnScroll>
  <AnimatedOnScroll><FoodAndPlansBrief /></AnimatedOnScroll>
  <AnimatedOnScroll><DeliveryBrief /></AnimatedOnScroll>
  <AnimatedOnScroll><ScrollingReviewCards /></AnimatedOnScroll>
  <NewsLetter />
        </div>
    );
};

export default Home;
