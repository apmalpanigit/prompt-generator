import React, { useState, useEffect } from "react";

/* ===============================
   DRESSES
================================ */

const maleDresses = [
  "Tuxedo",
  "Italian Suit",
  "Three-piece Suit",
  "Luxury Blazer & Pants",
  "Winter Trench Coat",
  "Leather Jacket",
  "Sherwani",
  "Royal Achkan",
  "Kurta Pajama",
  "Pathani Suit",
  "Casual Elite Outfit",
  "Billionaire Casual Look",
];

const femaleDresses = [
  "Designer Gown",
  "Evening Gown",
  "Luxury Maxi Dress",
  "Cocktail Dress",
  "Western Chic Outfit",
  "Silk Saree",
  "Designer Lehenga",
  "Royal Anarkali",
  "Indo-Western Outfit",
  "Cape Gown",
  "Luxury Travel Outfit",
  "Princess Dress",
];

/* ===============================
   LOCATIONS (Premium & Difficult)
================================ */

const locations = [
  { name: "Paris – Eiffel Tower", light: "golden hour", angle: "wide shot" },
  {
    name: "Santorini – Blue Domes",
    light: "sunset soft light",
    angle: "wide shot",
  },
  { name: "Swiss Alps", light: "bright daylight", angle: "aerial wide" },
  {
    name: "Norway – Northern Lights",
    light: "aurora cinematic light",
    angle: "wide shot",
  },
  { name: "Antarctica", light: "cold natural light", angle: "wide shot" },
  {
    name: "Venice – Grand Canal",
    light: "soft daylight",
    angle: "street level",
  },
  {
    name: "Maldives – Overwater Villas",
    light: "tropical soft light",
    angle: "wide shot",
  },
  {
    name: "Dubai – Burj Khalifa",
    light: "luxury daylight",
    angle: "low angle",
  },
  {
    name: "New York – Manhattan Skyline",
    light: "night city lights",
    angle: "wide shot",
  },
  {
    name: "Cappadocia – Hot Air Balloons",
    light: "sunrise golden light",
    angle: "aerial",
  },
];

/* ===============================
   PRESET PACKS (WITH SUBSETS)
================================ */

const presetPacks = {
  "Paris Romantic": {
    category: "Romance",
    bestFor: "Couples / Instagram",
    targetCustomer: "Middle-class dreamers",
    subjectType: "couple",
    location: "Paris – Eiffel Tower",
    picType: "Cinematic",
    emotion: "romantic smile",
    couplePose: "holding hands",
    maleDress: "Italian Suit",
    femaleDress: "Designer Gown",
  },

  "Maldives Honeymoon": {
    category: "Luxury Romance",
    bestFor: "Honeymoon",
    targetCustomer: "Newly married",
    subjectType: "couple",
    location: "Maldives – Overwater Villas",
    picType: "Luxury Travel",
    emotion: "romantic",
    couplePose: "hugging",
    maleDress: "Luxury Blazer & Pants",
    femaleDress: "Luxury Maxi Dress",
  },

  "Royal King & Queen": {
    category: "Royal",
    bestFor: "Wedding / Profile",
    targetCustomer: "Status seekers",
    subjectType: "couple",
    location: "Venice – Grand Canal",
    picType: "Royal Portrait",
    emotion: "confident",
    couplePose: "standing royal posture",
    maleDress: "Royal Achkan",
    femaleDress: "Designer Lehenga",
  },

  "Norway Aurora Fantasy": {
    category: "Fantasy",
    bestFor: "Instagram Viral",
    targetCustomer: "Youth / Influencers",
    subjectType: "single",
    gender: "female",
    location: "Norway – Northern Lights",
    picType: "Fantasy Cinematic",
    emotion: "awe",
    dress: "Cape Gown",
  },

  "Billionaire Lifestyle": {
    category: "Luxury Status",
    bestFor: "Profile / Branding",
    targetCustomer: "Entrepreneurs",
    subjectType: "single",
    gender: "male",
    location: "Dubai – Burj Khalifa",
    picType: "Luxury Editorial",
    emotion: "confident",
    dress: "Billionaire Casual Look",
  },

  "Snow Princess": {
    category: "Fantasy",
    bestFor: "Reels / Girls",
    targetCustomer: "Young women",
    subjectType: "single",
    gender: "female",
    location: "Swiss Alps",
    picType: "Fantasy Portrait",
    emotion: "soft smile",
    dress: "Princess Dress",
  },

  "Adventure Elite": {
    category: "Adventure",
    bestFor: "Reels",
    targetCustomer: "Youth",
    subjectType: "single",
    gender: "male",
    location: "Antarctica",
    picType: "Adventure Cinematic",
    emotion: "fearless",
    dress: "Winter Trench Coat",
  },
};

/* ===============================
   DEFAULT STATE
================================ */

const defaultForm = {
  subjectType: "single",
  gender: "female",
  dress: "",
  maleDress: "",
  femaleDress: "",
  location: locations[0].name,
  picType: "Cinematic",
  posture: "standing",
  pose: "natural",
  couplePose: "holding hands",
  emotion: "smile",
  environment: "outdoor",
  background: "landscape",
  sameFace: "yes",
  light: "",
  cameraAngle: "",
  photoQuality: "ultra high resolution",
};

/* ===============================
   COMPONENT
================================ */

export default function PromptForm() {
  const [form, setForm] = useState(defaultForm);
  const [prompt, setPrompt] = useState("");

  function update(field, value) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  /* AUTO LIGHT & ANGLE BASED ON LOCATION */
  useEffect(() => {
    const loc = locations.find((l) => l.name === form.location);
    if (loc) {
      update("light", loc.light);
      update("cameraAngle", loc.angle);
    }
  }, [form.location]);

  /* APPLY PRESET – AUTO FILL EVERYTHING */
  function applyPreset(name) {
    const preset = presetPacks[name];
    setForm((prev) => ({ ...prev, ...preset }));
  }

  /* BUILD PROMPT */
  function buildPrompt(v) {
    let p = [];

    if (v.subjectType === "couple") {
      p.push(
        `Ultra-realistic luxury travel photo of a couple at ${v.location},
        male wearing ${v.maleDress},
        female wearing ${v.femaleDress},
        pose: ${v.couplePose}.`
      );
    } else {
      p.push(
        `Ultra-realistic luxury travel photo of a ${v.gender} at ${v.location},
        wearing ${v.dress}.`
      );
    }

    p.push(
      `Style: ${v.picType},
      emotion: ${v.emotion},
      lighting: ${v.light},
      camera angle: ${v.cameraAngle},
      photo quality: ${v.photoQuality}.`
    );

    p.push(
      v.sameFace === "yes"
        ? "Exact same face identity. No face change."
        : "Minor enhancement allowed."
    );

    p.push(
      "DSLR quality, natural skin texture, cinematic depth, no blur, no watermark."
    );

    return p.join(" ");
  }

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h2>AI Dream Travel Prompt Generator</h2>

      <h4>Preset Packs</h4>
      {Object.keys(presetPacks).map((p) => (
        <button key={p} onClick={() => applyPreset(p)} style={{ margin: 5 }}>
          {p}
        </button>
      ))}

      <button
        style={{ display: "block", marginTop: 20 }}
        onClick={() => setPrompt(buildPrompt(form))}
      >
        Generate Prompt
      </button>

      {prompt && (
        <textarea
          rows={8}
          style={{ width: "100%", marginTop: 20 }}
          value={prompt}
          readOnly
        />
      )}
    </div>
  );
}
