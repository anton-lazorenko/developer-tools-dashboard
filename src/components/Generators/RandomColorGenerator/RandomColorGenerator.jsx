import styles from './randomColorGenerator.module.scss';
import copyIcon from '../../../assets/icons/copy-icon.svg';

import { useState } from 'react';
import { Button } from '../../Button/Button';
import { Card } from '../../Card/Card';
import { Description } from '../../Description/Description';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const RandomColorGenerator = () => {
  const [colors, setColors] = useState([]);


  const generatePalette = () => {
    const newColors = Array.from({ length: 5 }, () => getRandomColor());
    setColors(newColors);
  };

  return (
    <div className={styles.wrapper}>
      <Card>
        <h2>Random Color Generator</h2>
        <Button onClick={generatePalette}>
          Generate Palette
        </Button>
        <div style={{ display: 'flex', gap: '24px' }}>
          {colors.map((color, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div className={styles.colors}
                style={{ "--bg": color }} />
              <p style={{ marginTop: '5px', fontSize: '12px' }}>{color}</p>
              <Button
                className={styles.iconButton}
                onClick={() => {
                  navigator.clipboard.writeText(color);
                }}>
                <img src={copyIcon} width={20} height={20} fill='white' alt="copy" />
              </Button>
            </div>
          ))}
        </div>
      </Card>
      <Description>
        The Random Color Generator allows you to instantly generate random colors for design and development tasks. It is useful for choosing color palettes, testing UI themes, highlighting elements, or creating visual placeholders. This tool helps designers and developers experiment with colors quickly without manually picking or calculating color values.
      </Description>
    </div>
  );
};


