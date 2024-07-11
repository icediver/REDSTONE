import clsx from "clsx";
import { HTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gray" | "disabled";
  isCircle?: boolean;
}

export function Button({
  children,
  variant = "primary",
  isCircle = false,
  ...rest
}: IButton) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        { [styles.circle]: isCircle },
        rest.className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
