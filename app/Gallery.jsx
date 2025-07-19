import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function PunjabiGrillUI() {
  // State for animation control
  const [isLoaded, setIsLoaded] = useState(false);
  
  // State for profile stats
  const stats = {
    posts: 6,
    followers: '10k',
    following: 60,
  };
  
  // Categories with icons
  const categories = [
    { name: 'Tandoori', icon: '🔥' },
    { name: 'Curry', icon: '🍲' },
    { name: 'Naan', icon: '🫓' },
    { name: 'Drinks', icon: '🥤' },
    { name: 'Specials', icon: '⭐' },
    { name: 'Desserts', icon: '🍧' },
  ];
  
  // Gallery items with different aspect ratios for mixed sizing
  const galleryItems = [
    { 
      id: 1, 
      image: '/assets/thursday.png', 
      title: 'Butter Grilled',
    //   bgColor: 'bg-yellow-50'
    },
    { 
      id: 2, 
      image: '/assets/menu1.png', 
      title: '#SpicyTandoor',
    //   bgColor: 'bg-red-500'
    },
    { 
      id: 3, 
      image: '/assets/nonveg.jpeg', 
      title: 'punjabi cheesy crispy',
    //   bgColor: 'bg-orange-400'
    },
    { 
      id: 4, 
      image: '/assets/thursday.png', 
      title: 'menu signatures',
    //   bgColor: 'bg-orange-400'
    },
    { 
      id: 5, 
      image: '/assets/menu2.png', 
      title: 'tandoori special',
    //   bgColor: 'bg-red-500'
    },
    { 
      id: 6, 
      image: '/assets/veg2.jpeg', 
      title: 'punjabi rolls',
    //   bgColor: 'bg-yellow-50'
    },
    { 
        id: 5, 
        image: '/assets/menu2.png', 
        title: 'tandoori special',
      //   bgColor: 'bg-red-500'
      },
      { 
        id: 6, 
        image: '/assets/veg2.jpeg', 
        title: 'punjabi rolls',
      //   bgColor: 'bg-yellow-50'
      },
  ];
  
  // Parallax scroll effect
  const scrollRef = useRef(null);
  
  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Container variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  // Item variants for animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-orange-50 min-h-screen text-red-800 font-sans">
      {/* Profile Header */}
      <motion.div 
        className=" p-6 rounded-b-3xl "
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <div className="relative">
            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-white text-4xl"><img src='/assets/logo1.png ' className='w-10 h-10'></img></span>
            </div>
          </div>
          
          <div className="ml-4 flex-1 ">
            <h1 className="text-lg font-bold">@punjabigrillhouse</h1>
            <div className="flex space-x-4 text-sm mt-1">
              <div>
                <span className="font-bold">{stats.posts}</span> posts
              </div>
              <div>
                <span className="font-bold">{stats.followers}</span> followers
              </div>
              <div>
                <span className="font-bold">{stats.following}</span> following
              </div>
            </div>
            <p className="text-sm mt-2 font-medium">Authentic Punjabi grill food & family!</p>
          </div>
        </div>
        
        <button className="bg-red-600 text-white w-full py-2 rounded-lg mt-4 font-medium">
          Order Now
        </button>
      </motion.div>
      
      {/* Categories */}
      <motion.div 
        className="px-4 py-6"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="flex overflow-x-auto pb-2 no-scrollbar">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center mr-6 "
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center cursor-default  ">
                <span className="text-2xl hover:scale-110 duration-200  transition-all ease-in-out">{category.icon}</span>
              </div>
              <span className="mt-2 text-xs font-medium">{category.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Gallery Grid */}
      <motion.div 
        className="px-4 pb-20 "
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        ref={scrollRef}
      >
        <div className="grid grid-cols-6 gap-3">
          {galleryItems.map((item) => {
            // Determine size class based on item id
            const sizeClasses = {
              1: "col-span-2 row-span-2", // Large tile
              2: "col-span-2 row-span-2", // Tall tile
              3: "col-span-2 row-span-2", // Large tile
              4: "col-span-2 row-span-2", // Wide tile
              5: "col-span-2 row-span-2", // Small tile
              6: "col-span-2 row-span-2", // Full width tile
            };
            
            return (
              <motion.div
                key={item.id}
                className={`rounded-xl overflow-hidden ${sizeClasses[item.id]} ${item.bgColor} shadow-md  `}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-full w-full  flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover rounded-lg h-full w-full"
                  />
                  {/* <div className="absolute bottom-3 left-3 right-3 bg-white bg-opacity-90 p-2 rounded-lg">
                    <p className="text-center font-bold text-red-700 text-sm">{item.title}</p>
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="bg-red-600 text-white p-3 rounded-full shadow-lg">
          <ChevronDown size={20} />
        </div>
      </motion.div>
    </div>
  );
}