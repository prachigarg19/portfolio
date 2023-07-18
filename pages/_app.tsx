import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader/Preloader";

export default function App({ Component, pageProps }: AppProps) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 9000);
  });
  return isReady ? (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) : (
    <Preloader />
  );
}
