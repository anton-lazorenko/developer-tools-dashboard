import styles from './encoderHTML.module.scss';

import { useState } from "react";
import { encodeHTML, decodeHTML } from "./html.utils";
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { Description } from '../../Description/Description';

export const EncoderHTML = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");

  const result =
    mode === "encode"
      ? encodeHTML(input)
      : decodeHTML(input);

  return (
    <div className={styles.wrapper}>
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
      <Description>
        The HTML Encoder helps you safely encode text by converting special characters into HTML entities. This is useful when displaying user-generated content, preventing layout issues, or avoiding unintended HTML execution. The tool ensures that text is rendered exactly as intended without being interpreted as HTML markup.
      </Description>
    </div>
  );
};
