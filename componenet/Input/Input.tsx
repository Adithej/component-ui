import React from "react";
import styles from "./Input.module.scss";

interface Props {
  onChange?: () => void;
  disabled?: boolean;
  type: string;
  placeholder: string;
  variant?: "primary" | "secondary" | "error";
  icon: React.ReactNode;
  children: React.ReactNode;
}

function Input({
  onChange,
  disabled = false,
  type,
  placeholder,
  variant = "primary",
  icon,
  children,
}: Props): JSX.Element {
  const className =
    variant === "primary"
      ? styles.primary
      : variant === "secondary"
      ? styles.secondary
      : styles.error;
  return (
    <div className={styles.formElement}>
      <span className={styles.label}>{children}</span>
      <input
        className={`${styles.input} ${className}`}
        onClick={onChange}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
      />
      <span className={styles.icon}>{icon}</span>
    </div>
  );
}

export default Input;
