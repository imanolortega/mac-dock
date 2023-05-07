'use client'

import { buttons } from '@/utils/config'
import { MouseEvent, useState } from 'react'
import DockItem from '@/components/dock-item'
import styles from './dock.module.scss'

export default function Dock() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  function handleMouseMove(event: MouseEvent): void {
    setMousePosition({
      x: event.pageX || 0,
      y: event.pageY || 0,
    })
  }

  return (
    <nav
      className={styles['dock']}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <ul className={styles['dock-inner']}>
        {buttons.map(({ name, src }) => (
          <DockItem
            key={name}
            mousePosition={mousePosition}
            name={name}
            src={src}
          />
        ))}
      </ul>
    </nav>
  )
}
