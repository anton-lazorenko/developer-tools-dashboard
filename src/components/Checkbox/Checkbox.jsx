import styles from "./Checkbox.module.scss";

export const Checkbox = ({ checked, onChange }) => {
  return (
    <input className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};
