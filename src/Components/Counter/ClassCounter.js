import React from 'react'

export default class ClassCounter extends React.Component {
    state = {count: 0}

    increamentValue = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        
        return (
            <div>
                
                <button onClick={this.increamentValue}>Click: {this.state.count} </button>
            </div>
        )
    }
}
