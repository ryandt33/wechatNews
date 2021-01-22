import styles from "./Articles.module.scss";

export default function Articles(data) {
  return (
    <div className={styles.articleBox}>
      {" "}
      {data.data && (
        <div className={styles.articleBox__row}>
          {data.data.slice(0, 3).map((art) => (
            <a
              href={art.link}
              key={art._id}
              target="_blank"
              className={styles.articleBox__cell}
            >
              <div>
                <img
                  src={`data:image/jpeg;base64,${art.imageURL}`}
                  className={styles.articleBox__cell__image}
                />
                <div className={styles.articleBox__cell__overlay}></div>
                <h2 className={styles.articleBox__cell__text}>{art.title}</h2>
              </div>
            </a>
          ))}
        </div>
      )}
      {data.data.length > 3 && (
        <div className={styles.articleBox__row}>
          {data.data.slice(3, 6).map((art) => (
            <a
              href={art.link}
              key={art._id}
              target="_blank"
              className={styles.articleBox__cell}
            >
              <div>
                <img
                  src={`data:image/jpeg;base64,${art.imageURL}`}
                  className={styles.articleBox__cell__image}
                />
                <div className={styles.articleBox__cell__overlay}></div>
                <h2 className={styles.articleBox__cell__text}>{art.title}</h2>
              </div>
            </a>
          ))}
        </div>
      )}{" "}
      {data.data.length > 6 && (
        <div className={styles.articleBox__row}>
          {data.data.slice(6, 9).map((art) => (
            <a
              href={art.link}
              key={art._id}
              target="_blank"
              className={styles.articleBox__cell}
            >
              <div>
                <img
                  src={`data:image/jpeg;base64,${art.imageURL}`}
                  className={styles.articleBox__cell__image}
                />
                <div className={styles.articleBox__cell__overlay}></div>
                <h2 className={styles.articleBox__cell__text}>{art.title}</h2>
              </div>
            </a>
          ))}
        </div>
      )}{" "}
      {data.data.length > 9 && (
        <div className={styles.articleBox__row}>
          {data.data.slice(9, 12).map((art) => (
            <a
              href={art.link}
              key={art._id}
              target="_blank"
              className={styles.articleBox__cell}
            >
              <div>
                <img
                  src={`data:image/jpeg;base64,${art.imageURL}`}
                  className={styles.articleBox__cell__image}
                />
                <div className={styles.articleBox__cell__overlay}></div>
                <h2 className={styles.articleBox__cell__text}>{art.title}</h2>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
