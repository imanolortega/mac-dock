import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './dock-item.module.scss'
import { maxButtonDistance, maxButtonSize, minButtonSize } from '@/utils/config'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

interface DockItemProps {
  mousePosition: {
    x: number
    y: number
  }
  name: string
  src: string
  active: boolean
}

export default function DockItem({
  active,
  mousePosition,
  name,
  src,
}: DockItemProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isActive, setIsActive] = useState(active || false)
  const dockItemRef = useRef<HTMLLIElement>(null)
  const [dockItemRect, setdockItemRect] = useState<DOMRect | undefined>(
    undefined,
  )

  useEffect(() => {
    const handleResize = () => {
      const newDockItemRect = dockItemRef.current?.getBoundingClientRect()
      if (newDockItemRect) {
        setdockItemRect(newDockItemRect)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const buttonMidX = dockItemRect?.left
    ? dockItemRect.left + dockItemRect.width / 2
    : 0
  const buttonMidY = dockItemRect?.top
    ? dockItemRect.top + dockItemRect.height / 2
    : 0

  const distance =
    dockItemRef.current && dockItemRect
      ? Math.sqrt(
          Math.pow(mousePosition.x - buttonMidX, 2) +
            Math.pow(mousePosition.y - buttonMidY, 2),
        )
      : 0

  const buttonSize =
    dockItemRef.current && dockItemRect
      ? Math.max(
          minButtonSize,
          maxButtonSize -
            (maxButtonSize - minButtonSize) * (distance / maxButtonDistance),
        )
      : minButtonSize

  const buttonStyle = {
    height: buttonSize,
    width: buttonSize,
    transition: 'all 0.1s ease-out',
  }

  return (
    <li className={styles['dock-item']} style={buttonStyle} ref={dockItemRef}>
      <div
        className={`${styles['title']} ${
          isHovering ? styles['show-title'] : ''
        } ${inter.className}`}
      >
        {name}
      </div>
      <Image
        className={styles['icon']}
        src={src}
        alt={name}
        width={buttonSize}
        height={buttonSize}
        style={buttonStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsActive(!isActive)}
      />
      <span className={isActive ? styles['active'] : ''}></span>
    </li>
  )
}
