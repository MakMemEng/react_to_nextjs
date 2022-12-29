import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  console.log(router);

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default: {
        return "";
      }
    }
    // return router.pathname === "/" ? "lightblue" : "beige";
  }, [router.pathname]);
  // useEffect: マウント時とアンマウント時の処理を切り分けする
  // Home Componentがマウントされるタイミングで実行
  // マウント: <div>配下がDOMに変換されるタイミング
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    // CleanUp Function
    // アンマウントするタイミングで実行
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
