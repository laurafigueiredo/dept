import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .Normal {
        min-width: 0;
        padding: 0;
        border: 0;
        background-color: transparent;
    }

    .Primary {
        position: relative;
        padding: 1rem 5rem;
        font-size: 1.5rem;
        line-height: 1.4;
        color: var(--white);
        background-color: var(--orange);
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
            background-color: var(--orange);
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
            background-color: var(--orange);
            z-index: -1;
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

    }
`;
