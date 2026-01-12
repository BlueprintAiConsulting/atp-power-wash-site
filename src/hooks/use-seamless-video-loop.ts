import { useEffect, useRef, useCallback } from "react";

export function useSeamlessVideoLoop(options: { cutSeconds?: number } = {}) {
  const { cutSeconds = 2.0 } = options; // More aggressive cut to avoid bad frame

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const endAtRef = useRef<number | null>(null);

  const restartVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
  }, []);

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
    
    // Backup: if video somehow reaches the end, restart immediately
    video.addEventListener("ended", restartVideo);

    let raf = 0;
    const tick = () => {
      const endAt = endAtRef.current;

      // Restart before reaching the bad frame
      if (
        endAt != null &&
        !video.paused &&
        !video.seeking &&
        video.currentTime >= endAt
      ) {
        restartVideo();
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", computeEndAt);
      video.removeEventListener("durationchange", computeEndAt);
      video.removeEventListener("ended", restartVideo);
    };
  }, [cutSeconds, restartVideo]);

  return videoRef;
}
