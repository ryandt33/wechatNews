import Head from "next/head";
import axios from "axios";
import styles from "../styles/Home.module.scss";
import Articles from "./articles/Articles";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>WeChat @ OCAC Suzhou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <img src="/images/ocac-logo.png" />
          <h1>OCAC WeChat Articles</h1>
        </div>
        <Articles data={props.data}></Articles>
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:5000/api/articles`);
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
