import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';

const Alert = ({ type, children }) => (
    <div className="Alert">
        <div className="Icon">
            <img
                src={ `/static/${type}.svg` }
                alt={ `${type}` }
            />
        </div>
        <p className="Text">{ children }</p>
        <style jsx>{ styles }</style>
    </div>
);

Alert.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
};

export default Alert;
