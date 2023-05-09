import {
  BluetoothIcon,
  GitHubIcon,
  SearchIcon,
  VolIcon,
  WifiIcon,
} from '@/components/icons'
import Image from 'next/image'

export const buttons = [
  {
    name: 'Finder',
    src: '/images/finder.png',
    active: false,
  },
  {
    name: 'Launchpad',
    src: '/images/launchpad.png',
    active: false,
  },
  {
    name: 'Notes',
    src: '/images/notes.png',
    active: false,
  },
  {
    name: 'Reminders',
    src: '/images/reminders.png',
    active: false,
  },
  {
    name: 'Messages',
    src: '/images/messages.png',
    active: false,
  },
  {
    name: 'Safari',
    src: '/images/safari.png',
    active: false,
  },
  {
    name: 'Apple Music',
    src: '/images/apple_music.png',
    active: false,
  },
  {
    name: 'System Settings',
    src: '/images/system_settings.png',
    active: true,
  },
]

export const leftItems = [
  'File',
  'Edit',
  'Selection',
  'View',
  'Go',
  'Run',
  'Terminal',
  'Window',
  'Help',
]

export const rightItems = [
  {
    className: 'github',
    icon: (
      <a
        title="GitHub Icon"
        href="https://github.com/imanolrtega/mac-dock"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GitHubIcon />
      </a>
    ),
    id: 'github',
  },
  {
    className: 'vol',
    icon: <VolIcon />,
    id: 'vol',
  },
  {
    className: 'bluetooth',
    icon: <BluetoothIcon />,
    id: 'bluetooth',
  },
  {
    className: '',
    id: 'battery',
    icon: (
      <Image
        src="/images/battery.png"
        alt="Battery Icon"
        width={23}
        height={23}
      />
    ),
  },
  {
    className: 'wifi',
    icon: <WifiIcon />,
    id: 'wifi',
  },
  {
    className: 'search',
    icon: <SearchIcon />,
    id: 'search',
  },
  {
    className: '',
    id: 'control',
    icon: (
      <Image
        src="/images/control.png"
        alt="Control Center Icon"
        width={17}
        height={17}
      />
    ),
  },
  {
    className: '',
    id: 'siri',
    icon: (
      <Image src="/images/siri.png" alt="Siri Icon" width={18} height={18} />
    ),
  },
]

export const maxButtonSize = 95
export const minButtonSize = 70
export const maxButtonDistance = 200

export const title = 'MacOS Dock Animation'
export const description =
  'A recreation of the macOS dock with NextJS, TypeScript and SCSS 🍏'
export const url = 'https://mac-dock.vercel.app/'
