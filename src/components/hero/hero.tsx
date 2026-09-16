import styles from "./hero.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.container} >
        <Image src="/logo.png" alt="The Nexment Project" height={50} width={150} /> 
        <h1 className={styles.heading} >The Nexment Project</h1>
        <h3>Building simple, open-source tools for developers, creators, and builders.</h3>
        <div className={styles.button} >
          <Link className={styles.primaryBtn} href="https://github.com/theNexmentProject/nexment-cli"><i className="fa-solid fa-terminal"></i> Explore CLI</Link>
          <Link className={styles.secondaryBtn} href="https://github.com/theNexmentProject"><i className="fa-brands fa-github"></i> Github Organisation</Link>
        </div>
        <h2>Launching • 11 November 2026</h2>
      </div>
    </div>
  )
}