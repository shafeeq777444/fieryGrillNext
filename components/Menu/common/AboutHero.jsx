import React from 'react'

const AboutHero = () => {
  return (
    <section className="pt-20 relative overflow-hidden ">
    <img src='/assets/about/about-hero.jpg'
      className="absolute inset-0 z-0 object-cover object-top w-full h-full"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        opacity: "0.9"
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="container mx-auto px-4 py-20 md:py-32 relative z-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Fiery Grills Punjabi Tiffin
        </h1>
        <p className="text-sm md:text-md text-white mb-8 max-w-2xl">
          At Punjabi Grills Tiffin Mess, we serve freshly cooked, homely North
          Indian meals with love. Our mission is to bring the taste of
          traditional Punjabi kitchens to your table—healthy, hearty, and
          delivered daily.
        </p>
        <div className="flex flex-wrap gap-4">
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutHero
