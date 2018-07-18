import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'

const App = () => (
    <h1>
        Hello  <br />
        <Counter />
    </h1>
)
if (module.hot) {
    module.hot.accept()
}
export default hot(module)(App)