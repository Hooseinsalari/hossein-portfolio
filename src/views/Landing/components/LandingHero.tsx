import DecryptedText from "@/reactBits/DecryptedText/DecryptedText";
import GlitchText from "@/reactBits/GlitchText/GlitchText";
import Ribbons from "@/reactBits/Ribbons/Ribbons";
import ShinyText from "@/reactBits/ShinyText/ShinyText";
import Link from "next/link";
import { memo, useMemo } from "react";

function LandingHero() {
  const ribbonsProps = useMemo(
    () => ({
      baseThickness: 30,
      colors: ["#0F62FE"],
      speedMultiplier: 0.5,
      maxAge: 500,
      enableFade: true,
      enableShaderEffect: true,
    }),
    []
  );

  return (
    <div className="text-start h-[100vh] flex flex-col justify-end relative">
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

      <div className="text-9xl font-bold text-[#121619] mt-2 leading-tight px-16">
        <h1 className="flex items-center justify-start gap-8">
          Building
          <GlitchText
            speed={2}
            enableShadows={false}
            enableOnHover={false}
            className="font-light mx-0"
          >
            Seamless
          </GlitchText>
        </h1>
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

      <Ribbons {...ribbonsProps} />
    </div>
  );
}

export default memo(LandingHero);
