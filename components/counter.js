import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as tickActions } from 'shared/state/tick';

class Counter extends Component {
  increment = () => {
      const { dispatch } = this.props;
      dispatch(tickActions.incrementCount());
  }

  decrement = () => {
      const { dispatch } = this.props;
      dispatch(tickActions.decrementCount());
  }

  reset = () => {
      const { dispatch } = this.props;
      dispatch(tickActions.resetCount());
  }

  render() {
      const { count } = this.props;
      return (
          <div>
              <h1>Count: <span>{ count }</span></h1>
              <button onClick={ this.increment }>+1</button>
              <button onClick={ this.decrement }>-1</button>
              <button onClick={ this.reset }>Reset</button>
          </div>
      );
  }
}

function mapStateToProps({ tick }) {
    const { count } = tick;
    return { count };
}

Counter.propTypes = {
    dispatch: PropTypes.func,
    count: PropTypes.number,
};

export default connect(mapStateToProps)(Counter);
