
import { useState, useEffect, useRef } from 'react';

export const useMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Menggunakan musik bebas royalti dari Pixabay atau sumber serupa
    // Untuk demo, kita akan menggunakan URL placeholder
    const audioUrl = 'https://www.soundjay.com/misc/sounds/clock-ticking-3.mp3';
    
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Untuk production, gunakan file audio lokal
    // audioRef.current.src = '/background-music.mp3';
    
    const savedMusicState = localStorage.getItem('portfolio-music');
    if (savedMusicState === 'true') {
      setIsPlaying(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        localStorage.setItem('portfolio-music', 'false');
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
        localStorage.setItem('portfolio-music', 'true');
      }
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  };

  return {
    isPlaying,
    volume,
    setVolume,
    toggleMusic
  };
};
