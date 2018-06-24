import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

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

    // eslint-disable-next-line
    console.log('carousel', data);

    return (
        <div className="SliderWrapper">
            <Slider { ...settings }>
                {
                    data.map(item => (
                        <div>
                            <div
                                className="Image"
                                style={ { backgroundImage: `url("${item.src}")` } }
                            />
                        </div>
                    ))
                }
            </Slider>
            <style jsx global>{ styles }</style>
        </div>
    );
};

Carousel.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Carousel;
