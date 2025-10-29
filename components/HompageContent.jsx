// import React from "react";
// import { homePageContent } from "@/constant";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRef, useState } from "react";

// const HompageContent = () => {
//   const containerRef = useRef(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [start, setStart] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     setPosition({
//       x: e.clientX - start.x,
//       y: e.clientY - start.y,
//     });
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleMouseLeave = () => {
//     setIsDragging(false);

//   };

//   return (
//     <div className="hidden sm:block container mx-auto p-8 pt-8">
//       <h1 className="mb-4 text-center text-amber-100 text-3xl font-bold">
//         Welcome to KuberJi Mandir <br /> Pandukeshwar
//       </h1>
//       <p className="mb-10 text-center text-lg text-amber-100">
//         Lord Shri Badrinath&apos;s treasurer, Shri Kuber Bhandari, the treasurer
//         of the gods, resides in this divine Kuber temple in Pandukeshwar during
//         winters. It is near Yog Badri which is one of the Panch Badri.
//       </p>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//         {homePageContent.map((box) => (
//           <motion.div
//             ref={containerRef}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseLeave}

//             // whileHover={{ scale: 1.05 }}
//             // whileTap={{ scale: 0.95 }}
//             key={box.id}
//             style={{
//               backgroundPosition: isDragging ? `${position.x}px ${position.y}px`:null,
//             }}
//             className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
//           >
//             {/* <Image src={box.title} alt={box.title} width={100} height={100}
//              className="w-full h-full object-cover rounded-lg" /> */}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HompageContent;

"use client";

import React from "react";
import Image from "next/image";
import GetStartedButton from "./HeroButton";
import { motion } from "framer-motion";

const HomepageContent = () => {
  return (
    <div>
      <div className="hidden sm:flex flex-row justify-between mx-auto">
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-1/2 p-8 h-full pt-8"
        >
          <Image
            src="/images/kuberji/kuber-chowk-3.jpeg"
            alt="Background Image"
            className="saturate-200 h-2/3 w-full h-auto max-h-[500px] rounded-3xl image-hover-glow"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center w-1/2 h-full p-8 pt-8"
        >
          <h1 className="mb-4 text-spiritual-gold text-3xl md:text-4xl font-bold font-quicksand">
            Welcome to KuberJi Mandir <br /> Pandukeshwar
          </h1>
          <p className="mb-6 font-medium text-lg text-spiritual-green leading-relaxed">
            Welcome to the sacred KuberJi Mandir, the winter seat of Lord Kuber
            — divine treasurer of the gods and guardian of wealth. Nestled in
            Pandukeshwar, near Yog Badri (one of the Panch Badri), this temple
            holds centuries of tradition and devotion.
          </p>
          <GetStartedButton text="Plan Your Visit" />
        </motion.div>
      </div>

    </div>
  );
};

export default HomepageContent;
