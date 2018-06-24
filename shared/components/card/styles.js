import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .Wrapper {
        margin-bottom: 2rem;
        padding: 0;
        max-width: 30rem;

        @media (--layout-sm) {
            margin: 0 1rem 2rem;
            break-inside: avoid;
        }
    }

    .Image {
        width: 100%;
        height: auto;
    }

    .TextWrapper {
        padding: 1.5rem;
        font-size: 1.5rem;
        line-height: 1.4;
        background-color: var(--white);
        color: var(--grey);
    }
`;
