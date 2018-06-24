import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import Carousel from 'shared/components/carousel/Carousel';
import Card from 'shared/components/card/Card';

// State
import { actions, selectors } from 'shared/state/instagram';

// Styles
import styles from './styles';

const carouselData = [
    {
        src: '/static/porto_1.jpg',
    },
    {
        src: '/static/porto_2.jpg',
    },
    {
        src: '/static/porto_3.jpg',
    },
];

class Home extends Component {
    componentDidMount() {
        const { loadRecentPhotos } = this.props;

        loadRecentPhotos();
    }

    render() {
        const { recentPhotos } = this.props;

        // eslint-disable-next-line
        console.log('home', recentPhotos);

        return (
            <div>
                <Carousel data={ carouselData } />
                <div className="TextSection">
                    <h2 className="TextSection-title">We are tam tam</h2>
                    <p className="TextSection-text">
                        Tam Tam is a full service digital agency focusing on Dutch
                        Digital Service Design. We combine strategy, design, technology
                        and interaction to make the digital interactions between
                        company and customer valuable and memorable. We work for
                        awesome brands with a team of 120 digitals from our office
                        in Amsterdam. Making great work and having a blast doing
                        it. That’s what we believe in.
                    </p>
                </div>
                <div className="InstagramSection">
                    <h2 className="InstagramSection-title">
                        Follow us on instagram
                    </h2>
                    <h3 className="InstagramSection-username">
                        @tamtamnl
                    </h3>
                    <div className="InstagramSection-photoWrapper">
                        {
                            recentPhotos.map(item => (
                                <Card data={ item } />
                            ))
                        }
                    </div>
                </div>
                <style jsx>{ styles }</style>
            </div>
        );
    }
}

Home.propTypes = {
    loadRecentPhotos: PropTypes.func,
    recentPhotos: PropTypes.array,
};

const mapDispatchToProps = {
    loadRecentPhotos: actions.loadRecentPhotos,
};

const mapStateToProps = state => ({
    recentPhotos: selectors.getRecentPhotos(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
