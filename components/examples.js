import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Clock from './clock';
import Counter from './counter';

const Examples = ({ lastUpdate, light }) => (
    <div>
        <Clock lastUpdate={ lastUpdate } light={ light } />
        <Counter />
    </div>
);

const mapStateToProps = ({ tick }) => {
    const { lastUpdate, light } = tick;
    return { lastUpdate, light };
};

Examples.propTypes = {
    lastUpdate: PropTypes.number,
    light: PropTypes.bool,
};

export default connect(mapStateToProps)(Examples);
