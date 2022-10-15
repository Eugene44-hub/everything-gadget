import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "../../../types/types";

const Button = ({ title }: ButtonProps) => {
  return (
    <button className={`${styles.button} w-full h-[48px] rounded-[8px]`}>
      {title}
    </button>
  );
};

export default Button;
