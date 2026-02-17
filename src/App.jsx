import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ============================================================
// 🎵 CONFIGURATION - EDIT EVERYTHING HERE
// ============================================================
// To add your own songs, logos, colors - ONLY edit this section

const CONFIG = {
  // ---- YOUR BRAND ----
  appName: "$PFMUSIC",
  logoUrl: "", // Put your logo URL here, e.g. "PFMUSIC.png"
  logoText: "$PFMUSIC", // Shown if no logo image

  // ---- THEME COLORS (change these to restyle the entire app) ----
  theme: {
    primary: "#1DB954",       // Main accent (Spotify green)
    primaryHover: "#058d34",  // Accent hover
    bgBase: "#00b853",        // Main background
    bgSurface: "#01ba54",     // Card/surface background
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
      title: "F*CK TUAH",
      artist: "Pmoney Glitxh & YungSol",
      album: "Blockchain",
      duration: 133, // seconds
      audioUrl: "/songs/F_CK_TUAH_-_Pmoney_Glitxh_&_YungSol_(Official_Music_Video)_128k.mp3",
      coverUrl: "/covers/Fuck Tuah.png",
      lyrics: `[Verse 1]
Blockchain
Yeah yeah
Bruh I'm telling you guys, bruh
This fucking Hawk Tuah bitchass bruh
She keeps on fucking rugging bruh
If I see her, imma smack the fuck out of her bruh
On bro

[Chorus]
(Gra) (yeah, yeah)
I'm a crypto trader
Money spend 500 bands on my haters
Reach all time highs
We reaching our peaks imma see y'all later
Moodeng to PNUT to Pengu
Got all the SOL I can send you
Make all my trades look easy
Make bands like I don't intend to

Blockchain records trading again
Hit a trade we up 500 percent
I'm with my homies, so go get yo friends
Imma pull up in that AMG Benz
Me and gang locked in
Just made 100 bands, put that shit in my phantom
This motion you cannot stop it
No tax on crypto, no Fanum

[Verse 2]
Blockchain we trading and rising
Word to my brother, we gonna be winning
First record as a coin, not bullshit
All my homies gonna rise, no cap
Degen memes don't need that
I want a community we ain't some wack shit
Hold up, we cannot trip
All the haters y'all some fake big bitch

Rule 1 DEV never sell
So don't even stress cuz you gon be rich
1 SOL. I'm a magician
I can flip a coin into a hundred
Fuck that, we gon get millions
Stick with the Blockchain, we are the real ones
Hawk Tuah that bitch my opp
Haliey Welch yeah, you gon get popped

[Chorus]
I'm a crypto trader
Money spend 500 bands on my haters
Reach all time highs
We reaching our peaks imma see y'all later
Moodeng to PNUT to Pengu
Got all the SOL I can send you
Make all my trades look easy
Make bands like I don't intend to

Blockchain records trading again
Hit a trade we up 500 percent
I'm with my homies, so go get yo friends
Imma pull up in that AMG Benz
Me and gang locked in
Just made 100 bands, put that shit in my phantom
This motion you cannot stop it
No tax on crypto, no Fanum

[Verse 3]
Yo YungSol, who's that?
If that's Hawk Tuah, that bitch gon get smacked
Aye Pmoney, look back
The feds on our ass, we can't shoot back
On demon mode, fuck that
Rugged my community so imma stab
Oh word? Let's catch
Pull up, black masked up, get strapped.`,
      genre: "Rap",
      year: 2025,
    },
    {
      id: "2",
      title: "Get Rugged",
      artist: "The Homeless",
      album: "Single",
      duration: 67,
      audioUrl: "/songs/homeless.mp3",
      coverUrl: "/covers/get rugged.png",
      lyrics: `[Verse 1]
You just got scammed by a bunch of homeless niggas
Suck some dick til your lips are puffed up like you got fillers
We just rug pulled your ass for 100 SOL
A new way of panhandling, you just paid the toll

We don't got no home
So we don't pay no rent
We just want these drugs, alcohol, and snort all the fent
Rug pull money got me feelin that euphoria
Trade Solana for these percs, I feel so delirious

Tap into my Pump.Fun coin if you are curious
Study how we rugged it if you are studious
The way my Phantom Wallet bussin, i'm gonna bust
Just let us extract your solana please do not fuss

[Verse 2]
Now that I have a hundred bands in my pants
Im gonna finish up with this rant, you got scammed
Moral of the story do not trust anyone
Not even a homeless man because he's gonna chant-

[Chorus]
Get rugged nigga
Get rugged nigga
You broke ass bitch get rugged nigga
Get rugged nigga
Get rugged nigga
You broke ass bitch get rugged nigga`,
      genre: "Rap",
      year: 2026,
    },
    {
      id: "3",
      title: "Cryptolations",
      artist: "Lil Bubble",
      album: "Crypto Bubble",
      duration: 146,
      audioUrl: "/songs/Congratulations_(Post_Malone_Bitcoin_Parody)_BTC_All_Time_High_🚀_128k.mp3",
      coverUrl: "/covers/cryptolations.png",
      lyrics: `[Chorus]
My mama called
Seen you on Twitter son
Said shit done changed
Ever since your first song
I bought it all
Ever since the first dip
They said it's tulip mania

Now they always say congratulations
Longed so hard avoided liquidation
They ain't ever have the hands or patience
We kept holding, never sold, and look we made it
Yeah, we made it

[Verse 1]
They were never there, no
Yeah, Now I'm jumping out the Lambo
Yeah, And my life move slow-mo
Yeah, when I open Crypto Pro
Yeah, I'm a genius with the finance
Yeah, and I buy it all on Binance
Yeah, Everybody wanna have it
Yeah, but I didn't buy it last year
Yeah

[Verse 2]
Now everybody wishin' that they hadda bought it
(yeah yeah yeah)
But it's too late now, 'cause they can't afford it
(yeah yeah yeah)
They were too scared just to buy the bottom
(yeah yeah yeah)
I was on Bitmex, 100x longin'
(yeah yeah)

[Verse 3]
If you got BTC then put your ledgers to the sky
How can I make sense? I got Satoshis on my mind
Yeah, they called me crazy when I told 'em they should try
Now my family's in my inbox asking how to buy

[Chorus]
My mama called
Seen you on Twitter son
Said shit done changed
Ever since your first song
I bought it all
Ever since the first dip
They said it's tulip mania

Now they always say congratulations
Longed so hard avoided liquidation
They ain't ever have the hands or patience
We kept holding, never sold, and look we made it
Yeah, we made it

[Verse 4]
We were patient
Yeah, we were patient
Now we can scream that we made it
And everywhere everywhere we go they say “gratulations”
Ooh, yeah`,
      genre: "Alternative R&B",
      year: 2020,
    },
    {
      id: "4",
      title: "Tennessee Trader",
      artist: "Morgan Pumpen",
      album: "Single",
      duration: 155,
      audioUrl: "/songs/Pump_Fun_Junkies_-_Tennessee_Trader_-_Lyric_Video_128k.mp3",
      coverUrl: "/covers/tennessee.png",
      lyrics: `(Oooo oo oo ooh)
(Oooo oo oo ooh)
(yeah)

[Verse 1]
Pumpfun's a storm
Pulling me near
Tennessee Trader
Diving in here
Stumbled on Pump.Fun
Late in the night
Coins flashing wild
Chaos in sight

New names every tick
a degen's parade
Pumps hit the sky
Then dump to the grave
Screens burn my eyes
Like a river's roar
Awe turns to hunger
I'm craving more

[Chorus]
Pumpfun Junkies, riding the high
Aping hard, watch the profits fly
This turd's in the mud, but I won't quit
Tennessee Soul, addicted to the hit

[Verse 2]
Aped into DOGE
With a whiskey grin
Floki spiked fast
Then rug pulled my grin
MCMT's a tease
Jeets bold with the cash
So I ape back in
Got me chasing it fast

Coins flash and fade
Like a trader's sin
Rug pulled my boots
But I'm back again

[Chorus]
Pumpfun Junkies, riding the high
Aping hard, watch the profits fly
This turd's in the mud, but I won't quit
Tennessee Soul
And I'm addicted to this shit

[Verse 3]
Gas fees bite
But my bloods on fire
Chaos is my preacher
Lifiting me higher
Realized too late
I'm a junkie now
Pumpfun's my gospel
Guess I'm taking these vows

Pumpfun junkies done lost our minds
Tennessee Trader deep in the grind`,
      genre: "Country",
      year: 2026,
    },
    {
      id: "5",
      title: "Blockchain",
      artist: "Money Man",
      album: "Single",
      duration: 139,
      audioUrl: "/songs/Money_Man_-_Blockchain_(Official_Video)_128k.mp3",
      coverUrl: "/covers/Blockchain.jpeg",
      lyrics: `[Verse 1]
Bought a lil' Polkadot, bought a lil' VChain
Bought a lil' SafeMoon, houses got a safe room
Party out in Cancún, fuckin' with the Coinbase-

Pro, got Zcash
Fuckin' with the Robinhood
Out, got a free bag
And I'm on the blockchain, burnin' on blockchain
Damn, this shit some octane
Chillin' at the Hawks game, then I hit the trap spot

Just to get some bags off 20K
In a lil' denim, mad love
Altcoins in the red, I'ma get 'em half off
My young nigga hit a lick, he sellin' P's half off
Imma go to Mars on niggas, Imma blast off

Imma hit Fendi in the mall, Imma cash out
Bad bitch walkin' 'round the crib with her ass out
Feds tryna plot on a nigga, but I'm too slick
Every time you see me on the 'Gram, I'm in a new 'fit

Rich God made a nigga shirt and it's slim fit
Bad lil' vibe in the room and she slim thick
She just wanna bend that ass over, she gon' take dick
New body Escalade, damn, this shit a spaceship

You ain't got at least 20K, don't say shit
Ridin' in the C8, damn, a nigga feel great
I be at the spot sellin' bags, I don't tailgate
I was on the yacht with Tony Hawk talkin' big cake

If you gettin' to the money, then I know you relate
Got a lot of strains, nigga, I just served three states
Almost got too faded burnin' on Cheesecake, let's go

[Verse 2]
She say she want a boss 'cause her boyfriend a cheapskate
Say she want a boss 'cause her boyfriend a real lame
Talkin' on IG Live, I be spittin' real game
Rose gold Audemars, rose and white Cuban chain

50K solitaire earring screwbacks
I can get a nigga life took for a few racks
This a new flavor of the month, this a new pack
Been spent that old dead money, these some new racks

Blueberry Melon in my paper got me relaxed
Smokers love a nigga, they be callin' me to come back
Fell off for a minute, but I had to make a comeback
All I see is hate, nigga, where the fuckin' love at?

I ain't with the broke shit, baby, I'm a rich man
I ain't feel like slidin' so I might pay a hitman
Felt like Morray when I was broke, in the quicksand
If Quay ridin' with me with the chopper, call him stick man

I ain't with the small time shit, call me big man
He ain't never put no work in, he got soft hands
Pack just came and it's gone already, nigga
Gotta cash out, I ain't doin' no credit`,
      genre: "Rap",
      year: 2021,
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
      albumMap[song.album] = { name: song.album, artist: song.artist, coverUrl: song.coverUrl, year: song.year, songs: [] };
    }
    albumMap[song.album].songs.push(song);
  });
  return Object.values(albumMap);
};

const getArtists = () => {
  const artistMap = {};
  CONFIG.songs.forEach((song) => {
    if (!artistMap[song.artist]) {
      artistMap[song.artist] = { name: song.artist, songs: [], coverUrl: song.coverUrl };
    }
    artistMap[song.artist].songs.push(song);
  });
  return Object.values(artistMap);
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

// ============================================================
// ICONS
// ============================================================

const Icons = {
  Home: ({ size = 24 }) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"/></svg>),
  HomeFilled: ({ size = 24 }) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"/></svg>),
  Search: ({ size = 24 }) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/></svg>),
  Library: ({ size = 24 }) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001.5.866l10-5.77a1 1 0 000-1.732l-10-5.77zM16 4.732L23.5 9.5 16 14.268V4.732zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"/></svg>),
  Play: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>),
  Pause: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z"/></svg>),
  SkipNext: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M17.7 3a.7.7 0 00-.7.7v6.805L5.05 3.606A.7.7 0 004 4.212v15.576a.7.7 0 001.05.606L17 13.495V20.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-1.6z"/></svg>),
  SkipPrev: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M6.3 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7v-6.805l11.95 6.899A.7.7 0 0021.6 19.788V4.212a.7.7 0 00-1.05-.606L8.6 10.505V3.7a.7.7 0 00-.7-.7H6.3z"/></svg>),
  Shuffle: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M13.151 6.252c-.063.037-.112.09-.173.126L8.891 8.85l1.009 1.735 2.972-1.8 4.26 7.205-1.563.898 3.168 3.048 1.103-4.292-1.535.882-4.727-7.998c-.063-.112-.153-.196-.24-.28l-.002-.001a1.237 1.237 0 00-.185-.151zM5.636 8.85L4 9.792l4.974 8.423 1.636-.942L5.636 8.85zm10.893.124l-1.563.898 2.112 3.572 1.535-.882-2.084-3.588zm-6.01 4.692L9.51 15.4l1.803 3.051 1.009-1.735-1.803-3.05z"/></svg>),
  Repeat: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M5.5 5h13a4.5 4.5 0 010 9H8.207l2.147-2.146a.5.5 0 00-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708-.708L8.207 15H18.5a3.5 3.5 0 100-7h-13a.5.5 0 010-1H18.5a4.5 4.5 0 010 9H5.5a.5.5 0 010-1z"/></svg>),
  Volume: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M18.36 19.36a1 1 0 01-.7-1.71 7.33 7.33 0 000-10.36 1 1 0 011.41-1.41 9.33 9.33 0 010 13.18 1 1 0 01-.71.3zM15.54 16.54a1 1 0 01-.71-.3 1 1 0 010-1.41 3.93 3.93 0 000-5.54 1 1 0 011.42-1.42 5.93 5.93 0 010 8.37 1 1 0 01-.71.3zM12 20l-5-4H3a1 1 0 01-1-1V9a1 1 0 011-1h4l5-4a.5.5 0 01.8.4v15.2a.5.5 0 01-.8.4z"/></svg>),
  VolumeMute: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M12 20l-5-4H3a1 1 0 01-1-1V9a1 1 0 011-1h4l5-4a.5.5 0 01.8.4v15.2a.5.5 0 01-.8.4zM22.71 12l2.15-2.15a1 1 0 00-1.42-1.42L21.29 10.58l-2.15-2.15a1 1 0 00-1.42 1.42l2.15 2.15-2.15 2.15a1 1 0 001.42 1.42l2.15-2.15 2.15 2.15a1 1 0 001.42-1.42z"/></svg>),
  Heart: ({ filled, size = 24 }) => filled ? (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>) : (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>),
  Lyrics: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z"/></svg>),
  Queue: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>),
  Close: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71A1 1 0 005.7 7.12L10.59 12l-4.88 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.41z"/></svg>),
  ChevronLeft: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>),
  ChevronRight: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>),
  ChevronDown: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>),
  Clock: () => (<svg viewBox="0 0 24 24" style={{width:16,height:16}} fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>),
};

// ============================================================
// MAIN APP COMPONENT
// ============================================================

export default function SpotifyClone() {
  const theme = CONFIG.theme;
  const isMobile = useIsMobile();

  // --- State (things that need re-renders) ---
  const [currentView, setCurrentView] = useState("home");
  const [viewData, setViewData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [shuffleOn, setShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState({});
  const [showLyrics, setShowLyrics] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [showNowPlaying, setShowNowPlaying] = useState(false);
  const [mobileLyrics, setMobileLyrics] = useState(false);
  const [navHistory, setNavHistory] = useState([]);
  const [navFuture, setNavFuture] = useState([]);
  const [, forceUpdate] = useState(0); // only used for song change

  // --- Refs (progress updates bypass React entirely) ---
  const audioRef = useRef(null);
  const searchInputRef = useRef(null);
  const progressRef = useRef(0);
  const durationRef = useRef(0);
  // DOM refs for direct progress bar manipulation
  const dpFill = useRef(null);  // desktop progress fill
  const dpTime = useRef(null);  // desktop current time text
  const dpEnd = useRef(null);   // desktop end time text
  const mpFill = useRef(null);  // mini player fill
  const npFill = useRef(null);  // now playing fill
  const npTime = useRef(null);  // now playing current time text

  const albums = useMemo(() => getAlbums(), []);
  const artists = useMemo(() => getArtists(), []);

  // --- Direct DOM update for all progress bars (NO re-renders) ---
  const tick = useCallback((t, d) => {
    const pct = d > 0 ? ((t / d) * 100).toFixed(2) + "%" : "0%";
    const ts = formatTime(t);
    if (dpFill.current) dpFill.current.style.width = pct;
    if (dpTime.current) dpTime.current.textContent = ts;
    if (mpFill.current) mpFill.current.style.width = pct;
    if (npFill.current) npFill.current.style.width = pct;
    if (npTime.current) npTime.current.textContent = ts;
  }, []);

  // --- Audio Engine ---
  useEffect(() => {
    const audio = new Audio();
    audio.volume = volume / 100;
    audioRef.current = audio;
    const onTime = () => { progressRef.current = audio.currentTime; durationRef.current = audio.duration || 0; tick(audio.currentTime, audio.duration || 0); };
    const onMeta = () => { durationRef.current = audio.duration; };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    return () => { audio.removeEventListener("timeupdate", onTime); audio.removeEventListener("loadedmetadata", onMeta); audio.pause(); };
  }, []);

  useEffect(() => { if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume / 100; }, [volume, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handler = () => { if (repeatMode === 2) { audio.currentTime = 0; audio.play(); } else { playNext(); } };
    audio.addEventListener("ended", handler);
    return () => audio.removeEventListener("ended", handler);
  }, [repeatMode, queueIndex, queue]);

  // --- Simulated playback for songs without audioUrl ---
  useEffect(() => {
    let raf;
    let lastTime = performance.now();
    const step = (now) => {
      if (!isPlaying || !currentSong || currentSong.audioUrl) return;
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      progressRef.current += delta;
      if (progressRef.current >= currentSong.duration) { progressRef.current = 0; playNext(); return; }
      tick(progressRef.current, currentSong.duration);
      raf = requestAnimationFrame(step);
    };
    if (isPlaying && currentSong && !currentSong.audioUrl) {
      lastTime = performance.now();
      raf = requestAnimationFrame(step);
    }
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, [isPlaying, currentSong]);

  const playSong = useCallback((song, newQueue = null, index = 0) => {
    setCurrentSong(song);
    if (newQueue) { setQueue(newQueue); setQueueIndex(index); }
    setIsPlaying(true);
    progressRef.current = 0;
    durationRef.current = song.duration;
    tick(0, song.duration);
    const audio = audioRef.current;
    if (song.audioUrl) { audio.src = song.audioUrl; audio.play().catch(() => {}); }
    else { audio.pause(); audio.src = ""; }
  }, [tick]);

  const togglePlay = () => {
    if (!currentSong) return;
    if (currentSong.audioUrl) { if (isPlaying) audioRef.current.pause(); else audioRef.current.play().catch(() => {}); }
    setIsPlaying(!isPlaying);
  };

  const playNext = useCallback(() => {
    if (queue.length === 0) return;
    const nextIndex = shuffleOn ? Math.floor(Math.random() * queue.length) : (queueIndex + 1) % queue.length;
    setQueueIndex(nextIndex);
    playSong(queue[nextIndex], null, nextIndex);
  }, [queue, queueIndex, shuffleOn, playSong]);

  const playPrev = useCallback(() => {
    if (queue.length === 0) return;
    if (progressRef.current > 3) {
      progressRef.current = 0;
      tick(0, currentSong?.duration || 0);
      if (audioRef.current.src) audioRef.current.currentTime = 0;
      return;
    }
    const prevIndex = queueIndex === 0 ? queue.length - 1 : queueIndex - 1;
    setQueueIndex(prevIndex);
    playSong(queue[prevIndex], null, prevIndex);
  }, [queue, queueIndex, playSong, tick, currentSong]);

  const seekTo = (e) => {
    if (!currentSong) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    if (clientX === undefined) return;
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const dur = currentSong.duration || durationRef.current;
    const newTime = ratio * dur;
    progressRef.current = newTime;
    tick(newTime, dur);
    if (audioRef.current && audioRef.current.src) audioRef.current.currentTime = newTime;
  };

  const navigate = (view, data = null) => { setNavHistory((h) => [...h, { view: currentView, data: viewData }]); setNavFuture([]); setCurrentView(view); setViewData(data); };
  const goBack = () => { if (navHistory.length === 0) return; const prev = navHistory[navHistory.length - 1]; setNavFuture((f) => [{ view: currentView, data: viewData }, ...f]); setNavHistory((h) => h.slice(0, -1)); setCurrentView(prev.view); setViewData(prev.data); };
  const goForward = () => { if (navFuture.length === 0) return; const next = navFuture[0]; setNavHistory((h) => [...h, { view: currentView, data: viewData }]); setNavFuture((f) => f.slice(1)); setCurrentView(next.view); setViewData(next.data); };

  const playSongFromList = (songs, index) => { const q = shuffleOn ? [...songs].sort(() => Math.random() - 0.5) : songs; playSong(q[shuffleOn ? 0 : index], q, shuffleOn ? 0 : index); };

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

  const pad = isMobile ? 12 : 24;
  const pb = (active) => ({ background: "none", border: "none", color: active ? theme.primary : theme.textSecondary, cursor: "pointer", padding: 8, display: "flex", alignItems: "center", justifyContent: "center", transition: "color 0.15s", minWidth: 32, minHeight: 32 });

  // ---- COMPONENTS (no useState for hover — use DOM events) ----

  const Card = ({ title, subtitle, imgUrl, onClick, isRound }) => (
    <div style={{ background: theme.bgSurface, borderRadius: 8, padding: isMobile ? 10 : 16, cursor: "pointer", transition: "background 0.2s" }}
      onClick={onClick} onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = theme.bgSurface}>
      <img src={imgUrl || "https://picsum.photos/seed/default/300/300"} alt={title} style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: isRound ? "50%" : 6, marginBottom: isMobile ? 8 : 12, boxShadow: "0 8px 24px rgba(0,0,0,.5)" }} />
      <div style={{ fontWeight: 700, fontSize: isMobile ? 13 : 15, color: theme.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</div>
      <div style={{ fontSize: isMobile ? 11 : 13, color: theme.textSecondary, marginTop: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{subtitle}</div>
    </div>
  );

  const TrackRow = ({ song, index, showAlbum = true, showCover = true, onPlay }) => {
    const isActive = currentSong?.id === song.id;
    if (isMobile) {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 4px", cursor: "pointer", borderRadius: 4 }}
          onClick={() => onPlay?.()} onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
          {showCover && <img src={song.coverUrl} alt="" style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover", flexShrink: 0 }} />}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 600, color: isActive ? theme.primary : theme.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 14 }}>{song.title}</div>
            <div style={{ fontSize: 12, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.artist}{showAlbum ? ` \u00B7 ${song.album}` : ""}</div>
          </div>
          <span style={{ color: theme.textSubdued, fontSize: 12, flexShrink: 0 }}>{formatTime(song.duration)}</span>
        </div>
      );
    }
    return (
      <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr 80px", alignItems: "center", padding: "8px 16px", borderRadius: 4, cursor: "pointer", transition: "background 0.15s", gap: 16 }}
        onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"} onClick={() => onPlay?.()}>
        <div style={{ fontSize: 15, color: theme.textSecondary, textAlign: "center" }}>{isActive && isPlaying ? <span style={{ color: theme.primary }}>&#9835;</span> : index + 1}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          {showCover && <img src={song.coverUrl} alt="" style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover", flexShrink: 0 }} />}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, color: isActive ? theme.primary : theme.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.title}</div>
            <div style={{ fontSize: 13, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} onClick={(e) => { e.stopPropagation(); navigate("artist", { name: song.artist }); }}>{song.artist}</div>
          </div>
        </div>
        <div style={{ fontSize: 14, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} onClick={(e) => { e.stopPropagation(); navigate("album", { name: song.album }); }}>{showAlbum ? song.album : ""}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <span style={{ color: theme.textSecondary, fontSize: 14 }}>{formatTime(song.duration)}</span>
        </div>
      </div>
    );
  };

  const TrackListHeader = () => isMobile ? null : (
    <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr 80px", padding: "0 16px 8px", borderBottom: `1px solid ${theme.divider}`, color: theme.textSubdued, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", gap: 16, marginBottom: 8 }}>
      <div style={{ textAlign: "center" }}>#</div><div>Title</div><div>Album</div>
      <div style={{ textAlign: "right", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 4 }}><Icons.Clock /> Time</div>
    </div>
  );

  // ---- VIEWS ----
  const HeroBanner = ({ img, type, title, meta }) => (
    <div style={{ display: "flex", alignItems: isMobile ? "center" : "flex-end", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left", padding: isMobile ? "24px 16px 16px" : "40px 24px 24px", gap: isMobile ? 16 : 24, background: `linear-gradient(transparent 0, ${theme.bgBase}99 100%), url(${img}) center/cover`, minHeight: isMobile ? 200 : 280 }}>
      <img src={img} alt="" style={{ width: isMobile ? 160 : 220, height: isMobile ? 160 : 220, borderRadius: 6, objectFit: "cover", boxShadow: "0 4px 60px rgba(0,0,0,.5)", flexShrink: 0 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0, alignItems: isMobile ? "center" : "flex-start" }}>
        <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{type}</div>
        <div style={{ fontSize: isMobile ? 28 : 48, fontWeight: 900, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: isMobile ? 12 : 14, color: theme.textSecondary, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>{meta}</div>
      </div>
    </div>
  );

  const ActionRow = ({ songs }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: isMobile ? "12px 16px" : "16px 24px", justifyContent: isMobile ? "center" : "flex-start" }}>
      <button style={{ width: 56, height: 56, borderRadius: "50%", background: theme.primary, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", boxShadow: "0 8px 16px rgba(0,0,0,.3)" }} onClick={() => playSongFromList(songs, 0)}><Icons.Play size={24} /></button>
      <button style={{ ...pb(shuffleOn), transform: "scale(1.3)" }} onClick={() => setShuffle(!shuffleOn)}><Icons.Shuffle size={22} /></button>
    </div>
  );

  const HomeView = () => {
    const topSongs = CONFIG.songs.slice(0, 6);
    const recentMix = useMemo(() => CONFIG.songs.slice().sort(() => 0.5 - Math.random()).slice(0, 6), []);
    return (<div>
      <div style={{ padding: `0 ${pad}px 8px` }}>
        <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, margin: "8px 0 16px" }}>Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"}</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill, minmax(280px, 1fr))", gap: 8 }}>
          {topSongs.map((song) => (
            <div key={song.id} style={{ display: "flex", alignItems: "center", background: `${theme.bgElevated}88`, borderRadius: 4, overflow: "hidden", cursor: "pointer", transition: "background 0.2s", height: isMobile ? 48 : 64 }}
              onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = `${theme.bgElevated}88`}
              onClick={() => playSongFromList(CONFIG.songs, CONFIG.songs.indexOf(song))}>
              <img src={song.coverUrl} alt="" style={{ width: isMobile ? 48 : 64, height: isMobile ? 48 : 64, objectFit: "cover" }} />
              <span style={{ padding: isMobile ? "0 8px" : "0 16px", fontWeight: 700, fontSize: isMobile ? 11 : 14, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.title}</span>
            </div>
          ))}
        </div>
      </div>
      {[
        { title: "Most Popular", items: CONFIG.songs.slice(0, isMobile ? 4 : 5), type: "song" },
        { title: "Featured Playlists", items: CONFIG.playlists.slice(0, isMobile ? 4 : CONFIG.playlists.length), type: "playlist" },
        { title: "Albums", items: albums, type: "album" },
        { title: "Artists", items: artists, type: "artist" },
        { title: "Made For You", items: recentMix.slice(0, 4), type: "song" },
      ].map((sec) => (
        <div key={sec.title} style={{ padding: `0 ${pad}px ${pad}px` }}>
          <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, color: theme.textPrimary, margin: `${isMobile ? 16 : 24}px 0 ${isMobile ? 12 : 16}px` }}>{sec.title}</div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(180px, 1fr))", gap: isMobile ? 10 : 16 }}>
            {sec.items.map((item) => {
              if (sec.type === "song") return <Card key={item.id + sec.title} title={item.title} subtitle={item.artist} imgUrl={item.coverUrl} onClick={() => playSongFromList(CONFIG.songs, CONFIG.songs.indexOf(item))} />;
              if (sec.type === "playlist") return <Card key={item.id} title={item.name} subtitle={item.description} imgUrl={item.coverUrl} onClick={() => navigate("playlist", item)} />;
              if (sec.type === "album") return <Card key={item.name} title={item.name} subtitle={`${item.artist} \u00B7 ${item.year}`} imgUrl={item.coverUrl} onClick={() => navigate("album", item)} />;
              if (sec.type === "artist") return <Card key={item.name} title={item.name} subtitle={`${item.songs.length} song${item.songs.length > 1 ? "s" : ""}`} imgUrl={item.coverUrl} isRound onClick={() => navigate("artist", item)} />;
              return null;
            })}
          </div>
        </div>
      ))}
    </div>);
  };

  const SearchView = () => {
    const genres = ["Pop", "Rock", "Electronic", "Lo-fi", "Indie", "Alternative", "Funk", "Folk"];
    const genreColors = ["#E13300", "#8400E7", "#1DB954", "#E8115B", "#E91429", "#148A08", "#DC148C", "#537AA2"];
    const hasQuery = searchQuery.trim().length > 0;
    return (<div>
      {!hasQuery && (<div style={{ padding: `0 ${pad}px ${pad}px` }}>
        <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: `${isMobile ? 16 : 24}px 0 ${isMobile ? 12 : 16}px` }}>Browse All</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill, minmax(180px, 1fr))", gap: isMobile ? 10 : 16 }}>
          {genres.map((g, i) => (<div key={g} onClick={() => setSearchQuery(g)} style={{ background: genreColors[i], borderRadius: 8, padding: isMobile ? 14 : 20, cursor: "pointer", height: isMobile ? 80 : 120, fontWeight: 700, fontSize: isMobile ? 16 : 22 }}>{g}</div>))}
        </div>
      </div>)}
      {hasQuery && (<div style={{ padding: `0 ${pad}px ${pad}px` }}>
        {searchResults.songs.length > 0 && (<><div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: "16px 0 12px" }}>Songs</div><TrackListHeader />{searchResults.songs.map((song, i) => (<TrackRow key={song.id} song={song} index={i} onPlay={() => playSongFromList(searchResults.songs, i)} />))}</>)}
        {searchResults.albums.length > 0 && (<><div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: "16px 0 12px" }}>Albums</div><div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(180px, 1fr))", gap: isMobile ? 10 : 16 }}>{searchResults.albums.map((a) => (<Card key={a.name} title={a.name} subtitle={a.artist} imgUrl={a.coverUrl} onClick={() => navigate("album", a)} />))}</div></>)}
        {searchResults.artists.length > 0 && (<><div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: "16px 0 12px" }}>Artists</div><div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(180px, 1fr))", gap: isMobile ? 10 : 16 }}>{searchResults.artists.map((a) => (<Card key={a.name} title={a.name} subtitle="Artist" imgUrl={a.coverUrl} isRound onClick={() => navigate("artist", a)} />))}</div></>)}
        {searchResults.playlists.length > 0 && (<><div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: "16px 0 12px" }}>Playlists</div><div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(180px, 1fr))", gap: isMobile ? 10 : 16 }}>{searchResults.playlists.map((p) => (<Card key={p.id} title={p.name} subtitle={p.description} imgUrl={p.coverUrl} onClick={() => navigate("playlist", p)} />))}</div></>)}
        {searchResults.songs.length === 0 && searchResults.albums.length === 0 && searchResults.artists.length === 0 && searchResults.playlists.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, color: theme.textSecondary }}><div style={{ fontSize: isMobile ? 18 : 24, fontWeight: 700, marginBottom: 8 }}>No results found for &quot;{searchQuery}&quot;</div><div>Check your spelling or try different keywords</div></div>
        )}
      </div>)}
    </div>);
  };

  const LibraryView = () => (
    <div style={{ padding: `0 ${pad}px ${pad}px` }}>
      <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: `${isMobile ? 16 : 24}px 0 ${isMobile ? 12 : 16}px` }}>Your Library</div>
      <div style={{ display: "flex", gap: 8, marginBottom: isMobile ? 16 : 24, flexWrap: "wrap" }}>
        {["Playlists", "Albums", "Artists"].map((tab) => (<button key={tab} style={{ background: theme.bgElevated, border: "none", color: theme.textPrimary, padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: isMobile ? 12 : 14, fontWeight: 600 }}>{tab}</button>))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(180px, 1fr))", gap: isMobile ? 10 : 16 }}>
        {CONFIG.playlists.map((pl) => (<Card key={pl.id} title={pl.name} subtitle={pl.description} imgUrl={pl.coverUrl} onClick={() => navigate("playlist", pl)} />))}
        {albums.map((alb) => (<Card key={alb.name} title={alb.name} subtitle={`${alb.artist} \u00B7 Album`} imgUrl={alb.coverUrl} onClick={() => navigate("album", alb)} />))}
      </div>
    </div>
  );

  const PlaylistView = ({ playlist }) => {
    const songs = playlist.songIds.map((id) => CONFIG.songs.find((s) => s.id === id)).filter(Boolean);
    const totalDuration = songs.reduce((acc, s) => acc + s.duration, 0);
    return (<div>
      <HeroBanner img={playlist.coverUrl} type="Playlist" title={playlist.name} meta={<><span>{playlist.description}</span><span>&middot;</span><span>{songs.length} songs, {formatTime(totalDuration)}</span></>} />
      <ActionRow songs={songs} />
      <div style={{ padding: `0 ${pad}px` }}><TrackListHeader />{songs.map((song, i) => (<TrackRow key={song.id} song={song} index={i} onPlay={() => playSongFromList(songs, i)} />))}</div>
    </div>);
  };

  const AlbumView = ({ album }) => {
    const totalDuration = album.songs.reduce((acc, s) => acc + s.duration, 0);
    return (<div>
      <HeroBanner img={album.coverUrl} type="Album" title={album.name} meta={<><span style={{ fontWeight: 700, cursor: "pointer" }} onClick={() => navigate("artist", { name: album.artist })}>{album.artist}</span><span>&middot;</span><span>{album.year}</span><span>&middot;</span><span>{album.songs.length} songs, {formatTime(totalDuration)}</span></>} />
      <ActionRow songs={album.songs} />
      <div style={{ padding: `0 ${pad}px` }}><TrackListHeader />{album.songs.map((song, i) => (<TrackRow key={song.id} song={song} index={i} showCover={false} showAlbum={false} onPlay={() => playSongFromList(album.songs, i)} />))}</div>
    </div>);
  };

  const ArtistView = ({ artist: artData }) => {
    const artist = artists.find((a) => a.name === (artData?.name || "")) || artData;
    if (!artist) return null;
    const artistAlbums = albums.filter((a) => a.artist === artist.name);
    return (<div>
      <div style={{ display: "flex", alignItems: isMobile ? "center" : "flex-end", flexDirection: isMobile ? "column" : "row", textAlign: isMobile ? "center" : "left", padding: isMobile ? "24px 16px 16px" : "40px 24px 24px", gap: isMobile ? 16 : 24, background: `linear-gradient(transparent 0, ${theme.bgBase} 100%), url(${artist.coverUrl}) center/cover`, minHeight: isMobile ? 200 : 320 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0, alignItems: isMobile ? "center" : "flex-start" }}>
          <div style={{ fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 20, height: 20, borderRadius: "50%", background: "#3d91f4", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>&#10003;</span> Verified Artist</div>
          <div style={{ fontSize: isMobile ? 36 : 64, fontWeight: 900, lineHeight: 1.1 }}>{artist.name}</div>
          <div style={{ fontSize: isMobile ? 12 : 14, color: theme.textSecondary }}>{artist.songs.length} song{artist.songs.length > 1 ? "s" : ""}</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: isMobile ? "12px 16px" : "16px 24px", justifyContent: isMobile ? "center" : "flex-start" }}>
        <button style={{ width: 56, height: 56, borderRadius: "50%", background: theme.primary, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#000" }} onClick={() => playSongFromList(artist.songs, 0)}><Icons.Play size={24} /></button>
        <button style={{ background: "transparent", border: `1px solid ${theme.textSecondary}`, color: theme.textPrimary, padding: "6px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 700 }}>Follow</button>
      </div>
      <div style={{ padding: `0 ${pad}px ${pad}px` }}>
        <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: "16px 0 12px" }}>Popular</div>
        {artist.songs.slice(0, 5).map((song, i) => (<TrackRow key={song.id} song={song} index={i} onPlay={() => playSongFromList(artist.songs, i)} />))}
      </div>
      {artistAlbums.length > 0 && (<div style={{ padding: `0 ${pad}px ${pad}px` }}>
        <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: "16px 0 12px" }}>Discography</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(180px, 1fr))", gap: isMobile ? 10 : 16 }}>
          {artistAlbums.map((alb) => (<Card key={alb.name} title={alb.name} subtitle={`${alb.year} \u00B7 Album`} imgUrl={alb.coverUrl} onClick={() => navigate("album", alb)} />))}
        </div>
      </div>)}
    </div>);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case "home": return <HomeView />; case "search": return <SearchView />; case "library": return <LibraryView />;
      case "playlist": return <PlaylistView playlist={viewData} />; case "album": return <AlbumView album={viewData} />;
      case "artist": return <ArtistView artist={viewData} />; default: return <HomeView />;
    }
  };

  // ---- MAIN RENDER ----
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", background: theme.bgBase, color: theme.textPrimary, fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", overflow: "hidden", fontSize: 14 }}>
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* SIDEBAR - desktop only */}
        {!isMobile && (<div style={{ width: 280, minWidth: 280, background: theme.bgSidebar, display: "flex", flexDirection: "column", overflow: "hidden", borderRight: `1px solid ${theme.divider}22` }}>
          <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => { setCurrentView("home"); setViewData(null); }}>
            {CONFIG.logoUrl ? <img src={CONFIG.logoUrl} alt="Logo" style={{ height: 32, objectFit: "contain" }} /> : <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: -0.5 }}>{CONFIG.logoText}</div>}
          </div>
          <nav style={{ padding: "8px 12px" }}>
            {[{ id: "home", label: "Home", Icon: Icons.Home }, { id: "search", label: "Search", Icon: Icons.Search }].map(({ id, label, Icon }) => (
              <div key={id} style={{ display: "flex", alignItems: "center", gap: 16, padding: "10px 12px", borderRadius: 8, cursor: "pointer", color: currentView === id ? theme.textPrimary : theme.textSecondary, fontWeight: currentView === id ? 700 : 600, fontSize: 15, background: currentView === id ? theme.bgHighlight : "transparent" }}
                onClick={() => { setCurrentView(id); setViewData(null); if (id === "search") setTimeout(() => searchInputRef.current?.focus(), 100); }}><Icon /><span>{label}</span></div>
            ))}
          </nav>
          <div style={{ borderTop: `1px solid ${theme.divider}`, margin: "8px 0" }} />
          <div style={{ padding: "12px 20px 8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, cursor: "pointer", color: currentView === "library" ? theme.textPrimary : theme.textSecondary, fontWeight: 700, fontSize: 15 }}
              onClick={() => { setCurrentView("library"); setViewData(null); }}><Icons.Library /><span>Your Library</span></div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "4px 8px" }}>
            {CONFIG.playlists.map((pl) => (
              <div key={pl.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 12px", borderRadius: 6, cursor: "pointer" }} onClick={() => navigate("playlist", pl)}
                onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <img src={pl.coverUrl} alt="" style={{ width: 48, height: 48, borderRadius: 4, objectFit: "cover" }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: currentView === "playlist" && viewData?.id === pl.id ? theme.primary : theme.textPrimary }}>{pl.name}</div>
                  <div style={{ fontSize: 13, color: theme.textSecondary }}>Playlist &middot; {pl.songIds.length} songs</div>
                </div>
              </div>
            ))}
          </div>
        </div>)}

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, overflow: "auto", background: theme.bgBase, position: "relative", paddingBottom: isMobile ? 140 : 0 }}>
          <div style={{ position: "sticky", top: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "8px 12px" : "12px 24px", background: `${theme.bgBase}dd`, backdropFilter: "blur(20px)", gap: 8 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", flex: 1 }}>
              {isMobile && navHistory.length > 0 && (<button style={{ width: 32, height: 32, borderRadius: "50%", border: "none", background: "transparent", color: theme.textPrimary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={goBack}><Icons.ChevronLeft /></button>)}
              {!isMobile && <button style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: theme.bgElevated, color: navHistory.length === 0 ? theme.textSubdued : theme.textPrimary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: navHistory.length === 0 ? 0.5 : 1 }} onClick={goBack}><Icons.ChevronLeft size={28} /></button>}
              {!isMobile && <button style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: theme.bgElevated, color: navFuture.length === 0 ? theme.textSubdued : theme.textPrimary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: navFuture.length === 0 ? 0.5 : 1 }} onClick={goForward}><Icons.ChevronRight size={28} /></button>}
              {currentView === "search" && (
                <div style={{ display: "flex", alignItems: "center", background: theme.bgElevated, borderRadius: 24, padding: "8px 16px", gap: 8, flex: 1, maxWidth: isMobile ? "100%" : 480 }}>
                  <Icons.Search size={18} />
                  <input ref={searchInputRef} style={{ background: "transparent", border: "none", outline: "none", color: theme.textPrimary, fontSize: 14, flex: 1, fontFamily: "inherit" }}
                    placeholder="What do you want to listen to?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} autoFocus />
                  {searchQuery && <span style={{ cursor: "pointer", color: theme.textSecondary }} onClick={() => setSearchQuery("")}><Icons.Close /></span>}
                </div>
              )}
            </div>
          </div>
          {renderMainContent()}
          <div style={{ height: isMobile ? 160 : 100 }} />
        </div>

        {/* LYRICS PANEL - desktop */}
        {showLyrics && currentSong && !isMobile && (
          <div style={{ position: "fixed", right: 0, top: 0, bottom: 90, width: 400, background: theme.bgElevated, zIndex: 30, padding: 24, overflowY: "auto", borderLeft: `1px solid ${theme.divider}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{currentSong.title}</div>
              <button style={{ background: "none", border: "none", color: theme.textSecondary, cursor: "pointer" }} onClick={() => setShowLyrics(false)}><Icons.Close /></button>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{currentSong.lyrics || "No lyrics available."}</div>
          </div>
        )}

        {/* QUEUE PANEL - desktop */}
        {showQueue && !isMobile && (
          <div style={{ position: "fixed", right: 0, top: 0, bottom: 90, width: 360, background: theme.bgElevated, zIndex: 30, padding: 16, overflowY: "auto", borderLeft: `1px solid ${theme.divider}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Queue</div>
              <button style={{ background: "none", border: "none", color: theme.textSecondary, cursor: "pointer" }} onClick={() => setShowQueue(false)}><Icons.Close /></button>
            </div>
            {currentSong && (<div style={{ marginBottom: 16 }}><div style={{ fontSize: 12, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Now Playing</div><TrackRow song={currentSong} index={0} showAlbum={false} onPlay={() => {}} /></div>)}
            <div style={{ fontSize: 12, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Next Up</div>
            {queue.slice(queueIndex + 1).map((song, i) => (<TrackRow key={song.id + i} song={song} index={i} showAlbum={false} onPlay={() => playSongFromList(queue, queueIndex + 1 + i)} />))}
            {queue.length === 0 && <div style={{ color: theme.textSubdued, padding: 16 }}>Queue is empty</div>}
          </div>
        )}
      </div>

      {/* DESKTOP PLAYER BAR */}
      {!isMobile && (<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 90, background: theme.bgPlayer, borderTop: `1px solid ${theme.divider}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
          {currentSong ? (<>
            <img src={currentSong.coverUrl} alt="" style={{ width: 56, height: 56, borderRadius: 4, objectFit: "cover" }} />
            <div style={{ minWidth: 0 }}><div style={{ fontWeight: 600, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currentSong.title}</div><div style={{ fontSize: 12, color: theme.textSecondary, cursor: "pointer" }} onClick={() => navigate("artist", { name: currentSong.artist })}>{currentSong.artist}</div></div>
            <span style={{ cursor: "pointer", color: liked[currentSong.id] ? theme.primary : theme.textSecondary, marginLeft: 8 }} onClick={() => setLiked((l) => ({ ...l, [currentSong.id]: !l[currentSong.id] }))}><Icons.Heart filled={liked[currentSong.id]} /></span>
          </>) : <div style={{ color: theme.textSubdued, fontSize: 16 }}>No song playing</div>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, maxWidth: 600 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <button style={pb(shuffleOn)} onClick={() => setShuffle(!shuffleOn)}><Icons.Shuffle size={22} /></button>
            <button style={pb(false)} onClick={playPrev}><Icons.SkipPrev size={28} /></button>
            <button style={{ width: 48, height: 48, minWidth: 48, borderRadius: "50%", background: theme.textPrimary, border: "none", color: theme.bgBase, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={togglePlay}>{isPlaying ? <Icons.Pause size={24} /> : <Icons.Play size={24} />}</button>
            <button style={pb(false)} onClick={playNext}><Icons.SkipNext size={28} /></button>
            <button style={{...pb(repeatMode > 0), position: "relative"}} onClick={() => setRepeatMode((r) => (r + 1) % 3)}><Icons.Repeat size={22} />{repeatMode === 2 && <span style={{ fontSize: 10, position: "absolute", bottom: 0, right: 0, fontWeight: 700 }}>1</span>}</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", marginTop: 4 }}>
            <span ref={dpTime} style={{ fontSize: 11, color: theme.textSubdued, minWidth: 36, textAlign: "right" }}>0:00</span>
            <div style={{ flex: 1, height: 5, background: theme.bgHighlight, borderRadius: 3, cursor: "pointer", position: "relative" }} onClick={seekTo}>
              <div ref={dpFill} style={{ height: "100%", background: theme.textPrimary, borderRadius: 3, width: "0%", position: "relative" }}><div style={{ position: "absolute", right: -7, top: -5, width: 14, height: 14, borderRadius: "50%", background: theme.textPrimary }} /></div>
            </div>
            <span ref={dpEnd} style={{ fontSize: 11, color: theme.textSubdued, minWidth: 36 }}>{currentSong ? formatTime(currentSong.duration) : "0:00"}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1, justifyContent: "flex-end" }}>
          <button style={pb(showLyrics)} onClick={() => { setShowLyrics(!showLyrics); setShowQueue(false); }}><Icons.Lyrics size={22} /></button>
          <button style={pb(showQueue)} onClick={() => { setShowQueue(!showQueue); setShowLyrics(false); }}><Icons.Queue size={22} /></button>
          <button style={pb(false)} onClick={() => setIsMuted(!isMuted)}>{isMuted || volume === 0 ? <Icons.VolumeMute size={22} /> : <Icons.Volume size={22} />}</button>
          <div style={{ width: 120, height: 5, background: theme.bgHighlight, borderRadius: 3, cursor: "pointer" }} onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setVolume(Math.round(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * 100)); setIsMuted(false); }}>
            <div style={{ height: "100%", background: theme.textPrimary, borderRadius: 3, width: `${isMuted ? 0 : volume}%` }} />
          </div>
        </div>
      </div>)}

      {/* MOBILE: Mini player */}
      {currentSong && isMobile && !showNowPlaying && (
        <div style={{ position: "fixed", bottom: 56, left: 0, right: 0, zIndex: 25, background: theme.bgElevated, borderTop: `1px solid ${theme.divider}22` }}>
          <div style={{ height: 2, background: theme.bgHighlight }}><div ref={mpFill} style={{ height: "100%", background: theme.primary, width: "0%" }} /></div>
          <div style={{ display: "flex", alignItems: "center", padding: "8px 12px", gap: 10 }} onClick={() => setShowNowPlaying(true)}>
            <img src={currentSong.coverUrl} alt="" style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover" }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currentSong.title}</div>
              <div style={{ fontSize: 11, color: theme.textSecondary }}>{currentSong.artist}</div>
            </div>
            <span style={{ cursor: "pointer", color: liked[currentSong.id] ? theme.primary : theme.textSecondary }}
              onClick={(e) => { e.stopPropagation(); setLiked((l) => ({ ...l, [currentSong.id]: !l[currentSong.id] })); }}><Icons.Heart filled={liked[currentSong.id]} /></span>
            <button style={{ background: "none", border: "none", color: theme.textPrimary, cursor: "pointer", padding: 4 }}
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}>{isPlaying ? <Icons.Pause size={24} /> : <Icons.Play size={24} />}</button>
          </div>
        </div>
      )}

      {/* MOBILE: Tab bar */}
      {isMobile && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 25, background: theme.bgSidebar, borderTop: `1px solid ${theme.divider}33`, display: "flex", justifyContent: "space-around", padding: "6px 0 10px", paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}>
          {[{ id: "home", label: "Home", icon: (a) => a ? <Icons.HomeFilled size={24} /> : <Icons.Home size={24} /> },
            { id: "search", label: "Search", icon: () => <Icons.Search size={24} /> },
            { id: "library", label: "Your Library", icon: () => <Icons.Library size={24} /> }
          ].map((tab) => (
            <button key={tab.id} onClick={() => { setCurrentView(tab.id); setViewData(null); }}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, color: currentView === tab.id ? theme.textPrimary : theme.textSubdued, fontSize: 10, fontWeight: currentView === tab.id ? 700 : 500, padding: "4px 16px" }}>
              {tab.icon(currentView === tab.id)}<span>{tab.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* MOBILE: Full-screen Now Playing */}
      {showNowPlaying && isMobile && currentSong && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, background: theme.bgBase, display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", flexShrink: 0 }}>
            <button style={{ background: "none", border: "none", color: theme.textPrimary, cursor: "pointer", padding: 4 }} onClick={() => { setShowNowPlaying(false); setMobileLyrics(false); }}><Icons.ChevronDown size={28} /></button>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: theme.textSecondary }}>Now Playing</div>
            <button style={{ background: "none", border: "none", color: mobileLyrics ? theme.primary : theme.textSecondary, cursor: "pointer", padding: 4 }} onClick={() => setMobileLyrics(!mobileLyrics)}><Icons.Lyrics size={24} /></button>
          </div>

          {!mobileLyrics ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 24px 24px", overflow: "hidden" }}>
              {/* Album art */}
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={currentSong.coverUrl} alt="" style={{ width: "100%", maxWidth: 340, aspectRatio: "1", borderRadius: 8, objectFit: "cover", boxShadow: "0 8px 40px rgba(0,0,0,.6)" }} />
              </div>
              {/* Song info */}
              <div style={{ marginTop: 24, marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currentSong.title}</div>
                  <div style={{ fontSize: 14, color: theme.textSecondary, marginTop: 4 }}>{currentSong.artist}</div>
                </div>
                <span style={{ cursor: "pointer", color: liked[currentSong.id] ? theme.primary : theme.textSecondary, flexShrink: 0, marginLeft: 12 }}
                  onClick={() => setLiked((l) => ({ ...l, [currentSong.id]: !l[currentSong.id] }))}><Icons.Heart filled={liked[currentSong.id]} /></span>
              </div>
              {/* Progress bar */}
              <div>
                <div style={{ height: 4, background: theme.bgHighlight, borderRadius: 2, cursor: "pointer" }} onClick={seekTo}>
                  <div ref={npFill} style={{ height: "100%", background: theme.textPrimary, borderRadius: 2, width: "0%", position: "relative" }}>
                    <div style={{ position: "absolute", right: -6, top: -4, width: 12, height: 12, borderRadius: "50%", background: theme.textPrimary }} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  <span ref={npTime} style={{ fontSize: 11, color: theme.textSubdued }}>0:00</span>
                  <span style={{ fontSize: 11, color: theme.textSubdued }}>{formatTime(currentSong.duration)}</span>
                </div>
              </div>
              {/* Controls */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 8px 0" }}>
                <button style={pb(shuffleOn)} onClick={() => setShuffle(!shuffleOn)}><Icons.Shuffle /></button>
                <button style={{ ...pb(false), transform: "scale(1.2)" }} onClick={playPrev}><Icons.SkipPrev size={28} /></button>
                <button style={{ width: 64, height: 64, borderRadius: "50%", background: theme.textPrimary, border: "none", color: theme.bgBase, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={togglePlay}>
                  {isPlaying ? <Icons.Pause size={28} /> : <Icons.Play size={28} />}
                </button>
                <button style={{ ...pb(false), transform: "scale(1.2)" }} onClick={playNext}><Icons.SkipNext size={28} /></button>
                <button style={pb(repeatMode > 0)} onClick={() => setRepeatMode((r) => (r + 1) % 3)}><Icons.Repeat /></button>
              </div>
            </div>
          ) : (
            /* LYRICS VIEW - completely isolated scrollable container */
            <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 24px 16px", flexShrink: 0 }}>
                <img src={currentSong.coverUrl} alt="" style={{ width: 48, height: 48, borderRadius: 4 }} />
                <div><div style={{ fontWeight: 700, fontSize: 16 }}>{currentSong.title}</div><div style={{ fontSize: 13, color: theme.textSecondary }}>{currentSong.artist}</div></div>
              </div>
              <div style={{ flex: 1, overflowY: "scroll", WebkitOverflowScrolling: "touch", padding: "0 24px", minHeight: 0 }}>
                <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 2, color: theme.textPrimary, whiteSpace: "pre-wrap", paddingBottom: 80 }}>
                  {currentSong.lyrics || "No lyrics available."}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}