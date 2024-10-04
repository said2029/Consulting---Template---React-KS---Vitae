import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";

export default function RechText({
  onChange,
  placeholder,
  value,
}: {
  onChange: (newContent: string) => void;
  placeholder?: string;
  value?: string;
}) {
  // rech text
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
      iframe: true,
      spellcheck: true,
      showCharsCounter: false,
      showWordsCounter: false,
      showXPathInStatusbar: false,
      height: 250,
      toolbarStickyOffset: 3,
    }),
    [placeholder]
  );

  return (
    <JoditEditor
      ref={editor}
      value={value || content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
      onChange={onChange}
    />
  );
}
