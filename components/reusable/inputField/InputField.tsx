import React, { useState } from "react";
import styles from "./InputField.module.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { InputProps } from "../../../types/types";

const InputField = ({ label, inputType, placeholder }: InputProps) => {
  const [toggleType, setToggleType] = useState<Boolean>(false);

  return (
    <form action="">
      <label className={`${styles.label} font-medium leading-[100%] mb-[8px]`}>
        {label}
      </label>
      <div
        className={`${styles.inputContainer} flex items-center h-[50px] border-[0.5px] border-opacity-80 px-[20px]`}
      >
        <input
          type={toggleType ? inputType : "text"}
          className={`${styles.input} outline-none flex-1  h-full  `}
          placeholder={placeholder}
        />
        {inputType === "password" && (
          <div onClick={() => setToggleType(!toggleType)}>
            {toggleType ? (
              <AiOutlineEye className="w-6 h-6 text-[#939A93] cursor-pointer" />
            ) : (
              <AiOutlineEyeInvisible className="w-6 h-6 text-[#939A93] cursor-pointer" />
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default InputField;
