"use client";

import LandingHero from "./components/LandingHero";
import LandingNavbar from "./components/LandingNavbar";

function LandingView() {
  return (
    <div className="px-16">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}

export default LandingView;
