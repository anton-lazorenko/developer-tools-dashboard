import styles from './encodersPage.module.scss';

import { Base64 } from '../../components/Encoders/Base64/Base64';
import { EncoderHTML } from '../../components/Encoders/EncoderHTML/EncoderHtml';
import { EncoderURL } from '../../components/Encoders/EncoderURL/EncoderURL';

const EncodersPage = () => {
  return (
    <div className={styles.encodersContainer}>
      <Base64 />
      <EncoderHTML />
      <EncoderURL />
    </div>
  );
};

export default EncodersPage;