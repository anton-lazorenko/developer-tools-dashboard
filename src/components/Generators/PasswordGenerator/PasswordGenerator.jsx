import { useState } from "react";
import styles from './passwordGenerator.module.scss';
import { Button } from '../../Button/Button';
import { Card } from '../../Card/Card';
import { Checkbox } from '../../Checkbox/Checkbox';
import { Description } from '../../Description/Description';
import copyIcon from '../../../assets/icons/copy-icon.svg';

export const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

    let chars = lower;
    if (includeUpper) chars += upper;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <div className={styles.wrapper}>
      <Card>
        <h2>Password Generator</h2>
        <label className={styles.label}>
          Length:
          <input
            className={styles.input}
            type="number"
            value={length}
            min={4}
            max={32}
            onChange={(e) => setLength(+e.target.value)}
          />
        </label>
        <div className={styles.checkboxes}>
          <label className={styles.label}>
            <Checkbox
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
            />
            Uppercase
          </label>
          <label className={styles.label}>
            <Checkbox
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Numbers
          </label>
          <label className={styles.label}>
            <Checkbox
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Symbols
          </label>
        </div>
        <input type="text" readOnly value={password} />
        <div className={styles.buttonsGroup}>
          <Button onClick={generatePassword}>Generate</Button>
          <Button className={styles.iconButton} onClick={() => navigator.clipboard.writeText(password)}>
            <img src={copyIcon} width={20} height={20} fill='white' alt="copy" />
          </Button>
        </div>
      </Card>
      <Description>
        The Password Generator helps you create strong and secure passwords in seconds. It can generate combinations of letters, numbers, and special characters to meet modern security requirements. This tool is useful for testing authentication systems, creating temporary credentials, or generating safe passwords without reusing personal or weak ones.
      </Description>
    </div>
  );
};
