import { UrlShortenerView } from '../models/url-shortener-view'
import { urlshortenerStoreApi } from './store'

const { setState } = urlshortenerStoreApi

export const setView = (view: UrlShortenerView) => setState({ view })
