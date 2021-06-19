import React, { ChangeEventHandler } from "react";

interface InputMarkdownType {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
}

function InputMarkdown({ onChange, value }: InputMarkdownType) {
  return <textarea id="editor" onChange={onChange} value={value}></textarea>;
}

export default InputMarkdown;
