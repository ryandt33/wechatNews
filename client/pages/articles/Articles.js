import axios from "axios";
import Link from "next/link";
import styles from "./Articles.module.scss";

export default function Articles(data) {
  return (
    <div className={styles.articleBox}>
      {" "}
      <div className={styles.articleBox__row}>
        {data.data
          .slice(0, 10)
          .reverse()
          .map((art) => (
            <a href={art.link} key={art._id} target="_blank">
              <div className={styles.articleBox__cell}>
                <img
                  src={`data:image/jpeg;base64,${art.imageURL}`}
                  className={styles.articleBox__cell__image}
                />
                <h2 className={styles.articleBox__cell__text}>{art.title}</h2>1
                <div className={styles.articleBox__cell__overlay}></div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
