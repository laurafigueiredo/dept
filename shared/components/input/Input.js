import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './styles';

const Input = ({
    type,
    placeholder,
    errorQuote,
    hasError,
    value,
    ...otherProps
}) => (
    <div className="InputWrapper">
        {
            (!hasError && !!value) &&
            <span className="InputSuccess" />
        }
        <input
            type={ type }
            className="Input"
            placeholder={ placeholder }
            value={ value }
            { ...otherProps }
        />
        {
            hasError &&
            <div className="Error">{ errorQuote }</div>
        }
        <style jsx>{ styles }</style>
    </div>
);

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    errorQuote: PropTypes.string,
    hasError: PropTypes.bool,
    value: PropTypes.string,
};

export default Input;
