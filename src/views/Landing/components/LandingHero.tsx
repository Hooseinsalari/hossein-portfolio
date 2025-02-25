import DecryptedText from "@/reactBits/DecryptedText/DecryptedText";
import ShinyText from "@/reactBits/ShinyText/ShinyText";
import TrueFocus from "@/reactBits/TrueFocus/TrueFocus";
import Link from "next/link";
import { memo } from "react";

function LandingHero() {
  return (
    <div className="text-start flex flex-col relative pb-[120px] pt-[207px]">
      <DecryptedText
        text="Hey, I’m Hossein"
        speed={60}
        maxIterations={20}
        characters="ABCD1234!?"
        animateOn="hover"
        revealDirection="start"
        sequential={true}
        parentClassName="text-2xl w-fit px-16 z-10"
      />

      <div className="text-9xl font-bold text-[#121619] mt-6 leading-tight px-16">
        <TrueFocus
          sentence="Building Seamless"
          manualMode={true}
          blurAmount={5}
          borderColor="#0F62FE"
          animationDuration={1}
          pauseBetweenAnimations={1.2}
        />
        <h1>Digital Experiences</h1>
      </div>

      <div className="flex items-center justify-between w-full mt-10 px-16 pb-4">
        <Link
          href="#works"
          className="bg-[#0F62FE] rounded-full flex items-center justify-center gap-2 text-xl font-normal text-white overflow-hidden z-10"
        >
          <ShinyText
            text="View My Work"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </Link>

        <h2 className="text-2xl font-normal text-[#21272A]">
          Hi, I’m Hossein Salari, a frontend developer crafting beautiful <br />{" "}
          & performant web applications with modern technologies.
        </h2>
      </div>
    </div>
  );
}

export default memo(LandingHero);
