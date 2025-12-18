import styles from './encoderHTML.module.scss';

import { useState } from "react";
import { encodeHTML, decodeHTML } from "./html.utils";
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';

export const EncoderHTML = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");

  const result =
    mode === "encode"
      ? encodeHTML(input)
      : decodeHTML(input);

  return (
    <Card>
      <h2>HTML Encoder / Decoder</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter HTML or text"
        className="html-input"
      />

      <div className={styles.buttonsGroup}>
        <Button onClick={() => setMode("encode")}>Encode</Button>
        <Button onClick={() => setMode("decode")}>Decode</Button>
      </div>

      <textarea
        value={result}
        readOnly
        placeholder="Result"
        className="html-result"
      />
    </Card>
  );
};
