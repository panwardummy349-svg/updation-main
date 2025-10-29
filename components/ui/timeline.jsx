"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { CalendarClock } from "lucide-react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="bg-primary md:mx-30 rounded-lg" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <CalendarClock
            size={100}
            className="text-center mx-auto text-brown-100 pt-4"
          /> */}
          <h2 className="text-brown-100 text-3xl md:text-4xl pt-4 font-bold">
            Upcoming Temple Events
          </h2>
          <p className="font-semibold text-amber-100 text-lg max-w-2xl mx-auto">
            Join us for these sacred celebrations and community gatherings. All
            are welcome to participate and receive blessings.
          </p>
        </motion.div>
      </div>
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto pb-20 text-amber-100"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary border border-amber-100 p-2" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-5xl font-bold text-brown-100 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 
          overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] 
           [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-amber-100 via-amber-100 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
