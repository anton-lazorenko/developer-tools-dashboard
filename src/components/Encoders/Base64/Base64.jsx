import styles from './base64.module.scss';

import { useState } from "react";
import { encodeBase64, decodeBase64 } from "../Base64/base64.utils";
import { Button } from '../../Button/Button';
import { Card } from '../../Card/Card';
import { Description } from '../../Description/Description';

export const Base64 = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode"); // encode или decode

  const result =
    mode === "encode"
      ? encodeBase64(input)
      : decodeBase64(input);

  return (
    <div className={styles.wrapper}>
      <Card>
        <h2>Base64 Encoder / Decoder</h2>

        <textarea
          placeholder="Enter text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className={styles.buttonsGroup}>
          <Button
            onClick={() => setMode("encode")}>
            Encode
          </Button>
          <Button
            onClick={() => setMode("decode")}>
            Decode
          </Button>
        </div>

        <textarea
          placeholder="Result"
          value={result}
          readOnly
        />
      </Card>
      <Description>
        The Base64 Encoder allows you to quickly encode text or data into Base64 format. Base64 encoding is commonly used to safely transmit data through systems that support only text, such as APIs, URLs, or configuration files. This tool is useful for testing data transfers, debugging integrations, and preparing encoded values without writing additional code.
      </Description>
    </div>
  );
};
