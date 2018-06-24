import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

// Styles
import styles from './styles';

const Input = ({
    type,
    placeholder,
    required,
    errorQuote,
    hasError,
    ...otherProps
}) => (
    <div className="InputWrapper">
        <input
            type={ type }
            className="Input"
            placeholder={ placeholder }
            required={ required }
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
    required: PropTypes.bool,
    errorQuote: PropTypes.string,
    hasError: PropTypes.bool,
};

export default Input;
