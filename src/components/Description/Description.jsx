import styles from './description.module.scss';

export const Description = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Description</h3>
      <p className={styles.description}>
        {children}
      </p>
    </div>
  );
};
