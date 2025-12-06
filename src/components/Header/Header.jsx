import styles from './header.module.scss';
 
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import Button from "../Button";  

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode); 

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Developer Toolkit 1.0</h1>
      <Button
      className={styles.themeButton} 
      onClick={() => dispatch(toggleTheme())}>
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </Button>
    </header>
  );
};

 
