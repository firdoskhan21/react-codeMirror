import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import CodeMirror from "@uiw/react-codemirror";
// import "codemirror/addon/display/autorefresh";
// import "codemirror/addon/comment/comment";
// import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

export default function CodeBlock() {
  const textAr = useRef(null);
  const code = "const a = 0;";
  const [modeType, setmodeType] = useState("python");
  useEffect(() => {}, []);

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Hii this is code block !!!</h1>
      <select
        style={{ float: "right", margin: "10px" }}
        onChange={e => {
          setmodeType(e.target.value);
        }}
      >
        <option value="python">Python</option>
        <option value="sparql">SparQl</option>
      </select>
      <CodeMirror
        height={"300px"}
        // value={code}
        options={{
          theme: "monokai",
          keyMap: "sublime",
          mode: modeType
        }}
      />
    </div>
  );
}
