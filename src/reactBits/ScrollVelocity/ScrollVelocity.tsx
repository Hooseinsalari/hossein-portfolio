import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  items: { text: string; icon: React.ReactNode }[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

function useElementWidth(ref: React.RefObject<HTMLElement>): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  items = [],
  velocity = 190,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 15,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  function VelocityText({
    children,
    baseVelocity,
    scrollContainerRef,
    className,
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
  }: VelocityTextProps) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef<HTMLSpanElement>(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min: number, max: number, v: number): number {
      const range = max - min;
      return ((((v - min) % range) + range) % range) + min;
    }

    const x = useTransform(baseX, (v) =>
      copyWidth === 0 ? "0px" : `${wrap(-copyWidth, 0, v)}px`
    );

    const directionFactor = useRef<number>(2);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      directionFactor.current = velocityFactor.get() < 0 ? -1 : 1;
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden`}
        style={parallaxStyle}
      >
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap`}
          style={{ x, ...scrollerStyle }}
        >
          {Array.from({ length: numCopies! }).map((_, i) => (
            <span
              className={`flex-shrink-0 ${className} flex items-center`}
              key={i}
              ref={i === 0 ? copyRef : null}
            >
              {children}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="mt-10">
      <VelocityText
        className={className}
        baseVelocity={velocity}
        scrollContainerRef={scrollContainerRef}
        damping={damping}
        stiffness={stiffness}
        numCopies={numCopies}
        velocityMapping={velocityMapping}
        parallaxClassName={parallaxClassName}
        scrollerClassName={scrollerClassName}
        parallaxStyle={parallaxStyle}
        scrollerStyle={scrollerStyle}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#F2F4F8] py-4 px-8 rounded-full mr-6"
          >
            {item.icon}
            <span className="text-xl font-normal text-[#21272A]">
              {item.text}
            </span>
          </div>
        ))}
      </VelocityText>
    </section>
  );
};

export default ScrollVelocity;
