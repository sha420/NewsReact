import React from 'react';

class Content extends React.Component {
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
            <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
        );
    }
}

export default Content;
