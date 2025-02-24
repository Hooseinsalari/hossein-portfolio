"use client";

import LandingFeatured from "./components/LandingFeatured";
import LandingGetInTouch from "./components/LandingGetInTouch";
import LandingHero from "./components/LandingHero";
import LandingSkills from "./components/LandingSkills";
import LandingWorks from "./components/LandingWorks";

function LandingView() {
  return (
    <div className="">
      <LandingHero />
      <LandingSkills />
      <LandingFeatured />
      <LandingWorks />
      <LandingGetInTouch />
    </div>
  );
}

export default LandingView;
