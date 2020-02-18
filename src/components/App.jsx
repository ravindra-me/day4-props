import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function createEmoji(emojiTerm) {
  return (
    <Entry
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <di className="dictionary">{emojipedia.map(createEmoji)}</di>
    </div>
  );
}

export default App;
