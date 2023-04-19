import styles from "./Checkbox.module.scss";

import { Checkbox } from "./Checkbox";

export function CheckboxDemo() {
  return (
    <div className={styles["demo"]}>
      <Checkbox id="terms" />
      <label htmlFor="terms" className={styles["demo-label"]}>
        Accept terms and conditions
      </label>
    </div>
  );
}
