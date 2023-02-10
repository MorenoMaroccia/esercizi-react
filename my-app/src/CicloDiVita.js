import React from 'react'


export class CicloDiVita extends React.Component{
    state = {
        count: 0
    }

    componentDidUpdate() {
        
        setInterval(() => {
            this.setState((state) => {
                return {
                count: state.count + 1
            }
            })
            
        },1000)
        
      }

    //  constructor(props) {
    //      super(props)

    // }

    render () {
        return (
        <div>
            <h1>{this.state.count}</h1>
        </div>)
    }

}

export default CicloDiVita