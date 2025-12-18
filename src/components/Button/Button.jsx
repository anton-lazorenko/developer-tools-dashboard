import styles from "./button.module.scss";

export const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${className || ""}`}
  >
    {children}
  </button>
);
