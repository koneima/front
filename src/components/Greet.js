import React from "react";

class Greet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        // this.increment = this.increment.bind(this)
    }

    increment = () =>
        this.setState(() => ({
            count: this.state.count + 1
        }), () => console.log(this.state.count))


    render() {
        const {name} = this.props;
        const {count} = this.state;

        return <div>
            <h1>Welcome {name}</h1>
            <button onClick={this.increment}>Counter: {count}</button>
        </div>
    }
}

export default Greet
