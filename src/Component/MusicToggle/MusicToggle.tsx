import React, { useEffect, useRef, useState } from "react";
import musicMp3 from "/nhac.mp3";

export default function MusicAuto() {
  const audioRef = useRef(null);
  const [needTap, setNeedTap] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(musicMp3);
    audio.loop = true;
    audioRef.current = audio;
  }, []);

  // Khi user tap overlay
  const unlockAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
      setNeedTap(false);
    } catch (e) {
      console.warn("Audio play blocked:", e);
    }
  };

  // Toggle nhạc
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Overlay yêu cầu user tap lần đầu */}
      {needTap && (
        <div
          onClick={unlockAudio}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            zIndex: 99999,
            cursor: "pointer",
          }}
        >
          Chạm để bật nhạc 🎵
        </div>
      )}

      {/* Nút bật/tắt nhạc luôn hiện */}
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
    </>
  );
}
