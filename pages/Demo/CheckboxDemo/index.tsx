import { Checkbox } from "@/component/Checkbox";
import styles from "/Users/mozilor/Desktop/assignment/component-ui/component-ui/component/Checkbox/Checkbox.module.scss";

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
