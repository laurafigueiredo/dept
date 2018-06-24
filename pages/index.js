import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as tickActions } from 'shared/state/tick';
// import Examples from '../components/examples';
import Home from 'components/home/Home';

// components
import PageWrapper from 'components/page-wrapper/PageWrapper';

class Index extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        this.timer = tickActions.startClock(dispatch);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    static getInitialProps({ reduxStore, req }) {
        const isServer = Boolean(req);
        reduxStore.dispatch(tickActions.serverRenderClock(isServer));

        return {};
    }

    render() {
        return (
            <PageWrapper>
                <Home />
            </PageWrapper>
        );
    }
}

Index.propTypes = {
    dispatch: PropTypes.func,
};

export default connect()(Index);
