'use client'

import { useState } from 'react'
import Dock from '@/components/dock'
import Modal from '@/components/modal'
import styles from '@/components/modal/modal.module.scss'
import DesktopIcon from '@/components/desktop-icon'
import { title } from '@/utils/config'
import Navbar from '@/components/navbar'

export default function Home() {
  const [showModal, setShowModal] = useState(true)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <main>
      <h1 style={{ display: 'none' }}>{title}</h1>
      <Navbar />
      <section>
        <DesktopIcon
          alt="Modal Handle Button"
          src="/images/system_information.png"
          name="System Information"
          onClick={handleModal}
        />
      </section>
      {showModal && (
        <Modal closeModal={handleModal} title="MacOS Dock Animation">
          <p>
            A recreation of the macOS dock animation using NextJS, TypeScript,
            and SCSS. It works only on desktop.
          </p>
          <p className={styles['about']}>
            <a
              href="https://github.com/imanolrtega/mac-dock"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check the{' '}
              <span className={styles['yellow-link']}>repository</span>.
            </a>
            <a
              href="https://imanolortega.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my <span className={styles['yellow-link']}>website</span>.
            </a>
          </p>
        </Modal>
      )}
      <Dock />
    </main>
  )
}
