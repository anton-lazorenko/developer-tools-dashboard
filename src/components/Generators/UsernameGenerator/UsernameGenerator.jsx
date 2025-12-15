import { useState } from "react";
import styles from "./UsernameGenerator.module.scss";
import Button from "../../Button";
import Card from '../../Card';
import copyIcon from "../../../assets/icons/copy-icon.svg";
import Checkbox from '../../Checkbox/Checkbox';

const adjectives = [
  "Swift", "Silent", "Electric", "Neon", "Cosmic", "Shadow", "Funky", "Lucky", "Rapid", "Pixel",
  "Crimson", "Icy", "Golden", "Phantom", "Solar", "Turbo", "Infinite", "Stealth", "Arctic", "Digital",
  "Viral", "Static", "Omega", "Prime", "Wild", "Fierce", "Iron", "Frozen", "Eternal", "Mystic"
];

const nouns = [
  "Raccoon", "Wizard", "Falcon", "Tiger", "Knight", "Pixel", "Wolf", "Ninja", "Coder", "Ghost",
  "Rider", "Dragon", "Samurai", "Viper", "Storm", "Phoenix", "Comet", "Bishop", "Fox", "Hunter",
  "Hawk", "Pirate", "Rhino", "Panda", "Robot", "Shark", "Sniper", "Rebel", "Dev", "Beast"
];

export function UsernameGenerator() {
  const [username, setUsername] = useState("");
  const [noNumbers, setNoNumbers] = useState(false);

  const generate = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    const number = noNumbers ? "" : Math.floor(Math.random() * 999);

    setUsername(`${adj}${noun}${number}`);
  };

  const copy = () => navigator.clipboard.writeText(username);

  return (
    <Card className={styles.wrappper}>
      <h2>Username Generator</h2>
      <label className={styles.checkboxRow}>
        <Checkbox type="checkbox"
          checked={!noNumbers}
          onChange={() => setNoNumbers(!noNumbers)} />
        Numbers
      </label>
      <input className={styles.input} type="text" readOnly value={username} />

      <div className={styles.buttonsGroup}>
        <Button onClick={generate}>Generate Username</Button>
        <Button
          className={styles.iconButton}
          onClick={copy}>
          <img src={copyIcon} width={20} height={20} alt="copy" />
        </Button>
      </div>
    </Card>
  );
}

