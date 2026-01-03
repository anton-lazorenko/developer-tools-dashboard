import { useState, useRef } from 'react';
import styles from './pngToWebConverter.module.scss';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';

export const PngToWebConverter = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [webpUrl, setWebpUrl] = useState(null);
  const [quality, setQuality] = useState(80);
  const dropRef = useRef();

  // Обработка выбора файла
  const handleFile = (selected) => {
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setWebpUrl(null); // сбрасываем предыдущий WebP
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files && e.target.files[0]);
  };

  // Drag & Drop
  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile(dropped);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Конвертация PNG → WebP
  const convertToWebP = () => {
    if (!file) return;

    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          const webp = URL.createObjectURL(blob);
          setWebpUrl(webp);
        },
        'image/webp',
        quality / 100
      );
    };

    img.src = url;
  };

  return (
    <Card>
      <div className={styles.wrapper}>
        <h2>PNG → WebP Converter</h2>

        <div
          className={styles.dropZone}
          ref={dropRef}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {file ? <p>File: {file.name}</p> : <p>Drag & drop PNG here or click to select</p>}
          <input type="file" accept="image/png" onChange={handleFileChange} />
        </div>

        <label className={styles.quality}>
          Quality: {quality}
          <input
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          />
        </label>

        <Button onClick={convertToWebP} disabled={!file}>
          Convert to WebP
        </Button>

        {preview && (
          <div className={styles.preview}>
            <p>Preview PNG:</p>
            <img src={preview} alt="Preview" />
          </div>
        )}

        {webpUrl && (
          <div className={styles.download}>
            <p>WebP ready:</p>
            <a href={webpUrl} className={styles.downloadButton} download="image.webp">
              Download WebP
            </a>
          </div>
        )}
      </div>
    </Card>
  );
};
