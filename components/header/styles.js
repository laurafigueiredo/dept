import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .Header {
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        background-color: var(--black);

        @media (--layout-sm) {
            padding: 2.4rem 3rem;
        }
    }

    .Actions {
        position: relative;
        z-index: 1;
        padding: 2rem 2rem 1.5rem 2rem;
        width: 100%;
        background-color: var(--black);

        @media (--layout-sm) {
            width: auto;
        }
    }

    .ActionsMenuButton {
        display: inline-flex;

        @media (--layout-sm) {
            display: none;
        }
    }

    .Logo {
        position: absolute;
        width: 2.2rem;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;

        @media (--layout-sm) {
            width: 3.2rem;
        }
    }

    .MenuIconOuter {
       width: 4.2rem;
    }

    .MenuIconInner {
       position: relative;
       width: 2.4rem;
       height: 2.2rem;
       display: inline-block;
       pointer-events: none;
    }

    .MenuTopLine {
       position: absolute;
       top: 0;
       left: 0;
       width: 2.4rem;
       height: 0.3rem;
       transform: translate3d(0, 0, 0) rotate(0deg);
       background-color: var(--white);
       pointer-events: none;
       transition: all 0.15s ease-out 0s;
    }

    .MenuBottomLine {
       position: absolute;
       bottom: 0;
       left: 0;
       width: 2.4rem;
       height: 0.3rem;
       background-color: var(--white);
       pointer-events: none;
       transition: all 0.15s ease-out 0s;
    }

    .MenuMiddleLine {
       position: absolute;
       top: 50%;
       left: 0;
       width: 2.4rem;
       height: 0.3rem;
       transform: translate3d(0, -50%, 0) rotate(0deg);
       opacity: 1;
       background-color: var(--white);
       pointer-events: none;
       transition: opacity 0.15s ease-out 0s;
    }

    .changeToCross .MenuTopLine {
       width: 2.6rem;
       transform: translate3d(0, 0.9rem, 0) rotate(45deg);
    }

    .changeToCross .MenuBottomLine {
       width: 2.6rem;
       transform: translate3d(0, -1rem, 0) rotate(-45deg);
    }

    .changeToCross .MenuMiddleLine {
       opacity: 0;
    }
`;
