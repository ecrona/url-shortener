import { getLinkUrl, isValidUrl } from 'helpers/url'
import { useCreateUrlStore } from './store'

export const useShortUrl = (): string => {
  const shortUrlIdentifier = useCreateUrlStore(
    (state) => state.shortUrlIdentifier
  )

  return shortUrlIdentifier && getLinkUrl(shortUrlIdentifier)
}

export const useUrlError = (): boolean => {
  const url = useCreateUrlStore((state) => state.url)

  return Boolean(url) && !isValidUrl(url)
}

export const useCanCreate = (): boolean => {
  const [url, creating] = useCreateUrlStore((state) => [
    state.url,
    state.creating
  ])
  const urlError = useUrlError()

  return Boolean(url) && !creating && !urlError
}
