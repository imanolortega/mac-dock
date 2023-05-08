import { useCallback, useEffect, useRef, useState, useMemo } from 'react'
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
  const [dockItemRect, setDockItemRect] = useState<DOMRect | undefined>(
    undefined,
  )

  const handleResize = useCallback(() => {
    const newDockItemRect = dockItemRef.current?.getBoundingClientRect()
    if (newDockItemRect) {
      setDockItemRect(newDockItemRect)
    }
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  const buttonStyle = useMemo(() => {
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

    return {
      height: buttonSize,
      width: buttonSize,
      transition: 'all 0.1s ease-out',
    }
  }, [dockItemRef, dockItemRect, mousePosition])

  return (
    <li className={styles['dock-item']} style={buttonStyle} ref={dockItemRef}>
      <button
        className={styles['btn']}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsActive(!isActive)}
      >
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
          width={buttonStyle.width}
          height={buttonStyle.height}
          style={buttonStyle}
        />
        <span className={isActive ? styles['active'] : ''}></span>
      </button>
    </li>
  )
}
