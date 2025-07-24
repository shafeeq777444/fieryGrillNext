/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import LazyImg from "../common/LazyImg";

const Card = ({ menu, isMobile }) => {
  // Add check to ensure menu.sides exists and is an array
  const sides = Array.isArray(menu.sides) ? menu.sides : [];
  // console.log(menu,"menu")
  
  return (
    <div
      className={`relative rounded-2xl bg-white overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 ease-in-out group hover:shadow-2xl hover:-translate-y-1 focus-within:shadow-2xl focus-within:-translate-y-1 ${isMobile ? 'w-[250px] flex-shrink-0' : 'w-[320px]'}`}
      tabIndex={0}
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileFocus={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <LazyImg
            src={menu.image}
            alt={menu.mainDish || menu.day}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-focus:scale-105"
            width={500}
            height={300}
          />
        </motion.div>
        {/* Day Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block bg-amber-600/90 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full shadow-md tracking-wide uppercase border border-amber-700">
            {menu.day}
          </span>
        </div>
      </div>

      <div className="p-4 md:p-5">
        {/* <h4 className="text-red-800 text-xl font-semibold mb-2">
          {menu.mainDish}
        </h4> */}
        {/* Add container with motion staggering */}
        <motion.ul 
          className="space-y-2 mt-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.1 
              } 
            },
            hidden: {}
          }}
        >
          {sides.map((side, idx) => (
            <motion.li
              key={idx}
              className="text-gray-700 text-base flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="h-2 w-2 rounded-full bg-amber-600 flex-shrink-0 border border-amber-700 mr-2"></span>
              <span>{side}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Card;