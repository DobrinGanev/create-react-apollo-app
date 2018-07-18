import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './Counter'

const App = () => (
    <h1>
<<<<<<< HEAD
        Hello  <br />
=======
        Hello, world!<br />
>>>>>>> 234f46a7f2c94815f050f4914ffc5bc798cf3d17
        <Counter />
    </h1>
)
if (module.hot) {
    module.hot.accept()
}
export default hot(module)(App)