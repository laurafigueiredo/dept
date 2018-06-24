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
        background-image: url('/static/watercolor.jpg');
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .InstagramSection-title {
        margin-bottom: 1rem;
        font-size: 2rem;
        font-weight: 900;
        line-height: 1.3;
        text-transform: uppercase;
        text-align: center;
        color: var(--bluish-grey);
    }

    .InstagramSection-username {
        margin-bottom: 3rem;
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.5;
        text-align: center;
        color: var(--white);
    }

    .InstagramSection-photoWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (--layout-sm) {
            display: block;
            margin: 0 -1rem;
            max-width: 62rem;
            column-count: 2;
            column-gap: 1rem;
        }

        @media (--layout-md) {
            max-width: 94rem;
            column-count: 3;
        }
    }
`;
