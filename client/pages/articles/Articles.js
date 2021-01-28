import styles from "./Articles.module.scss";
import { useState, useEffect } from "react";

export default function Articles(data) {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState([0]);

  const maxPage = Math.ceil(data.data.length / 12);

  useEffect(() => {
    console.log(maxPage);
    for (let x = 1; x < maxPage; x++) {
      setPageCount((pageCount) => [...pageCount, x]);
    }
  }, []);

  useEffect(() => {
    console.log(pageCount);
  }, [pageCount]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className={styles.articleBox}>
      {" "}
      {data.data && (
        <div className={styles.articleBox__row}>
          {data.data.slice(12 * page + 0, 12 * page + 3).map((art) => (
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
      {data.data.length > 12 * page + 3 && (
        <div className={styles.articleBox__row}>
          {data.data.slice(12 * page + 3, 12 * page + 6).map((art) => (
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
      {data.data.length > 12 * page + 6 && (
        <div className={styles.articleBox__row}>
          {data.data.slice(12 * page + 6, 12 * page + 9).map((art) => (
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
      {data.data.length > 12 * page + 9 && (
        <div className={styles.articleBox__row}>
          {data.data.slice(12 * page + 9, 12 * page + 12).map((art) => (
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
      <div className={styles.pagination}>
        {pageCount &&
          pageCount.map((page) => (
            <span
              key={`paginationNo:${page}`}
              className={styles.pagination__numHold}
              onClick={() => setPage(page)}
            >
              <span className={styles.pagination__num}>{page + 1}</span>
            </span>
          ))}
      </div>
    </div>
  );
}
