"use client";
// from https://github.com/kulkarniankita/discover-coffee-stores
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

import coffeeStoresData from "../data/coffee-stores.json";

interface HomeProps {
  coffeeStores: { id: number; name: string; imgUrl: string }[];
}

async function getCoffeeStores() {
  const coffeeStores = coffeeStoresData;
  return coffeeStores;
}

export default async function Home() {
  const coffeeStores = await getCoffeeStores();

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
        </div>
        {coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
