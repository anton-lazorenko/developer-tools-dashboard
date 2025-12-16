import styles from './layout.module.scss';

import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Outlet } from "react-router-dom";

function Layout() {

  const theme = useSelector(state => state.theme.mode);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  console.log("Theme state:", useSelector(state => state));

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
