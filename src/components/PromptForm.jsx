import React, { useState } from "react";

/* ======================================================
   PRESET FACTORY (10 PRESETS AUTO-GENERATED PER COUNTRY)
====================================================== */

function createPresets(country, landmark, environment, fashion) {
  const lights = [
    "soft golden daylight",
    "dramatic sunset lighting",
    "cinematic low light",
    "bright natural daylight",
    "luxury studio-style lighting",
  ];

  const moods = [
    "confident and aspirational",
    "romantic and dreamy",
    "bold and powerful",
    "calm and luxurious",
    "adventurous and fearless",
  ];

  const angles = [
    "wide cinematic shot",
    "medium portrait shot",
    "low-angle dramatic shot",
    "street-level candid shot",
    "aerial wide shot",
  ];

  return {
    Single: Array.from({ length: 10 }).map((_, i) => ({
      name: `${country} Solo Experience ${i + 1}`,
      location: landmark,
      mood: moods[i % moods.length],
      scenery: `iconic scenery around ${landmark}`,
      nature: environment,
      lighting: lights[i % lights.length],
      angle: angles[i % angles.length],
      dress: fashion.single[i % fashion.single.length],
      style: "high-end cinematic travel photography",
      emotion: "natural confident expression",
    })),

    Couple: Array.from({ length: 10 }).map((_, i) => ({
      name: `${country} Couple Story ${i + 1}`,
      location: landmark,
      mood: moods[i % moods.length],
      scenery: `romantic scenery near ${landmark}`,
      nature: environment,
      lighting: lights[i % lights.length],
      angle: "wide romantic cinematic shot",
      maleDress: fashion.coupleMale[i % fashion.coupleMale.length],
      femaleDress: fashion.coupleFemale[i % fashion.coupleFemale.length],
      couplePose:
        i % 2 === 0 ? "walking hand in hand" : "standing close together",
      style: "luxury cinematic couple photography",
      emotion: "joyful romantic expressions",
    })),
  };
}

/* ======================================================
   GLOBAL DATA — ALL CONTINENTS, 7+ COUNTRIES EACH
====================================================== */

const DATA = {
  Europe: {
    France: createPresets("France", "Eiffel Tower, Paris", "urban luxury", {
      single: [
        "Parisian trench coat",
        "Designer gown",
        "Chic blazer outfit",
        "Luxury winter coat",
        "Editorial street fashion",
      ],
      coupleMale: [
        "Classic black suit",
        "Beige trench coat",
        "Tailored blazer",
      ],
      coupleFemale: [
        "Designer evening gown",
        "Elegant coat dress",
        "Parisian midi dress",
      ],
    }),
    Italy: createPresets("Italy", "Colosseum, Rome", "historic elegance", {
      single: [
        "Italian linen suit",
        "Elegant summer dress",
        "Luxury scarf outfit",
        "Formal blazer look",
        "High-fashion travel wear",
      ],
      coupleMale: ["Italian tailored suit", "Classic blazer"],
      coupleFemale: ["Flowy Roman dress", "Luxury couture gown"],
    }),
    Switzerland: createPresets("Switzerland", "Swiss Alps", "snowy alpine", {
      single: [
        "Luxury winter trench",
        "Alpine explorer jacket",
        "Wool overcoat",
        "Ski-resort fashion",
        "Premium winter wear",
      ],
      coupleMale: ["Alpine winter coat", "Luxury padded jacket"],
      coupleFemale: ["Fur-lined coat", "Elegant winter dress"],
    }),
    Greece: createPresets("Greece", "Santorini Blue Domes", "coastal luxury", {
      single: [
        "White linen outfit",
        "Flowy summer dress",
        "Luxury resort wear",
        "Greek-inspired attire",
        "Minimalist chic wear",
      ],
      coupleMale: ["White linen suit", "Resort blazer"],
      coupleFemale: ["Santorini-style maxi dress", "Elegant white gown"],
    }),
    Norway: createPresets(
      "Norway",
      "Northern Lights, Tromsø",
      "arctic wilderness",
      {
        single: [
          "Arctic winter coat",
          "Explorer jacket",
          "Luxury thermal wear",
          "Adventure parka",
          "Cold-weather fashion",
        ],
        coupleMale: ["Explorer parka", "Thermal winter jacket"],
        coupleFemale: ["Luxury arctic coat", "Fur-lined winter wear"],
      }
    ),
    Austria: createPresets("Austria", "Hallstatt Village", "storybook alpine", {
      single: [
        "Classic wool coat",
        "European winter fashion",
        "Luxury travel coat",
        "Elegant knitwear",
        "Designer overcoat",
      ],
      coupleMale: ["Classic European coat", "Wool blazer"],
      coupleFemale: ["Elegant alpine dress", "Luxury winter gown"],
    }),
    Spain: createPresets("Spain", "Barcelona Cityscape", "vibrant urban", {
      single: [
        "Mediterranean summer wear",
        "Stylish casual blazer",
        "Street fashion outfit",
        "Luxury sunglasses look",
        "Editorial travel fashion",
      ],
      coupleMale: ["Smart casual blazer", "Modern Spanish suit"],
      coupleFemale: ["Flamenco-inspired dress", "Elegant city dress"],
    }),
  },

  Asia: {
    UAE: createPresets("UAE", "Burj Khalifa, Dubai", "ultra-luxury urban", {
      single: [
        "Billionaire suit",
        "Designer blazer look",
        "Luxury Arabic-inspired attire",
        "Elite casual luxury wear",
        "High-fashion outfit",
      ],
      coupleMale: ["Luxury suit", "Designer blazer"],
      coupleFemale: ["Haute couture gown", "Luxury evening dress"],
    }),
    Maldives: createPresets(
      "Maldives",
      "Overwater Villas",
      "tropical paradise",
      {
        single: [
          "Flowy resort dress",
          "Luxury beachwear",
          "Silk summer outfit",
          "Minimal island wear",
          "Premium vacation wear",
        ],
        coupleMale: ["Linen resort shirt", "Casual luxury blazer"],
        coupleFemale: ["Flowy beach gown", "Elegant island dress"],
      }
    ),
    Japan: createPresets("Japan", "Mount Fuji", "cultural-modern blend", {
      single: [
        "Traditional kimono",
        "Modern Tokyo fashion",
        "Minimalist street wear",
        "Luxury travel outfit",
        "Editorial fashion look",
      ],
      coupleMale: ["Modern suit", "Traditional haori jacket"],
      coupleFemale: ["Elegant kimono", "Contemporary Japanese dress"],
    }),
    Thailand: createPresets(
      "Thailand",
      "Phi Phi Islands",
      "tropical adventure",
      {
        single: [
          "Bohemian beach outfit",
          "Island casual wear",
          "Resort chic fashion",
          "Summer linen wear",
          "Minimal travel fashion",
        ],
        coupleMale: ["Casual resort wear", "Beach blazer"],
        coupleFemale: ["Flowy island dress", "Tropical maxi dress"],
      }
    ),
    India: createPresets("India", "Taj Mahal, Agra", "royal heritage", {
      single: [
        "Royal sherwani",
        "Elegant saree",
        "Designer ethnic wear",
        "Indo-western outfit",
        "Luxury traditional attire",
      ],
      coupleMale: ["Royal sherwani", "Classic bandhni suit"],
      coupleFemale: ["Designer lehenga", "Silk saree"],
    }),
    Indonesia: createPresets(
      "Indonesia",
      "Bali Temples",
      "tropical spiritual",
      {
        single: [
          "Balinese traditional wear",
          "Resort chic outfit",
          "Flowy yoga wear",
          "Luxury island dress",
          "Minimal travel wear",
        ],
        coupleMale: ["Casual island outfit", "Traditional Balinese attire"],
        coupleFemale: ["Temple dress", "Flowy resort gown"],
      }
    ),
    Bhutan: createPresets(
      "Bhutan",
      "Tiger’s Nest Monastery",
      "spiritual mountains",
      {
        single: [
          "Traditional Bhutanese dress",
          "Luxury mountain wear",
          "Explorer jacket",
          "Elegant travel coat",
          "Cultural attire",
        ],
        coupleMale: ["Traditional gho", "Mountain jacket"],
        coupleFemale: ["Kira traditional dress", "Luxury winter wear"],
      }
    ),
  },

  Africa: {
    Egypt: createPresets("Egypt", "Pyramids of Giza", "ancient desert", {
      single: [
        "Desert explorer outfit",
        "Luxury linen wear",
        "Ancient-inspired attire",
        "Editorial fashion look",
        "Cultural travel wear",
      ],
      coupleMale: ["Desert blazer", "Explorer suit"],
      coupleFemale: ["Flowy desert dress", "Luxury couture gown"],
    }),
    Morocco: createPresets(
      "Morocco",
      "Chefchaouen Blue City",
      "colorful heritage",
      {
        single: [
          "Traditional kaftan",
          "Bohemian travel wear",
          "Luxury scarf outfit",
          "Cultural fashion look",
          "Editorial attire",
        ],
        coupleMale: ["Traditional djellaba", "Luxury travel coat"],
        coupleFemale: ["Designer kaftan", "Elegant cultural gown"],
      }
    ),
    Kenya: createPresets("Kenya", "Maasai Mara Safari", "wild safari", {
      single: [
        "Safari explorer outfit",
        "Luxury adventure wear",
        "Neutral safari tones",
        "Editorial outdoor fashion",
        "Travel gear look",
      ],
      coupleMale: ["Safari jacket", "Explorer vest"],
      coupleFemale: ["Safari chic dress", "Adventure luxury outfit"],
    }),
    SouthAfrica: createPresets(
      "South Africa",
      "Cape Town Coastline",
      "coastal luxury",
      {
        single: [
          "Luxury coastal wear",
          "Smart casual blazer",
          "Summer editorial look",
          "Travel fashion outfit",
          "Designer casual wear",
        ],
        coupleMale: ["Resort blazer", "Smart casual suit"],
        coupleFemale: ["Elegant coastal dress", "Luxury summer gown"],
      }
    ),
    Tanzania: createPresets(
      "Tanzania",
      "Mount Kilimanjaro",
      "mountain adventure",
      {
        single: [
          "Mountain explorer outfit",
          "Thermal adventure wear",
          "Luxury trekking attire",
          "Outdoor editorial look",
          "Travel jacket",
        ],
        coupleMale: ["Explorer jacket", "Thermal coat"],
        coupleFemale: ["Luxury mountain coat", "Adventure chic outfit"],
      }
    ),
    Namibia: createPresets("Namibia", "Sossusvlei Dunes", "desert wilderness", {
      single: [
        "Desert travel wear",
        "Neutral-toned outfit",
        "Explorer fashion",
        "Editorial desert look",
        "Luxury casual wear",
      ],
      coupleMale: ["Desert explorer jacket", "Casual linen outfit"],
      coupleFemale: ["Flowy desert dress", "Luxury travel gown"],
    }),
    Seychelles: createPresets(
      "Seychelles",
      "Anse Source d’Argent",
      "island luxury",
      {
        single: [
          "Luxury island wear",
          "Flowy beach outfit",
          "Minimal chic fashion",
          "Resort couture",
          "Summer editorial wear",
        ],
        coupleMale: ["Island resort wear", "Casual blazer"],
        coupleFemale: ["Beach gown", "Elegant island dress"],
      }
    ),
  },

  "North America": {
    USA: createPresets("USA", "New York City Skyline", "urban power", {
      single: [
        "Power suit",
        "High-fashion street wear",
        "Luxury trench coat",
        "Editorial blazer look",
        "Designer casual wear",
      ],
      coupleMale: ["Classic NYC suit", "Luxury overcoat"],
      coupleFemale: ["Elegant power dress", "Designer evening gown"],
    }),
    Canada: createPresets("Canada", "Lake Louise", "natural luxury", {
      single: [
        "Luxury winter coat",
        "Explorer jacket",
        "Minimalist travel wear",
        "Editorial outdoor fashion",
        "Warm layered outfit",
      ],
      coupleMale: ["Winter parka", "Luxury jacket"],
      coupleFemale: ["Elegant winter coat", "Luxury knit dress"],
    }),
    Mexico: createPresets("Mexico", "Chichen Itza", "ancient heritage", {
      single: [
        "Cultural travel outfit",
        "Bohemian fashion wear",
        "Luxury linen dress",
        "Editorial heritage look",
        "Casual explorer wear",
      ],
      coupleMale: ["Cultural linen suit", "Explorer blazer"],
      coupleFemale: ["Flowy cultural dress", "Elegant travel gown"],
    }),
    Bahamas: createPresets("Bahamas", "Nassau Beach", "tropical luxury", {
      single: [
        "Island resort wear",
        "Luxury beach outfit",
        "Minimal chic dress",
        "Summer editorial look",
        "Vacation fashion",
      ],
      coupleMale: ["Beach blazer", "Island casual wear"],
      coupleFemale: ["Flowy beach gown", "Luxury summer dress"],
    }),
    CostaRica: createPresets(
      "Costa Rica",
      "Rainforest Canopy",
      "eco adventure",
      {
        single: [
          "Eco explorer wear",
          "Adventure fashion",
          "Minimal travel outfit",
          "Outdoor editorial look",
          "Luxury trekking attire",
        ],
        coupleMale: ["Explorer jacket", "Casual outdoor wear"],
        coupleFemale: ["Adventure chic outfit", "Luxury travel dress"],
      }
    ),
    Jamaica: createPresets("Jamaica", "Montego Bay Coast", "vibrant island", {
      single: [
        "Caribbean casual wear",
        "Resort chic fashion",
        "Summer street style",
        "Island editorial look",
        "Luxury vacation outfit",
      ],
      coupleMale: ["Resort blazer", "Casual island wear"],
      coupleFemale: ["Flowy Caribbean dress", "Elegant island gown"],
    }),
    Alaska: createPresets("Alaska", "Glacier Bay", "icy wilderness", {
      single: [
        "Cold-weather explorer outfit",
        "Luxury insulated wear",
        "Adventure parka",
        "Editorial winter look",
        "Thermal fashion",
      ],
      coupleMale: ["Explorer parka", "Insulated jacket"],
      coupleFemale: ["Luxury winter coat", "Fur-lined explorer wear"],
    }),
  },

  "South America": {
    Brazil: createPresets("Brazil", "Rio de Janeiro", "vibrant coastal", {
      single: [
        "Summer beach fashion",
        "Luxury casual wear",
        "Carnival-inspired outfit",
        "Street editorial look",
        "Resort fashion",
      ],
      coupleMale: ["Casual beach blazer", "Smart casual outfit"],
      coupleFemale: ["Flowy summer dress", "Elegant resort gown"],
    }),
    Argentina: createPresets(
      "Argentina",
      "Patagonia Mountains",
      "rugged adventure",
      {
        single: [
          "Explorer jacket",
          "Luxury trekking wear",
          "Outdoor fashion",
          "Editorial adventure look",
          "Travel coat",
        ],
        coupleMale: ["Mountain jacket", "Thermal coat"],
        coupleFemale: ["Luxury winter explorer wear", "Adventure chic outfit"],
      }
    ),
    Peru: createPresets("Peru", "Machu Picchu", "ancient mountains", {
      single: [
        "Cultural explorer outfit",
        "Luxury travel wear",
        "Bohemian fashion",
        "Editorial heritage look",
        "Traditional-inspired attire",
      ],
      coupleMale: ["Explorer blazer", "Cultural travel wear"],
      coupleFemale: ["Flowy heritage dress", "Elegant travel gown"],
    }),
    Chile: createPresets("Chile", "Torres del Paine", "wild landscapes", {
      single: [
        "Adventure fashion wear",
        "Explorer jacket",
        "Luxury trekking outfit",
        "Outdoor editorial look",
        "Travel gear style",
      ],
      coupleMale: ["Explorer parka", "Mountain jacket"],
      coupleFemale: ["Adventure chic dress", "Luxury outdoor wear"],
    }),
    Colombia: createPresets(
      "Colombia",
      "Cartagena Old City",
      "colorful heritage",
      {
        single: [
          "Vibrant street fashion",
          "Cultural travel wear",
          "Luxury summer outfit",
          "Editorial city look",
          "Bohemian chic dress",
        ],
        coupleMale: ["Casual blazer", "Colorful travel wear"],
        coupleFemale: ["Flowy cultural dress", "Elegant city gown"],
      }
    ),
    Bolivia: createPresets("Bolivia", "Salar de Uyuni", "surreal landscapes", {
      single: [
        "Minimalist fashion outfit",
        "Luxury editorial wear",
        "Neutral-toned travel attire",
        "Avant-garde fashion look",
        "High-fashion desert wear",
      ],
      coupleMale: ["Minimal luxury suit", "Designer travel coat"],
      coupleFemale: ["Editorial couture gown", "Avant-garde dress"],
    }),
    Ecuador: createPresets("Ecuador", "Galapagos Islands", "natural wonder", {
      single: [
        "Eco-luxury wear",
        "Adventure travel outfit",
        "Minimalist island fashion",
        "Editorial outdoor look",
        "Casual explorer wear",
      ],
      coupleMale: ["Explorer shirt", "Casual island wear"],
      coupleFemale: ["Flowy eco dress", "Luxury island gown"],
    }),
  },

  "Australia & Oceania": {
    Australia: createPresets(
      "Australia",
      "Sydney Opera House",
      "modern coastal",
      {
        single: [
          "Smart casual blazer",
          "Luxury travel wear",
          "Editorial coastal fashion",
          "Modern city outfit",
          "Designer casual wear",
        ],
        coupleMale: ["Modern suit", "Resort blazer"],
        coupleFemale: ["Elegant city dress", "Luxury coastal gown"],
      }
    ),
    NewZealand: createPresets(
      "New Zealand",
      "Milford Sound",
      "lush landscapes",
      {
        single: [
          "Adventure travel wear",
          "Luxury outdoor fashion",
          "Explorer jacket",
          "Editorial nature look",
          "Travel coat",
        ],
        coupleMale: ["Explorer jacket", "Outdoor blazer"],
        coupleFemale: ["Luxury travel dress", "Adventure chic outfit"],
      }
    ),
    Fiji: createPresets("Fiji", "Private Island Resort", "island paradise", {
      single: [
        "Resort couture wear",
        "Luxury beach fashion",
        "Minimalist island outfit",
        "Editorial vacation look",
        "Flowy summer dress",
      ],
      coupleMale: ["Island resort wear", "Casual luxury shirt"],
      coupleFemale: ["Flowy beach gown", "Luxury island dress"],
    }),
    BoraBora: createPresets(
      "Bora Bora",
      "Overwater Bungalows",
      "ultra-luxury island",
      {
        single: [
          "Luxury resort fashion",
          "Designer beachwear",
          "Editorial vacation look",
          "Minimal island couture",
          "Flowy summer gown",
        ],
        coupleMale: ["Luxury resort blazer", "Casual island suit"],
        coupleFemale: ["Elegant beach gown", "Designer island dress"],
      }
    ),
    Tahiti: createPresets("Tahiti", "Lagoon Views", "tropical elegance", {
      single: [
        "Island couture fashion",
        "Luxury resort outfit",
        "Flowy summer attire",
        "Editorial beach look",
        "Minimal chic wear",
      ],
      coupleMale: ["Resort blazer", "Island casual wear"],
      coupleFemale: ["Flowy lagoon dress", "Elegant summer gown"],
    }),
    Samoa: createPresets("Samoa", "Coastal Cliffs", "raw island beauty", {
      single: [
        "Cultural island wear",
        "Adventure travel outfit",
        "Luxury casual fashion",
        "Editorial coastal look",
        "Flowy summer dress",
      ],
      coupleMale: ["Casual island outfit", "Cultural travel wear"],
      coupleFemale: ["Flowy island dress", "Elegant coastal gown"],
    }),
    Tonga: createPresets("Tonga", "Pristine Beaches", "untouched paradise", {
      single: [
        "Minimalist island fashion",
        "Luxury travel wear",
        "Resort casual outfit",
        "Editorial beach look",
        "Summer chic attire",
      ],
      coupleMale: ["Resort casual wear", "Island blazer"],
      coupleFemale: ["Flowy summer gown", "Luxury beach dress"],
    }),
  },

  Antarctica: {
    Antarctica: createPresets(
      "Antarctica",
      "Antarctic Ice Plains",
      "frozen wilderness",
      {
        single: [
          "Expedition survival suit",
          "Polar explorer jacket",
          "Luxury insulated wear",
          "Extreme cold adventure gear",
          "Professional expedition outfit",
        ],
        coupleMale: ["Explorer parka", "Polar survival suit"],
        coupleFemale: ["Luxury arctic coat", "Insulated expedition wear"],
      }
    ),
  },
};

/* ======================================================
   COMPONENT
====================================================== */

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
      return `Create an ultra-realistic cinematic travel photograph set at ${p.location}. 
The couple is ${p.couplePose}, creating a ${p.mood} atmosphere. 
The male is dressed in ${p.maleDress}, while the female wears ${p.femaleDress}. 
The scene highlights ${p.scenery} within a ${p.nature} environment. 
Lighting is ${p.lighting}, captured from a ${p.angle}, resulting in ${p.style}. 
Both subjects display ${p.emotion}. Maintain exact facial identity with professional DSLR-level realism.`;
    }

    return `Create an ultra-realistic cinematic travel photograph set at ${p.location}. 
The subject appears ${p.mood}, dressed in ${p.dress}. 
The composition highlights ${p.scenery} within a ${p.nature} setting. 
Lighting is ${p.lighting}, captured from a ${p.angle}, producing ${p.style}. 
The expression is ${p.emotion}. Ensure facial identity remains unchanged with natural skin texture and realism.`;
  }

  function copyText() {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ maxWidth: 1200, margin: "auto", padding: 20 }}>
      <h2>🌍 AI Dream Travel Album Generator</h2>

      <h4>1️⃣ Select Type</h4>
      {["Single", "Couple"].map((t) => (
        <button
          key={t}
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

      {type && (
        <>
          <h4>2️⃣ Select Continent</h4>
          {Object.keys(DATA).map((c) => (
            <button
              key={c}
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

      {continent && (
        <>
          <h4>3️⃣ Select Country</h4>
          {Object.keys(DATA[continent]).map((ct) => (
            <button
              key={ct}
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

      {country && (
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
              <div>
                👗 Dress:{" "}
                {type === "Single"
                  ? p.dress
                  : `${p.maleDress} & ${p.femaleDress}`}
              </div>
              <div>🌅 Lighting: {p.lighting}</div>
              <div>🎭 Mood: {p.mood}</div>
              <div>🏞 Scenery: {p.scenery}</div>
            </div>
          ))}
        </>
      )}

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
