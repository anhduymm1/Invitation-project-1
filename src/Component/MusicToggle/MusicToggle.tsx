import React, { useEffect, useRef, useState } from "react";
import nhac from "/nhac.mp3";

/**
 * MusicAuto.jsx
 * - Thứ tự cố gắng:
 *   1) Thử audio.play() ngay (desktop hoặc browser cho phép)
 *   2) Nếu bị chặn -> tạo một <video muted autoplay playsInline loop> (data URI nhỏ)
 *      khi video bắt đầu play sẽ gọi audio.play()
 * - Lưu trạng thái bật/tắt vào localStorage
 * - Có nút bật/tắt hiển thị ở góc
 */

export default function MusicAuto() {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [attemptedUnlock, setAttemptedUnlock] = useState(false);

  useEffect(() => {
    // Khởi tạo audio
    const audio = new Audio(nhac);
    audio.loop = true;
    audioRef.current = audio;

    let videoEl = null;
    let cleanupVideo = false;

    // Try direct audio play first
    audio.play()
      .then(() => {
        // Nếu play thành công (desktop hoặc browser cho phép)
        setIsPlaying(true);
        setAttemptedUnlock(true);
      })
      .catch(() => {
        // Bị chặn -> dùng video-muted autoplay hack để unlock
        setAttemptedUnlock(true);

        try {
          // Một very small silent video as data URI.
          // NOTE: một vài browser rất kén data URI, nhưng nhiều trường hợp vẫn OK.
          const silentVideoDataUri =
            "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAAAAGlzb21pc28yYXZjMQAAABNhdmMxAAAAA3N0YmwAAABsbWRhdAAAAAU=";

          videoEl = document.createElement("video");
          videoRef.current = videoEl;
          videoEl.muted = true;
          videoEl.playsInline = true;
          videoEl.autoplay = true;
          videoEl.loop = true;
          videoEl.src = silentVideoDataUri;
          videoEl.style.position = "fixed";
          videoEl.style.width = "1px";
          videoEl.style.height = "1px";
          videoEl.style.left = "0";
          videoEl.style.top = "0";
          videoEl.style.opacity = "0";
          videoEl.style.pointerEvents = "none";

          // when video starts playing -> unlock audio
          const onVideoPlay = () => {
            // play audio (silenced video gave permission)
            audio.play()
              .then(() => {
                setIsPlaying(true);
                // remove the video element since không cần hiển thị
                tryRemoveVideo();
              })
              .catch((err) => {
                // Nếu vẫn fail, giữ video as fallback
                console.warn("Audio still blocked after video play:", err);
              });
          };

          const onVideoError = (e) => {
            console.warn("Silent video failed to play or load", e);
          };

          videoEl.addEventListener("playing", onVideoPlay, { once: true });
          videoEl.addEventListener("error", onVideoError, { once: true });

          // append to DOM to allow autoplay
          document.body.appendChild(videoEl);
          cleanupVideo = true;

          // try to play video (some browsers require explicit play call)
          // ignore promise rejection
          videoEl.play().catch(() => {});
        } catch (e) {
          console.warn("Failed to create silent video fallback", e);
        }
      });

    // helper to remove video element
    function tryRemoveVideo() {
      if (videoRef.current) {
        try {
          videoRef.current.pause();
          videoRef.current.removeAttribute("src");
          if (videoRef.current.parentNode) videoRef.current.parentNode.removeChild(videoRef.current);
        } catch (e) {
          // ignore
        }
        videoRef.current = null;
      }
    }

    // Cleanup on unmount
    return () => {
      try {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.src = "";
          audioRef.current = null;
        }
        if (cleanupVideo) tryRemoveVideo();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  // Toggle button
  const toggleMusic = async () => {
    const a = audioRef.current;
    if (!a) return;

    if (isPlaying) {
      a.pause();
      setIsPlaying(false);
      localStorage.setItem("musicEnabled", "false");
    } else {
      try {
        await a.play();
        setIsPlaying(true);
        localStorage.setItem("musicEnabled", "true");
      } catch (err) {
        // Nếu play fail (vẫn bị chặn) — yêu cầu người dùng tap để mở
        console.warn("Play blocked; ask user to tap to enable:", err);
        // Hiển thị alert nhẹ (bạn có thể đổi thành modal/overlay đẹp hơn)
        // Nhưng theo yêu cầu, ta muốn auto play — nên không prompt quá to.
        alert("Trình duyệt đang chặn âm thanh. Hãy chạm màn hình để bật nhạc.");
      }
    }
  };

  // If user previously cho phép, cố play lại khi component mount
  useEffect(() => {
    const prev = localStorage.getItem("musicEnabled");
    if (prev === "true" && audioRef.current && attemptedUnlock) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        // ignore
      });
    }
  }, [attemptedUnlock]);

  // UI: floating circular button (minimal styling)
  return (
    <>
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
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
