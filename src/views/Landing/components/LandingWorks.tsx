"use client";

import { EXPERIENCES } from "../constants/experiences";
import { useState } from "react";
import ClickSpark from "@/reactBits/ClickSpark/ClickSpark";
import clsx from "clsx";

function LandingWorks() {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <div className="p-16 bg-[#F9FBFF] mb-40">
      <div className="flex items-center justify-between text-[#21272A] mb-10">
        <h3 className="text-2xl font-medium">Where I’ve Worked</h3>
        <p className="text-xl font-normal ">
          Results-driven frontend developer with a strong background <br /> in
          building high-performance, user-centric web applications.
        </p>
      </div>
      <div>
        <ClickSpark
          sparkColor="#F9FBFF"
          sparkSize={40}
          sparkRadius={100}
          sparkCount={15}
          duration={600}
          extraScale={1.2}
        >
          <div
            onClick={() => setSelectedSection(0)}
            className={clsx("p-16 cursor-pointer select-none", {
              "bg-custom-conic": selectedSection === 0,
              "bg-[#F2F4F8]": selectedSection !== 0,
            })}
          >
            <div className={"flex items-center justify-between"}>
              <h3
                className={clsx("font-medium text-5xl", {
                  "text-white": selectedSection === 0,
                  "text-[#21272A]": selectedSection !== 0,
                })}
              >
                TASU
              </h3>
              <h3
                className={clsx("font-bold text-[32px]", {
                  "text-white": selectedSection === 0,
                  "text-[#21272A]": selectedSection !== 0,
                })}
              >
                2024 - 2025
              </h3>
            </div>
            <ul
              className={clsx(
                "transition-all duration-300 ease-in overflow-hidden",
                {
                  "max-h-0 pt-0": selectedSection !== 0,
                  "max-h-[1000px] pt-6": selectedSection === 0,
                }
              )}
            >
              {EXPERIENCES.map((it) => (
                <li
                  key={it}
                  className={clsx("text-lg font-normal", {
                    "text-white": selectedSection === 0,
                    "text-[#21272A]": selectedSection !== 0,
                  })}
                >
                  &#x2022; {it}
                </li>
              ))}
            </ul>
          </div>
        </ClickSpark>

        <ClickSpark
          sparkColor="#F9FBFF"
          sparkSize={40}
          sparkRadius={100}
          sparkCount={15}
          duration={600}
          extraScale={1.2}
        >
          <div
            className={clsx("p-16 cursor-pointer select-none", {
              "bg-custom-conic": selectedSection === 1,
              "bg-[#F2F4F8]": selectedSection !== 1,
            })}
            onClick={() => setSelectedSection(1)}
          >
            <div className="flex items-center justify-between">
              <h3
                className={clsx("font-medium text-5xl", {
                  "text-white": selectedSection === 1,
                  "text-[#21272A]": selectedSection !== 1,
                })}
              >
                FREELANCE
              </h3>
              <h3
                className={clsx("font-bold text-[32px]", {
                  "text-white": selectedSection === 1,
                  "text-[#21272A]": selectedSection !== 1,
                })}
              >
                2024 - NOW
              </h3>
            </div>
            <ul
              className={clsx(
                "transition-all duration-300 ease-in overflow-hidden",
                {
                  "max-h-0 pt-0": selectedSection !== 1,
                  "max-h-[1000px] pt-6": selectedSection === 1,
                }
              )}
            >
              {EXPERIENCES.map((it) => (
                <li key={it} className="text-white text-lg font-normal">
                  &#x2022; {it}
                </li>
              ))}
            </ul>
          </div>
        </ClickSpark>
      </div>
    </div>
  );
}

export default LandingWorks;
