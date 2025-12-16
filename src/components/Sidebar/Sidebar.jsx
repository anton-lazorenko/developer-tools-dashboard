import styles from './sidebar.module.scss';
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>
          <li><NavLink to='/generators' className={({ isActive }) => isActive ? styles.active : styles.default}>Generators</NavLink></li>
          <li><NavLink to='/encoders' className={({ isActive }) => isActive ? styles.active : styles.default}>Encoders/Decoders</NavLink></li>
          <li><NavLink to='/converters' className={({ isActive }) => isActive ? styles.active : styles.default}>Converters</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

