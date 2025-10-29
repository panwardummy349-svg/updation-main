import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import GetStartedButton from "./HeroButton";
import Image from "next/image";
const HeroContent = () => {
  const words = [
    {
      text: " ॐ ",
    },
    {
      text: " कुबेराय ",
    },
    {
      text: " नमः ",
    },
  ];
  return (
    <div className="px-4 py-6 sm:min-h-screen sm:flex sm:items-center sm:justify-center " >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 sm:p-12">
      <GetStartedButton text="Enter"/>
      </div>
    </div>
  );
  
};

export default HeroContent;
