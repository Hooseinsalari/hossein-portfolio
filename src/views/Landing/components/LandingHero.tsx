import ShinyText from "@/reactBits/ShinyText/ShinyText";
import TextPressure from "@/reactBits/TextPressure/TextPressure";
import React, { useEffect, useState } from "react";
import { ArrowDown } from "../icons/Icons";

function LandingHero() {
  //   const [hydrated, setHydrated] = useState(false);

  //   useEffect(() => {
  //     // this forces a rerender
  //     setHydrated(true);
  //   }, []);

  //   if (!hydrated) {
  //     // this returns null on first render, so the client and server match
  //     return null;
  //   }

  return (
    <div className="text-start mt-[80px] flex flex-col justify-end px-16">
      <h1 className="text-[#121619] text-2xl font-normal">
        Hey, I’m <span className="font-bold">Hossein</span>
      </h1>
      {/* <TextPressure
        stroke={false}
        italic={false}
        flex={false}
        // weight={false}
        alpha={false}
        strokeWidth={26}
        text="Hey, I’m Hossein"
        textColor="#000"
      /> */}
      <h1 className="text-9xl font-bold text-[#121619] mt-2 leading-tight">
        Building <span className="font-light">Seamless</span>
        <br /> Digital Experiences
      </h1>

      <div className="flex items-center justify-between w-full mt-10">
        <button className="bg-[#0F62FE] rounded-full flex items-center justify-center gap-2 text-xl font-normal text-white">
          <ShinyText
            text="View My Work"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </button>

        <h2 className="text-2xl font-normal text-[#21272A]">
          Hi, I’m Hossein Salari, a frontend developer crafting beautiful <br />{" "}
          & performant web applications with modern technologies.
        </h2>
      </div>
    </div>
  );
}

export default LandingHero;
