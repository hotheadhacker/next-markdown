import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Markdown Editor | isalman.dev</title>
        <meta name="description" content="Online Markdown editor with live privew" />
        <meta name="author" content="isalman.dev, hotheadhacker, Salman Quresi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Online Markdown Editor</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <button className="rounded-full bg-blue-600 text-white hover:bg-violet-600 p-2" onClick={()=> router.push('/editor')}>Start Editing &rarr;</button>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/hotheadhacker/next-markdown" className={styles.card}>
            <h2>Open Source &rarr;</h2>
            <p>This project is fully powered by open-source community</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Live Preview &rarr;</h2>
            <p>Get instent markdown live previews while typing!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Markdown Editor &rarr;</h2>
            <p>Get interactive markdown editor that covers every tools needed. Get Blogging editor experiences.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Cloud Functionalities &rarr;</h2>
            <p>
              *Instantly save, share or edit later your markdown files on the go anywhere form any device.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        
          <span>Developed with ❤️ by <a href="https://isalman.dev?utm=markdown-footer" className="text-purple-600 font-bold hover:underline">Salman Qureshi</a></span> 
          
        
      </footer>
    </div>
  )
}

export default Home
