import * as React from "react";
import styles from "./TextArea.module.scss";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return <textarea className={styles["text-box"]} ref={ref} {...props} />;
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
