import { useState, useEffect, useRef } from 'react';

const TeamSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  
  // Team data model
  const teamMembers = [
    {
      id: 1,
      name: "Harpreet Singh",
      role: "Founder & Head Chef",
      bio: "With over 25 years of culinary experience, Harpreet brings his grandmother's recipes to life in every meal.",
      image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520male%2520chef%2520in%2520his%252050s%2520with%2520a%2520warm%2520smile%252C%2520wearing%2520a%2520traditional%2520chef%2527s%2520outfit%2520with%2520a%2520turban.%2520He%2520has%2520a%2520distinguished%2520appearance%2520with%2520a%2520salt-and-pepper%2520beard.%2520The%2520lighting%2520is%2520soft%2520and%2520flattering%2520against%2520a%2520neutral%2520background.&width=400&height=400&seq=6&orientation=squarish",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Priya Kaur",
      role: "Kitchen Manager",
      bio: "Priya ensures every meal meets our high standards of quality and authenticity before it leaves our kitchen.",
      image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520smiling%2520Indian%2520woman%2520in%2520her%252040s%2520wearing%2520a%2520colorful%2520traditional%2520outfit%2520with%2520a%2520chef%2527s%2520apron.%2520She%2520has%2520a%2520warm%252C%2520motherly%2520appearance%2520with%2520her%2520hair%2520neatly%2520tied%2520back.%2520The%2520lighting%2520is%2520soft%2520and%2520flattering%2520against%2520a%2520neutral%2520background.&width=400&height=400&seq=7&orientation=squarish",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Arjun Sharma",
      role: "Sous Chef",
      bio: "A culinary school graduate who combines traditional techniques with modern efficiency in our kitchen.",
      image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520young%2520Indian%2520male%2520chef%2520in%2520his%2520early%252030s%2520with%2520a%2520friendly%2520smile%252C%2520wearing%2520a%2520modern%2520chef%2527s%2520jacket.%2520He%2520has%2520a%2520contemporary%2520appearance%2520with%2520stylish%2520short%2520hair.%2520The%2520lighting%2520is%2520soft%2520and%2520flattering%2520against%2520a%2520neutral%2520background.&width=400&height=400&seq=8&orientation=squarish",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Neha Patel",
      role: "Customer Relations",
      bio: "Neha handles all customer inquiries and ensures our service meets everyone's dietary needs and preferences.",
      image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520a%2520young%2520Indian%2520woman%2520in%2520her%2520mid-20s%2520with%2520a%2520bright%2520smile%252C%2520wearing%2520business%2520casual%2520attire.%2520She%2520has%2520a%2520modern%2520appearance%2520with%2520stylish%2520long%2520hair.%2520The%2520lighting%2520is%2520soft%2520and%2520flattering%2520against%2520a%2520neutral%2520background.&width=400&height=400&seq=9&orientation=squarish",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 5,
      name: "Raj Malhotra",
      role: "Delivery Manager",
      bio: "Raj coordinates our delivery team to ensure your meals arrive hot and on time, every time.",
      image: "https://readdy.ai/api/search-image?query=Professional%2520portrait%2520of%2520an%2520Indian%2520man%2520in%2520his%2520late%252020s%2520wearing%2520a%2520delivery%2520uniform%2520with%2520a%2520friendly%2520smile.%2520He%2520has%2520a%2520neat%2520appearance%2520with%2520short%2520hair.%2520The%2520lighting%2520is%2520soft%2520and%2520flattering%2520against%2520a%2520neutral%2520background.&width=400&height=400&seq=10&orientation=squarish",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];
  
  // Scroll to next and previous slides
  const scrollToNext = () => {
    if (sliderRef.current) {
      const nextSlide = Math.min(activeSlide + 1, teamMembers.length - 1);
      setActiveSlide(nextSlide);
      const slideWidth = sliderRef.current.querySelector('.team-slide').offsetWidth + 24; // 24px is the gap
      sliderRef.current.scrollLeft = slideWidth * nextSlide;
    }
  };
  
  const scrollToPrev = () => {
    if (sliderRef.current) {
      const prevSlide = Math.max(activeSlide - 1, 0);
      setActiveSlide(prevSlide);
      const slideWidth = sliderRef.current.querySelector('.team-slide').offsetWidth + 24; // 24px is the gap
      sliderRef.current.scrollLeft = slideWidth * prevSlide;
    }
  };
  
  // Handle dot navigation
  const goToSlide = (index) => {
    if (sliderRef.current) {
      setActiveSlide(index);
      const slideWidth = sliderRef.current.querySelector('.team-slide').offsetWidth + 24; // 24px is the gap
      sliderRef.current.scrollLeft = slideWidth * index;
    }
  };
  
  // Handle scroll events to update active slide
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const slideWidth = sliderRef.current.querySelector('.team-slide').offsetWidth + 24;
        const newActiveSlide = Math.round(sliderRef.current.scrollLeft / slideWidth);
        setActiveSlide(newActiveSlide);
      }
    };
    
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The passionate people behind every delicious meal we deliver.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4" />
        </div>
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="team-slider flex overflow-x-auto pb-8 gap-6 hide-scrollbar" 
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="team-slide flex-shrink-0 w-64 md:w-72">
                <div className="bg-white flex flex-col rounded-lg shadow-md p-6 text-center h-100 ">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 ">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600  h-22 overflow-hidden text-sm mb-4">{member.bio}</p>
                  <div className="flex   justify-center space-x-3">
                    <a
                      href={member.socialLinks.facebook}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                    >
                      <i className="ri-facebook-fill" />
                    </a>
                    <a
                      href={member.socialLinks.instagram}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                    >
                      <i className="ri-instagram-line" />
                    </a>
                    <a
                      href={member.socialLinks.linkedin}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                    >
                      <i className="ri-linkedin-fill" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden md:block">
            <button
              onClick={scrollToPrev}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
            >
              <i className="ri-arrow-left-s-line ri-lg" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
            <button
              onClick={scrollToNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
            >
              <i className="ri-arrow-right-s-line ri-lg" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 md:hidden">
          <div className="space-x-2">
            {teamMembers.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;