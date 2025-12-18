import styles from "./card.module.scss";

export const Card = ({ children, className }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>{children}</div>
  );
};
