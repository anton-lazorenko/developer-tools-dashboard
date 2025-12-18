import styles from './generatorsPage.module.scss';
import { GeneratorUUID } from '../../components/Generators/GeneratorUUID/GeneratorUUID';
import { PasswordGenerator } from '../../components/Generators/PasswordGenerator/PasswordGenerator';
import { RandomColorGenerator } from '../../components/Generators/RandomColorGenerator/RandomColorGenerator';
import { UsernameGenerator } from '../../components/Generators/UsernameGenerator/UsernameGenerator';
import { FakeAddressGenerator } from '../../components/Generators/FakeAddressGenerator/FakeAddressGenerator';

const GeneratorsPage = () => {
  return (
    <div className={styles.generatorsContainer}>
      <GeneratorUUID />
      <PasswordGenerator />
      <RandomColorGenerator />
      <UsernameGenerator />
      <FakeAddressGenerator />
    </div>
  );
};

export default GeneratorsPage;