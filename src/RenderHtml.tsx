import React from "react";

interface RenderHtmlType {
  data: string;
}

function RenderHtml({ data }: RenderHtmlType) {
  return <div id="preview" dangerouslySetInnerHTML={{ __html: data }}></div>;
}

export default RenderHtml;
