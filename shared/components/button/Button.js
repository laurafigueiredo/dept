import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Styles
import styles from './styles';

const Button = ({
    children,
    primary,
    secondary,
    normal,
    ...otherProps
}) => {
    const theme = classnames(
        { ['Button']: !normal },
        { ['Primary']: primary },
        { ['Secondary']: secondary },
        { ['Normal']: normal },
    );

    return (
        <React.Fragment>
            <button className={ theme } { ...otherProps }>
                { children }
            </button>
            <style jsx>{ styles }</style>
        </React.Fragment>

    );
};

Button.propTypes = {
    children: PropTypes.node,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    normal: PropTypes.bool,
};

export default Button;
