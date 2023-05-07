import Image from 'next/image'
import styles from './desktop-icon.module.scss'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

interface DesktopIconProps {
  src: string
  name: string
  onClick: () => void
}

export default function DesktopIcon({ src, name, onClick }: DesktopIconProps) {
  return (
    <div className={styles['icon-container']}>
      <Image
        className={styles['icon']}
        src={src}
        alt={name}
        width={70}
        height={70}
        onClick={onClick}
      />
      <span className={`${styles['name']} ${inter.className}`}>{name}</span>
    </div>
  )
}
