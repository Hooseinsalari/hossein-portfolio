import ShinyText from "@/reactBits/ShinyText/ShinyText";
import DecryptedText from "@/reactBits/DecryptedText/DecryptedText";
import MetaBalls from "@/reactBits/MetaBalls/MetaBalls";
import Link from "next/link";

function LandingHero() {
  return (
    <div className="text-start h-[80vh] flex flex-col justify-end px-16">
      <DecryptedText
        text="Hey, I’m Hossein"
        speed={60}
        maxIterations={20}
        characters="ABCD1234!?"
        animateOn="hover"
        revealDirection="start"
        sequential={true}
        parentClassName="text-2xl w-fit"
      />

      <div className="text-9xl font-bold text-[#121619] mt-2 leading-tight">
        <h1 className="flex items-center justify-start gap-8">
          Building
          <span className="font-light">Seamless</span>
        </h1>
        <h1>Digital Experiences</h1>
      </div>

      <div className="flex items-center justify-between w-full mt-10">
        <Link
          href="#works"
          className="bg-[#0F62FE] rounded-full flex items-center justify-center gap-2 text-xl font-normal text-white"
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

      <MetaBalls
        color="#ffffff"
        cursorBallSize={1}
        ballCount={12}
        animationSize={35}
        enableMouseInteraction={false}
        enableTransparency={true}
        speed={0.3}
      />
    </div>
  );
}

export default LandingHero;
