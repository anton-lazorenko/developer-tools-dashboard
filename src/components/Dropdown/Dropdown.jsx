import styles from './dropdown.module.scss';

import { useState } from "react";
// import dropDownArrow from '../../assets/icons/dropDownArrow.svg';
import { Button } from '../Button/Button';
import DropDownArrow from '../../assets/icons/dropDownArrow.svg?react';

export const Dropdown = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.dropdown}>
      <Button
        className={styles.dropdown__trigger}
        onClick={() => setOpen(open => !open)}
      >
        {title}
        <span className={`${styles.arrow} ${open ? styles.open : ""}`}>
          <DropDownArrow className={styles.icon} />
        </span>
      </Button>
      {open && (
        <div className={styles.dropdown__content}>
          {children}
        </div>
      )}
    </div>
  );
};
