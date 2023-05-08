import Link from "next/link";
import Image from "next/image";
import cls from "classnames";

import styles from "./Card.module.css";

interface CardProps {
  name: string;
  imgUrl: string;
  href: string;
}
const Card = ({ name, imgUrl, href }: CardProps) => {
  return (
    <Link href={href} className={styles.cardLink}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{name}</h2>
        </div>
        <div className={styles.cardHeaderWrapper}>
          <Image
            className={styles.cardImage}
            src={imgUrl}
            width={260}
            height={160}
            alt={`Image of ${name}`}
          />
        </div>
      </div>
    </Link>
  );
};
export default Card;
