import React, { useState } from "react";

/* ======================================
   DATA MODEL (FULL GLOBAL DATA)
====================================== */

const DATA = {
  Europe: {
    France: {},
    Italy: {},
    Switzerland: {},
    Greece: {},
    Norway: {},
  },

  Asia: {
    UAE: {},
    Maldives: {},
    Japan: {},
    Indonesia: {},
    India: {},
  },

  "North America": {
    USA: {},
    Canada: {},
    Mexico: {},
    Bahamas: {},
    CostaRica: {},
  },

  "South America": {
    Brazil: {},
    Argentina: {},
    Peru: {},
    Chile: {},
    Colombia: {},
  },

  Africa: {
    Morocco: {},
    Egypt: {},
    Kenya: {},
    SouthAfrica: {},
    Tanzania: {},
  },

  "Australia & Oceania": {
    Australia: {},
    NewZealand: {},
    Fiji: {},
    BoraBora: {},
    Tahiti: {},
  },

  Antarctica: {
    Antarctica: {},
  },
};

/* ======================================
   PRESET GENERATOR (REUSED)
====================================== */

function createPresets(country, landmark) {
  return {
    Single: [
      {
        name: `${country} Luxury Solo`,
        location: `${landmark}`,
        mood: "Confident, aspirational",
        scenery: "Iconic landmark scenery",
        nature: "Premium travel environment",
        lighting: "Soft golden daylight",
        angle: "Wide cinematic shot",
        dress: "Luxury travel outfit",
        style: "Cinematic travel photography",
        emotion: "Calm confident smile",
      },
      {
        name: `${country} Influencer Style`,
        location: `${landmark}`,
        mood: "Stylish, relaxed",
        scenery: "Famous tourist location",
        nature: "Urban elegance",
        lighting: "Natural daylight",
        angle: "Street candid",
        dress: "Trendy fashion wear",
        style: "Editorial photography",
        emotion: "Relaxed confidence",
      },
    ],
    Couple: [
      {
        name: `${country} Romantic Couple`,
        location: `${landmark}`,
        mood: "Romantic, joyful",
        scenery: "Iconic backdrop",
        nature: "Dream travel destination",
        lighting: "Golden hour glow",
        angle: "Wide cinematic shot",
        maleDress: "Classic suit",
        femaleDress: "Designer gown",
        couplePose: "Holding hands",
        style: "Romantic cinematic photography",
        emotion: "Joyful smiles",
      },
      {
        name: `${country} Honeymoon`,
        location: `${landmark}`,
        mood: "Intimate, dreamy",
        scenery: "Scenic luxury surroundings",
        nature: "Premium travel location",
        lighting: "Soft sunset light",
        angle: "Wide romantic shot",
        maleDress: "Luxury blazer",
        femaleDress: "Flowy elegant dress",
        couplePose: "Walking together",
        style: "Luxury honeymoon photography",
        emotion: "Deep love",
      },
    ],
  };
}

/* ======================================
   ATTACH PRESETS TO COUNTRIES
====================================== */

Object.keys(DATA).forEach((continent) => {
  Object.keys(DATA[continent]).forEach((country) => {
    DATA[continent][country] = createPresets(
      country,
      `${country} Famous Landmark`
    );
  });
});

/* ======================================
   COMPONENT
====================================== */

export default function PromptForm() {
  const [type, setType] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [preset, setPreset] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  function generatePrompt(p) {
    if (!p) return "";

    if (type === "Couple") {
      return `Create an ultra-realistic cinematic travel photograph set in ${p.location}. 
The couple is ${p.couplePose}, conveying a ${p.mood} atmosphere. 
The male wears ${p.maleDress}, while the female wears ${p.femaleDress}. 
The scene includes ${p.scenery}, surrounded by ${p.nature}. 
Lighting is ${p.lighting}, captured from a ${p.angle}, resulting in ${p.style}. 
Their expressions reflect ${p.emotion}. Maintain exact facial identity with DSLR-level realism.`;
    }

    return `Create an ultra-realistic cinematic travel photograph set in ${p.location}. 
The subject appears ${p.mood}, dressed in ${p.dress}. 
The surroundings feature ${p.scenery} with a ${p.nature} feel. 
Lighting is ${p.lighting}, captured from a ${p.angle}, producing ${p.style}. 
The expression conveys ${p.emotion}. Ensure facial identity remains unchanged with professional realism.`;
  }

  function copyText() {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ maxWidth: 1100, margin: "auto", padding: 20 }}>
      <h2>🌍 AI Dream Travel Album Generator</h2>

      {/* STEP 1 */}
      <h4>1️⃣ Select Type</h4>
      {["Single", "Couple"].map((t) => (
        <button
          key={t}
          style={{ marginRight: 10 }}
          onClick={() => {
            setType(t);
            setContinent("");
            setCountry("");
            setPreset(null);
            setPrompt("");
          }}
        >
          {t}
        </button>
      ))}

      {/* STEP 2 */}
      {type && (
        <>
          <h4>2️⃣ Select Continent</h4>
          {Object.keys(DATA).map((c) => (
            <button
              key={c}
              style={{ marginRight: 10, marginBottom: 5 }}
              onClick={() => {
                setContinent(c);
                setCountry("");
                setPreset(null);
                setPrompt("");
              }}
            >
              {c}
            </button>
          ))}
        </>
      )}

      {/* STEP 3 */}
      {continent && (
        <>
          <h4>3️⃣ Select Country</h4>
          {Object.keys(DATA[continent]).map((ct) => (
            <button
              key={ct}
              style={{ marginRight: 10, marginBottom: 5 }}
              onClick={() => {
                setCountry(ct);
                setPreset(null);
                setPrompt("");
              }}
            >
              {ct}
            </button>
          ))}
        </>
      )}

      {/* STEP 4 */}
      {country && DATA[continent][country]?.[type] && (
        <>
          <h4>4️⃣ Select Preset</h4>
          {DATA[continent][country][type].map((p) => (
            <div
              key={p.name}
              onClick={() => {
                setPreset(p);
                setPrompt(generatePrompt(p));
              }}
              style={{
                border: "1px solid #ccc",
                padding: 12,
                marginBottom: 10,
                cursor: "pointer",
                background: preset?.name === p.name ? "#eef" : "#fff",
              }}
            >
              <strong>{p.name}</strong>
              <div>Mood: {p.mood}</div>
              <div>Lighting: {p.lighting}</div>
              <div>Scenery: {p.scenery}</div>
            </div>
          ))}
        </>
      )}

      {/* OUTPUT */}
      {prompt && (
        <>
          <h3>🧠 Generated Prompt</h3>
          <textarea
            rows={10}
            style={{ width: "100%" }}
            value={prompt}
            readOnly
          />
          <br />
          <button onClick={copyText}>
            {copied ? "Copied!" : "Copy Prompt"}
          </button>
        </>
      )}
    </div>
  );
}
