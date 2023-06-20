import React from 'react';

class Demo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    timerId = null;

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            < div >
                <h1>Hello React</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div >
        )
    }
}

export default Demo1;