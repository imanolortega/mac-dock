'use client'

import { useState } from 'react'
import Dock from '@/components/dock'
import Modal from '@/components/modal'
import styles from '@/components/modal/modal.module.scss'
import DesktopIcon from '@/components/desktop-icon'

export default function Home() {
  const [showModal, setShowModal] = useState(true)

  const handleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <main>
      <section>
        <DesktopIcon
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
            By{' '}
            <a
              href="https://imanolortega.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imanol.
            </a>
          </p>
        </Modal>
      )}
      <Dock />
    </main>
  )
}
