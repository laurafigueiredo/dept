import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .Normal {
        min-width: 0;
        padding: 0;
        border: 0;
        background-color: transparent;
    }

    .Button {
        position: relative;
        padding: 1rem 0;
        width: 13rem;
        font-size: 1.5rem;
        line-height: 1.4;
        color: var(--white);
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -2rem;
            width: 4rem;
            height: 100%;
            display: block;
            border-radius: 100%;
            z-index: -1;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: -2rem;
            width: 4rem;
            height: 100%;
            display: block;
            border-radius: 100%;
            z-index: -1;
        }
    }

    .Primary {
        background-color: var(--orange);

        &::before {
            background-color: var(--orange);
        }

        &::after {
            background-color: var(--orange);
        }

        &:hover {
            background-color: var(--salmon);

            &::before,
            &::after {
                background-color: var(--salmon);
            }
        }
    }

    .Secondary {
        background-color: var(--black);

        &::before {
            background-color: var(--black);
        }

        &::after {
            background-color: var(--black);
        }

        &:hover {
            background-color: var(--orange);

            &::before,
            &::after {
                background-color: var(--orange);
            }
        }
    }
`;
