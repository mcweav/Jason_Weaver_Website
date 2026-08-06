"use client";

import { useEffect } from "react";

// Measures the rendered text's bounding box and resizes the SVG viewBox so
// the glyph edges sit flush against the container, instead of leaving
// arbitrary padding around a fixed viewBox.
const Watermark = () => {
  useEffect(() => {
    const fit = () => {
      const svg = document.getElementById("watermarkSvg");
      const text = document.getElementById("watermarkText");
      if (!svg || !(text instanceof SVGTextElement)) return;
      try {
        const bbox = text.getBBox();
        svg.setAttribute(
          "viewBox",
          `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
        );
      } catch {
        // getBBox can throw if the element isn't rendered yet
      }
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(fit);
    } else {
      window.addEventListener("load", fit);
    }
    window.addEventListener("resize", fit);

    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div
      className="pointer-events-none relative z-0 mx-auto -mt-4 max-w-[1150px] select-none"
      aria-hidden="true"
    >
      <svg
        id="watermarkSvg"
        viewBox="62 95 876 175"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full overflow-visible"
      >
        <text
          id="watermarkText"
          x="500"
          y="240"
          textAnchor="middle"
          fontSize="200"
          className="font-[family-name:var(--font-dm-sans)] font-bold"
          style={{ letterSpacing: "-0.03em", fill: "rgba(0,0,0,0.04)" }}
        >
          Jason Weaver
        </text>
      </svg>
    </div>
  );
};

export default Watermark;
