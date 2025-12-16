import styles from './encodersPage.module.scss';

import Base64 from '../../components/Encoders/Base64';
import EncoderHTML from '../../components/Encoders/EncoderHTML';
import EncoderURL from '../../components/Encoders/EncoderURL';

export function EncodersPage() {
  return (
    <div className={styles.encodersContainer}>
      <Base64 />
      <EncoderHTML />
      <EncoderURL />
    </div>
  );
}