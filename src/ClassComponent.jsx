import { Component } from 'react'

// a class is similar as a concept to a blueprint, or a stamp
// our Class Components will be made starting from the main Class Component available in React
class ClassComponent extends Component {
    // we miss 1 mandatory property

    // now that we have a class component, we can do much more stuff
    // for example, using the state

    state = {
        // the state is an object meant to store values over time
        count: 0
        // the state is read-only
    }

    // for modifing the state you have to use a method called setState

    handleClick = (incOrDec) => this.setState({
        count: incOrDec ? this.state.count + 1 : this.state.count - 1
    })

    render() {
        // is the only mandatory method in a Class Component
        return (
            <div>
                <h2>LOOK AT ME, I'M A CLASS COMPONENT!</h2>
                <button onClick={() => this.handleClick(true)}>+</button>
                {/* // setState is the only way to change to state */}
                <p>The actual value of count is {this.state.count}</p>
                <button onClick={() => this.handleClick(false)}>-</button>
            </div>
        )
    }
}

export default ClassComponent