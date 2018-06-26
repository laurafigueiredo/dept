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
`;
