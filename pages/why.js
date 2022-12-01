import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>The Why</h1>
        <br/>
        <br/>
        <h2>Let's dig into the WHY a little more...</h2>
        <br/>
        <br/>
        <h3><em>Teamwork makes the Dreamwork</em></h3>
        <a className={styles.card}>
          The ability to join an established company that offers a Graduate Programme, 
          promotes on-the-job learning and values mentorship aligns with 
          my trajectory towards growth.
        <br/>
        <br/>
          Similarities between my reasons for moving into Software Development and SovTech: 
          <ul>
            <li>The ability to solve people's problems and maximize their productivity.</li>
            <li>I have an innate need to help people.</li>
            <li>Oppportunity to collaborate with team members.</li>
            <li>Have a place to practice and gain exposure to designing and building a variety of applications.</li>
            <li>Allow for mentorship and the ability to be in an environement of mutual respect.</li>
          </ul>  
        </a>        
      </main>
    </div>
  );
}
