import { useState } from "react";
import styles from "./UsernameGenerator.module.scss";
import { Button } from "../../Button/Button";
import { Card } from '../../Card/Card';
import copyIcon from "../../../assets/icons/copy-icon.svg";
import { Checkbox } from '../../Checkbox/Checkbox';
import { Description } from '../../Description/Description';

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

export const UsernameGenerator = () => {
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
    <div className={styles.wrapper}>
      <Card className={styles.wrappper}>
        <h2>Username Generator</h2>
        <label className={styles.checkboxRow}>
          <Checkbox type="checkbox"
            checked={!noNumbers}
            onChange={() => setNoNumbers(!noNumbers)} />
          Numbers
        </label>
        <input type="text" readOnly value={username} />

        <div className={styles.buttonsGroup}>
          <Button onClick={generate}>Generate Username</Button>
          <Button
            className={styles.iconButton}
            onClick={copy}>
            <img src={copyIcon} width={20} height={20} alt="copy" />
          </Button>
        </div>
      </Card>
      <Description>The Username Generator helps you quickly create unique and readable usernames for applications, games, websites, and testing environments. It combines words, numbers, and patterns to generate usernames that look natural and realistic. This tool is especially useful when you need placeholder accounts, demo data, or test users without manually inventing names every time.</Description>
    </div>
  );
};

