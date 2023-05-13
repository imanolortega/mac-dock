import { DesktopIconProps } from '@/utils/interfaces'
import Image from 'next/image'
import styles from './desktop-icon.module.scss'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function DesktopIcon({
  alt,
  src,
  name,
  onClick,
}: DesktopIconProps) {
  return (
    <button onClick={onClick} className={styles['icon-container']}>
      <Image
        className={styles['icon']}
        src={src}
        alt={alt}
        width={70}
        height={70}
        placeholder="blur"
        blurDataURL={src}
      />
      <span className={`${styles['name']} ${inter.className}`}>{name}</span>
    </button>
  )
}
