import styles from './base64.module.scss';

import { useState } from "react";
import { encodeBase64, decodeBase64 } from "../Base64/base64.utils";
import { Button } from '../../Button/Button';
import { Card } from '../../Card/Card';

export const Base64 = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("encode"); // encode или decode

  const result =
    mode === "encode"
      ? encodeBase64(input)
      : decodeBase64(input);

  return (
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
  );
};
