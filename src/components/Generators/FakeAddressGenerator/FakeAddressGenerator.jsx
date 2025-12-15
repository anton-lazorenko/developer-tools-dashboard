import { useState } from "react";
import styles from "./fakeAddressGenerator.module.scss";
import Button from '../../Button';
import Card from '../../Card';
import copyIcon from '../../../assets/icons/copy-icon.svg';

const streets = ["Maple St.", "Oak Ave.", "Pine Rd.", "Cedar Blvd.", "Elm St.", "Birch Ln."];
const cities = ["Springfield", "Rivertown", "Lakeside", "Hillview", "Greenville", "Brookfield"];
const states = ["NY", "CA", "TX", "FL", "IL", "WA"];
const zipCodes = ["10001", "90210", "73301", "33101", "60601", "98001"];

export function FakeAddressGenerator() {
  const [address, setAddress] = useState("");

  const generate = () => {
    const street = streets[Math.floor(Math.random() * streets.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const state = states[Math.floor(Math.random() * states.length)];
    const zip = zipCodes[Math.floor(Math.random() * zipCodes.length)];
    const houseNumber = Math.floor(Math.random() * 9999) + 1;

    setAddress(`${houseNumber} ${street}, ${city}, ${state} ${zip}`);
  };

  return (
    <Card className={styles.cardContainer}>
      <h2>Fake Address Generator</h2>
      <input className={styles.input} type="text" readOnly value={address} />
      <div className={styles.buttonsGroup}>
        <Button onClick={generate}>Generate Address</Button>
        <Button className={styles.iconButton} onClick={() => navigator.clipboard.writeText(address)}>
          <img src={copyIcon} width={20} height={20} fill='white' alt="copy" />
        </Button>
      </div>
    </Card>
  );
}