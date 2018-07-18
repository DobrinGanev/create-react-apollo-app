import React from 'react'
import { render } from 'react-dom'
import App from './App'

const root = document.createElement('div')
document.body.appendChild(root)
if (module.hot) {
    module.hot.accept();
}
render(<App />, root)