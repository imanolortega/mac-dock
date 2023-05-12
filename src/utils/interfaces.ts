export interface DesktopIconProps {
  alt: string
  src: string
  name: string
  onClick: () => void
}

export interface DockItemProps {
  mousePosition: {
    x: number
    y: number
  }
  name: string
  src: string
  active: boolean
}

export interface ModalProps {
  children: React.ReactNode
  closeModal: () => void
  title?: string
}
