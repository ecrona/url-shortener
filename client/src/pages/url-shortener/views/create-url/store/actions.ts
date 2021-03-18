import axios from 'axios'
import { config } from 'utils/config'
import { createUrlStoreApi, initialState } from './store'

const { getState, setState } = createUrlStoreApi

export const resetState = () => setState({ ...initialState })
export const setUrl = (url: string) => setState({ url })
export const createUrl = async () => {
  setState({ creating: true })

  const response = await axios.post<string>(`${config.serverAddress}/urls`, {
    url: getState().url
  })

  setState({ creating: false, shortUrlIdentifier: response.data })
}
