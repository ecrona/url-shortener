import { getLinkUrl, isValidUrl } from 'helpers/url'
import { useUpdateUrlStore } from './store'

export const useShortUrl = (): string => {
  const shortUrlIdentifier = useUpdateUrlStore(
    (state) => state.shortUrlIdentifier
  )

  return shortUrlIdentifier && getLinkUrl(shortUrlIdentifier)
}

export const useUrlError = (): boolean => {
  const url = useUpdateUrlStore((state) => state.url)

  return Boolean(url) && !isValidUrl(url)
}

export const useCanUpdate = (): boolean => {
  const [viewState, url] = useUpdateUrlStore((state) => [
    state.viewState,
    state.url
  ])
  const urlError = useUrlError()

  return Boolean(url) && viewState !== 'updating' && !urlError
}
