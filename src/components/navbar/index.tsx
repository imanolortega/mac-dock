import styles from './navbar.module.scss'
import Image from 'next/image'
import { leftItems, rightItems } from '@/utils/config'
import Clock from '@/components/clock'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <nav className={`${styles['navbar']} ${inter.className}`}>
      <ul className={styles['left-side']}>
        <li>
          <Image
            alt="Apple Logo"
            src="/images/apple_logo.png"
            width={15}
            height={18.5}
          />
        </li>
        <li className={`${styles['item']} ${styles['active']}`}>Finder</li>
        {leftItems.map((item) => (
          <li key={item} className={styles['item']}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <ul className={styles['right-side']}>
        {rightItems.map(({ className, icon, id }) => (
          <li key={id} className={`${styles['icon']} ${styles[className]}`}>
            {icon}
          </li>
        ))}
        <li className={styles['time']}>
          <Clock />
        </li>
      </ul>
    </nav>
  )
}
