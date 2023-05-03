import React from "react";
import styles from "./Input.module.scss";

interface Props {
  onChange?: () => void;
  disabled?: boolean;
  type: string;
  placeholder: string;
  id: string;
  value?: string;
  size: string;
}

function Input({
  onChange,
  disabled = false,
  type,
  placeholder,
  id,
  value,
  size,
}: Props): JSX.Element {
  // const className =
  //   variant === "primary"
  //     ? styles.primary
  //     : variant === "secondary"
  //     ? styles.secondary
  //     : styles.error;
  return (
    <input
      className={`${styles["form-input"]} ${size}`}
      onClick={onChange}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
    />
  );
}

export default Input;
