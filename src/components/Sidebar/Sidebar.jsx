import styles from './sidebar.module.scss';
import { NavLink } from "react-router-dom";
import { Dropdown } from '../Dropdown/Dropdown';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>

          <Dropdown title='Generators'>
            <li><NavLink to='/generators/uuid-generator' className={({ isActive }) => isActive ? styles.active : styles.default}>UUIDGenerator</NavLink></li>
            <li><NavLink to='/generators/fake-address-generator' className={({ isActive }) => isActive ? styles.active : styles.default}>Fake Address Generator</NavLink></li>
            <li><NavLink to='/generators/password-generator' className={({ isActive }) => isActive ? styles.active : styles.default}>Password Generator</NavLink></li>
            <li><NavLink to='/generators/username-generator' className={({ isActive }) => isActive ? styles.active : styles.default}>Username Generator</NavLink></li>
            <li><NavLink to='/generators/colors-generator' className={({ isActive }) => isActive ? styles.active : styles.default}>Colors Generator</NavLink></li>
          </Dropdown>

          <Dropdown title='Encoders'>
            <li><NavLink to='/encoders/base-encoder' className={({ isActive }) => isActive ? styles.active : styles.default}>Base 64</NavLink></li>
            <li><NavLink to='/encoders/html-encoder' className={({ isActive }) => isActive ? styles.active : styles.default}>HTML Encoder</NavLink></li>
            <li><NavLink to='/encoders/url-encoder' className={({ isActive }) => isActive ? styles.active : styles.default}>URL Encoder</NavLink></li>
          </Dropdown>
        </ul>
      </nav>
    </aside>
  );
};

