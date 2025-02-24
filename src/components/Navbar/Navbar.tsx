"use client";

import Magnet from "@/reactBits/Magnet/Magnet";
import { CallIcon, MenuIcon } from "@/views/Landing/icons/Icons";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-8 px-16 absolute top-0 right-0 left-0">
      <h3 className="text-4xl font-bold">
        <span className="text-[#697077]">hos.</span>
        <span className="text-[#121619]">Salari</span>
      </h3>

      <div className="flex items-center justify-center gap-4">
        <Magnet padding={50} disabled={false} magnetStrength={14}>
          <button className="border border-[#DDE1E6] rounded-full flex items-center justify-center gap-2 py-5 px-8 text-[#21272A] text-xl font-normal leading-6">
            Let&apos;s Talk <span>{<CallIcon />}</span>
          </button>
        </Magnet>
        <button className="border border-[#DDE1E6] rounded-full p-5">
          {<MenuIcon />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
