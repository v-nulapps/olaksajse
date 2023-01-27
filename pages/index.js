import { useEffect } from "react";
import Head from "next/head";
import { Annie_Use_Your_Telescope } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "@/componens/Header";
import Form from "@/componens/Form";

const annie = Annie_Use_Your_Telescope({ subsets: ["latin"], weight: "400" });

export default function Home() {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
  });

  const odgovori = [
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
    "odgovor1",
  ];

  return (
    <>
      <Head>
        <title>Olaksaj.se</title>
        <meta name="description" content="Sajt gde ti zivot postaje laksi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.leftCol}>
            <h2 className={`${annie.className} ${styles.heading}`}>
              Tema dana:
            </h2>
            <p className={styles.dailyQuestion}>Lorem ipsum</p>
            <div className={styles.answerList}>
              {odgovori.map((odgovor) => {
                return (
                  <p key={odgovor} className={styles.answer}>
                    {odgovor}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={styles.rightCol}>
            <Form />
          </div>
        </div>
      </main>
    </>
  );
}
