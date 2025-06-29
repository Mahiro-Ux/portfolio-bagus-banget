
import { useState, useEffect, useRef } from 'react';

// URL musik bebas royalti yang cocok untuk portfolio
const MUSIC_URLS = [
  'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
  'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
  'https://www.bensound.com/bensound-music/bensound-inspire.mp3'
];

export const useMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    audioRef.current.preload = 'metadata';
    
    // Set initial track
    audioRef.current.src = MUSIC_URLS[currentTrack];
    
    const savedMusicState = localStorage.getItem('portfolio-music');
    if (savedMusicState === 'true') {
      setIsPlaying(true);
    }

    // Handle audio errors gracefully
    const handleError = () => {
      console.warn('Audio failed to load, trying next track...');
      setCurrentTrack(prev => (prev + 1) % MUSIC_URLS.length);
    };

    const handleEnded = () => {
      setCurrentTrack(prev => (prev + 1) % MUSIC_URLS.length);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('error', handleError);
      audioRef.current.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.removeEventListener('ended', handleEnded);
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

  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.src = MUSIC_URLS[currentTrack];
      
      if (wasPlaying) {
        audioRef.current.play().catch(console.warn);
      }
    }
  }, [currentTrack]);

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
      // Try next track if current one fails
      setCurrentTrack(prev => (prev + 1) % MUSIC_URLS.length);
    }
  };

  const nextTrack = () => {
    setCurrentTrack(prev => (prev + 1) % MUSIC_URLS.length);
  };

  const prevTrack = () => {
    setCurrentTrack(prev => (prev - 1 + MUSIC_URLS.length) % MUSIC_URLS.length);
  };

  return {
    isPlaying,
    volume,
    setVolume,
    toggleMusic,
    nextTrack,
    prevTrack,
    currentTrack: currentTrack + 1,
    totalTracks: MUSIC_URLS.length
  };
};
