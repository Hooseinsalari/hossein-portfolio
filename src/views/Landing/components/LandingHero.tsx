import ShinyText from "@/reactBits/ShinyText/ShinyText";
import DecryptedText from "@/reactBits/DecryptedText/DecryptedText";
import RotatingText from "@/reactBits/RotatingText/RotatingText";

function LandingHero() {
  return (
    <div className="text-start mt-[80px] flex flex-col justify-end px-16">
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
          <span>
            {" "}
            <RotatingText
              texts={["Seamless", "Effortless", "Smooth", "Streamlined"]}
              staggerFrom={"random"}
              initial={{ y: "100%", opacity: "1" }}
              animate={{ y: 0, opacity: "1" }}
              exit={{ y: "-120%", opacity: "0" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 font-light"
              transition={{ type: "spring", damping: 40, stiffness: 400 }}
              rotationInterval={4000}
            />
          </span>
        </h1>
        <h1>Digital Experiences</h1>
      </div>

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
