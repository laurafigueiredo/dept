import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';

// Styles
import styles from './styles.js';

const navLinks = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'People',
        link: '',
    },
    {
        name: 'Contact',
        link: '/contact',
    },
];

const Navigation = ({ isOpen }) => (
    <nav className={ classnames('Nav', { ['isOpen']: isOpen }) }>
        {
            navLinks.map(item => (
                <Link href={ item.link }>
                    <div className="Item">{ item.name }</div>
                </Link>
            ))
        }
        <style jsx>{ styles }</style>
    </nav>
);

Navigation.propTypes = {
    isOpen: PropTypes.bool,
};

export default Navigation;
