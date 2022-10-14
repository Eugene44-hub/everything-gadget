import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import About from "./About";
import Hero from "../components/hero/Hero";
import SmallNav from "../components/reusable/smallNav/SmallNav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <About/> */}
      <Hero />
      <SmallNav />
    </div>
  );
};

export default Home;
