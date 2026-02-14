import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ============================================================
// 🎵 CONFIGURATION - EDIT EVERYTHING HERE
// ============================================================
// To add your own songs, logos, colors - ONLY edit this section

const CONFIG = {
  // ---- YOUR BRAND ----
  appName: "$PFMUSIC",
  logoUrl: "", // Put your logo URL here, e.g. "https://cloudinry.com"
  logoText: "$PFMUSIC", // Shown if no logo image

  // ---- THEME COLORS (change these to restyle the entire app) ----
  theme: {
    primary: "#1DB954",       // Main accent (Spotify green)
    primaryHover: "#1ed760",  // Accent hover
    bgBase: "#00b853",        // Main background
    bgSurface: "#00b853",     // Card/surface background
    bgElevated: "#000000",    // Elevated surface (player bar, modals)
    bgHighlight: "#2a2a2a",   // Hover highlight
    textPrimary: "#FFFFFF",   // Main text
    textSecondary: "#dfdfdf", // Secondary text
    textSubdued: "#e7e7e7",   // Muted text
    bgSidebar: "#000000",     // Sidebar background
    bgPlayer: "#181818",      // Bottom player bar
    divider: "#333333",        // Border/divider color
  },

  // ---- YOUR SONGS ----
  // Add as many songs as you want following this format:
  songs: [
    {
      id: "1",
      title: "Midnight Dreams",
      artist: "Luna Echo",
      album: "Neon Horizons",
      duration: 214, // seconds
      audioUrl: "", // Put your audio file URL here
      coverUrl: "https://picsum.photos/seed/album1/300/300",
      lyrics: `[Verse 1]
Walking through the city lights
Everything feels so alive tonight
The stars are dancing in my eyes
Under these electric skies

[Chorus]
Midnight dreams, taking me away
Midnight dreams, I never want to fade
Hold me close in the neon glow
Midnight dreams, never let me go

[Verse 2]
Shadows paint the streets in gold
Stories that have never been told
We're running wild and running free
This is where I want to be

[Chorus]
Midnight dreams, taking me away
Midnight dreams, I never want to fade
Hold me close in the neon glow
Midnight dreams, never let me go`,
      genre: "Pop",
      year: 2024,
    },
    {
      id: "2",
      title: "Ocean Waves",
      artist: "The Drift",
      album: "Coastal Memories",
      duration: 198,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album2/300/300",
      lyrics: `[Verse 1]
Sitting by the shore at dawn
Watching as the night moves on
Waves are crashing, soft and low
Letting all my worries go

[Chorus]
Ocean waves carry me home
Through the tides I'll never be alone
Salt and sand between my toes
Where the ocean takes me, nobody knows

[Bridge]
The horizon calls my name
Nothing here will stay the same
But in this moment, I am free
The ocean lives inside of me`,
      genre: "Indie",
      year: 2024,
    },
    {
      id: "3",
      title: "Electric Heart",
      artist: "Volt",
      album: "Neon Horizons",
      duration: 245,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album3/300/300",
      lyrics: `[Verse 1]
Circuits running through my veins
Breaking free from all these chains
Digital pulse, analog soul
Together we can make it whole

[Chorus]
Electric heart, beat for me tonight
Electric heart, burning ever bright
We're wired up and ready to go
Electric heart, steal the show`,
      genre: "Electronic",
      year: 2023,
    },
    {
      id: "4",
      title: "Sunset Boulevard",
      artist: "Luna Echo",
      album: "Golden Hour",
      duration: 232,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album4/300/300",
      lyrics: `[Verse 1]
Driving down the palm-lined street
Golden light and summer heat
Radio playing our favorite song
Windows down, we sing along

[Chorus]
Sunset Boulevard, dreams in every lane
Sunset Boulevard, dancing in the rain
Colors paint the sky above
Sunset Boulevard, falling back in love`,
      genre: "Pop",
      year: 2024,
    },
    {
      id: "5",
      title: "Rainy Cafe",
      artist: "Mellow Keys",
      album: "Quiet Corners",
      duration: 187,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album5/300/300",
      lyrics: `[Verse 1]
Steam rising from my cup
Rain tapping, looking up
Pages turning, time stands still
A quiet corner on the hill

[Chorus]
In this rainy cafe, I find my peace
Where the noise of the world can finally cease
Watching droplets race the glass
Moments I wish would always last`,
      genre: "Lo-fi",
      year: 2023,
    },
    {
      id: "6",
      title: "Wildfire",
      artist: "Blaze",
      album: "Ashes & Gold",
      duration: 203,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album6/300/300",
      lyrics: `[Verse 1]
Spark ignites, the flames grow higher
Burning brighter with desire
Can't contain this raging fire
Taking us higher and higher

[Chorus]
We're a wildfire, can't be tamed
We're a wildfire, unashamed
Burning bridges, lighting skies
We're a wildfire in disguise`,
      genre: "Rock",
      year: 2024,
    },
    {
      id: "7",
      title: "Stardust",
      artist: "Cosmos",
      album: "Nebula",
      duration: 276,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album7/300/300",
      lyrics: `[Verse 1]
Floating through the galaxy
A billion lights surrounding me
Made of stardust, born from light
Traveling through the endless night

[Chorus]
We are stardust, we are gold
We are stories yet untold
Scattered across the universe
In every blessing, every curse`,
      genre: "Alternative",
      year: 2023,
    },
    {
      id: "8",
      title: "Downtown Funk",
      artist: "Groove Machine",
      album: "City Beats",
      duration: 221,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album8/300/300",
      lyrics: `[Verse 1]
Bass is pumping through the floor
Everybody's wanting more
DJ spinning, crowd is jumping
Hearts are racing, blood is pumping

[Chorus]
Downtown funk, feel the beat
Downtown funk, move your feet
The rhythm's got us in a trance
Downtown funk, let's dance`,
      genre: "Funk",
      year: 2024,
    },
    {
      id: "9",
      title: "Mountain High",
      artist: "Summit",
      album: "Altitude",
      duration: 258,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album9/300/300",
      lyrics: `[Verse 1]
Climbing up above the clouds
Leaving behind the noisy crowds
Air is thin but spirits high
Touching the edge of the sky

[Chorus]
Mountain high, valley low
Everywhere the wind will blow
Standing tall against the storm
In these peaks I feel reborn`,
      genre: "Folk",
      year: 2023,
    },
    {
      id: "10",
      title: "Neon Lights",
      artist: "Volt",
      album: "Neon Horizons",
      duration: 195,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album10/300/300",
      lyrics: `[Verse 1]
City glows in purple haze
Lost inside this neon maze
Every sign tells a different tale
Riding on the midnight rail

[Chorus]
Neon lights guide me through the dark
Neon lights, every one a spark
In this electric wonderland
Neon lights, take my hand`,
      genre: "Electronic",
      year: 2024,
    },
    {
      id: "11",
      title: "Autumn Leaves",
      artist: "Mellow Keys",
      album: "Quiet Corners",
      duration: 204,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album11/300/300",
      lyrics: `[Verse 1]
Amber, crimson, gold and brown
Gently drifting to the ground
A carpet made of memories
Whispered by the autumn breeze

[Chorus]
Autumn leaves are falling down
Painting colors on the town
Every leaf a story told
Of summer's warmth before the cold`,
      genre: "Lo-fi",
      year: 2023,
    },
    {
      id: "12",
      title: "Thunder Road",
      artist: "Blaze",
      album: "Ashes & Gold",
      duration: 267,
      audioUrl: "",
      coverUrl: "https://picsum.photos/seed/album12/300/300",
      lyrics: `[Verse 1]
Engine roaring, tires screaming
Headlights cut through midnight gleaming
Pedal down on thunder road
Carrying this heavy load

[Chorus]
Thunder road, take me far away
Thunder road, I can't stay another day
Lightning strikes behind my eyes
Thunder road beneath these skies`,
      genre: "Rock",
      year: 2024,
    },
  ],

  // ---- YOUR PLAYLISTS ----
  playlists: [
    { id: "pl1", name: "Chill Vibes", description: "Relax and unwind", songIds: ["5", "11", "2", "9"], coverUrl: "https://picsum.photos/seed/playlist1/300/300" },
    { id: "pl2", name: "Workout Energy", description: "Power through your session", songIds: ["6", "8", "3", "10", "12"], coverUrl: "https://picsum.photos/seed/playlist2/300/300" },
    { id: "pl3", name: "Late Night Drive", description: "For midnight cruises", songIds: ["1", "4", "10", "12", "7"], coverUrl: "https://picsum.photos/seed/playlist3/300/300" },
    { id: "pl4", name: "Focus Flow", description: "Concentrate and create", songIds: ["5", "7", "9", "11", "2"], coverUrl: "https://picsum.photos/seed/playlist4/300/300" },
    { id: "pl5", name: "Party Mix", description: "Turn it up!", songIds: ["8", "3", "6", "1", "10"], coverUrl: "https://picsum.photos/seed/playlist5/300/300" },
    { id: "pl6", name: "Acoustic Sessions", description: "Stripped down sounds", songIds: ["9", "2", "4", "11"], coverUrl: "https://picsum.photos/seed/playlist6/300/300" },
  ],
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const getAlbums = () => {
  const albumMap = {};
  CONFIG.songs.forEach((song) => {
    if (!albumMap[song.album]) {
      albumMap[song.album] = {
        name: song.album,
        artist: song.artist,
        coverUrl: song.coverUrl,
        year: song.year,
        songs: [],
      };
    }
    albumMap[song.album].songs.push(song);
  });
  return Object.values(albumMap);
};

const getArtists = () => {
  const artistMap = {};
  CONFIG.songs.forEach((song) => {
    if (!artistMap[song.artist]) {
      artistMap[song.artist] = {
        name: song.artist,
        songs: [],
        coverUrl: song.coverUrl,
      };
    }
    artistMap[song.artist].songs.push(song);
  });
  return Object.values(artistMap);
};

// ============================================================
// ICONS (inline SVG components)
// ============================================================

const Icons = {
  Home: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"/></svg>),
  Search: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/></svg>),
  Library: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001.5.866l10-5.77a1 1 0 000-1.732l-10-5.77zM16 4.732L23.5 9.5 16 14.268V4.732zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"/></svg>),
  Play: ({ size = 24 }) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>),
  Pause: ({ size = 24 }) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z"/></svg>),
  SkipNext: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.7 3a.7.7 0 00-.7.7v6.805L5.05 3.606A.7.7 0 004 4.212v15.576a.7.7 0 001.05.606L17 13.495V20.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-1.6z"/></svg>),
  SkipPrev: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.3 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7v-6.805l11.95 6.899A.7.7 0 0021.6 19.788V4.212a.7.7 0 00-1.05-.606L8.6 10.505V3.7a.7.7 0 00-.7-.7H6.3z"/></svg>),
  Shuffle: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M13.151 6.252c-.063.037-.112.09-.173.126L8.891 8.85l1.009 1.735 2.972-1.8 4.26 7.205-1.563.898 3.168 3.048 1.103-4.292-1.535.882-4.727-7.998c-.063-.112-.153-.196-.24-.28l-.002-.001a1.237 1.237 0 00-.185-.151zM5.636 8.85L4 9.792l4.974 8.423 1.636-.942L5.636 8.85zm10.893.124l-1.563.898 2.112 3.572 1.535-.882-2.084-3.588zm-6.01 4.692L9.51 15.4l1.803 3.051 1.009-1.735-1.803-3.05z"/></svg>),
  Repeat: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5.5 5h13a4.5 4.5 0 010 9H8.207l2.147-2.146a.5.5 0 00-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708-.708L8.207 15H18.5a3.5 3.5 0 100-7h-13a.5.5 0 010-1H18.5a4.5 4.5 0 010 9H5.5a.5.5 0 010-1z"/></svg>),
  Volume: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.36 19.36a1 1 0 01-.7-1.71 7.33 7.33 0 000-10.36 1 1 0 011.41-1.41 9.33 9.33 0 010 13.18 1 1 0 01-.71.3zM15.54 16.54a1 1 0 01-.71-.3 1 1 0 010-1.41 3.93 3.93 0 000-5.54 1 1 0 011.42-1.42 5.93 5.93 0 010 8.37 1 1 0 01-.71.3zM12 20l-5-4H3a1 1 0 01-1-1V9a1 1 0 011-1h4l5-4a.5.5 0 01.8.4v15.2a.5.5 0 01-.8.4z"/></svg>),
  VolumeMute: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 20l-5-4H3a1 1 0 01-1-1V9a1 1 0 011-1h4l5-4a.5.5 0 01.8.4v15.2a.5.5 0 01-.8.4zM22.71 12l2.15-2.15a1 1 0 00-1.42-1.42L21.29 10.58l-2.15-2.15a1 1 0 00-1.42 1.42l2.15 2.15-2.15 2.15a1 1 0 001.42 1.42l2.15-2.15 2.15 2.15a1 1 0 001.42-1.42z"/></svg>),
  Heart: ({ filled }) => filled ? (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>) : (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>),
  Lyrics: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z"/></svg>),
  Queue: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>),
  Close: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71A1 1 0 005.7 7.12L10.59 12l-4.88 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.41z"/></svg>),
  ChevronLeft: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>),
  ChevronRight: () => (<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>),
  Clock: () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>),
  Explicit: () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="3" fill="#B3B3B3"/><text x="12" y="16.5" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#121212">E</text></svg>),
};

// ============================================================
// MAIN APP COMPONENT
// ============================================================

export default function SpotifyClone() {
  const theme = CONFIG.theme;

  // --- State ---
  const [currentView, setCurrentView] = useState("home"); // home, search, library, playlist, album, artist, lyrics
  const [viewData, setViewData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [shuffleOn, setShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0); // 0=off, 1=all, 2=one
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [liked, setLiked] = useState({});
  const [showLyrics, setShowLyrics] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [navHistory, setNavHistory] = useState([]);
  const [navFuture, setNavFuture] = useState([]);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const searchInputRef = useRef(null);

  const albums = useMemo(() => getAlbums(), []);
  const artists = useMemo(() => getArtists(), []);

  // --- Audio Engine ---
  useEffect(() => {
    const audio = new Audio();
    audio.volume = volume / 100;
    audioRef.current = audio;

    audio.addEventListener("timeupdate", () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    });
    audio.addEventListener("ended", handleSongEnd);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const handleSongEnd = useCallback(() => {
    if (repeatMode === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      playNext();
    }
  }, [repeatMode]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handler = () => {
      if (repeatMode === 2) {
        audio.currentTime = 0;
        audio.play();
      } else {
        playNext();
      }
    };
    audio.removeEventListener("ended", handler);
    audio.addEventListener("ended", handler);
    return () => audio.removeEventListener("ended", handler);
  }, [repeatMode, queueIndex, queue]);

  const playSong = useCallback((song, newQueue = null, index = 0) => {
    setCurrentSong(song);
    if (newQueue) {
      setQueue(newQueue);
      setQueueIndex(index);
    }
    setIsPlaying(true);
    const audio = audioRef.current;
    if (song.audioUrl) {
      audio.src = song.audioUrl;
      audio.play().catch(() => {});
    } else {
      // Demo mode: simulate playback with duration
      audio.src = "";
      setDuration(song.duration);
      setProgress(0);
    }
  }, []);

  // Simulate progress when no audio URL
  useEffect(() => {
    let interval;
    if (isPlaying && currentSong && !currentSong.audioUrl) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= currentSong.duration) {
            playNext();
            return 0;
          }
          return prev + 0.25;
        });
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSong]);

  const togglePlay = () => {
    if (!currentSong) return;
    if (currentSong.audioUrl) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = useCallback(() => {
    if (queue.length === 0) return;
    let nextIndex;
    if (shuffleOn) {
      nextIndex = Math.floor(Math.random() * queue.length);
    } else {
      nextIndex = (queueIndex + 1) % queue.length;
    }
    if (nextIndex >= queue.length) nextIndex = 0;
    setQueueIndex(nextIndex);
    playSong(queue[nextIndex], null, nextIndex);
  }, [queue, queueIndex, shuffleOn, playSong]);

  const playPrev = useCallback(() => {
    if (queue.length === 0) return;
    if (progress > 3) {
      setProgress(0);
      if (audioRef.current.src) audioRef.current.currentTime = 0;
      return;
    }
    const prevIndex = queueIndex === 0 ? queue.length - 1 : queueIndex - 1;
    setQueueIndex(prevIndex);
    playSong(queue[prevIndex], null, prevIndex);
  }, [queue, queueIndex, progress, playSong]);

  const seekTo = (e) => {
    const bar = progressBarRef.current;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = ratio * (currentSong?.duration || duration);
    setProgress(newTime);
    if (audioRef.current.src) audioRef.current.currentTime = newTime;
  };

  const navigate = (view, data = null) => {
    setNavHistory((h) => [...h, { view: currentView, data: viewData }]);
    setNavFuture([]);
    setCurrentView(view);
    setViewData(data);
  };

  const goBack = () => {
    if (navHistory.length === 0) return;
    const prev = navHistory[navHistory.length - 1];
    setNavFuture((f) => [{ view: currentView, data: viewData }, ...f]);
    setNavHistory((h) => h.slice(0, -1));
    setCurrentView(prev.view);
    setViewData(prev.data);
  };

  const goForward = () => {
    if (navFuture.length === 0) return;
    const next = navFuture[0];
    setNavHistory((h) => [...h, { view: currentView, data: viewData }]);
    setNavFuture((f) => f.slice(1));
    setCurrentView(next.view);
    setViewData(next.data);
  };

  const playSongFromList = (songs, index) => {
    const q = shuffleOn ? [...songs].sort(() => Math.random() - 0.5) : songs;
    playSong(q[shuffleOn ? 0 : index], q, shuffleOn ? 0 : index);
  };

  // Search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { songs: [], albums: [], artists: [], playlists: [] };
    const q = searchQuery.toLowerCase();
    return {
      songs: CONFIG.songs.filter((s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q) || s.album.toLowerCase().includes(q)),
      albums: albums.filter((a) => a.name.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q)),
      artists: artists.filter((a) => a.name.toLowerCase().includes(q)),
      playlists: CONFIG.playlists.filter((p) => p.name.toLowerCase().includes(q)),
    };
  }, [searchQuery, albums, artists]);

  // Dynamic CSS variables
  const cssVars = {
    "--c-primary": theme.primary,
    "--c-primary-hover": theme.primaryHover,
    "--c-bg-base": theme.bgBase,
    "--c-bg-surface": theme.bgSurface,
    "--c-bg-elevated": theme.bgElevated,
    "--c-bg-highlight": theme.bgHighlight,
    "--c-text-primary": theme.textPrimary,
    "--c-text-secondary": theme.textSecondary,
    "--c-text-subdued": theme.textSubdued,
    "--c-bg-sidebar": theme.bgSidebar,
    "--c-bg-player": theme.bgPlayer,
    "--c-divider": theme.divider,
  };

  // ---- STYLES (all inline to keep single-file) ----
  const S = {
    app: { display: "flex", flexDirection: "column", height: "100vh", width: "100vw", background: theme.bgBase, color: theme.textPrimary, fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", overflow: "hidden", fontSize: 14, ...cssVars },
    mainRow: { display: "flex", flex: 1, overflow: "hidden" },
    sidebar: { width: sidebarCollapsed ? 72 : 280, minWidth: sidebarCollapsed ? 72 : 280, background: theme.bgSidebar, display: "flex", flexDirection: "column", transition: "width 0.2s, min-width 0.2s", overflow: "hidden", borderRight: `1px solid ${theme.divider}22` },
    sidebarTop: { padding: sidebarCollapsed ? "16px 8px" : "16px 20px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" },
    sidebarNav: { padding: sidebarCollapsed ? "8px" : "8px 12px" },
    sidebarNavItem: (active) => ({ display: "flex", alignItems: "center", gap: 16, padding: sidebarCollapsed ? "12px 0" : "10px 12px", borderRadius: 8, cursor: "pointer", color: active ? theme.textPrimary : theme.textSecondary, fontWeight: active ? 700 : 600, fontSize: 15, transition: "all 0.15s", justifyContent: sidebarCollapsed ? "center" : "flex-start", background: active ? theme.bgHighlight : "transparent" }),
    sidebarLibHeader: { padding: sidebarCollapsed ? "16px 8px 8px" : "20px 20px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" },
    sidebarPlaylist: { display: "flex", alignItems: "center", gap: 12, padding: "8px 12px", borderRadius: 6, cursor: "pointer", transition: "background 0.15s" },
    mainContent: { flex: 1, overflow: "auto", background: theme.bgBase, position: "relative" },
    topBar: { position: "sticky", top: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", background: `${theme.bgBase}dd`, backdropFilter: "blur(20px)" },
    navBtn: (disabled) => ({ width: 32, height: 32, borderRadius: "50%", border: "none", background: theme.bgElevated, color: disabled ? theme.textSubdued : theme.textPrimary, cursor: disabled ? "default" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: disabled ? 0.5 : 1 }),
    searchBar: { display: "flex", alignItems: "center", background: theme.bgElevated, borderRadius: 24, padding: "8px 16px", gap: 8, flex: 1, maxWidth: 480 },
    searchInput: { background: "transparent", border: "none", outline: "none", color: theme.textPrimary, fontSize: 14, flex: 1, fontFamily: "inherit" },
    section: { padding: "0 24px 24px" },
    sectionTitle: { fontSize: 24, fontWeight: 700, color: theme.textPrimary, margin: "24px 0 16px", cursor: "pointer", display: "inline-block" },
    cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 },
    card: { background: theme.bgSurface, borderRadius: 8, padding: 16, cursor: "pointer", transition: "background 0.2s", position: "relative" },
    cardImg: { width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: 6, marginBottom: 12, boxShadow: "0 8px 24px rgba(0,0,0,.5)" },
    cardTitle: { fontWeight: 700, fontSize: 15, color: theme.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
    cardSub: { fontSize: 13, color: theme.textSecondary, marginTop: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
    playBtn: { position: "absolute", right: 16, bottom: 80, width: 48, height: 48, borderRadius: "50%", background: theme.primary, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 16px rgba(0,0,0,.3)", transition: "transform 0.15s, opacity 0.15s, bottom 0.2s", color: "#000" },
    // Player bar
    player: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 72, background: theme.bgPlayer, borderTop: `1px solid ${theme.divider}` },
    playerLeft: { display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 },
    playerCenter: { display: "flex", flexDirection: "column", alignItems: "center", flex: 1, maxWidth: 600 },
    playerRight: { display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "flex-end" },
    playerControls: { display: "flex", alignItems: "center", gap: 16 },
    playerBtn: (active) => ({ background: "none", border: "none", color: active ? theme.primary : theme.textSecondary, cursor: "pointer", padding: 4, display: "flex", alignItems: "center", transition: "color 0.15s" }),
    playPauseBtn: { width: 36, height: 36, borderRadius: "50%", background: theme.textPrimary, border: "none", color: theme.bgBase, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
    progressRow: { display: "flex", alignItems: "center", gap: 8, width: "100%", marginTop: 4 },
    progressBar: { flex: 1, height: 4, background: theme.bgHighlight, borderRadius: 2, cursor: "pointer", position: "relative" },
    progressFill: (pct) => ({ height: "100%", background: theme.textPrimary, borderRadius: 2, width: `${pct}%`, transition: "none", position: "relative" }),
    progressKnob: { position: "absolute", right: -6, top: -4, width: 12, height: 12, borderRadius: "50%", background: theme.textPrimary },
    volumeBar: { width: 100, height: 4, background: theme.bgHighlight, borderRadius: 2, cursor: "pointer", position: "relative" },
    volumeFill: (pct) => ({ height: "100%", background: theme.textPrimary, borderRadius: 2, width: `${pct}%` }),
    // Track list
    trackRow: (isActive) => ({ display: "grid", gridTemplateColumns: "40px 1fr 1fr 80px", alignItems: "center", padding: "8px 16px", borderRadius: 4, cursor: "pointer", color: isActive ? theme.primary : theme.textPrimary, transition: "background 0.15s", gap: 16 }),
    trackNum: { fontSize: 15, color: theme.textSecondary, textAlign: "center", width: 40 },
    trackInfo: { display: "flex", alignItems: "center", gap: 12, minWidth: 0 },
    trackImg: { width: 40, height: 40, borderRadius: 4, objectFit: "cover", flexShrink: 0 },
    // Hero banner
    heroBanner: (bg) => ({ display: "flex", alignItems: "flex-end", padding: "40px 24px 24px", gap: 24, background: `linear-gradient(transparent 0, ${theme.bgBase}99 100%), url(${bg}) center/cover`, minHeight: 280 }),
    heroImg: { width: 220, height: 220, borderRadius: 6, objectFit: "cover", boxShadow: "0 4px 60px rgba(0,0,0,.5)", flexShrink: 0 },
    heroInfo: { display: "flex", flexDirection: "column", gap: 8, minWidth: 0 },
    heroType: { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 },
    heroTitle: { fontSize: 48, fontWeight: 900, lineHeight: 1.1, overflow: "hidden", textOverflow: "ellipsis" },
    heroMeta: { fontSize: 14, color: theme.textSecondary, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
    actionRow: { display: "flex", alignItems: "center", gap: 16, padding: "16px 24px" },
    bigPlayBtn: { width: 56, height: 56, borderRadius: "50%", background: theme.primary, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", boxShadow: "0 8px 16px rgba(0,0,0,.3)", transition: "transform 0.05s" },
    // Lyrics panel
    lyricsPanel: { position: "fixed", right: 0, top: 0, bottom: 72, width: 400, background: theme.bgElevated, zIndex: 20, padding: "24px", overflowY: "auto", borderLeft: `1px solid ${theme.divider}`, transition: "transform 0.3s" },
    lyricsHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 },
    lyricsText: { fontSize: 22, fontWeight: 700, lineHeight: 1.8, color: theme.textPrimary, whiteSpace: "pre-wrap" },
    // Queue panel
    queuePanel: { position: "fixed", right: 0, top: 0, bottom: 72, width: 360, background: theme.bgElevated, zIndex: 20, padding: "16px", overflowY: "auto", borderLeft: `1px solid ${theme.divider}` },
  };

  // ---- COMPONENTS ----

  const Card = ({ title, subtitle, imgUrl, onClick, isRound }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        style={{ ...S.card, background: hovered ? S.card.background : theme.bgSurface, ...(hovered ? { background: theme.bgHighlight } : {}) }}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={imgUrl || "https://picsum.photos/seed/default/300/300"} alt={title} style={{ ...S.cardImg, borderRadius: isRound ? "50%" : 6 }} />
        <div style={S.cardTitle}>{title}</div>
        <div style={S.cardSub}>{subtitle}</div>
        {hovered && (
          <div
            style={{ ...S.playBtn, opacity: 1, bottom: 84, transform: "translateY(-4px)" }}
            onClick={(e) => { e.stopPropagation(); onClick(); }}
          >
            <Icons.Play size={22} />
          </div>
        )}
      </div>
    );
  };

  const TrackRow = ({ song, index, showAlbum = true, showCover = true, onPlay }) => {
    const [hovered, setHovered] = useState(false);
    const isActive = currentSong?.id === song.id;
    return (
      <div
        style={{ ...S.trackRow(isActive), background: hovered ? theme.bgHighlight : "transparent" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onPlay?.()}
      >
        <div style={S.trackNum}>
          {hovered ? (
            <span style={{ color: theme.textPrimary }}><Icons.Play size={14} /></span>
          ) : isActive && isPlaying ? (
            <span style={{ color: theme.primary }}>♫</span>
          ) : (
            index + 1
          )}
        </div>
        <div style={S.trackInfo}>
          {showCover && <img src={song.coverUrl} alt="" style={S.trackImg} />}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, color: isActive ? theme.primary : theme.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.title}</div>
            <div style={{ fontSize: 13, color: theme.textSecondary, cursor: "pointer", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} onClick={(e) => { e.stopPropagation(); navigate("artist", { name: song.artist }); }}>{song.artist}</div>
          </div>
        </div>
        <div style={{ fontSize: 14, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); navigate("album", { name: song.album }); }}>
          {showAlbum ? song.album : ""}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "flex-end" }}>
          <span
            style={{ cursor: "pointer", opacity: liked[song.id] ? 1 : (hovered ? 0.7 : 0), transition: "opacity 0.15s", color: liked[song.id] ? theme.primary : theme.textSecondary }}
            onClick={(e) => { e.stopPropagation(); setLiked((l) => ({ ...l, [song.id]: !l[song.id] })); }}
          >
            <Icons.Heart filled={liked[song.id]} />
          </span>
          <span style={{ color: theme.textSecondary, fontSize: 14 }}>{formatTime(song.duration)}</span>
        </div>
      </div>
    );
  };

  const TrackListHeader = () => (
    <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr 80px", padding: "0 16px 8px", borderBottom: `1px solid ${theme.divider}`, color: theme.textSubdued, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", gap: 16, marginBottom: 8 }}>
      <div style={{ textAlign: "center" }}>#</div>
      <div>Title</div>
      <div>Album</div>
      <div style={{ textAlign: "right", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 4 }}><Icons.Clock /> Time</div>
    </div>
  );

  // ---- VIEWS ----

  const HomeView = () => {
    const topSongs = CONFIG.songs.slice(0, 6);
    const recentMix = CONFIG.songs.slice().sort(() => 0.5 - Math.random()).slice(0, 6);
    return (
      <div>
        {/* Quick picks (like Spotify's greeting section) */}
        <div style={{ padding: "0 24px 8px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: "8px 0 16px" }}>Good {new Date().getHours() < 12 ? "ass morning" : new Date().getHours() < 18 ? "fucking afternoon" : "ahh evening"}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 8 }}>
            {topSongs.map((song) => {
              const [h, setH] = useState(false);
              return (
                <div
                  key={song.id}
                  style={{ display: "flex", alignItems: "center", background: h ? `${theme.bgHighlight}` : `${theme.bgElevated}88`, borderRadius: 4, overflow: "hidden", cursor: "pointer", transition: "background 0.2s", height: 64, position: "relative" }}
                  onMouseEnter={() => setH(true)}
                  onMouseLeave={() => setH(false)}
                  onClick={() => playSongFromList(CONFIG.songs, CONFIG.songs.indexOf(song))}
                >
                  <img src={song.coverUrl} alt="" style={{ width: 64, height: 64, objectFit: "cover" }} />
                  <span style={{ padding: "0 16px", fontWeight: 700, fontSize: 14, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.title}</span>
                  {h && (
                    <div style={{ position: "absolute", right: 12, width: 36, height: 36, borderRadius: "50%", background: theme.primary, display: "flex", alignItems: "center", justifyContent: "center", color: "#000", boxShadow: "0 4px 12px rgba(0,0,0,.4)" }}>
                      <Icons.Play size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Most Popular */}
        <div style={S.section}>
          <div style={S.sectionTitle}>Pumpfun Music's Greatest Hits</div>
          <div style={S.cardGrid}>
            {CONFIG.songs.slice(0, 5).map((song) => (
              <Card key={song.id} title={song.title} subtitle={song.artist} imgUrl={song.coverUrl} onClick={() => playSongFromList(CONFIG.songs, CONFIG.songs.indexOf(song))} />
            ))}
          </div>
        </div>

        {/* Featured Playlists */}
        <div style={S.section}>
          <div style={S.sectionTitle}>Featured Playlists</div>
          <div style={S.cardGrid}>
            {CONFIG.playlists.map((pl) => (
              <Card key={pl.id} title={pl.name} subtitle={pl.description} imgUrl={pl.coverUrl} onClick={() => navigate("playlist", pl)} />
            ))}
          </div>
        </div>

        {/* Browse Albums */}
        <div style={S.section}>
          <div style={S.sectionTitle}>Albums</div>
          <div style={S.cardGrid}>
            {albums.map((alb) => (
              <Card key={alb.name} title={alb.name} subtitle={`${alb.artist} · ${alb.year}`} imgUrl={alb.coverUrl} onClick={() => navigate("album", alb)} />
            ))}
          </div>
        </div>

        {/* Artists */}
        <div style={S.section}>
          <div style={S.sectionTitle}>Artists</div>
          <div style={S.cardGrid}>
            {artists.map((art) => (
              <Card key={art.name} title={art.name} subtitle={`${art.songs.length} song${art.songs.length > 1 ? "s" : ""}`} imgUrl={art.coverUrl} isRound onClick={() => navigate("artist", art)} />
            ))}
          </div>
        </div>

        {/* Made for you */}
        <div style={S.section}>
          <div style={S.sectionTitle}>Made For You</div>
          <div style={S.cardGrid}>
            {recentMix.slice(0, 4).map((song) => (
              <Card key={song.id + "mix"} title={song.title} subtitle={song.artist} imgUrl={song.coverUrl} onClick={() => playSongFromList(CONFIG.songs, CONFIG.songs.indexOf(song))} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const SearchView = () => {
    const genres = ["Pop", "Rock", "Electronic", "Lo-fi", "Indie", "Alternative", "Funk", "Folk"];
    const genreColors = ["#E13300", "#8400E7", "#cfcc10", "#E8115B", "#E91429", "#148A08", "#DC148C", "#537AA2"];
    const hasQuery = searchQuery.trim().length > 0;
    return (
      <div>
        {!hasQuery && (
          <div style={S.section}>
            <div style={S.sectionTitle}>Browse All</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
              {genres.map((g, i) => (
                <div
                  key={g}
                  onClick={() => setSearchQuery(g)}
                  style={{ background: genreColors[i], borderRadius: 8, padding: 20, cursor: "pointer", height: 120, fontWeight: 700, fontSize: 22, position: "relative", overflow: "hidden" }}
                >
                  {g}
                </div>
              ))}
            </div>
          </div>
        )}
        {hasQuery && (
          <div style={S.section}>
            {searchResults.songs.length > 0 && (
              <>
                <div style={S.sectionTitle}>Songs</div>
                <TrackListHeader />
                {searchResults.songs.map((song, i) => (
                  <TrackRow key={song.id} song={song} index={i} onPlay={() => playSongFromList(searchResults.songs, i)} />
                ))}
              </>
            )}
            {searchResults.albums.length > 0 && (
              <>
                <div style={S.sectionTitle}>Albums</div>
                <div style={S.cardGrid}>
                  {searchResults.albums.map((alb) => (
                    <Card key={alb.name} title={alb.name} subtitle={alb.artist} imgUrl={alb.coverUrl} onClick={() => navigate("album", alb)} />
                  ))}
                </div>
              </>
            )}
            {searchResults.artists.length > 0 && (
              <>
                <div style={S.sectionTitle}>Artists</div>
                <div style={S.cardGrid}>
                  {searchResults.artists.map((art) => (
                    <Card key={art.name} title={art.name} subtitle="Artist" imgUrl={art.coverUrl} isRound onClick={() => navigate("artist", art)} />
                  ))}
                </div>
              </>
            )}
            {searchResults.playlists.length > 0 && (
              <>
                <div style={S.sectionTitle}>Playlists</div>
                <div style={S.cardGrid}>
                  {searchResults.playlists.map((pl) => (
                    <Card key={pl.id} title={pl.name} subtitle={pl.description} imgUrl={pl.coverUrl} onClick={() => navigate("playlist", pl)} />
                  ))}
                </div>
              </>
            )}
            {searchResults.songs.length === 0 && searchResults.albums.length === 0 && searchResults.artists.length === 0 && searchResults.playlists.length === 0 && (
              <div style={{ textAlign: "center", padding: 60, color: theme.textSecondary }}>
                <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>No results found for "{searchQuery}"</div>
                <div>Check your spelling or try different keywords</div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const LibraryView = () => (
    <div style={S.section}>
      <div style={S.sectionTitle}>Your Library</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {["Playlists", "Albums", "Artists"].map((tab) => (
          <button key={tab} style={{ background: theme.bgElevated, border: "none", color: theme.textPrimary, padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 14, fontWeight: 600 }}>{tab}</button>
        ))}
      </div>
      <div style={S.cardGrid}>
        {CONFIG.playlists.map((pl) => (
          <Card key={pl.id} title={pl.name} subtitle={pl.description} imgUrl={pl.coverUrl} onClick={() => navigate("playlist", pl)} />
        ))}
        {albums.map((alb) => (
          <Card key={alb.name} title={alb.name} subtitle={`${alb.artist} · Album`} imgUrl={alb.coverUrl} onClick={() => navigate("album", alb)} />
        ))}
      </div>
    </div>
  );

  const PlaylistView = ({ playlist }) => {
    const songs = playlist.songIds.map((id) => CONFIG.songs.find((s) => s.id === id)).filter(Boolean);
    const totalDuration = songs.reduce((acc, s) => acc + s.duration, 0);
    return (
      <div>
        <div style={S.heroBanner(playlist.coverUrl)}>
          <img src={playlist.coverUrl} alt="" style={S.heroImg} />
          <div style={S.heroInfo}>
            <div style={S.heroType}>Playlist</div>
            <div style={S.heroTitle}>{playlist.name}</div>
            <div style={S.heroMeta}>
              <span>{playlist.description}</span>
              <span>·</span>
              <span>{songs.length} songs, {formatTime(totalDuration)}</span>
            </div>
          </div>
        </div>
        <div style={S.actionRow}>
          <button style={S.bigPlayBtn} onClick={() => playSongFromList(songs, 0)}>
            <Icons.Play size={24} />
          </button>
          <button style={{ ...S.playerBtn(shuffleOn), transform: "scale(1.3)" }} onClick={() => setShuffle(!shuffleOn)}>
            <Icons.Shuffle />
          </button>
        </div>
        <div style={{ padding: "0 24px" }}>
          <TrackListHeader />
          {songs.map((song, i) => (
            <TrackRow key={song.id} song={song} index={i} onPlay={() => playSongFromList(songs, i)} />
          ))}
        </div>
      </div>
    );
  };

  const AlbumView = ({ album }) => {
    const totalDuration = album.songs.reduce((acc, s) => acc + s.duration, 0);
    return (
      <div>
        <div style={S.heroBanner(album.coverUrl)}>
          <img src={album.coverUrl} alt="" style={S.heroImg} />
          <div style={S.heroInfo}>
            <div style={S.heroType}>Album</div>
            <div style={S.heroTitle}>{album.name}</div>
            <div style={S.heroMeta}>
              <span style={{ fontWeight: 700, cursor: "pointer" }} onClick={() => navigate("artist", { name: album.artist })}>{album.artist}</span>
              <span>·</span>
              <span>{album.year}</span>
              <span>·</span>
              <span>{album.songs.length} songs, {formatTime(totalDuration)}</span>
            </div>
          </div>
        </div>
        <div style={S.actionRow}>
          <button style={S.bigPlayBtn} onClick={() => playSongFromList(album.songs, 0)}>
            <Icons.Play size={24} />
          </button>
          <button style={{ ...S.playerBtn(shuffleOn), transform: "scale(1.3)" }} onClick={() => setShuffle(!shuffleOn)}>
            <Icons.Shuffle />
          </button>
        </div>
        <div style={{ padding: "0 24px" }}>
          <TrackListHeader />
          {album.songs.map((song, i) => (
            <TrackRow key={song.id} song={song} index={i} showCover={false} showAlbum={false} onPlay={() => playSongFromList(album.songs, i)} />
          ))}
        </div>
      </div>
    );
  };

  const ArtistView = ({ artist: artData }) => {
    const artist = artists.find((a) => a.name === (artData?.name || "")) || artData;
    if (!artist) return null;
    const artistAlbums = albums.filter((a) => a.artist === artist.name);
    return (
      <div>
        <div style={{ ...S.heroBanner(artist.coverUrl), minHeight: 320, background: `linear-gradient(transparent 0, ${theme.bgBase} 100%), url(${artist.coverUrl}) center/cover` }}>
          <div style={S.heroInfo}>
            <div style={{ fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#3d91f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>✓</span>
              Verified Artist
            </div>
            <div style={{ ...S.heroTitle, fontSize: 64 }}>{artist.name}</div>
            <div style={S.heroMeta}>{artist.songs.length} song{artist.songs.length > 1 ? "s" : ""}</div>
          </div>
        </div>
        <div style={S.actionRow}>
          <button style={S.bigPlayBtn} onClick={() => playSongFromList(artist.songs, 0)}>
            <Icons.Play size={24} />
          </button>
          <button style={{ background: "transparent", border: `1px solid ${theme.textSecondary}`, color: theme.textPrimary, padding: "6px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>Follow</button>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>Popular</div>
          {artist.songs.slice(0, 5).map((song, i) => (
            <TrackRow key={song.id} song={song} index={i} onPlay={() => playSongFromList(artist.songs, i)} />
          ))}
        </div>
        {artistAlbums.length > 0 && (
          <div style={S.section}>
            <div style={S.sectionTitle}>Discography</div>
            <div style={S.cardGrid}>
              {artistAlbums.map((alb) => (
                <Card key={alb.name} title={alb.name} subtitle={`${alb.year} · Album`} imgUrl={alb.coverUrl} onClick={() => navigate("album", alb)} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // ---- RENDER ----

  const renderMainContent = () => {
    switch (currentView) {
      case "home": return <HomeView />;
      case "search": return <SearchView />;
      case "library": return <LibraryView />;
      case "playlist": return <PlaylistView playlist={viewData} />;
      case "album": return <AlbumView album={viewData} />;
      case "artist": return <ArtistView artist={viewData} />;
      default: return <HomeView />;
    }
  };

  const progressPct = currentSong ? (progress / (currentSong.duration || duration || 1)) * 100 : 0;

  return (
    <div style={S.app}>
      <div style={S.mainRow}>
        {/* ---- SIDEBAR ---- */}
        <div style={S.sidebar}>
          <div style={S.sidebarTop} onClick={() => navigate("home")}>
            {CONFIG.logoUrl ? (
              <img src={CONFIG.logoUrl} alt="Logo" style={{ height: 32, objectFit: "contain" }} />
            ) : (
              <div style={{ fontSize: 22, fontWeight: 900, color: theme.textPrimary, letterSpacing: -0.5 }}>
                {sidebarCollapsed ? CONFIG.logoText[0] : CONFIG.logoText}
              </div>
            )}
          </div>
          <nav style={S.sidebarNav}>
            <div style={S.sidebarNavItem(currentView === "home")} onClick={() => { setCurrentView("home"); setViewData(null); }}>
              <Icons.Home />
              {!sidebarCollapsed && <span>Home</span>}
            </div>
            <div style={S.sidebarNavItem(currentView === "search")} onClick={() => { setCurrentView("search"); setViewData(null); setTimeout(() => searchInputRef.current?.focus(), 100); }}>
              <Icons.Search />
              {!sidebarCollapsed && <span>Search</span>}
            </div>
          </nav>
          <div style={{ borderTop: `1px solid ${theme.divider}`, margin: "8px 0" }} />
          <div style={S.sidebarLibHeader}>
            <div style={{ ...S.sidebarNavItem(currentView === "library"), padding: 0 }} onClick={() => { setCurrentView("library"); setViewData(null); }}>
              <Icons.Library />
              {!sidebarCollapsed && <span style={{ fontWeight: 700 }}>Your Library</span>}
            </div>
          </div>
          {!sidebarCollapsed && (
            <div style={{ flex: 1, overflowY: "auto", padding: "4px 8px" }}>
              {CONFIG.playlists.map((pl) => (
                <div
                  key={pl.id}
                  style={S.sidebarPlaylist}
                  onClick={() => navigate("playlist", pl)}
                  onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <img src={pl.coverUrl} alt="" style={{ width: 48, height: 48, borderRadius: 4, objectFit: "cover" }} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: currentView === "playlist" && viewData?.id === pl.id ? theme.primary : theme.textPrimary }}>{pl.name}</div>
                    <div style={{ fontSize: 13, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Playlist · {pl.songIds.length} songs</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ---- MAIN CONTENT ---- */}
        <div style={S.mainContent}>
          {/* Top navigation bar */}
          <div style={S.topBar}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button style={S.navBtn(navHistory.length === 0)} onClick={goBack}><Icons.ChevronLeft /></button>
              <button style={S.navBtn(navFuture.length === 0)} onClick={goForward}><Icons.ChevronRight /></button>
              {currentView === "search" && (
                <div style={S.searchBar}>
                  <Icons.Search />
                  <input
                    ref={searchInputRef}
                    style={S.searchInput}
                    placeholder="What do you want to listen to?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  {searchQuery && (
                    <span style={{ cursor: "pointer", color: theme.textSecondary }} onClick={() => setSearchQuery("")}>
                      <Icons.Close />
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          {renderMainContent()}
          <div style={{ height: 100 }} />
        </div>

        {/* ---- LYRICS PANEL ---- */}
        {showLyrics && currentSong && (
          <div style={S.lyricsPanel}>
            <div style={S.lyricsHeader}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{currentSong.title}</div>
              <button style={{ background: "none", border: "none", color: theme.textSecondary, cursor: "pointer" }} onClick={() => setShowLyrics(false)}>
                <Icons.Close />
              </button>
            </div>
            <div style={S.lyricsText}>
              {currentSong.lyrics || "No lyrics available for this song."}
            </div>
          </div>
        )}

        {/* ---- QUEUE PANEL ---- */}
        {showQueue && (
          <div style={S.queuePanel}>
            <div style={{ ...S.lyricsHeader }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Queue</div>
              <button style={{ background: "none", border: "none", color: theme.textSecondary, cursor: "pointer" }} onClick={() => setShowQueue(false)}>
                <Icons.Close />
              </button>
            </div>
            {currentSong && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Now Playing</div>
                <TrackRow song={currentSong} index={0} showAlbum={false} onPlay={() => {}} />
              </div>
            )}
            <div style={{ fontSize: 12, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Next Up</div>
            {queue.slice(queueIndex + 1).map((song, i) => (
              <TrackRow key={song.id + i} song={song} index={i} showAlbum={false} onPlay={() => playSongFromList(queue, queueIndex + 1 + i)} />
            ))}
            {queue.length === 0 && <div style={{ color: theme.textSubdued, padding: 16 }}>Queue is empty</div>}
          </div>
        )}
      </div>

      {/* ---- BOTTOM PLAYER BAR ---- */}
      <div style={S.player}>
        {/* Left: Song info */}
        <div style={S.playerLeft}>
          {currentSong ? (
            <>
              <img src={currentSong.coverUrl} alt="" style={{ width: 56, height: 56, borderRadius: 4, objectFit: "cover" }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", cursor: "pointer" }}>{currentSong.title}</div>
                <div style={{ fontSize: 12, color: theme.textSecondary, cursor: "pointer" }} onClick={() => navigate("artist", { name: currentSong.artist })}>{currentSong.artist}</div>
              </div>
              <span style={{ cursor: "pointer", color: liked[currentSong.id] ? theme.primary : theme.textSecondary, marginLeft: 8 }} onClick={() => setLiked((l) => ({ ...l, [currentSong.id]: !l[currentSong.id] }))}>
                <Icons.Heart filled={liked[currentSong.id]} />
              </span>
            </>
          ) : (
            <div style={{ color: theme.textSubdued, fontSize: 14 }}>No song playing</div>
          )}
        </div>

        {/* Center: Controls + Progress */}
        <div style={S.playerCenter}>
          <div style={S.playerControls}>
            <button style={S.playerBtn(shuffleOn)} onClick={() => setShuffle(!shuffleOn)}>
              <Icons.Shuffle />
            </button>
            <button style={S.playerBtn(false)} onClick={playPrev}>
              <Icons.SkipPrev />
            </button>
            <button style={S.playPauseBtn} onClick={togglePlay}>
              {isPlaying ? <Icons.Pause size={18} /> : <Icons.Play size={18} />}
            </button>
            <button style={S.playerBtn(false)} onClick={playNext}>
              <Icons.SkipNext />
            </button>
            <button style={S.playerBtn(repeatMode > 0)} onClick={() => setRepeatMode((r) => (r + 1) % 3)}>
              <Icons.Repeat />
              {repeatMode === 2 && <span style={{ fontSize: 9, position: "absolute", marginTop: 14, fontWeight: 700 }}>1</span>}
            </button>
          </div>
          <div style={S.progressRow}>
            <span style={{ fontSize: 11, color: theme.textSubdued, minWidth: 36, textAlign: "right" }}>{formatTime(progress)}</span>
            <div ref={progressBarRef} style={S.progressBar} onClick={seekTo}>
              <div style={S.progressFill(progressPct)}>
                <div style={S.progressKnob} />
              </div>
            </div>
            <span style={{ fontSize: 11, color: theme.textSubdued, minWidth: 36 }}>{formatTime(currentSong?.duration || duration)}</span>
          </div>
        </div>

        {/* Right: Volume + extras */}
        <div style={S.playerRight}>
          <button style={S.playerBtn(showLyrics)} onClick={() => { setShowLyrics(!showLyrics); setShowQueue(false); }} title="Lyrics">
            <Icons.Lyrics />
          </button>
          <button style={S.playerBtn(showQueue)} onClick={() => { setShowQueue(!showQueue); setShowLyrics(false); }} title="Queue">
            <Icons.Queue />
          </button>
          <button style={S.playerBtn(false)} onClick={() => setIsMuted(!isMuted)}>
            {isMuted || volume === 0 ? <Icons.VolumeMute /> : <Icons.Volume />}
          </button>
          <div
            style={S.volumeBar}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
              setVolume(Math.round(ratio * 100));
              setIsMuted(false);
            }}
          >
            <div style={S.volumeFill(isMuted ? 0 : volume)} />
          </div>
        </div>
      </div>
    </div>
  );
}