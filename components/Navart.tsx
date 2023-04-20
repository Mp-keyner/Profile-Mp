import Image from 'next/image'
import styles from '../styles/Navart.module.css'

const Navart = () => {
  return (
    <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <a href="https://github.com/Mp-keyner" target='_blank'>
                    <Image src='/img/telephone.png' alt='foto Yo' width={32} height={32} />
                    </a>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>
                        <a 
                        href="#"
                        >TELL ME!
                        </a>
                        </div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Homepage</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            
        </div>
  )
}

export default Navart
