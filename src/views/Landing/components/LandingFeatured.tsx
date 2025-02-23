import TiltedCard from "@/reactBits/TiltedCard/TiltedCard";
import React from "react";

function LandingFeatured() {
  return (
    <div className="px-16 w-full h-full mb-40">
      <h3 className="text-[#21272A] text-2xl font-medium">
        Some of My Featured Works
      </h3>
      <div className="grid grid-cols-5 grid-rows-9 gap-4 h-[90vh] mt-10">
        <div className="relative w-ful h-full col-span-3 row-span-5 rounded-3xl">
          <TiltedCard
            imageSrc="/media/landing/poi1.png"
            altText="Bank Card Design App"
            captionText="Bank Card Design App"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute bottom-5 flex items-center justify-between right-8 left-8">
                <h3 className="rounded-2xl bg-black/60 text-white text-sm font-medium p-6">
                  Bank Card Design App
                </h3>
                <h3 className="rounded-2xl bg-black/60 text-[#A2A9B0] text-sm font-medium p-6">
                  2024
                </h3>
              </div>
            }
          />
        </div>
        <div className="relative w-full h-full col-span-3 row-span-4 col-start-1 row-start-6 rounded-3xl">
          <TiltedCard
            imageSrc="/media/landing/poi2.png"
            altText="Bank Card Design App"
            captionText="Bank Card Design App"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute bottom-5 flex items-center justify-between right-8 left-8">
                <h3 className="rounded-2xl bg-black/60 text-white text-sm font-medium p-6">
                  Bank Card Design App
                </h3>
                <h3 className="rounded-2xl bg-black/60 text-[#A2A9B0] text-sm font-medium p-6">
                  2024
                </h3>
              </div>
            }
          />
        </div>
        <div className="relative w-full h-full col-span-2 row-span-6 col-start-4 row-start-1 rounded-3xl">
          <TiltedCard
            imageSrc="/media/landing/poi2.png"
            altText="Bank Card Design App"
            captionText="Bank Card Design App"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute bottom-5 flex items-center justify-between right-8 left-8">
                <h3 className="rounded-2xl bg-black/60 text-white text-sm font-medium p-6">
                  Bank Card Design App
                </h3>
                <h3 className="rounded-2xl bg-black/60 text-[#A2A9B0] text-sm font-medium p-6">
                  2024
                </h3>
              </div>
            }
          />
        </div>
        <div className="relative w-full h-full col-span-2 row-span-3 col-start-4 row-start-7 rounded-3xl">
          <TiltedCard
            imageSrc="/media/landing/poi1.png"
            altText="Bank Card Design App"
            captionText="Bank Card Design App"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute bottom-5 flex items-center justify-between right-8 left-8">
                <h3 className="rounded-2xl bg-black/60 text-white text-sm font-medium p-6">
                  Bank Card Design App
                </h3>
                <h3 className="rounded-2xl bg-black/60 text-[#A2A9B0] text-sm font-medium p-6">
                  2024
                </h3>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default LandingFeatured;
