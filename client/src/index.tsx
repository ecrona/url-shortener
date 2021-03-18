import { App } from 'app'
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './service-worker'

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
declare const module: any

// TODO: Reenable strict mode when React + MUI have fixed deprecation notices
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

if (module.hot) {
  module.hot.accept('./app', () => {
    /* eslint-disable-next-line global-require */
    const NextApp = require('./app').App
    ReactDOM.render(<NextApp />, document.getElementById('root'))
  })
}
