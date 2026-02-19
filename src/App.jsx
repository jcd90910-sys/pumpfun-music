import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ============================================================
// 🎵 CONFIGURATION - EDIT EVERYTHING HERE
// ============================================================
// To add your own songs, logos, colors - ONLY edit this section

const CONFIG = {
  // ---- YOUR BRAND ----
  appName: "$PFMUSIC",
  logoUrl: "", // Put your logo URL here, e.g. "public/PFMUSIC.png"
  logoText: "$PFMUSIC", // Shown if no logo image

  // ---- THEME COLORS (change these to restyle the entire app) ----
  theme: {
    primary: "#007529",       // Main accent (Spotify green)
    primaryHover: "#000000",  // Accent hover
    bgBase: "#00b853",        // Main background
    bgSurface: "#00a94c",     // Card/surface background
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
      title: "B L O C K C H A I N",
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
      title: "0-100",
      artist: "Lil Bubble",
      album: "Crypto Bubble",
      duration: 135,
      audioUrl: "/songs/1771324235457772.m4a",
      coverUrl: "/covers/Screenshot 2026-02-17 at 1.10.12 AM.png",
      lyrics: `(Yeah)
It's Lil Bubble
Boutta hit them with the freestyle real quick

[Verse 1]
Another day no pump, man its been like a week
I hit my boy CZ like "what up" on the tweet
I said "I bought a couple alts but I kept my receipt"
He said "there's no roll backs" so I HODL and weep

Now my tears falling quicker than the shitcoins
And I'm wishing that I didn't sell the Bitcoin
Told my momma what happened
She said "Shut up you lil bastard"
She said "You need strong hands like a big boy"

[Verse 2]
Now who want the smoke?
This bag's on my shoulder like a boulder, bout to choke
(yeah)
A boat load of hopium's the only way I'm coping
And I'm hoping that it's over soon, I'm over being broke
(yeah)
I'm over all the jokes
I've had it with the bears
I've had it with the HODL meme bitch, I don't care
I shoulda bought shares
I shoulda bought gold
Shoulda, coulda, woulda man I wish I hadda sold

[Verse 3]
It goes 0-100 man, real quick 
Real quick, real fuckin quick
Then its 100 back to 0 man, real quick
Man real quick, real quick

[Verse 4]
Your favourite project's probably sitting in my DM
I'm only sharing for a Lambo or a BM
They say "how much for a tweet?"
I say "what up let me see"
"A couple btc, or im leaving"

The twitter reach on ya boy's getting silly
Last song broke at least a couple milly
I used to get no love
Now they all showing up
And I'm pumping like a big green dilly

This lil bubble growing up and he about to go pop
I made my own lane, and its straight to the top
And its straight to the shop
To put a hundred on a wrist
Lil Bubble is hot
Yeah Lil Bubble the shit

Yeah Lil Bubble lil lit
Coming through with the hits
So line em up and just bounce like Breanna Sparks' tits
And that isn't a diss, it's a sign of respect
This beat just got rekt, don't you ever forget

(If they're hatin then maybe they're just forgetting where I started at)
(Now my view count's bigger than your favourite coin's market cap)`,
      genre: "Rap",
      year: 2019,
    },
    {
      id: "7",
      title: "Da Blockchain",
      artist: "Pmoney Glitxh & YungSol",
      album: "Blockchain",
      duration: 129,
      audioUrl: "/songs/Blockchain_-_Pmoney_Glitxh_&_YungSol_(Official_Music_Video)_128k (1).mp3",
      coverUrl: "/covers/Blockchain.png",
      lyrics: `Blockchain, we about to go to the millions
You already know
(yeah, yeah)

[Chorus]
Bit gang, Alt gang, SOL gang, Chill Guy, Moodeng Pengu, Blockchain
Woah
Hawk Tuah a hoe she rugged man
Solana went down but we up yeah
Trump in office, hella bullish
SOL going to the moon, no bullshit
Record about to join the blockchain
Blockchain, DEX Paid, cash game

Bit gang, Alt gang, SOL gang, Chill Guy, Moodeng Pengu, Blockchain
Woah
Hawk Tuah a hoe she rugged man
Solana went down but we up yeah
Trump in office, hella bullish
SOL going to the moon, no bullshit
Record about to join the blockchain
Blockchain, DEX Paid, cash game

[Verse 1]
Chill guy pays for my rent
Moodeng pays for the Benz
Pengu pays for the jet
Solana yeah hold for the rest
10K cash put in XRP
Flex that shit on an ABG
100x when I wake up yo
Blockchain finna get cash yo

[Verse 2]
Blockchain we blowing up the graphs
Make so much I put it into cash
Whole lotta guap yeah I make it hella fast
Blockchain to the moon with the money stack
Memecoins up with the BTC
Mix this track like its DVD
Record in the news yeah CBC
Pull up in a matte black Benz AMG

[Chorus]
Bit gang, Alt gang, SOL gang, Chill Guy, Moodeng Pengu, Blockchain
Woah
Hawk Tuah a hoe she rugged man
Solana went down but we up yeah
Trump in office, hella bullish
SOL going to the moon, no bullshit
Record about to join the blockchain
Blockchain, DEX Paid, cash game

Bit gang, Alt gang, SOL gang, Chill Guy, Moodeng Pengu, Blockchain
Woah
Hawk Tuah a hoe she rugged man
Solana went down but we up yeah
Trump in office, hella bullish
SOL going to the moon, no bullshit
Record about to join the blockchain
Blockchain, DEX Paid, cash game`,
      genre: "Rap",
      year: 2025,
    },
    {
      id: "8",
      title: "Blockchain Freestyle",
      artist: "Pmoney Glitxh & YungSol",
      album: "Blockchain",
      duration: 149,
      audioUrl: "/songs/Blockchain_Freestyle_-_Pmoney_Glitxh_&_YungSol_(Official_Video)_128k.mp3",
      coverUrl: "/covers/5b5b3018-37ab-45d8-b5a7-7506268da095.png",
      lyrics: `[Verse 1]
What you say YungSol 
Think blockchain gon blow up 
And be new Yeat
Shiesty on our face masked up 
But no crime or messed up court to beat
I got new badman Phantom 
3 digits starting with 223
On my bro I'm Pmoney Phantom blowing up like its brand new cheat 

Okay how many bands
Yo shawty I'm tryna dance
Sliding New York City feel like I'm OG
Rich and shit walking Wolf of Wall Street

Visa card, can't leave no trace 
New Phantom bands in my Coinbase
My friends and fans, and blood my race
Outside I'm from thoughts dont erase

Yea said I'm rocking 223
Blockchain community, we gon eat
Count the stars, that's where I'll be
No 9-5 yeah school won't teach
This lifestyle, yeah you can't reach
Huh
Yeah hold up, yeah like

[Verse 2]
Yo
I just copped some coins 
Black M4 new toy
4 days new plane no playin
My polo sweatshirt corduroy

Used to be a yute that rocked a pair of Walmart shoes of my feet
Came from the streets to the villas, now all my broskis eat
Bundled memecoins that's bait
Ain't nobody falling for that
Made bands we visiting New York State 
Got the fakes switching up like rats

Made what you make in a year 
My income statement from last month
We just getting started too my bros know that were far from done
I just wanna feed the bros 
I just wanna help out the fam
That's difference between you and me and why I'm the way that I am

Anyone could do this shit just not like me
If you grind you can be this rich but not like me
Gave my all like Kylian Mbappé
But you know that things went Messi

Now my win rate ten for ten
There's no more need for stressin
Every time I see a green candles
I get aroused that shit too sexy
Keep all my earnings liquid safe
Coinbase no need for flexing

Slow motion better than none
If you saw my Phantom you'd be stunned
Making Solana on trades
Our new definition of fun

Pmoney Glitxh to my side 
Ape in a Pumpfun coin I might
We never gonna panic sell that's pussy
I let that shit ride`,
      genre: "Rap",
      year: 2025,
    },
    {
      id: "9",
      title: "Bitcoin Anthem",
      artist: "WOW Exchange",
      album: "Single",
      duration: 158,
      audioUrl: "/songs/Bitcoin_Anthem_(Crypto_Song)_[Solana]_128k.mp3",
      coverUrl: "/covers/1e70083f-55af-4fa4-8f31-ca2463171328.png",
      lyrics: `[Verse 1]
Charts blow up in the middle of the night
Green or red, yeah we're ready for the fight
Not just look but we move with intent
Breathe the moment every second well spent
From the box to the screens worldwide
We don't guess we move with the tide
Crypto's fast only the smart survive
This is how the future trades alive

Less noise
More cash
Move sharp
Move smart

[Chorus]
Bitcoin is what
Crypto is what
Solananana hear the people say
One exchange one global way 
Solana what
Crypto is what 
Solanana hear the people say 
Trade smart earn more a better way

[Verse 2]
Built by the people bold and brave
(wow wow)
The future's now
Rug pull rug pull yeah I stay cool
But at the top burn fast I was a fool
Hey market maker
Why ZooMama head sellin whips on my bags like a Crypto fatality
Shook me hard but I'm back with a plan 
From chaos to calm watch me understand
Eyes open never late 
This is how we elevate

[Chorus]
Bitcoin is what
Crypto is what
Solananana hear the people say
One exchange one global way 
Solana what
Crypto is what 
Solanana hear the people say 
Trade smart earn more a better way

[Verse 3]
Trading
Building
Earning
Own it
Together, we the

(na na na na)

Bitcoin is what
Crypto is what
Solananana
One exchange, one global way
Trade smart, earn more a better way
Solalalalala`,
      genre: "Pop",
      year: 2026,
    },
    {
      id: "10",
      title: "All The Bears Are Dead",
      artist: "Lil Bubble",
      album: "Crypto Bubble",
      duration: 119,
      audioUrl: "/songs/Lil_Bubble_-_All_The_Bears_Are_Dead_(Bitcoin_50k_Edition_-_Lil_Uzi_Vert)_128k.mp3",
      coverUrl: "/covers/0bd0f57b-c14d-4d63-9804-c7816de38fa8.png",
      lyrics: `[Chorus]
I don't really care if you cry
Honestly you should've never tried
Should've saw the way it pumped into the sky
He said “Bubble I am still afraid to, buy”
Push em to the edge
All the bears are dead
Push em to the edge
All the bears are dead
Push em to the edge
All the bears are dead
Push em to the edge

[Verse 1]
Candles were all red
Now they all green
Like the prettiest forest that your eyes have ever seen
Shorters got mad
Squeezed em like a pimple now
Stops turned into fuel now
Watch they way it moons now

[Verse 2]
Riding my longs all the way to the top
Closing when it's falling over
But I keep holding my bag of spot
Revvin up like my Lambo motor
They said it's bubble yeah
So I made it my name
Ledger gave us trouble so I ripped that shit off my chain

They mad they didn't buy a year ago
I was telling everyone I knew
They didn't hear me though
We been through the worst days
Man you should've seen the lows
Now I wake up see another high we never seen before
(yeah)

[Chorus]
I don't really care if you cry
Honestly you should've never tried
Saw the way it pumped into the sky
He said “Bubble I am still afraid to, buy”
Push em to the edge
All the bears are dead
Push em to the edge
(yeah, ooh)

Push em to the edge
All the bears are dead now
All the bears are dead now`,
      genre: "Rap",
      year: 2021,
    },
    {
      id: "11",
      title: "Never Ever Selling Back To Tether",
      artist: "Lil Bubble",
      album: "Crypto Bubble",
      duration: 130,
      audioUrl: "public/songs/Lil_Bubble_-_Never_Ever_(selling_back_to_tether)_128k.mp3",
      coverUrl: "/covers/91123e50-45c9-4926-ac10-46f7b5ee9f6a.png",
      lyrics: `[Verse 1]
I remember when we rode a pump the first time 
Angry cause I didn't buy enough
Bought it all the way up to the top
Cause I said I needed more
Laughing at my family and friends
Cause they
Kept telling me that it was a scam
But then
It retraced about 80 percent

And I held on
I HODL
I sold at the bottom

[Chorus]
(ooh, ooh ooh ooh ooh)

I sold the dip again last night and
(ooh, ooh ooh ooh ooh)
This time, I'm telling you, telling you

We are never, ever, ever
Selling back to tether
We are never, ever, ever
Selling back to tether

We've got lots of bitcoins
Lots of shitcoins
Watch em bleed
But we are never, ever, ever, ever
Selling back to tether

[Verse 2]
I swore I'd never HODL it again
Sold it when it hit like 7 grand
Then I bought it back at 12 and then again at 15
Then bought more at 18
You might call me crazy, but

[Chorus]
(ooh, ooh ooh ooh ooh)

I sold the dip again last night and
(ooh, ooh ooh ooh ooh)
This time, I'm telling you, telling you

We are never, ever, ever
Selling back to tether
We are never, ever, ever
Selling back to tether

We've got lots of bitcoins
Lots of shitcoins
Watch em bleed
But we are never, ever, ever, ever
Selling back to tether`,
      genre: "Pop",
      year: 2020,
    },
    {
      id: "12",
      title: "Donald Pump",
      artist: "Pmoney Glitxh & YungSol",
      album: "Blockchain",
      duration: 267,
      audioUrl: "/songs/Donald_Pump_-_Pmoney_Glitxh_&_YungSol_(Official_Music_Video)_128k.mp3",
      coverUrl: "/covers/778bb29e-80ba-456e-becf-206114ceb452.png",
      lyrics: `[Chorus]
I vote for Trump yeah
Red hat on my head we rich 
Blockchain we pump yeah
Bitcoin to the moon it rip
I vote for Trump yeah
Blockchain gold chain we drip 
Blockchain we pump yeah
2025 we up on a trip 
I vote for Trump yeah
We got Blockchain to the moon
I vote for trump yeah
I'm stacking grinding nonstop 
So it aint no luck yeah
Bitcoin memecoin it go up 
Come and watch the pump yeah 
Right hand is Elon Musk

So I vote for Trump yeah
Red hat on my head we rich  
Blockchain we pump yeah
Bitcoin to the moon it rip
I vote for Trump yeah
Blockchain gold chain we drip 
Blockchain we pump yeah
2025 we up on a trip 
I vote for trump yeah
We got blockchain to the moon 
So I vote for Trump yeah
I'm stacking grinding nonstop 
So it aint no luck yeah
Bitcoin memecoin it go up 
So come and watch the pump yeah
Right hand is Elon Musk
So I vote for Trump yeah

[Verse 1]
You know Trump got us  
Elon Musk got us
They with the culture
Blockchain on top yeah
I just wanna make some bands
I wanna stack my money so tall 
Like a plane that can not fucking land

I mean like twin 
I mean yeah we win
I mean like twin
I mean yeah we win
Bullish ass coins yeah I make a call 
I'm like the jordan of Crypto I ball
Bitch I dont fumble yeah I never fall
My graph jump so high so tall

[Verse 3]
So much rich shit
Yeah 2 0 2 5
You know I feel so alive
Too many solana 
Showed my mom my phantom 
So shock she gonna die
Yeah we want fame shit 
I want cash, bills, stack money
Yeah I cant even lie
100x we bullish
We ain't bullshit yeah 
Degen coins say goodbye

[Chorus]
I vote for Trump yeah
Red hat on my head we rich 
Blockchain we pump yeah
Bitcoin to the moon it rip
I vote for Trump yeah
Blockchain gold chain we drip 
Blockchain we pump yeah
2025 we up on a trip 
I vote for Trump yeah
We got Blockchain to the moon
I vote for trump yeah
I'm stacking grinding nonstop 
So it aint no luck yeah
Bitcoin memecoin it go up 
Come and watch the pump yeah 
Right hand is Elon Musk 
So I vote for Trump yeah`,
      genre: "Rap",
      year: 2025,
    },
  ],

  // ---- YOUR PLAYLISTS ----
  playlists: [
    { id: "pl1", name: "Orangie's Playlist", description: "It's just getting started", songIds: ["10", "11", "6", "9"], coverUrl: "/covers/G-kEDY5WcAEc_li.jpeg" },
    { id: "pl2", name: "The Duve's Favorites", description: "Pre Duve Hype Music", songIds: ["6", "2", "", "", ""], coverUrl: "/covers/the duve.jpeg" },
    { id: "pl3", name: "Pumpfun Songs", description: "Songs about Pumpfun", songIds: ["1", "4", "10", "12", "7"], coverUrl: "/covers/pump.jpg" },
    { id: "pl4", name: "Cupsey's Music", description: "Music for dumping 10k toppers", songIds: ["2", "7", "9", "11", "2"], coverUrl: "/covers/cup.jpg" },
    { id: "pl5", name: "Ansem", description: "Personal favs", songIds: ["8", "3", "6", "1", "10"], coverUrl: "/covers/ansem.png" },
    { id: "pl6", name: "Cented's Bangers", description: "These get me hyped", songIds: ["", "2", "4", "11"], coverUrl: "/covers/faze-cented.jpg.jpeg" },
  ],
 // ---- YOUR MUSIC VIDEOS ----
  videos: [
    {
      id: "v1",
      title: "Get Rugged (Official Music Video)",
      artist: "The Homeless",
      videoUrl: "/videos/new.MP4",
      thumbnailUrl: "/covers/IMG_8979.jpg",
      duration: "1:06",
      description: "The Homeless Music Debut",
    },
    {
      id: "v2",
      title: "F*CK TUAH (Official Music Video)",
      artist: "Pmoney Glitxh & YungSol",
      videoUrl: "/videos/FUCKTUAH.mp4",
      thumbnailUrl: "/covers/maxresdefault.webp",
      duration: "2:12",
      description: "Fuck Hawk Tuah girl for being a rugger. This music video was filmed all in New York City with a paid billboard showing.",
    },
    {
      id: "v3",
      title: "Donald Pump (Official Music Video)",
      artist: "Pmoney Glitxh & YungSol",
      videoUrl: "/videos/Donald Pump - Pmoney Glitxh & YungSol (Official Music Video).mp4",
      thumbnailUrl: "/covers/Screenshot 2026-02-18 at 5.42.42 PM.png",
      duration: "2:40",
      description: "We got Donald Trump in office with the ambitious claim to be the Crypto President of The World. Cheers to him for dumping everything anyways.",
    },
  ],
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================
// 
// To add MUSIC VIDEOS, add a "videos" array to your CONFIG:
//
//   videos: [
//     {
//       id: "v1",
//       title: "My Music Video",
//       artist: "Artist Name",
//       videoUrl: "/videos/my-video.mp4",           // Local .mp4 in public/videos/
//       // videoUrl: "https://youtu.be/dQw4w9WgXcQ", // OR a YouTube link
//       thumbnailUrl: "/covers/my-thumbnail.jpg",    // Thumbnail image
//       duration: "3:45",                            // Display duration
//       description: "Official music video",         // Optional
//     },
//   ],
//
// Place .mp4 files in: public/videos/
// YouTube links auto-embed. Local .mp4 files play natively.
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
  Plus: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>),
  Video: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm6 12l6-4-6-4v8z"/></svg>),
  Menu: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>),
  Chart: ({ size = 24 }) => (<svg viewBox="0 0 24 24" style={{width:size,height:size,minWidth:size,minHeight:size}} fill="currentColor"><path d="M3 13h2v8H3v-8zm4-3h2v11H7V10zm4-4h2v15h-2V6zm4 6h2v9h-2v-9zm4-3h2v12h-2V9z"/></svg>),
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
  const [mobileQueue, setMobileQueue] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [libraryFilter, setLibraryFilter] = useState("all");
  const [playingVideo, setPlayingVideo] = useState(null);
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

  const addToQueue = useCallback((song) => {
    setQueue((q) => [...q, song]);
  }, []);

  const playNext = useCallback(() => {
    if (queue.length === 0) return;
    const nextIndex = shuffleOn ? Math.floor(Math.random() * queue.length) : (queueIndex + 1);
    if (nextIndex >= queue.length) {
      // Queue exhausted — start shuffling all songs
      const shuffled = [...CONFIG.songs].sort(() => Math.random() - 0.5);
      setQueue(shuffled);
      setQueueIndex(0);
      playSong(shuffled[0], shuffled, 0);
      return;
    }
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
      songs: CONFIG.songs.filter((s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q) || s.album.toLowerCase().includes(q) || (s.genre && s.genre.toLowerCase().includes(q))),
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

  const TrackRow = ({ song, index, showAlbum = true, showCover = true, onPlay, hideQueue = false }) => {
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
          {!hideQueue && <button style={{ background: "none", border: "none", color: theme.textSubdued, cursor: "pointer", padding: 4, flexShrink: 0 }} onClick={(e) => { e.stopPropagation(); addToQueue(song); }}><Icons.Plus size={18} /></button>}
          <span style={{ color: theme.textSubdued, fontSize: 12, flexShrink: 0 }}>{formatTime(song.duration)}</span>
        </div>
      );
    }
    return (
      <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr 100px", alignItems: "center", padding: "8px 16px", borderRadius: 4, cursor: "pointer", transition: "background 0.15s", gap: 16 }}
        onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"} onClick={() => onPlay?.()}>
        <div style={{ fontSize: 15, color: isActive ? theme.primary : theme.textSecondary, textAlign: "center" }}>{isActive && isPlaying ? "\u266B" : index + 1}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          {showCover && <img src={song.coverUrl} alt="" style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover", flexShrink: 0 }} />}
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 600, color: isActive ? theme.primary : theme.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.title}</div>
            <div style={{ fontSize: 13, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} onClick={(e) => { e.stopPropagation(); navigate("artist", { name: song.artist }); }}>{song.artist}</div>
          </div>
        </div>
        <div style={{ fontSize: 14, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} onClick={(e) => { e.stopPropagation(); navigate("album", { name: song.album }); }}>{showAlbum ? song.album : ""}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
          {!hideQueue && <button style={{ background: "none", border: "none", color: theme.textSubdued, cursor: "pointer", padding: 2, opacity: 0.6 }} onClick={(e) => { e.stopPropagation(); addToQueue(song); }} title="Add to queue"><Icons.Plus size={18} /></button>}
          <span style={{ color: theme.textSecondary, fontSize: 14 }}>{formatTime(song.duration)}</span>
        </div>
      </div>
    );
  };

  const TrackListHeader = () => isMobile ? null : (
    <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr 100px", padding: "0 16px 8px", borderBottom: `1px solid ${theme.divider}`, color: theme.textSubdued, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", gap: 16, marginBottom: 8 }}>
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
        <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, margin: "8px 0 4px" }}>Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"}</h2>
        <div style={{ fontSize: 12, color: theme.textSecondary, marginBottom: 16, fontFamily: "monospace", letterSpacing: 0.5 }}>CA: 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU</div>
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
      {/* Follow on X */}
      <div style={{ padding: `${isMobile ? 16 : 32}px ${pad}px ${isMobile ? 24 : 40}px`, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: theme.bgElevated, padding: isMobile ? "12px 20px" : "14px 28px", borderRadius: 30, cursor: "pointer", transition: "opacity 0.2s" }}
          onClick={() => window.open("https://x.com/PumpfunMusicSOL", "_blank")}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"} onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>
          <svg viewBox="0 0 24 24" style={{width:18,height:18}} fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          <span style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16, color: theme.textPrimary }}>Follow us on X: @PumpfunMusicSOL</span>
        </div>
      </div>
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

  const LibraryView = () => {
    const filters = [{ id: "all", label: "All" }, { id: "songs", label: "All Songs" }, { id: "playlists", label: "Playlists" }, { id: "albums", label: "Albums" }, { id: "artists", label: "Artists" }];
    const sortedSongs = useMemo(() => [...CONFIG.songs].sort((a, b) => a.title.localeCompare(b.title)), []);
    return (
      <div style={{ padding: `0 ${pad}px ${pad}px` }}>
        <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, margin: `${isMobile ? 16 : 24}px 0 ${isMobile ? 12 : 16}px` }}>Your Library</div>
        <div style={{ display: "flex", gap: 8, marginBottom: isMobile ? 16 : 24, flexWrap: "wrap" }}>
          {filters.map((f) => (<button key={f.id} onClick={() => setLibraryFilter(f.id)}
            style={{ background: libraryFilter === f.id ? theme.primary : theme.bgElevated, border: "none", color: libraryFilter === f.id ? "#000" : theme.textPrimary, padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: isMobile ? 12 : 14, fontWeight: 600, transition: "all 0.15s" }}>{f.label}</button>))}
        </div>
        {libraryFilter === "songs" ? (
          <div>
            <TrackListHeader />
            {sortedSongs.map((song, i) => (<TrackRow key={song.id} song={song} index={i} onPlay={() => playSongFromList(sortedSongs, i)} />))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(180px, 1fr))", gap: isMobile ? 10 : 16 }}>
            {(libraryFilter === "all" || libraryFilter === "playlists") && CONFIG.playlists.map((pl) => (<Card key={pl.id} title={pl.name} subtitle={pl.description} imgUrl={pl.coverUrl} onClick={() => navigate("playlist", pl)} />))}
            {(libraryFilter === "all" || libraryFilter === "albums") && albums.map((alb) => (<Card key={alb.name} title={alb.name} subtitle={`${alb.artist} \u00B7 Album`} imgUrl={alb.coverUrl} onClick={() => navigate("album", alb)} />))}
            {(libraryFilter === "all" || libraryFilter === "artists") && artists.map((a) => (<Card key={a.name} title={a.name} subtitle={`${a.songs.length} song${a.songs.length > 1 ? "s" : ""}`} imgUrl={a.coverUrl} isRound onClick={() => navigate("artist", a)} />))}
          </div>
        )}
      </div>
    );
  };

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

  const VideosView = () => {
    const videos = CONFIG.videos || [];
    return (
      <div style={{ padding: `0 ${pad}px ${pad}px` }}>
        <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, margin: `${isMobile ? 16 : 24}px 0 ${isMobile ? 12 : 16}px` }}>Music Videos</div>
        {videos.length === 0 ? (
          <div style={{ textAlign: "center", padding: 60, color: theme.textSecondary }}><div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>No music videos yet</div><div>Add videos to CONFIG.videos to show them here</div></div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))", gap: isMobile ? 16 : 20 }}>
            {videos.map((vid) => (
              <div key={vid.id} style={{ background: theme.bgSurface, borderRadius: 8, overflow: "hidden", cursor: "pointer", transition: "background 0.2s" }}
                onClick={() => { if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); } navigate("videoPlayer", vid); }}
                onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = theme.bgSurface}>
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#000" }}>
                  {vid.thumbnailUrl && <img src={vid.thumbnailUrl} alt={vid.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icons.Play size={28} /></div>
                  </div>
                  {vid.duration && <span style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(0,0,0,0.8)", padding: "2px 6px", borderRadius: 4, fontSize: 12, fontWeight: 600 }}>{vid.duration}</span>}
                </div>
                <div style={{ padding: isMobile ? 12 : 16 }}>
                  <div style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16, color: theme.textPrimary, marginBottom: 4 }}>{vid.title}</div>
                  <div style={{ fontSize: isMobile ? 12 : 13, color: theme.textSecondary }}>{vid.artist}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const VideoPlayerView = ({ video }) => {
    if (!video) return null;
    const isYouTube = video.videoUrl && (video.videoUrl.includes("youtube.com") || video.videoUrl.includes("youtu.be"));
    const getYouTubeId = (url) => { const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/); return m ? m[1] : null; };
    return (
      <div style={{ padding: `0 ${pad}px ${pad}px` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#000", borderRadius: 8, overflow: "hidden", marginBottom: 16 }}>
            {isYouTube ? (
              <iframe src={`https://www.youtube.com/embed/${getYouTubeId(video.videoUrl)}?autoplay=1&rel=0`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
            ) : video.videoUrl ? (
              <video controls autoPlay playsInline webkit-playsinline="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", background: "#000" }}>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: theme.textSubdued }}>No video URL provided</div>
            )}
          </div>
          <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, marginBottom: 4 }}>{video.title}</div>
          <div style={{ fontSize: isMobile ? 14 : 16, color: theme.textSecondary, marginBottom: 16 }}>{video.artist}</div>
          {video.description && <div style={{ fontSize: 14, color: theme.textSecondary, lineHeight: 1.6 }}>{video.description}</div>}
        </div>
      </div>
    );
  };

  const ChartView = () => {
    // DexScreener supports ?embed=1&theme=dark for iframe embedding
    const pairAddr = CONFIG.dexscreenerPair || "2uf4xh61rdwxng9woyxsvqp7zua6klfpb3nvnrqeoisd";
    const chain = CONFIG.dexscreenerChain || "solana";
    const embedSrc = `https://dexscreener.com/${chain}/${pairAddr}?embed=1&theme=dark`;
    const fullUrl = `https://dexscreener.com/${chain}/${pairAddr}`;
    return (
      <div style={{ padding: `0 ${pad}px ${pad}px` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: `${isMobile ? 16 : 24}px 0 ${isMobile ? 12 : 16}px`, flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700 }}>$PFMUSIC Chart</div>
          <button style={{ display: "flex", alignItems: "center", gap: 8, background: "#1C1C1E", border: "1px solid #333", color: "#fff", padding: "10px 20px", borderRadius: 8, cursor: "pointer", fontWeight: 700, fontSize: 14 }}
            onClick={() => window.open(fullUrl, "_blank")}
            onMouseEnter={(e) => e.currentTarget.style.background = "#2a2a2a"} onMouseLeave={(e) => e.currentTarget.style.background = "#1C1C1E"}>
            <svg viewBox="0 0 24 24" style={{width:18,height:18}} fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            Open Full Chart
          </button>
        </div>
        <div style={{ borderRadius: 12, overflow: "hidden", background: "#0d1117", height: isMobile ? "calc(100vh - 240px)" : "calc(100vh - 260px)" }}>
          <iframe src={embedSrc} width="100%" height="100%" style={{ border: 0, borderRadius: 12 }} loading="lazy" title="DexScreener Chart" />
        </div>
      </div>
    );
  };

  const renderMainContent = () => {
    switch (currentView) {
      case "home": return <HomeView />; case "search": return <SearchView />; case "library": return <LibraryView />;
      case "playlist": return <PlaylistView playlist={viewData} />; case "album": return <AlbumView album={viewData} />;
      case "artist": return <ArtistView artist={viewData} />; case "videos": return <VideosView />;
      case "videoPlayer": return <VideoPlayerView video={viewData} />; case "chart": return <ChartView />;
      default: return <HomeView />;
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
            {[{ id: "home", label: "Home", Icon: Icons.Home }, { id: "search", label: "Search", Icon: Icons.Search }, { id: "videos", label: "Music Videos", Icon: Icons.Video }, { id: "chart", label: "$PFMUSIC Chart", Icon: Icons.Chart }].map(({ id, label, Icon }) => (
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
              {isMobile && !["search"].includes(currentView) && (<img src="/PFMUSIC.png" alt="Logo" style={{ height: 28, objectFit: "contain" }} onClick={() => { setCurrentView("home"); setViewData(null); }} />)}
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
            {/* Mobile dropdown menu - top right */}
            {isMobile && (
              <div style={{ position: "relative", flexShrink: 0 }}>
                <button style={{ background: "none", border: "none", color: theme.textPrimary, cursor: "pointer", padding: 4, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setMobileMenu(!mobileMenu)}><Icons.Menu size={24} /></button>
                {mobileMenu && (<>
                  <div style={{ position: "fixed", inset: 0, zIndex: 99 }} onClick={() => setMobileMenu(false)} />
                  <div style={{ position: "absolute", top: 40, right: 0, background: theme.bgElevated, borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,.6)", padding: 8, zIndex: 100, minWidth: 200, border: `1px solid ${theme.divider}` }}>
                    {[{ id: "home", label: "Home", icon: <Icons.Home size={20} /> }, { id: "search", label: "Search", icon: <Icons.Search size={20} /> }, { id: "videos", label: "Music Videos", icon: <Icons.Video size={20} /> }, { id: "chart", label: "$PFMUSIC Chart", icon: <Icons.Chart size={20} /> }, { id: "library", label: "Your Library", icon: <Icons.Library size={20} /> }].map((item) => (
                      <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 8, cursor: "pointer", color: currentView === item.id ? theme.primary : theme.textPrimary, fontWeight: currentView === item.id ? 700 : 500, fontSize: 15 }}
                        onClick={() => { setCurrentView(item.id); setViewData(null); setMobileMenu(false); }}
                        onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                        {item.icon}<span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </>)}
              </div>
            )}
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
          <div style={{ position: "fixed", right: 0, top: 0, bottom: 90, width: 360, background: theme.bgSurface, zIndex: 30, padding: 16, overflowY: "auto", borderLeft: `1px solid ${theme.divider}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: theme.textPrimary }}>Queue</div>
              <button style={{ background: "none", border: "none", color: theme.textSecondary, cursor: "pointer" }} onClick={() => setShowQueue(false)}><Icons.Close /></button>
            </div>
            {currentSong && (<div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Now Playing</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 4px", borderRadius: 4, background: theme.bgHighlight }}>
                <img src={currentSong.coverUrl} alt="" style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: theme.primary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currentSong.title}</div>
                  <div style={{ fontSize: 12, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currentSong.artist}</div>
                </div>
                <span style={{ color: theme.textSubdued, fontSize: 12, flexShrink: 0, paddingRight: 8 }}>{formatTime(currentSong.duration)}</span>
              </div>
            </div>)}
            <div style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Next Up</div>
            {queue.slice(queueIndex + 1).map((song, i) => (
              <div key={song.id + i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 4px", borderRadius: 4, cursor: "pointer" }}
                onClick={() => playSongFromList(queue, queueIndex + 1 + i)}
                onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                <span style={{ color: theme.textSubdued, fontSize: 13, width: 24, textAlign: "center", flexShrink: 0 }}>{i + 1}</span>
                <img src={song.coverUrl} alt="" style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: theme.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.title}</div>
                  <div style={{ fontSize: 12, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.artist}</div>
                </div>
                <span style={{ color: theme.textSubdued, fontSize: 12, flexShrink: 0, paddingRight: 8 }}>{formatTime(song.duration)}</span>
              </div>
            ))}
            {queue.length <= queueIndex + 1 && <div style={{ color: theme.textSubdued, padding: 16, textAlign: "center" }}>Queue is empty</div>}
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
            <div style={{ flex: 1, height: 5, background: theme.bgHighlight, borderRadius: 3, cursor: "pointer", position: "relative" }}
              onClick={seekTo}
              onMouseDown={(e) => {
                const bar = e.currentTarget;
                const move = (ev) => {
                  const rect = bar.getBoundingClientRect();
                  const ratio = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
                  const dur = currentSong?.duration || durationRef.current;
                  progressRef.current = ratio * dur;
                  tick(progressRef.current, dur);
                };
                const up = () => {
                  if (audioRef.current && audioRef.current.src) audioRef.current.currentTime = progressRef.current;
                  document.removeEventListener("mousemove", move);
                  document.removeEventListener("mouseup", up);
                };
                move(e.nativeEvent);
                document.addEventListener("mousemove", move);
                document.addEventListener("mouseup", up);
              }}>
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
            <button style={{ background: "none", border: "none", color: theme.textPrimary, cursor: "pointer", padding: 4 }} onClick={() => { setShowNowPlaying(false); setMobileLyrics(false); setMobileQueue(false); }}><Icons.ChevronDown size={28} /></button>
            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: theme.textSecondary }}>{mobileQueue ? "Queue" : "Now Playing"}</div>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ background: "none", border: "none", color: mobileQueue ? theme.primary : theme.textSecondary, cursor: "pointer", padding: 4 }} onClick={() => { setMobileQueue(!mobileQueue); setMobileLyrics(false); }}><Icons.Queue size={24} /></button>
              <button style={{ background: "none", border: "none", color: mobileLyrics ? theme.primary : theme.textSecondary, cursor: "pointer", padding: 4 }} onClick={() => { setMobileLyrics(!mobileLyrics); setMobileQueue(false); }}><Icons.Lyrics size={24} /></button>
            </div>
          </div>

          {!mobileLyrics && !mobileQueue ? (
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
              {/* Draggable progress bar */}
              <div>
                <div style={{ height: 6, background: theme.bgHighlight, borderRadius: 3, cursor: "pointer", position: "relative", touchAction: "none" }}
                  onClick={seekTo}
                  onTouchStart={(e) => {
                    const bar = e.currentTarget;
                    const move = (ev) => {
                      const rect = bar.getBoundingClientRect();
                      const x = ev.touches[0].clientX;
                      const ratio = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
                      const dur = currentSong.duration || durationRef.current;
                      progressRef.current = ratio * dur;
                      tick(progressRef.current, dur);
                    };
                    const end = () => {
                      if (audioRef.current && audioRef.current.src) audioRef.current.currentTime = progressRef.current;
                      document.removeEventListener("touchmove", move);
                      document.removeEventListener("touchend", end);
                    };
                    move(e.nativeEvent);
                    document.addEventListener("touchmove", move, { passive: true });
                    document.addEventListener("touchend", end);
                  }}>
                  <div ref={npFill} style={{ height: "100%", background: theme.textPrimary, borderRadius: 3, width: "0%", position: "relative", transition: "none" }}>
                    <div style={{ position: "absolute", right: -8, top: -5, width: 16, height: 16, borderRadius: "50%", background: theme.textPrimary }} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                  <span ref={npTime} style={{ fontSize: 11, color: theme.textSubdued }}>0:00</span>
                  <span style={{ fontSize: 11, color: theme.textSubdued }}>{formatTime(currentSong.duration)}</span>
                </div>
              </div>
              {/* Controls - use WHITE for inactive buttons so they stay visible on any background */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 8px 0" }}>
                <button style={{ background: "none", border: "none", color: shuffleOn ? theme.primary : "#fff", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setShuffle(!shuffleOn)}><Icons.Shuffle /></button>
                <button style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", justifyContent: "center", transform: "scale(1.2)" }} onClick={playPrev}><Icons.SkipPrev size={28} /></button>
                <button style={{ width: 64, height: 64, borderRadius: "50%", background: theme.textPrimary, border: "none", color: theme.bgBase, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={togglePlay}>
                  {isPlaying ? <Icons.Pause size={28} /> : <Icons.Play size={28} />}
                </button>
                <button style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", justifyContent: "center", transform: "scale(1.2)" }} onClick={playNext}><Icons.SkipNext size={28} /></button>
                <button style={{ background: "none", border: "none", color: repeatMode > 0 ? theme.primary : "#fff", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setRepeatMode((r) => (r + 1) % 3)}><Icons.Repeat /></button>
              </div>
            </div>
          ) : mobileLyrics ? (
            /* LYRICS VIEW */
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
          ) : (
            /* MOBILE QUEUE VIEW */
            <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0, padding: "0 16px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Now Playing</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 4px", borderRadius: 4, background: theme.bgHighlight, marginBottom: 16 }}>
                <img src={currentSong.coverUrl} alt="" style={{ width: 44, height: 44, borderRadius: 4, objectFit: "cover" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: theme.primary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currentSong.title}</div>
                  <div style={{ fontSize: 12, color: theme.textSecondary }}>{currentSong.artist}</div>
                </div>
                <span style={{ color: theme.textSubdued, fontSize: 12, paddingRight: 8 }}>{formatTime(currentSong.duration)}</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Next Up</div>
              <div style={{ flex: 1, overflowY: "scroll", WebkitOverflowScrolling: "touch", minHeight: 0 }}>
                {queue.slice(queueIndex + 1).map((song, i) => (
                  <div key={song.id + i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 4px", borderRadius: 4, cursor: "pointer" }}
                    onClick={() => playSongFromList(queue, queueIndex + 1 + i)}
                    onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHighlight} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                    <span style={{ color: theme.textSubdued, fontSize: 13, width: 20, textAlign: "center", flexShrink: 0 }}>{i + 1}</span>
                    <img src={song.coverUrl} alt="" style={{ width: 40, height: 40, borderRadius: 4, objectFit: "cover", flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: theme.textPrimary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.title}</div>
                      <div style={{ fontSize: 12, color: theme.textSecondary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{song.artist}</div>
                    </div>
                    <span style={{ color: theme.textSubdued, fontSize: 12, flexShrink: 0 }}>{formatTime(song.duration)}</span>
                  </div>
                ))}
                {queue.length <= queueIndex + 1 && <div style={{ color: theme.textSubdued, padding: 24, textAlign: "center" }}>Queue is empty. Songs will shuffle automatically when the current track ends.</div>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}