"use client";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import cls from "classnames";

import styles from "../../../styles/coffee-store.module.css";
import coffeeStoresData from "../../../data/coffee-stores.json";

interface ParamsProp {
  params: { id: string };
}

interface CoffeeStoresProps {
  coffeeStores: { id: number; name: string; imgUrl: string }[];
}

async function getCoffeeStore(id: string) {
  const coffeeStore = coffeeStoresData.find(
    (coffeeStore) => coffeeStore.id.toString() == id
  );
  return coffeeStore;
}

const CoffeeStorePage = async ({ params }: ParamsProp) => {
  const coffeeStore = await getCoffeeStore(params.id);

  return coffeeStore ? (
    <div className={styles.layout}>
      <Head>
        <title>{coffeeStore.name}</title>
        <meta name="description" content={`${coffeeStore.name} coffee store`} />
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">← Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{coffeeStore.name}</h1>
          </div>
          <Image
            src={coffeeStore.imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={coffeeStore.name}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          {coffeeStore.address && (
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/places.svg"
                width="24"
                height="24"
                alt="places icon"
              />
              <p className={styles.text}>{coffeeStore.address}</p>
            </div>
          )}
          {coffeeStore.neighbourhood && (
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/nearMe.svg"
                width="24"
                height="24"
                alt="near me icon"
              />
              <p className={styles.text}>{coffeeStore.neighbourhood}</p>
            </div>
          )}
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width="24"
              height="24"
              alt="star icon"
            />
            <p className={styles.text}>votingCount</p>
          </div>
          <button className={styles.upvoteButton} onClick={() => {}}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>Coffee store not found ...</div>
  );
};
export default CoffeeStorePage;
