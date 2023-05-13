import { Repository } from './interfaces'

const GITHUB_API_URL = 'https://api.github.com'

export async function getRepositoryStarCount(
  owner: string,
  repo: string,
): Promise<number> {
  const response = await fetch(`${GITHUB_API_URL}/repos/${owner}/${repo}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch repository data for ${owner}/${repo}`)
  }
  const data: Repository = await response.json()

  return data.stargazers_count
}
