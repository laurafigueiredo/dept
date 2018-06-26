import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .Nav {
        position: fixed;
        top: 6rem;
        left: 0;
        padding-top: 4rem;
        width: 100%;
        height: calc(100vh - 6.2rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        transform: translate3d(0, -100%, 0);
        background-color: var(--black);
        border-top: 0.2rem solid var(--white);
        color: var(--white);
        transition: transform 0.3s ease-out 0s;

        &.isOpen {
            overflow-y: auto;
            transform: translate3d(0, 0.2rem, 0);
        }

        @media (--layout-sm) {
            position: relative;
            top: 0;
            z-index: 2;
            padding: 0;
            width: auto;
            height: auto;
            flex-direction: row;
            background-color: transparent;
            border: none;
            transform: none;
        }
    }

    .Item {
        margin-bottom: 4rem;
        font-size: 3rem;
        font-weight: 900;
        color: var(--white);
        cursor: pointer;

        &:hover {
            color: var(--orange);
        }

        @media (--layout-sm) {
            margin-bottom: 0;
            margin-left: 4rem;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 1.39;
            color: var(--warm-grey);
        }
    }

    .isActive {
        color: var(--white);
    }
`;
