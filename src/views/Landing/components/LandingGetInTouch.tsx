import Magnet from "@/reactBits/Magnet/Magnet";

function LandingGetInTouch() {
  return (
    <div className="bg-[#121619] p-16 flex flex-col justify-start gap-10">
      <h3 className="text-[#F2F4F8] text-2xl font-medium">
        Let’s Build Something Awesome Together!
      </h3>
      <p className="text-8xl font-bold text-[#F2F4F8] leading-tight">
        Looking for a frontend <br /> developer? Let’s talk.
      </p>

      <div>
        <Magnet padding={350} disabled={false} magnetStrength={8}>
          <button className="bg-[#0F62FE] rounded-full px-8 py-6 text-white">
            Get In Touch!
          </button>
        </Magnet>
      </div>
    </div>
  );
}

export default LandingGetInTouch;
