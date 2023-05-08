"use client";
// from https://github.com/kulkarniankita/discover-coffee-stores
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hi banner button");
  };

  return (
    <div className="styles.container">
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="hero-image"
          />
          <Card
            name="DarkHourse Coffee"
            imgUrl="/static/hero-image.png"
            href="/coffee-store/darkhorse-coffee"
          />
        </div>
      </main>
    </div>
  );
}
