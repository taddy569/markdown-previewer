import React, { useState, ChangeEvent } from "react";
import marked from "marked";

import InputMarkdown from "./InputMarkdown";
import RenderHtml from "./RenderHtml";
import { DEFAULT_DATA } from "./data";

marked.setOptions({
  breaks: true,
});

function App() {
  const [content, setContent] = useState<string>(DEFAULT_DATA);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <div id="page">
      <h1 id="article">Markdown Previewer</h1>
      <div id="container">
        <InputMarkdown value={content} onChange={handleChange} />
        <RenderHtml data={marked(content)} />
      </div>
    </div>
  );
}

export default App;
