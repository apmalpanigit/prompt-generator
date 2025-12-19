import React, { useState, useEffect } from "react";

/* =======================
   DEFAULT FORM STATE
======================= */
const defaultForm = {
  subjectType: "single", // single | couple
  gender: "female",

  dress: "Saree",
  maleDress: "Suit",
  femaleDress: "Gown",

  location: "Paris, France",
  landmark: "Eiffel Tower",

  picType: "Cinematic",
  posture: "standing",
  pose: "natural",
  couplePose: "holding hands",

  emotion: "smile",
  clothColor: "multicolour",

  environment: "Sunny",
  background: "City",

  sameFace: "yes",

  beard: "none",
  specs: "none",
  hairstyle: "open",

  light: "golden-hour",
  cameraAngle: "eye-level",
  photoQuality: "high-resolution",

  accessories: [],
  filter: "none",
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

  useEffect(() => {
    setCopied(false);
  }, [prompt]);

  /* =======================
     PROMPT BUILDER
  ======================= */
  function buildPrompt(v) {
    const p = [];

    if (v.subjectType === "couple") {
      p.push(
        `Create an ultra-realistic cinematic travel photograph of a couple,
        same facial features as reference images,
        male wearing ${v.maleDress},
        female wearing ${v.femaleDress},
        ${v.couplePose},
        in ${v.location}, near ${v.landmark}.`
      );
    } else {
      p.push(
        `Create an ultra-realistic cinematic travel photograph of a ${v.gender},
        wearing ${v.dress},
        standing in ${v.location}, near ${v.landmark}.`
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
        ? "Ensure 100% same face identity, no facial alteration."
        : "Minor facial enhancement allowed while preserving identity."
    );

    p.push(
      "Photorealistic, DSLR quality, natural skin texture, realistic shadows, no distortion, no watermark, no text, no logo."
    );

    return p.join(" ");
  }

  function onGenerate(e) {
    e.preventDefault();
    setPrompt(buildPrompt(form));
  }

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function resetForm() {
    setForm(defaultForm);
    setPrompt("");
  }

  /* =======================
     UI
  ======================= */
  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h2>AI Travel Prompt Generator</h2>

      <form onSubmit={onGenerate}>
        {/* SUBJECT TYPE */}
        <div>
          <label>Subject Type</label>
          <br />
          {["single", "couple"].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => update("subjectType", t)}
              style={{
                marginRight: 8,
                background: form.subjectType === t ? "#ccc" : "",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* GENDER */}
        {form.subjectType === "single" && (
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
                  background: form.gender === g ? "#ccc" : "",
                }}
              >
                {g}
              </button>
            ))}
          </div>
        )}

        {/* DRESS */}
        {form.subjectType === "single" && (
          <div>
            <label>Dress</label>
            <select
              value={form.dress}
              onChange={(e) => update("dress", e.target.value)}
            >
              {["Saree", "Suit", "Western", "Gown", "Casual", "Formal"].map(
                (d) => (
                  <option key={d}>{d}</option>
                )
              )}
            </select>
          </div>
        )}

        {form.subjectType === "couple" && (
          <div style={{ display: "flex", gap: 10 }}>
            <div>
              <label>Male Dress</label>
              <select
                value={form.maleDress}
                onChange={(e) => update("maleDress", e.target.value)}
              >
                {[
                  "Suit",
                  "Tuxedo",
                  "Jacket",
                  "Casual Shirt",
                  "Traditional",
                ].map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Female Dress</label>
              <select
                value={form.femaleDress}
                onChange={(e) => update("femaleDress", e.target.value)}
              >
                {["Gown", "Dress", "Saree", "Lehenga", "Western Chic"].map(
                  (d) => (
                    <option key={d}>{d}</option>
                  )
                )}
              </select>
            </div>
          </div>
        )}

        {/* LOCATION */}
        <div style={{ display: "flex", gap: 10 }}>
          <div>
            <label>Location</label>
            <select
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
            >
              {[
                "Paris, France",
                "Santorini, Greece",
                "Swiss Alps, Switzerland",
                "Venice, Italy",
                "Norway",
                "Maldives",
                "Bali, Indonesia",
                "London, UK",
                "New York, USA",
                "Cappadocia, Turkey",
              ].map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Landmark</label>
            <input
              value={form.landmark}
              onChange={(e) => update("landmark", e.target.value)}
              placeholder="Eiffel Tower, Alps, Blue Domes"
            />
          </div>
        </div>

        {/* COUPLE POSE */}
        {form.subjectType === "couple" && (
          <div>
            <label>Couple Pose</label>
            <select
              value={form.couplePose}
              onChange={(e) => update("couplePose", e.target.value)}
            >
              {[
                "holding hands",
                "walking together",
                "romantic close pose",
                "looking at each other",
                "hugging",
              ].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
        )}

        {/* STYLE */}
        <div>
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
            ].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* LIGHT */}
        <div>
          <label>Lighting</label>
          <select
            value={form.light}
            onChange={(e) => update("light", e.target.value)}
          >
            {[
              "golden-hour",
              "soft daylight",
              "dramatic",
              "night ambient",
              "studio",
            ].map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        {/* SAME FACE */}
        <div>
          <label>Keep Same Face?</label>
          <br />
          {["yes", "no"].map((x) => (
            <button
              key={x}
              type="button"
              onClick={() => update("sameFace", x)}
              style={{
                marginRight: 8,
                background: form.sameFace === x ? "#ccc" : "",
              }}
            >
              {x}
            </button>
          ))}
        </div>

        {/* ACTIONS */}
        <div style={{ marginTop: 20 }}>
          <button type="submit">Generate Prompt</button>
          <button type="button" onClick={resetForm} style={{ marginLeft: 10 }}>
            Reset
          </button>
        </div>
      </form>

      {/* OUTPUT */}
      {prompt && (
        <div style={{ marginTop: 30 }}>
          <h3>Generated Prompt</h3>
          <textarea
            rows={8}
            value={prompt}
            readOnly
            style={{ width: "100%" }}
          />
          <button onClick={copyPrompt} style={{ marginTop: 10 }}>
            {copied ? "Copied!" : "Copy Prompt"}
          </button>
        </div>
      )}
    </div>
  );
}
