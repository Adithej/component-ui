import styles from "./Checkbox.module.scss";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { CheckIcon } from "@radix-ui/react-icons";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={styles["checkbox-primitive"]}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={styles["checkbox-primitive-indicator"]}
    >
      <CheckIcon className={styles["check"]} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
