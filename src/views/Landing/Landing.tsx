"use client";

import LandingHero from "./components/LandingHero";
import LandingNavbar from "./components/LandingNavbar";
import LandingSkills from "./components/LandingSkills";

function LandingView() {
  return (
    <div className="">
      <LandingNavbar />
      <LandingHero />
      <LandingSkills />
    </div>
  );
}

export default LandingView;
