import styles from "./Footer.module.css"
import Image from "next/image"
import InstaLogo from "../../media/instagram.svg"
import LinkedinLogo from "../../media/linkedin.svg"
import FacebookLogo from "../../media/facebook.svg"
import NapsLogo from "../../media/napslogo.png"
import Link from "next/link"

export default function Footer(){
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row1}>
        <div className={styles.navContainer}>
          <div className={styles.navItem}>
            <Link  href="/">Home</Link>
          </div>
          <div className={styles.navItem}>
          <Link  href="/Editorial">Editorial</Link>
          </div>
          <div className={styles.navItem}>
          <Link  href="/about">About</Link>
          </div>
          <div className={styles.navItem}>
          <Link  href="/Epistle">Epistle</Link>
          </div>
          <div className={styles.navItem}>
          <Link  href="/Team">Team</Link>
          </div>
        </div>
        <div className={styles.connectContainer}>
          <Image src={InstaLogo} alt="Instagram" className={styles.connectItem} />
          <Image src={LinkedinLogo} alt="LinkedIn" className={styles.connectItem} />
          <Image src={FacebookLogo} alt="Facebook" className={styles.connectItem} />
        </div>
        </div>
      <div className={styles.row2}>
      <div className={styles.copyright}>
      ©NAPS Bit Mesra
      </div>
      </div>
      </div>
    </div>
  )
}