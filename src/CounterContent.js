import React from 'react';
class CounterContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cnt: 0 };
    }
    increment = () => {
        this.setState((prevState) => ({
            cnt: prevState.cnt + 1
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            cnt: prevState.cnt - 1
        }));
    };

    render() {
        return (
            <div  align={"center"}>
                <p>Count: {this.state.cnt}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default CounterContent;
