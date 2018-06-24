import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .ContactSection {
        padding: 6rem 0;
        width: 100%;
        height: calc(100vh - 6rem);
        background-image: url('/static/watercolor.jpg');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;

        @media (--layout-sm) {
            padding: 8rem 0;
        }
    }

    .Title {
        font-size: 2rem;
        font-weight: 900;
        line-height: 1.4;
        text-align: center;
        color: var(--white);
    }

    .FormInner {
        padding: 2rem 1rem;
        background-color: rgba(255, 255, 255, 0.2);
    }

    .Button {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
    }
`;
