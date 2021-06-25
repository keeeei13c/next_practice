import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import {Header} from 'src/components/Header'
import { useEffect} from 'react'
  
export default function Home() {

  // const foo = 1;
  //  const handleClick = useCallback((e) => {
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo)
  //  }, []);
  
  useEffect(() => {
    document.body.style.background = "lightblue";
    console.log("マウント時");
    return () => {
      document.body.style.background = "beige";
      console.log("アンマウント時")
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <a
        href="/about"
        // onClick={handleClick}
      >
        button
      </a>
      <Main page="index" />
      <Footer />
    </div>
  )
}
