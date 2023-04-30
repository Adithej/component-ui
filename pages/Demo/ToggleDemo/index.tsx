import { Bold } from "lucide-react";

import { Toggle } from "@/component/Toggle";
import styles from "D:/myProject/component-shad/component-ui/component/Toggle/Toggle.module.scss";

export function ToggleDemo() {
  return (
    <Toggle>
      <Bold className={styles["demo-toggle"]} />
    </Toggle>
  );
}
