import { useEffect, useRef } from "react";

export function useSeamlessVideoLoop(options: { cutSeconds?: number } = {}) {
  const { cutSeconds = 1.2 } = options;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const endAtRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const computeEndAt = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      endAtRef.current = Math.max(0, video.duration - cutSeconds);
    };

    computeEndAt();
    video.addEventListener("loadedmetadata", computeEndAt);
    video.addEventListener("durationchange", computeEndAt);

    let raf = 0;
    const tick = () => {
      const endAt = endAtRef.current;

      // Prevent reaching the very end of the file (where the bad frame appears on some browsers).
      if (
        endAt != null &&
        !video.paused &&
        !video.seeking &&
        video.currentTime >= endAt
      ) {
        video.currentTime = 0;
        void video.play().catch(() => {});
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", computeEndAt);
      video.removeEventListener("durationchange", computeEndAt);
    };
  }, [cutSeconds]);

  return videoRef;
}
