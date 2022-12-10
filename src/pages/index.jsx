import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  // useEffect: マウント時とアンマウント時の処理を切り分けする
  // Home Componentがマウントされるタイミングで実行
  // マウント: <div>配下がDOMに変換されるタイミング
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    // CleanUp Function
    // アンマウントするタイミングで実行
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
