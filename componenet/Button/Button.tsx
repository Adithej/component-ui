import React from "react";
import styles from "./Button.module.scss";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  disabled = false,
  variant = "primary",
  icon,
  children,
}: Props) {
  const className =
    variant === "primary"
      ? styles.primary
      : variant === "secondary"
      ? styles.secondary
      : styles.withLabel;
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{children}</span>
    </button>
  );
}
