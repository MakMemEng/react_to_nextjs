import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect } from "react";
import Link from "next/link";

const Home = () => {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  // useEffect: マウント時とアンマウント時の処理を切り分けする
  // Home Componentがマウントされるタイミングで実行
  // マウント: <div>配下がDOMに変換されるタイミング
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    // アンマウントするタイミングで実行
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link href="/about" onClick={handleClick}>
        ボタン
      </Link>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default Home;
