/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import LazyImg from "../common/LazyImg";

const Card = ({ menu, isMobile, onClick }) => {
  // Get products from the new data structure
  const products = menu.products || [];
  
  return (
    <motion.div
      className={`relative rounded-3xl bg-white overflow-hidden shadow-2xl border border-gray-100 transition-all duration-500 ease-in-out group hover:shadow-3xl hover:-translate-y-2 focus-within:shadow-3xl focus-within:-translate-y-2 cursor-pointer ${
        isMobile 
          ? 'w-[320px] h-[480px] mx-auto backdrop-blur-sm bg-white/95' 
          : 'w-full h-full'
      }`}
      tabIndex={0}
      whileHover={{ 
        scale: isMobile ? 1.02 : 1.05,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
    >
      {/* Gradient overlay for mobile */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-amber-50/30 pointer-events-none z-10 rounded-3xl"></div>
      )}
      
      <div className={`relative overflow-hidden ${isMobile ? 'h-56' : 'h-40 sm:h-48 md:h-56'} rounded-t-3xl`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <LazyImg
            src={menu.image}
            alt={menu.day}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-focus:scale-110"
            width={500}
            height={300}
          />
        </motion.div>
        {/* Day Badge */}
        <div className={`absolute z-20 ${isMobile ? 'top-4 left-4' : 'top-2 sm:top-3 left-2 sm:left-3'}`}>
          <motion.span 
            className={`inline-block bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold rounded-full shadow-lg tracking-wide uppercase border-2 border-white/20 ${
              isMobile 
                ? 'text-sm px-4 py-2' 
                : 'text-xs sm:text-sm px-2 sm:px-3 py-1'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            {menu.day}
          </motion.span>
        </div>
        
        {/* Decorative corner element for mobile */}
        {isMobile && (
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-500/20 to-transparent rounded-bl-full"></div>
        )}
      </div>

      <div className={`${isMobile ? 'p-5' : 'p-2 sm:p-3 md:p-4'} relative z-20`}>
        {/* Product Items */}
        <motion.ul 
          className={`space-y-2 sm:space-y-3 mt-2 sm:mt-3`}
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
          {products.slice(0, isMobile ? 4 : 3).map((product, idx) => (
            <motion.li
              key={product.productID}
              className={`text-gray-700 flex items-center justify-between gap-2 ${
                isMobile 
                  ? 'text-base font-medium' 
                  : 'text-xs sm:text-sm md:text-base'
              }`}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className={`rounded-full bg-gradient-to-r from-amber-500 to-red-500 flex-shrink-0 border-2 border-white/20 shadow-sm ${
                  isMobile 
                    ? 'h-2 w-2' 
                    : 'h-1 w-1 sm:h-1.5 sm:w-1.5'
                }`}></span>
                <span className={`${isMobile ? 'text-gray-800' : 'truncate'} flex-1`}>
                  {product.productName}
                </span>
              </div>
              {/* <span className={`text-red-600 font-semibold flex-shrink-0 ${
                isMobile ? 'text-sm' : 'text-xs'
              }`}>
                £{product.price}
              </span> */}
            </motion.li>
          ))}
        </motion.ul>
        
        {/* Show more indicator if there are more products */}
        {products.length > (isMobile ? 4 : 3) && (
          <motion.div
            className="mt-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-xs text-red-600 font-medium">
              +{products.length - (isMobile ? 4 : 3)} more items
            </span>
          </motion.div>
        )}
        
        {/* Bottom decorative element for mobile */}
        {isMobile && (
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-gradient-to-tr from-amber-200/30 to-red-200/30 rounded-full blur-sm"></div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;