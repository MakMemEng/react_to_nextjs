import { useEffect } from "react";

export const useBgLightBlue = () => {
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
};
