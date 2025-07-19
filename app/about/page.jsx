"use client"
import React from 'react'
import AboutHero from '../../components/Menu/common/AboutHero.jsx'
import OurStory from '../../components/About/OurStory.jsx'
import WhyChooseUs from '../../components/About/WhyChooseUs.jsx'
import MeetOurTeam from '../../components/About/MeetOurTeam.jsx'
import CallToAction from '../../components/About/CallToAction.jsx'
import NewsLetter from '../../components/Home/NewsLetter.jsx'
import AnimatedOnScroll from '../../components/common/AnimatedScrollerOnWraaper.jsx'

const About = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - Punjabi Grills Tiffin Mess</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: `
        body {
          font-family: 'Open Sans', sans-serif;
          color: #333;
          background-color: #ffffff;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
        .hero-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' ...");
        }
        /* Keep the rest of your styles here */
      `
    }}
  />
  
  {/* Header */}
  
  {/* Hero Section */}

  {/* Our Story Section */}
  <AnimatedOnScroll>
 <OurStory/></AnimatedOnScroll>
  {/* Why Choose Us Section */}
  <AnimatedOnScroll><WhyChooseUs/></AnimatedOnScroll>
  {/* Meet Our Team Section */}
  {/* <MeetOurTeam/> */}
  {/* Testimonials Section */}
  
  {/* Call to Action Section */}
  <AnimatedOnScroll><CallToAction/></AnimatedOnScroll>
  {/* Newsletter Section */}
 <NewsLetter/>
</>

  )
}

export default About
