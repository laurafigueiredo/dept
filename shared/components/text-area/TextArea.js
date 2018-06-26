import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Styles
import styles from './styles';

const TextArea = ({
    placeholder,
    errorQuote,
    hasError,
    value,
    ...otherProps
}) => (
    <div className="TextareaWrapper">
        {
            (!hasError && !!value) &&
            <span className="TextareaSuccess" />
        }
        <textarea
            className={ classnames('Textarea', { ['isSuccess']: !hasError && !!value }) }
            placeholder={ placeholder }
            value={ value }
            rows="4"
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
    errorQuote: PropTypes.string,
    hasError: PropTypes.bool,
    value: PropTypes.string,
};

export default TextArea;
