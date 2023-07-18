import Head from "next/head";
import Layout from "../Layout/Layout";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>PRACHI GARG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About />
      </main>
    </>
  );
}
