import React, { useState, useEffect } from "react";

/* =========================
   MASTER PRESET STRUCTURE
========================= */

const PRESETS = {
  Europe: {
    Single: [
      {
        name: "Paris Luxury Solo",
        location: "Paris – Eiffel Tower",
        gender: "female",
        dress: "Designer Gown",
        style: "Cinematic luxury travel photography",
        emotion: "soft confident smile",
        lighting: "golden hour",
        angle: "wide shot",
      },
      {
        name: "Swiss Alps Explorer",
        location: "Swiss Alps",
        gender: "male",
        dress: "Winter Trench Coat",
        style: "Adventure cinematic photography",
        emotion: "fearless",
        lighting: "bright natural daylight",
        angle: "wide landscape shot",
      },
      {
        name: "Santorini Influencer",
        location: "Santorini – Blue Domes",
        gender: "female",
        dress: "Luxury Maxi Dress",
        style: "Instagram luxury travel photography",
        emotion: "relaxed smile",
        lighting: "sunset soft light",
        angle: "wide angle",
      },
      {
        name: "Rome Royal Portrait",
        location: "Rome – Colosseum",
        gender: "male",
        dress: "Italian Suit",
        style: "Royal editorial portrait",
        emotion: "confident",
        lighting: "dramatic daylight",
        angle: "low angle",
      },
      {
        name: "Venice Dreamy Solo",
        location: "Venice – Grand Canal",
        gender: "female",
        dress: "Cape Gown",
        style: "Romantic cinematic portrait",
        emotion: "dreamy",
        lighting: "soft daylight",
        angle: "street level",
      },
    ],
    Couple: [
      {
        name: "Paris Romantic Couple",
        location: "Paris – Eiffel Tower",
        maleDress: "Italian Suit",
        femaleDress: "Designer Gown",
        style: "Romantic cinematic travel photography",
        emotion: "romantic smiles",
        lighting: "golden hour",
        angle: "wide shot",
        couplePose: "holding hands",
      },
      {
        name: "Santorini Honeymoon",
        location: "Santorini – Blue Domes",
        maleDress: "Luxury Blazer & Pants",
        femaleDress: "Luxury Maxi Dress",
        style: "Luxury honeymoon photography",
        emotion: "joyful",
        lighting: "sunset glow",
        angle: "wide angle",
        couplePose: "walking together",
      },
      {
        name: "Swiss Snow Couple",
        location: "Swiss Alps",
        maleDress: "Winter Coat",
        femaleDress: "Princess Dress",
        style: "Snow fantasy photography",
        emotion: "warm happiness",
        lighting: "soft snowy daylight",
        angle: "wide shot",
        couplePose: "embracing",
      },
      {
        name: "Venice Royal Couple",
        location: "Venice – Grand Canal",
        maleDress: "Royal Achkan",
        femaleDress: "Designer Lehenga",
        style: "Royal portrait photography",
        emotion: "elegant confidence",
        lighting: "soft daylight",
        angle: "wide shot",
        couplePose: "standing side by side",
      },
      {
        name: "Rome Proposal Scene",
        location: "Rome – Colosseum",
        maleDress: "Formal Suit",
        femaleDress: "Evening Gown",
        style: "Proposal cinematic photography",
        emotion: "emotional joy",
        lighting: "sunset light",
        angle: "wide cinematic shot",
        couplePose: "proposal kneeling pose",
      },
    ],
  },

  Asia: {
    Single: [
      {
        name: "Dubai Billionaire",
        location: "Dubai – Burj Khalifa",
        gender: "male",
        dress: "Billionaire Casual Look",
        style: "Luxury editorial photography",
        emotion: "confident",
        lighting: "luxury daylight",
        angle: "low angle",
      },
      {
        name: "Maldives Solo Queen",
        location: "Maldives – Overwater Villas",
        gender: "female",
        dress: "Luxury Travel Outfit",
        style: "Luxury travel photography",
        emotion: "relaxed elegance",
        lighting: "tropical soft light",
        angle: "wide shot",
      },
      {
        name: "Bali Spiritual",
        location: "Bali – Temple",
        gender: "female",
        dress: "Indo-Western Outfit",
        style: "Spiritual cinematic photography",
        emotion: "peaceful",
        lighting: "soft morning light",
        angle: "wide shot",
      },
      {
        name: "Tokyo Night Style",
        location: "Tokyo – Neon Streets",
        gender: "male",
        dress: "Modern Streetwear",
        style: "Cyberpunk street photography",
        emotion: "cool confidence",
        lighting: "neon night lights",
        angle: "street level",
      },
      {
        name: "Kashmir Snow Dream",
        location: "Kashmir – Snow Valley",
        gender: "female",
        dress: "Winter Ethnic Dress",
        style: "Snow cinematic portrait",
        emotion: "soft smile",
        lighting: "snow daylight",
        angle: "wide shot",
      },
    ],
    Couple: [
      {
        name: "Maldives Honeymoon",
        location: "Maldives – Overwater Villas",
        maleDress: "Luxury Blazer",
        femaleDress: "Luxury Maxi Dress",
        style: "Honeymoon luxury photography",
        emotion: "romantic",
        lighting: "golden daylight",
        angle: "wide shot",
        couplePose: "hugging",
      },
      {
        name: "Bali Couple Retreat",
        location: "Bali – Temple",
        maleDress: "Linen Shirt & Pants",
        femaleDress: "Boho Dress",
        style: "Spiritual couple photography",
        emotion: "calm happiness",
        lighting: "soft daylight",
        angle: "wide shot",
        couplePose: "walking together",
      },
      {
        name: "Dubai Luxury Couple",
        location: "Dubai – Burj Khalifa",
        maleDress: "Luxury Suit",
        femaleDress: "Designer Gown",
        style: "Luxury status photography",
        emotion: "confident smiles",
        lighting: "luxury daylight",
        angle: "low angle",
        couplePose: "standing confidently",
      },
      {
        name: "Kashmir Romance",
        location: "Kashmir – Valley",
        maleDress: "Winter Coat",
        femaleDress: "Winter Ethnic Dress",
        style: "Romantic snow photography",
        emotion: "warm love",
        lighting: "snow daylight",
        angle: "wide shot",
        couplePose: "embracing",
      },
      {
        name: "Thailand Beach Love",
        location: "Phuket – Beach",
        maleDress: "Casual Beachwear",
        femaleDress: "Flowy Beach Dress",
        style: "Beach romance photography",
        emotion: "happy laughter",
        lighting: "sunset glow",
        angle: "wide beach shot",
        couplePose: "walking barefoot",
      },
    ],
  },
};

/* =========================
   COMPONENT
========================= */

export default function PromptForm() {
  const [continent, setContinent] = useState("");
  const [type, setType] = useState("");
  const [preset, setPreset] = useState(null);
  const [prompt, setPrompt] = useState("");

  function generatePrompt(p) {
    if (!p) return "";

    if (p.maleDress) {
      return `Create an ultra-realistic cinematic travel photograph set in ${p.location}. 
The couple is styled elegantly, with the male wearing ${p.maleDress} and the female wearing ${p.femaleDress}. 
They are captured in a ${p.couplePose} pose, expressing ${p.emotion}. 
The scene uses ${p.lighting} lighting, shot from a ${p.angle}, resulting in ${p.style}. 
Ensure the faces remain exactly the same as the reference images, with natural skin texture and high photographic realism.`;
    }

    return `Create an ultra-realistic cinematic travel photograph set in ${p.location}. 
The subject is a ${p.gender}, dressed in ${p.dress}, expressing a ${p.emotion}. 
The image is captured using ${p.lighting} lighting from a ${p.angle}, resulting in ${p.style}. 
Ensure facial identity remains unchanged, with natural skin texture and professional DSLR quality.`;
  }

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h2>AI Dream Travel Preset Generator</h2>

      <h4>1️⃣ Select Continent</h4>
      {Object.keys(PRESETS).map((c) => (
        <button
          key={c}
          onClick={() => {
            setContinent(c);
            setType("");
            setPreset(null);
          }}
        >
          {c}
        </button>
      ))}

      {continent && (
        <>
          <h4>2️⃣ Select Type</h4>
          {["Single", "Couple"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setType(t);
                setPreset(null);
              }}
            >
              {t}
            </button>
          ))}
        </>
      )}

      {continent && type && (
        <>
          <h4>3️⃣ Select Preset</h4>
          {PRESETS[continent][type].map((p) => (
            <button
              key={p.name}
              style={{ background: preset?.name === p.name ? "#ccc" : "" }}
              onClick={() => {
                setPreset(p);
                setPrompt(generatePrompt(p));
              }}
            >
              {p.name}
            </button>
          ))}
        </>
      )}

      {prompt && (
        <>
          <h3>Generated Prompt</h3>
          <textarea
            rows={10}
            style={{ width: "100%" }}
            value={prompt}
            readOnly
          />
        </>
      )}
    </div>
  );
}
