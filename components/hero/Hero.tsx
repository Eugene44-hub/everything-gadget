import React from "react";
import Button from "../reusable/button/Button";
import styles from "./Hero.module.scss";

const Hero: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className={`${styles.container} h-[344px] md:h-[560px] w-full`}>
        <div className="flex flex-col h-full justify-center items-center text-center">
          <header className={`${styles.header} md:w-[60%] lg:w-[35%] `}>
            Find your Best tech Gadgets
          </header>
          <p
            className={`${styles.text} w-[90%] md:w-[80%] lg:w-[45%] mt-[16px] `}
          >
            We are bringing shopping to your doorstep with everything gadget,you
            can now shop for all your gadget and accesories with ease
          </p>
          <div className="w-[210px] md:w-[377px] mt-[24px] md:mt-[32px]">
            <Button title="Shop Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
