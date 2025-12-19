import React, { useState, useEffect } from "react";

/* =======================
   DATA CONFIG
======================= */

// Male & Female Dresses
const maleDresses = [
  "Tuxedo",
  "Formal Suit",
  "Three-piece Suit",
  "Italian Linen Suit",
  "Blazer with Trousers",
  "Overcoat with Scarf",
  "Leather Jacket",
  "Winter Trench Coat",
  "Casual Shirt & Chinos",
  "Denim Jacket",
  "Sherwani",
  "Nehru Jacket",
  "Kurta Pajama",
  "Pathani Suit",
  "Traditional Ethnic Wear",
];

const femaleDresses = [
  "Evening Gown",
  "Designer Gown",
  "Cocktail Dress",
  "Maxi Dress",
  "Summer Dress",
  "Western Chic Outfit",
  "Formal Blazer Dress",
  "Long Coat with Dress",
  "Saree",
  "Silk Saree",
  "Designer Lehenga",
  "Anarkali Suit",
  "Indo-Western Outfit",
  "Cape Dress",
  "Luxury Travel Outfit",
];

// Premium Locations with auto-lighting
const locations = [
  { name: "Paris, France – Eiffel Tower", light: "golden-hour" },
  { name: "Santorini, Greece – Blue Domes", light: "golden-hour" },
  { name: "Swiss Alps – Snow Mountains", light: "soft daylight" },
  { name: "Norway – Northern Lights", light: "cinematic aurora lighting" },
  { name: "Antarctica – Ice Landscape", light: "cold natural daylight" },
  { name: "Venice, Italy – Grand Canal", light: "soft daylight" },
  { name: "Monaco – Luxury Yachts", light: "soft daylight" },
  {
    name: "Cappadocia, Turkey – Hot Air Balloons",
    light: "sunrise golden-hour",
  },
  { name: "Machu Picchu, Peru", light: "misty soft daylight" },
  { name: "Iceland – Glaciers & Volcanoes", light: "dramatic cloudy light" },
  { name: "Maldives – Overwater Villas", light: "soft tropical daylight" },
  { name: "Bora Bora – Luxury Island", light: "golden-hour" },
  { name: "Amalfi Coast, Italy", light: "warm daylight" },
  { name: "Hallstatt, Austria", light: "soft daylight" },
  { name: "Faroe Islands, Denmark", light: "dramatic moody light" },
  { name: "Patagonia, Chile", light: "dramatic daylight" },
  { name: "Lapland, Finland – Snow Village", light: "cinematic winter light" },
  { name: "Seychelles – Private Beaches", light: "soft daylight" },
  { name: "Dubai – Burj Khalifa", light: "luxury daylight" },
  { name: "New York – Manhattan Skyline", light: "night ambient city lights" },
];

// Preset Packs (High-conversion)
const presetPacks = {
  "Paris Romantic": {
    location: "Paris, France – Eiffel Tower",
    picType: "Cinematic",
    emotion: "romantic smile",
    couplePose: "holding hands",
  },
  "Norway Aurora": {
    location: "Norway – Northern Lights",
    picType: "Fantasy",
    emotion: "awe",
    couplePose: "looking at the sky",
  },
  "Santorini Luxury": {
    location: "Santorini, Greece – Blue Domes",
    picType: "Luxury Travel",
    emotion: "elegant smile",
    couplePose: "walking together",
  },
  "Maldives Honeymoon": {
    location: "Maldives – Overwater Villas",
    picType: "Luxury Travel",
    emotion: "romantic",
    couplePose: "hugging",
  },
};

/* =======================
   DEFAULT STATE
======================= */

const defaultForm = {
  subjectType: "single",
  gender: "female",
  dress: "",
  maleDress: "Formal Suit",
  femaleDress: "Designer Gown",
  location: locations[0].name,
  picType: "Cinematic",
  posture: "standing",
  pose: "natural",
  couplePose: "holding hands",
  emotion: "smile",
  environment: "outdoor",
  background: "cityscape",
  sameFace: "yes",
  light: locations[0].light,
  cameraAngle: "eye-level",
  photoQuality: "ultra high-resolution",
};

/* =======================
   COMPONENT
======================= */

export default function PromptForm() {
  const [form, setForm] = useState(defaultForm);
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  // Auto-update lighting when location changes
  useEffect(() => {
    const loc = locations.find((l) => l.name === form.location);
    if (loc) {
      update("light", loc.light);
    }
  }, [form.location]);

  /* =======================
     PROMPT BUILDER
  ======================= */

  function buildPrompt(v) {
    const p = [];

    if (v.subjectType === "couple") {
      p.push(
        `Create an ultra-realistic cinematic travel photograph of a couple,
        same facial identity as reference images,
        male wearing ${v.maleDress},
        female wearing ${v.femaleDress},
        ${v.couplePose},
        at ${v.location}.`
      );
    } else {
      p.push(
        `Create an ultra-realistic cinematic travel photograph of a ${v.gender},
        wearing ${v.dress},
        standing at ${v.location}.`
      );
    }

    p.push(
      `Photo style: ${v.picType},
      posture: ${v.posture},
      pose: ${v.pose},
      emotion: ${v.emotion},
      environment: ${v.environment},
      background: ${v.background},
      lighting: ${v.light},
      camera angle: ${v.cameraAngle},
      photo quality: ${v.photoQuality}.`
    );

    p.push(
      v.sameFace === "yes"
        ? "Ensure exact facial identity match. No face changes."
        : "Minor facial enhancement allowed while preserving identity."
    );

    p.push(
      "Photorealistic, DSLR quality, natural skin texture, realistic shadows, no blur, no distortion, no watermark, no logo, no text."
    );

    return p.join(" ");
  }

  function onGenerate(e) {
    e.preventDefault();
    setPrompt(buildPrompt(form));
  }

  function applyPreset(name) {
    const preset = presetPacks[name];
    setForm((prev) => ({
      ...prev,
      ...preset,
    }));
  }

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  /* =======================
     UI
  ======================= */

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h2>AI Dream Travel Prompt Generator</h2>

      {/* PRESET PACKS */}
      <div style={{ marginBottom: 15 }}>
        <h4>Preset Packs</h4>
        {Object.keys(presetPacks).map((p) => (
          <button
            key={p}
            onClick={() => applyPreset(p)}
            style={{ marginRight: 8, marginBottom: 8 }}
          >
            {p}
          </button>
        ))}
      </div>

      <form onSubmit={onGenerate}>
        <label>Subject Type</label>
        <br />
        {["single", "couple"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => update("subjectType", t)}
            style={{
              marginRight: 8,
              background: form.subjectType === t ? "#ddd" : "",
            }}
          >
            {t}
          </button>
        ))}

        {form.subjectType === "single" && (
          <>
            <div>
              <label>Gender</label>
              <br />
              {["male", "female"].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => update("gender", g)}
                  style={{
                    marginRight: 8,
                    background: form.gender === g ? "#ddd" : "",
                  }}
                >
                  {g}
                </button>
              ))}
            </div>

            <div>
              <label>Dress</label>
              <select
                value={form.dress}
                onChange={(e) => update("dress", e.target.value)}
              >
                {(form.gender === "male" ? maleDresses : femaleDresses).map(
                  (d) => (
                    <option key={d}>{d}</option>
                  )
                )}
              </select>
            </div>
          </>
        )}

        {form.subjectType === "couple" && (
          <>
            <label>Male Dress</label>
            <select
              value={form.maleDress}
              onChange={(e) => update("maleDress", e.target.value)}
            >
              {maleDresses.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <label>Female Dress</label>
            <select
              value={form.femaleDress}
              onChange={(e) => update("femaleDress", e.target.value)}
            >
              {femaleDresses.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </>
        )}

        <label>Location</label>
        <select
          value={form.location}
          onChange={(e) => update("location", e.target.value)}
        >
          {locations.map((l) => (
            <option key={l.name}>{l.name}</option>
          ))}
        </select>

        <label>Photo Style</label>
        <select
          value={form.picType}
          onChange={(e) => update("picType", e.target.value)}
        >
          {[
            "Cinematic",
            "Luxury Travel",
            "Editorial",
            "Portrait",
            "High Fashion",
            "Fantasy",
          ].map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <label>Lighting (Auto-suggested)</label>
        <input value={form.light} readOnly />

        <div style={{ marginTop: 15 }}>
          <button type="submit">Generate Prompt</button>
        </div>
      </form>

      {prompt && (
        <div style={{ marginTop: 20 }}>
          <h3>Generated Prompt</h3>
          <textarea
            rows={8}
            value={prompt}
            readOnly
            style={{ width: "100%" }}
          />
          <button onClick={copyPrompt}>
            {copied ? "Copied!" : "Copy Prompt"}
          </button>
        </div>
      )}
    </div>
  );
}
