import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions, selectors } from 'shared/state/instagram';

// Styles
import styles from './styles';

class Footer extends Component {
    componentDidMount() {
        const { loadRecentPhotos } = this.props;

        loadRecentPhotos();
    }

    render() {
        // const { recentPhotos } = this.props;

        return (
            <footer className="Footer">
                Hey
                <style jsx>{ styles }</style>
            </footer>
        );
    }
}

Footer.propTypes = {
    loadRecentPhotos: PropTypes.func,
    // recentPhotos: PropTypes.array,
};

const mapDispatchToProps = {
    loadRecentPhotos: actions.loadRecentPhotos,
};

const mapStateToProps = state => ({
    recentPhotos: selectors.getRecentPhotos(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
