"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function FrontSlideshow({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute mt-20 flex items-center justify-center inset-0 bg-cover bg-center rounded-tl-[250px] rounded-tr-[250px]"
          style={{ backgroundImage: `url(${images[index]})` }}
       />
      
      </AnimatePresence>
      {/* <motion.h1
          initial={{ opacity: 0 ,y:50}}
          whileInView={{ opacity: 1 ,y:0}}
          transition={{ duration: 1.5 }}
         className="text-center z-1 font-sanskrit text-amber-100 text-6xl text-extrabold">KuberJi Mandir <br/> Pandukeshwar
          </motion.h1> */}
    </div>
  );
}
