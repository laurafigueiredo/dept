import React from 'react';
import classnames from 'classnames';

// Styles
import styles from './styles';

const social = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/tamtamnl/',
    },
    {
        name: 'Twitter',
        link: 'https://www.twitter.com/tamtamnl/',
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/tamtamnl/',
    },
];

const Footer = () => (
    <footer className="Footer">
        {
            social.map(item => (
                <a className={ classnames('Icon', `Icon${item.name}`) } href={ item.link } target="blank" />
            ))
        }
        <style jsx>{ styles }</style>
    </footer>
);

export default Footer;
