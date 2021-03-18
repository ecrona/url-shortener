import { createBrowserHistory, History } from 'history'

let history: History | undefined

export const getHistory = () => {
  if (!history) {
    history = createBrowserHistory()
  }

  return history
}
