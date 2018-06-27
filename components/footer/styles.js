import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .Footer {
        padding: 4rem 0;
        display: flex;
        justify-content: center;
        background-color: var(--black);
        color: var(--white);
    }

    .Icon {
        padding-right: 4rem;

        &:last-of-type {
            padding-right: 0;
        }
    }

    .IconFacebook {
        content: url('/static/facebook.svg');

        &:hover {
            content: url('/static/facebook_.svg');
        }
    }

    .IconTwitter {
        content: url('/static/twitter.svg');

        &:hover {
            content: url('/static/twitter_.svg');
        }
    }

    .IconInstagram {
        content: url('/static/instagram.svg');

        &:hover {
            content: url('/static/instagram_.svg');
        }
    }
`;
