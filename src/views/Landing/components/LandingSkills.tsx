import ScrollVelocity from "@/reactBits/ScrollVelocity/ScrollVelocity";
import { SKILLS_ITEMS } from "../constants/skills";

function LandingSkills() {
  return (
    <div className="mt-[160px] mb-[160px]">
      <h3 className="text-[#21272A] font-medium text-2xl px-16">
        Tech Stack I Love Working With
      </h3>

      <ScrollVelocity
        items={SKILLS_ITEMS}
        velocity={150}
        className="custom-scroll-text"
      />
    </div>
  );
}

export default LandingSkills;
