import React from "react";
import PromptForm from "./components/PromptForm";

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>AI Photo Edit Prompt Generator</h1>
        <p className="subtitle">
          Fill the form to build a grammatically-correct AI prompt for photo
          editing.
        </p>
      </header>
      <main>
        <PromptForm />
      </main>
      <footer className="app-footer">Made by Akshay Malpani</footer>
    </div>
  );
}
