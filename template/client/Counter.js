
import React from 'react'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState =>{
                return ({ count: prevState.count + 1 })
            })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return this.state.count
    }
}

export default Counter