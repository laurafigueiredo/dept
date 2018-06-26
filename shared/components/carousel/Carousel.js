import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

// Components
import Button from 'shared/components/button/Button';

// Styles
import styles from './styles';

const Carousel = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        swipeToSlide: true,
    };

    return (
        <div className="SliderWrapper">
            <Slider { ...settings }>
                {
                    data.map(item => (
                        <div>
                            <div
                                className="Image"
                                style={ { backgroundImage: `url("${item.src}")` } }
                            >
                                <h2 className="Title">{ item.title }</h2>
                                <Button secondary>{ item.btnText }</Button>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <div className="IconGroup">
                <span className="IconRound" />
            </div>
            <style jsx global>{ styles }</style>
        </div>
    );
};

Carousel.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Carousel;
