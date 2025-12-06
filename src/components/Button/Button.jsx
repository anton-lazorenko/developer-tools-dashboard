import styles from "./button.module.scss";

export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className || ""}`}
    >
      {children}
    </button>
  );
}
