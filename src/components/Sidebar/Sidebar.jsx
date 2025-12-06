import styles from './sidebar.module.scss';
import { NavLink } from "react-router-dom";



export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>
          <li><NavLink>Generators</NavLink></li>
          <li><NavLink>Item2</NavLink></li>
          <li><NavLink>Item3</NavLink></li>
          <li><NavLink>Item4</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

