import create from 'zustand'

export interface UpdateUrlState {
  viewState: 'viewing' | 'updating' | 'not-found'
  existingShortUrlIdentifier: string
  url: string
  shortUrlIdentifier: string
}

export const initialState: UpdateUrlState = {
  viewState: 'viewing',
  existingShortUrlIdentifier: '',
  url: '',
  shortUrlIdentifier: ''
}

export const [useUpdateUrlStore, updateUrlStoreApi] = create<UpdateUrlState>(
  () => initialState
)
