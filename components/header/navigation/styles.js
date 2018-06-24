import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .Nav {
        position: absolute;
        top: 6rem;
        left: 0;
        width: 100%;
        height: calc(100vh - 6rem);
        overflow: hidden;
        transform: translate3d(0, -100%, 0);
        background-color: var(--black);
        color: var(--white);
        transition: transform 0.3s ease-out 0s;

        &.isOpen {
            overflow-y: auto;
            transform: translate3d(0, 0, 0);
        }

        @media (--layout-sm) {
            position: relative;
            top: 0;
            z-index: 2;
            width: auto;
            height: auto;
            display: inline-flex;
            background-color: transparent;
            transform: none;
        }
    }
`;
