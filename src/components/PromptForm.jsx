import React, { useState, useEffect } from "react";

const defaultForm = {
  gender: "male",
  dress: "Saree",
  picType: "Retro/Vintage",
  posture: "standing",
  pose: "natural",
  emotion: "smile",
  clothColor: "multicolour",
  background: "Beach",
  environment: "Sunny",
  sameFace: "yes",
  beard: "none",
  specs: "none",
  hairstyle: "open",
  light: "soft",
  accessories: "none",
  cameraAngle: "eye-level",
  photoQuality: "high-resolution",
  filter: "none",
  otherSpecs: "",
};

export default function PromptForm() {
  const [form, setForm] = useState(defaultForm);
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [prompt]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function articleFor(word) {
    if (!word) return "a ";
    return /^[aeiou]/i.test(word) ? "an " : "a ";
  }

  function buildPrompt(values) {
    const parts = [];
    const subject =
      values.gender === "baby"
        ? "a baby"
        : values.gender === "female"
        ? "a woman"
        : "a man";

    parts.push(
      `Edit the photo of ${subject} wearing ${articleFor(
        values.dress
      )}${values.dress.toLowerCase()}.`
    );

    if (values.theme) parts.push(`In a theme of ${values.theme}.`);

    if (values.clothColor) {
      if (values.clothColor.toLowerCase() === "multicolour") {
        parts.push("The clothing is multicolour with harmonious tones.");
      } else {
        parts.push(`The clothing is ${values.clothColor.toLowerCase()}.`);
      }
    }

    if (values.picType) parts.push(`Pic type should be ${values.picType}.`);
    if (values.posture)
      parts.push(`The Posture of person should be ${values.posture},`);
    if (values.pose && values.pose !== "natural")
      parts.push(`in a pose: ${values.pose}.`);
    if (values.emotion)
      parts.push(`The emotion on face should be: ${values.emotion}.`);
    if (values.hairstyle && values.hairstyle !== "open")
      parts.push(`Hairstyle: ${values.hairstyle}.`);
    if (values.jewellery && values.jewellery !== "open")
      parts.push(
        `The person should be wearing: ${values.jewellery} type of jewellery.`
      );
    if (values.beard && values.beard !== "none")
      parts.push(`Facial hair: ${values.beard}.`);
    if (values.specs && values.specs !== "none")
      parts.push(`Spectacles: ${values.specs}.`);
    if (values.accessories && values.accessories !== "none")
      parts.push(`Accessories: ${values.accessories}.`);

    if (values.background) parts.push(`Background: ${values.background}.`);
    if (values.environment)
      parts.push(`Environment: ${values.environment.toLowerCase()}.`);
    if (values.light) parts.push(`Lighting: ${values.light}.`);
    if (values.cameraAngle) parts.push(`Camera angle: ${values.cameraAngle}.`);
    if (values.photoQuality)
      parts.push(`Photo quality: ${values.photoQuality}.`);
    if (values.filter && values.filter !== "none")
      parts.push(`Apply ${values.filter} filter.`);

    parts.push(
      values.sameFace === "yes"
        ? "Ensure the subject's face remains exactly the same (no face swaps or identity changes)."
        : "Slight facial adjustments are allowed, but keep identity recognizably similar."
    );

    parts.push(
      "Deliver a high-resolution, natural-looking edit that preserves skin tones and texture, avoids over-smoothing, and retains fabric and hair detail."
    );

    return parts.join(" ");
  }

  function onGenerate(e) {
    e && e.preventDefault();
    setPrompt(buildPrompt(form));
  }

  async function copyPrompt(extra = "") {
    try {
      await navigator.clipboard.writeText(prompt + extra);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }

  function resetForm() {
    setForm(defaultForm);
    setPrompt("");
  }

  return (
    <div className="prompt-container">
      <div className="form-card">
        <form onSubmit={onGenerate}>
          {/* Gender */}
          <div className="row">
            <label>Gender</label>
            <div className="options">
              {["male", "female", "baby", "other"].map((g) => (
                <button
                  type="button"
                  key={g}
                  className={`opt ${form.gender === g ? "active" : ""}`}
                  onClick={() => update("gender", g)}
                >
                  {g}
                </button>
              ))}
              {form.gender === "other" && (
                <input
                  placeholder="Custom gender"
                  onChange={(e) => update("gender", e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Dress */}
          <div className="row">
            <label>Dress</label>
            <div className="options">
              {[
                "Saree",
                "Suite",
                "Punjabi",
                "Western",
                "T-shirt",
                "Jacket",
                "Formal suit",
                "Lehenga",
                "Gown",
                "other",
              ].map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`opt ${form.dress === d ? "active" : ""}`}
                  onClick={() => update("dress", d)}
                >
                  {d}
                </button>
              ))}
              {form.dress === "other" && (
                <input
                  placeholder="Custom dress"
                  onChange={(e) => update("dress", e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="row">
            <label>Trending themes</label>
            <div className="options">
              {[
                "Navratri",
                "Diwali",
                "Fantasy",
                "Fairy",
                "Western",
                "Maharashtrian",
                "Gujrati",
                "Rajasthani",
                "South Indian",
                "Punjabi",
                "Kashmiri",
                "other",
              ].map((g) => (
                <button
                  type="button"
                  key={g}
                  className={`opt ${form.theme === g ? "active" : ""}`}
                  onClick={() => update("theme", g)}
                >
                  {g}
                </button>
              ))}
              {form.theme === "other" && (
                <input
                  placeholder="Custom theme"
                  onChange={(e) => update("theme", e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Pic Type + Posture */}
          <div className="row grid-2">
            <div>
              <label>Pic type</label>
              <select
                value={form.picType}
                onChange={(e) => update("picType", e.target.value)}
              >
                {[
                  "Retro/Vintage",
                  "Modern",
                  "Cinematic",
                  "High-Fashion",
                  "Editorial",
                  "Portrait",
                  "Street",
                  "Black & White",
                  "Fantasy",
                  "Artistic",
                  "Other",
                ].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Posture</label>
              <select
                value={form.posture}
                onChange={(e) => update("posture", e.target.value)}
              >
                {[
                  "standing",
                  "seating",
                  "running",
                  "walking",
                  "lying down",
                  "dancing",
                  "jumping",
                  "other",
                ].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Pose + Emotion */}
          <div className="row grid-2">
            <div>
              <label>Pose</label>
              <select
                value={form.pose}
                onChange={(e) => update("pose", e.target.value)}
              >
                {[
                  "natural",
                  "hands-on-hips",
                  "arms-crossed",
                  "looking-away",
                  "action",
                  "looking-up",
                  "side-profile",
                  "sitting-relaxed",
                ].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Emotion</label>
              <select
                value={form.emotion}
                onChange={(e) => update("emotion", e.target.value)}
              >
                {[
                  "smile",
                  "confuse",
                  "angry",
                  "happy",
                  "serene",
                  "excited",
                  "neutral",
                  "sad",
                  "fearless",
                  "romantic",
                  "playful",
                  "calm",
                  "relaxed",
                  "other",
                ].map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Cloth Colour */}
          <div className="row">
            <label>Cloth Colour</label>
            <div className="options colors">
              {[
                "red",
                "blue",
                "green",
                "yellow",
                "black",
                "white",
                "purple",
                "orange",
                "pink",
                "brown",
                "grey",
                "gold",
                "silver",
                "multicolour",
                "other",
              ].map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`opt ${form.clothColor === c ? "active" : ""}`}
                  onClick={() => update("clothColor", c)}
                >
                  {c}
                </button>
              ))}
              {form.clothColor === "other" && (
                <input
                  placeholder="Custom color"
                  onChange={(e) => update("clothColor", e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Background + Environment */}
          <div className="row grid-2">
            <div>
              <label>Background</label>
              <select
                value={form.background}
                onChange={(e) => update("background", e.target.value)}
              >
                {[
                  "Beach",
                  "Mountain",
                  "Temple",
                  "City",
                  "Studio",
                  "Forest",
                  "Desert",
                  "Castle",
                  "Underwater",
                  "Garden",
                  "Other",
                ].map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Environment</label>
              <select
                value={form.environment}
                onChange={(e) => update("environment", e.target.value)}
              >
                {[
                  "Rainy",
                  "Cloudy",
                  "Sunny",
                  "Foggy",
                  "Night",
                  "Sunset",
                  "Snowy",
                  "Golden-hour",
                  "Stormy",
                  "Other",
                ].map((env) => (
                  <option key={env}>{env}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Face */}
          <div className="row">
            <label>Should face remain exactly the same?</label>
            <div className="options">
              {["yes", "no"].map((r) => (
                <button
                  key={r}
                  type="button"
                  className={`opt ${form.sameFace === r ? "active" : ""}`}
                  onClick={() => update("sameFace", r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="row">
            <label>Jewellery</label>
            <select
              value={form.jewellery}
              onChange={(e) => update("jewellery", e.target.value)}
            >
              {[
                "none",
                "fine",
                "costume",
                "fashion",
                "traditional",
                "vintage",
                "statement",
                "minimal",
                "ethnic",
                "bridal",
                "handcrafted",
                "floral",
                "diamond",
                "oxidized",
                "pearl",
                "gold",
                "silver",
                "platinum",
                ,
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>

          {/* Beard + Specs */}
          <div className="row grid-2">
            <div>
              <label>Beard</label>
              <select
                value={form.beard}
                onChange={(e) => update("beard", e.target.value)}
              >
                {["none", "stubble", "short", "long", "full", "other"].map(
                  (x) => (
                    <option key={x}>{x}</option>
                  )
                )}
              </select>
            </div>
            <div>
              <label>Spectacles</label>
              <select
                value={form.specs}
                onChange={(e) => update("specs", e.target.value)}
              >
                {[
                  "none",
                  "thin-frame",
                  "thick-frame",
                  "sunglasses",
                  "other",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Hairstyle */}
          <div className="row">
            <label>Hairstyle</label>
            <select
              value={form.hairstyle}
              onChange={(e) => update("hairstyle", e.target.value)}
            >
              {[
                "open",
                "ponytail",
                "bun",
                "braids",
                "curly",
                "short",
                "pixie",
                "bob-cut",
                "mohawk",
                "afro",
                "long-straight",
                "other",
              ].map((h) => (
                <option key={h}>{h}</option>
              ))}
            </select>
          </div>

          {/* Light */}
          <div className="row">
            <label>Light</label>
            <select
              value={form.light}
              onChange={(e) => update("light", e.target.value)}
            >
              {[
                "soft",
                "hard",
                "dramatic",
                "golden-hour",
                "backlit",
                "studio",
                "spotlight",
                "neon",
                "natural-window",
                "cinematic",
              ].map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>

          {/* Accessories */}
          <div className="row">
            <label>Accessories</label>
            <select
              multiple
              value={form.accessories}
              onChange={(e) =>
                update(
                  "accessories",
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              {["none", "watch", "bracelet", "hat", "scarf", "other"].map(
                (a) => (
                  <option key={a}>{a}</option>
                )
              )}
            </select>
          </div>

          {/* Camera Angle + Photo Quality */}
          <div className="row grid-2">
            <div>
              <label>Camera Angle</label>
              <select
                value={form.cameraAngle}
                onChange={(e) => update("cameraAngle", e.target.value)}
              >
                {[
                  "eye-level",
                  "low-angle",
                  "high-angle",
                  "close-up",
                  "wide-shot",
                  "aerial",
                ].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Photo Quality</label>
              <select
                value={form.photoQuality}
                onChange={(e) => update("photoQuality", e.target.value)}
              >
                {[
                  "high-resolution",
                  "ultra-HD",
                  "4K",
                  "cinematic",
                  "artistic",
                ].map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter */}
          <div className="row">
            <label>Photo Filter</label>
            <select
              value={form.filter}
              onChange={(e) => update("filter", e.target.value)}
            >
              {[
                "none",
                "warm",
                "cool",
                "sepia",
                "black-and-white",
                "cinematic",
                "vivid",
                "retro",
              ].map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="actions">
            <button type="submit">Generate Prompt</button>
            <button type="button" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Prompt Display */}
      {prompt && (
        <div className="prompt-card">
          <h3>Generated Prompt</h3>
          <textarea readOnly rows={8} value={prompt} />
          <div className="actions">
            <button onClick={() => copyPrompt()}>
              {copied ? "Copied!" : "Copy Prompt"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
