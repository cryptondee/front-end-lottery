import Head from "next/head"
import Header from "../components/Header"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart contract Raffle</title>
                <meta name="description" content="NDW smartcontract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {/* header / connect button / nav bar */}
            Hello!
        </div>
    )
}
