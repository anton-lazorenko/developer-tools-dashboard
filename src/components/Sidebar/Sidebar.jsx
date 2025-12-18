import styles from './sidebar.module.scss';
import { NavLink } from "react-router-dom";
import { Dropdown } from '../Dropdown/Dropdown';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>
          <Dropdown title='Generators'>
            <li><NavLink to='/generators' className={({ isActive }) => isActive ? styles.active : styles.default}>Generators</NavLink></li>
          </Dropdown>
          <Dropdown title='Encoders'>
            <li><NavLink to='/encoders' className={({ isActive }) => isActive ? styles.active : styles.default}>Encoders</NavLink></li>
          </Dropdown>
          <Dropdown title='Converters'>
            <li><NavLink to='/converters' className={({ isActive }) => isActive ? styles.active : styles.default}>Converters</NavLink></li>
          </Dropdown>
        </ul>
      </nav>
    </aside>
  );
};

