import styles from './layout.module.scss';
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Header } from '../components/Header/Header';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";

function Layout() {
  const theme = useSelector(state => state.theme.mode);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.mainElements}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
