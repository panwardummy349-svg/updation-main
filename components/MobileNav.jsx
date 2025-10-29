"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "./ui/sheet";
import {  Calendar, ChevronDown, ChevronUp, HeartHandshake, HouseIcon, Mail, Menu, } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

// const items = [
//   { icon: <House size={18} />, label: "Home" , onClick: () => window.location.href = "/" },
//   { icon: <Calendar size={18} />, label: "Events", onClick: () => window.location.href = "/events" },
//   { icon: <Send size={18} />, label: "Contact", onClick: () => window.location.href = "/contact" },
//   { icon: <Album size={18} />, label: "Gallery" },
//   { icon: <Store size={18} />, label: "Shop",onClick: () => window.location.href = "/Shop" },
// ];

const MobileNav = () => {

  const [expanded, setExpanded] = React.useState(false);
  function handleClick() {
    console.log("clicked");
    setExpanded(!expanded);
  }

  const words = [
    {
      text: " ॐ ",
      className: "text-amber-100",
    },
    {
      text: " कुबेराय ",
      className: "text-amber-100",
    },
    {
      text: " नमः ",
      className: "text-amber-100",
    },
  ];
  return (
    <section className="bg-primary sm:hidden">
    <div className="flex flex-row items-center justify-between px-4">
      {/* 🔹 Left side: Title */}
      <div className="text-amber-100 my-5 flex flex-row items-center justify-start font-bold text-2xl">
        <Image src="/icons/kuber-yantra-bg.svg" alt="Kuber Yantra" width={50} height={50} 
        className="mr-2"
        />
         KuberJi Mandir
      </div>

      {/* 🔹 Right side: Menu */}
      <div className="text-amber-100 z-20 my-5 font-bold text-2xl rounded-2xl">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-amber-100 mr-1" height={35} width={35} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4 bg-amber-100 ml-4 text-xl text-primary font-bold">
              <Link href="/" className="grid grid-cols-6 items-center"><HouseIcon size={30}/>Home</Link>
              <Link href="/events" className="grid grid-cols-6 items-center"><Calendar size={30}/>Events</Link>
              <Link href="/contact" className="grid grid-cols-6 items-center"><Mail size={30}/>Contact</Link>
              <div className="flex flex-row items-center justify-between">
                <div className="grid grid-cols-5 items-center"><HeartHandshake size={30}/> Services</div>
                <div className="mr-5" onClick={handleClick}>{expanded?<ChevronUp size={30}/>:
                <ChevronDown size={30}/>}</div>
              </div>
              {expanded && (
                <div>
                  <Link href="/events" className="grid grid-cols-4 items-center gap-4 mx-4" >Pooja</Link>
                  <Link href="/events" className="grid grid-cols-4 items-center gap-4 mx-4">Aarti</Link>
                  <Link href="/events" className="grid grid-cols-4 items-center gap-4 mx-4">Havan</Link>
                </div>
              )}
            </div>
            <SheetFooter>
              <SheetClose asChild className="text-primary"></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </section>

  );
};

// export const MobileNav1 = () => {
//   return (
//       <div className="fixed bottom-0 left-0 right-0 z-50  sm:hidden">
//         <Dock
//       className="text-white bg-amber-100"
//       items={items}
//       panelHeight={68}
//       baseItemSize={50}
//       magnification={60}
//     />
//       </div>
//   );
// }
export default MobileNav;
