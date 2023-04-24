import { Checkbox } from "@/component/Checkbox";

import styles from "./CheckboxDemo.module.scss";

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
