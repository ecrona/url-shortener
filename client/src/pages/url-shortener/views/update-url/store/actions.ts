import axios from 'axios'
import { config } from 'utils/config'
import { initialState, updateUrlStoreApi } from './store'

const { getState, setState } = updateUrlStoreApi

export const resetState = () => setState({ ...initialState })
export const setExistingShortUrlIdentifier = (
  existingShortUrlIdentifier: string
) => setState({ existingShortUrlIdentifier })

export const setUrl = (url: string) => setState({ url })
export const updateUrl = async () => {
  setState({ viewState: 'updating' })

  try {
    const response = await axios.put<string>(`${config.serverAddress}/urls`, {
      shortUrlIdentifier: getState().existingShortUrlIdentifier,
      url: getState().url
    })

    setState({ viewState: 'viewing', shortUrlIdentifier: response.data })
  } catch (e) {
    if (e?.response?.status === 404) {
      setState({ viewState: 'not-found' })
    } else {
      throw e
    }
  }
}
