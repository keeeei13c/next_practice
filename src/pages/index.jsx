import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import {Header} from 'src/components/Header'
import { useCallback, useEffect,useState} from 'react'
  
export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    () => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
    },
    [count]
  );
  
  useEffect(() => {
    document.body.style.background = "lightblue";
    return () => {
      document.body.style.background = "beige";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
