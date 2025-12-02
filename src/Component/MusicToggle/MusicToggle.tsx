import React, { useEffect, useRef, useState } from "react";
import musicMp4 from "/nhac.mp4"; // file nhạc dạng video

export default function MusicAuto() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = document.createElement("video");
    videoRef.current = v;

    v.src = musicMp4;
    v.loop = true;
    v.playsInline = true;
    v.autoplay = true;

    // Bắt đầu muted để Safari cho autoplay
    v.muted = true;

    v.style.position = "fixed";
    v.style.width = "1px";
    v.style.height = "1px";
    v.style.opacity = "0";
    v.style.left = "0";
    v.style.top = "0";
    v.style.pointerEvents = "none";
    v.style.zIndex = "-1";

    // Khi video bắt đầu play, unmute để phát nhạc thật
    v.addEventListener(
      "playing",
      () => {
        try {
          v.muted = false; // bật tiếng
          v.volume = 1.0;
          setIsPlaying(true);
        } catch (e) {
          console.warn("Unmute failed:", e);
        }
      },
      { once: true }
    );

    document.body.appendChild(v);

    // Gọi play() để chắc chắn Safari kickstart
    v.play().catch(() => {});

    return () => {
      try {
        v.pause();
        v.remove();
      } catch {}
    };
  }, []);

  const toggleMusic = async () => {
    const v = videoRef.current;
    if (!v) return;

    if (isPlaying) {
      v.pause();
      setIsPlaying(false);
    } else {
      try {
        await v.play();
        v.muted = false;
        setIsPlaying(true);
      } catch {
        alert("Safari đang chặn âm thanh, hãy chạm màn hình.");
      }
    }
  };

  return (
    <button
      onClick={toggleMusic}
      style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 9999,
          width: 40,
          height: 40,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
          background:  "rgba(255,255,255,0.5)",
        }}
    >
      {isPlaying ? "🔇" : "🎵"}
    </button>
  );
}
