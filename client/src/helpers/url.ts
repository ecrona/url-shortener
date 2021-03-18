import { config } from 'utils/config'

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
  } catch (e) {
    console.error(e)
    return false
  }
  return true
}

export const getLinkUrl = (linkIdentifier: string): string =>
  `${config.serverAddress}/l/${linkIdentifier}`
