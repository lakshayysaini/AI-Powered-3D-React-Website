import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, handleSubmit, generatingImg }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI "
        value={prompt}
        rows={5}
        className="aipicker-textarea"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3"></div>
    </div>
  );
};

export default AIPicker;
