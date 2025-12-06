import styles from './generatorsPage.module.scss'
import { GeneratorUUID }  from '../../components/Generators/GeneratorUUID'
import { PasswordGenerator }  from '../../components/Generators/PasswordGenerator'
import { RandomColorGenerator }  from '../../components/Generators/RandomColorGenerator'
import { UsernameGenerator }  from '../../components/Generators/UsernameGenerator'
import { FakeAddressGenerator }  from '../../components/Generators/FakeAddressGenerator'
 
export function GeneratorsPage() {
  return(
    <div className={styles.generatorsContainer}>
      <GeneratorUUID />
      <PasswordGenerator />
      <RandomColorGenerator /> 
      <UsernameGenerator /> 
      <FakeAddressGenerator className={styles.address} />  
    </div>
  )
}