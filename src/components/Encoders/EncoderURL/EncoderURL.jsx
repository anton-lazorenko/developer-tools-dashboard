import styles from './encoderURL.module.scss';

import { useState } from "react";
import { encodeURL, decodeURL } from "./url.utils";

import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';

export const EncoderURL = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");

  const result =
    mode === "encode"
      ? encodeURL(input)
      : decodeURL(input);

  return (
    <Card>
      <h2>URL Encoder / Decoder</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text or URL"
        className="url-input"
      />

      <div className={styles.buttonsGroup}>
        <Button onClick={() => setMode("encode")}>Encode</Button>
        <Button onClick={() => setMode("decode")}>Decode</Button>
      </div>

      <textarea
        value={result}
        readOnly
        placeholder="Result"
        className="url-result"
      />
    </Card>
  );
};