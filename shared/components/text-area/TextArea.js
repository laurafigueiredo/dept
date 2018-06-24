import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';

// Styles
import styles from './styles';

const TextArea = ({
    placeholder,
    required,
    errorQuote,
    hasError,
    ...otherProps
}) => (
    <div className="TextareaWrapper">
        <textarea
            className="Textarea"
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

TextArea.propTypes = {
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    errorQuote: PropTypes.string,
    hasError: PropTypes.bool,
};

export default TextArea;
