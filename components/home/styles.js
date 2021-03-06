import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .TextSection {
        padding: 6rem 1rem;
        background-color: var(--white);

        @media (--layout-sm) {
            padding: 8rem 7.5rem;
        }

        @media (--layout-md) {
            padding: 8rem 4.5rem;
        }
    }

    .TextSection-title {
        margin-bottom: 1rem;
        font-size: 2rem;
        line-height: 1.4;
        font-weight: 900;
        text-align: center;
        text-transform: uppercase;
        color: var(--dark-grey);

        @media (--layout-sm) {
            font-size: 3rem;
        }
    }

    .TextSection-text {
        font-size: 1.5rem;
        line-height: 1.27;
        color: var(--black);
        text-align: center;

        @media (--layout-sm) {
            font-size: 2rem;
            line-height: 1.4;
        }

        @media (--layout-md) {
            font-size: 2.4rem;
        }
    }

    .InstagramSection {
        padding: 6rem 1rem;
        width: 100%;
        background-image: url('/static/bg.png');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;

        @media (--layout-sm) {
            padding: 8rem 0;
        }

        @media (--layout-xl) {
            padding: 10rem 0;
        }
    }

    .InstagramSection-title {
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: 900;
        line-height: 1.3;
        text-transform: uppercase;
        text-align: center;
        color: var(--bluish-grey);

        @media (--layout-sm) {
            font-size: 3rem;
        }
    }

    .InstagramSection-username {
        margin-bottom: 3rem;
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.5;
        text-align: center;
        color: var(--white);

        @media (--layout-sm) {
            margin-bottom: 4rem;
            font-size: 3rem;
        }

        @media (--layout-xl) {
            margin-bottom: 5rem;
        }
    }

    .InstagramSection-photoWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (--layout-sm) {
            display: block;
            margin: 0 auto;
            max-width: 62rem;
            column-count: 2;
            column-gap: 2rem;
        }

        @media (--layout-md) {
            max-width: 94rem;
            column-count: 3;
        }
    }
`;
