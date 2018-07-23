// jsxをトランスパイルするのに使うために
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';


class App extends Component {
    render() {
        const props = this.props;

        return (
            <React.Fragment>
                <div>count: {props.value}</div>
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </React.Fragment>
        )
    }
}

// stateから、このComponentのpropsにマッピングする
const mapStateToProps = state => ({value: state.count.value});

// アクションが発生した時にreducerにtypeに応じた状態遷移を実行させる
const mapDispatchToProps = dispatch => ({
    increment: ()=> dispatch(increment()),
    decrement : () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


