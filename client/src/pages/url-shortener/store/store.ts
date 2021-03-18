import create from 'zustand'
import { UrlShortenerView } from '../models/url-shortener-view'

export interface UrlShortenerState {
  view: UrlShortenerView
}

export const initialState: UrlShortenerState = {
  view: 'create'
}

export const [
  useUrlShortenerStore,
  urlshortenerStoreApi
] = create<UrlShortenerState>(() => initialState)
