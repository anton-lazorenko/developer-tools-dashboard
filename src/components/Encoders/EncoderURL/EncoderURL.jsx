import styles from './encoderURL.module.scss';

import { useState } from "react";
import { encodeURL, decodeURL } from "./url.utils";

import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { Description } from '../../Description/Description';

export const EncoderURL = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode");

  const result =
    mode === "encode"
      ? encodeURL(input)
      : decodeURL(input);

  return (
    <div className={styles.wrapper}>
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
      <Description>
        The URL Encoder allows you to encode text into a URL-safe format by replacing special characters with percent-encoded values. This is essential when working with query parameters, API requests, or dynamic URLs. The tool helps prevent broken links and ensures data is transmitted correctly across web systems.
      </Description>
    </div>
  );
};