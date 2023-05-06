"use client";
// from https://github.com/kulkarniankita/discover-coffee-stores
import styles from "../styles/page.module.css";
import Banner from "@/components/Banner";
export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("hi banner button");
  };

  return (
    <div className="styles.container">
      <head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main className={styles.container}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
