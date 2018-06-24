import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './styles';

const Card = ({ data }) => (
    <figure className="Wrapper">
        <img
            src={ data.image.url }
            alt="something"
            className="Image"
        />
        <figcaption className="TextWrapper">
            <p>
                { data.caption }
            </p>
        </figcaption>
        <style jsx>{ styles }</style>
    </figure>
);

Card.propTypes = {
    data: PropTypes.object,
};

export default Card;
