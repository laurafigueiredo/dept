import React from 'react';

// Styles
import styles from './styles';

const social = [
    {
        src: '/static/facebook.svg',
        alt: 'Facebook',
        link: 'https://www.facebook.com/tamtamnl/',
    },
    {
        src: '/static/twitter.svg',
        alt: 'Twitter',
        link: 'https://www.twitter.com/tamtamnl/',
    },
    {
        src: '/static/instagram.svg',
        alt: 'Instagram',
        link: 'https://www.instagram.com/tamtamnl/',
    },
];

const Footer = () => (
    <footer className="Footer">
        {
            social.map(item => (
                <a className="Icon" href={ item.link } target="blank">
                    <img
                        src={ item.src }
                        alt={ item.alt }
                    />
                </a>
            ))
        }
        <style jsx>{ styles }</style>
    </footer>
);

export default Footer;
