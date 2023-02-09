import React from 'react'
import { Display } from './Display'


export class Counter4 extends React.Component{
    state = {
        count: this.props.intervalValue
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                count: state.count + this.props.incrementBy
            }
            })
            
        },this.props.timeout)
    }

    render () {
        return (
        <div>
            <h1>{Display }</h1>
        </div>)
    }

}

Counter4.defaultProps = {
    incrementBy:1,
    intervalValue: 0,
    timeout: 1000,

}

export default Counter4