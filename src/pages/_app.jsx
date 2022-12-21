import "src/styles/globals.css";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

const MyApp = ({ Component, pageProps }) => {
  // counter = { count, isShow, handleClick, handleDisplay }
  const counter = useCounter();
  // inputArray = { text, array, handleChange, handleAdd }
  const inputArray = useInputArray();
  useBgLightBlue();
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />;
    </>
  );
};

export default MyApp;
