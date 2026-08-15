"use client";

import { useEffect, useRef, useState } from "react";

const SENSITIVITY = 0.8;
export const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4";

// Scrubs through the video based on horizontal mouse movement instead of
// playing it — moving right/left seeks forward/backward through the clip.
// Touch devices never fire mousemove, so they'd otherwise be stuck on a
// blank first frame; those get a normal looping autoplay video instead.
const ScrubVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const seekingRef = useRef(false);
  const [canScrub, setCanScrub] = useState(false);

  useEffect(() => {
    setCanScrub(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!canScrub) {
      video.play().catch(() => {});
      return;
    }

    video.pause();

    const seekTo = (time: number) => {
      targetTimeRef.current = time;
      if (!seekingRef.current) {
        seekingRef.current = true;
        video.currentTime = time;
      }
    };

    const handleSeeked = () => {
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
        video.currentTime = targetTimeRef.current;
      } else {
        seekingRef.current = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const prevX = prevXRef.current;
      prevXRef.current = e.clientX;

      if (prevX === null || !Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }

      const delta = e.clientX - prevX;
      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const base = seekingRef.current ? targetTimeRef.current : video.currentTime;
      const nextTime = Math.min(video.duration, Math.max(0, base + offset));

      seekTo(nextTime);
    };

    video.addEventListener("seeked", handleSeeked);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      video.removeEventListener("seeked", handleSeeked);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canScrub]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={VIDEO_SRC}
      muted
      loop={!canScrub}
      playsInline
      preload="auto"
    />
  );
};

export default ScrubVideo;
