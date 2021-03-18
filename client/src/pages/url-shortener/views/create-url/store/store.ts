import create from 'zustand'

export interface CreateUrlState {
  creating: boolean
  url: string
  shortUrlIdentifier: string
}

export const initialState: CreateUrlState = {
  creating: false,
  url: '',
  shortUrlIdentifier: ''
}

export const [useCreateUrlStore, createUrlStoreApi] = create<CreateUrlState>(
  () => initialState
)
