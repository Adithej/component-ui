import React from "react";
import styles from "./Input.module.scss";

interface Props {
  onChange?: () => void;
  disabled?: boolean;
  type: string;
  placeholder: string;
}

function Input({
  onChange,
  disabled = false,
  type,
  placeholder,
}: Props): JSX.Element {
  // const className =
  //   variant === "primary"
  //     ? styles.primary
  //     : variant === "secondary"
  //     ? styles.secondary
  //     : styles.error;
  return (
    <input
      className={styles["form-input"]}
      onClick={onChange}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
