import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as tickActions } from 'shared/state/tick';
import Examples from '../components/examples';

class Index extends Component {
    static getInitialProps({ reduxStore, req }) {
        const isServer = Boolean(req);
        reduxStore.dispatch(tickActions.serverRenderClock(isServer));

        return {};
    }

    componentDidMount() {
        const { dispatch } = this.props;
        this.timer = tickActions.startClock(dispatch);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <Examples />
        );
    }
}

Index.propTypes = {
    dispatch: PropTypes.func,
};

export default connect()(Index);
