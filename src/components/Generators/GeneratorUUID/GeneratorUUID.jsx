import { useState } from "react";
import styles from "./generatorUUID.module.scss";
import { Button } from '../../Button/Button';
import { Card } from '../../Card/Card';
import copyIcon from '../../../assets/icons/copy-icon.svg';
import { Description } from '../../Description/Description';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const GeneratorUUID = () => {
  const [uuid, setUuid] = useState(generateUUID());

  const handleGenerate = () => setUuid(generateUUID());

  return (
    <div className={styles.wrapper}>
      <Card>
        <h2>UUID Generator</h2>
        <p className={styles.uuid}>{uuid}</p>
        <div className={styles.buttonsGroup}>
          <Button onClick={handleGenerate}>
            Generate UUID
          </Button>
          <Button className={styles.iconButton} onClick={() => navigator.clipboard.writeText(uuid)}>
            <img src={copyIcon} width={20} height={20} fill='white' alt="copy" />
          </Button>
        </div>
      </Card>
      <Description>
        The UUID Generator allows you to instantly create universally unique identifiers (UUIDs) for use in databases, APIs, and distributed systems. UUIDs are commonly used to uniquely identify records without relying on incremental IDs, making them ideal for scalable and decoupled applications. This tool helps you generate reliable identifiers quickly and without collisions.
      </Description>
    </div>
  );
};
