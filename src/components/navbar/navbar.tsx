import styles from "./navbar.module.css";
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={styles.main} >
      <div className={styles.left} >
        <Image src="/logo.png" alt="The Nexment Project" height={30} width={100} />
        <div className={styles.divider} ></div>
        <h1>The Nexment Project</h1>
      </div>
      <div className={styles.right} >
        <Link className={styles.docs} href="https://github.com/theNexmentProject/nexment-cli">Documentation</Link>
        <Link className={styles.github} href="https://github.com/theNexmentProject"><i className="fa-brands fa-github"></i> GitHub</Link>
        <Link className={styles.smallDocs} href="https://github.com/theNexmentProject/nexment-cli">Docs</Link>
        <Link className={styles.smallGit} href="https://github.com/theNexmentProject"><i className="fa-brands fa-github"></i></Link>
      </div>
    </div>
  );
}
