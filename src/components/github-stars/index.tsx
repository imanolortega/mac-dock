import { GitHubStarsProps } from '@/utils/interfaces'
import { StarIcon } from '@/components/icons'
import styles from './github-stars.module.scss'

import { useEffect, useState } from 'react'
import { getRepositoryStarCount } from '@/utils/github'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export function GitHubStars({ owner, repo }: GitHubStarsProps) {
  const [starCount, setStarCount] = useState<number>(0)

  useEffect(() => {
    async function fetchData() {
      try {
        const count = await getRepositoryStarCount(owner, repo)
        setStarCount(count)
      } catch (error) {
        console.error(`Error fetching star count for ${owner}/${repo}:`, error)
      }
    }
    fetchData()
  }, [owner, repo])

  return (
    <a
      title="GitHub Stars"
      href="https://github.com/imanolrtega/mac-dock/"
      rel="noopener noreferrer"
      target="_blank"
      className={styles['container']}
    >
      <div className={styles['icon']}>
        <StarIcon />
      </div>
      <div className={`${styles['count']} ${inter.className}`}>
        <span>{starCount}</span>
        <span>{starCount === 1 ? 'Star' : 'Stars'}</span>
      </div>
    </a>
  )
}
