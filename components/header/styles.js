import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .Header {
        z-index: 10;
        display: flex;
        background-color: var(--black);
    }

    .Actions {
        width: 100%;
        z-index: 1;

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
        justify-self: center;
    }

    .MenuIconOuter {
       width: 4.2rem;
    }

    .MenuIconInner {
       position: relative;
       width: 2.2rem;
       height: 2.2rem;
       display: inline-block;
       pointer-events: none;
    }

    .MenuTopLine {
       position: absolute;
       top: 0;
       left: 0;
       width: 2.2rem;
       height: 0.1rem;
       transform: translate3d(0, 0, 0) rotate(0deg);
       background-color: var(--white);
       pointer-events: none;
       transition: all 0.15s ease-out 0s;
    }

    .MenuBottomLine {
       position: absolute;
       bottom: 0;
       left: 0;
       width: 2.2rem;
       height: 0.1rem;
       background-color: var(--white);
       pointer-events: none;
       transition: all 0.15s ease-out 0s;

       & .changeToCross {
           width: 2rem;
           transform: translate3d(0, -1rem, 0) rotate(-45deg);
       }
    }

    .MenuMiddleLine {
       position: absolute;
       top: 50%;
       left: 0;
       width: 2.2rem;
       height: 0.1rem;
       transform: translate3d(0, 0, 0) rotate(0deg);
       opacity: 1;
       background-color: var(--white);
       pointer-events: none;
       transition: opacity 0.15s ease-out 0s;
    }

    .changeToCross .MenuTopLine {
       width: 2rem;
       transform: translate3d(0, 1.1rem, 0) rotate(45deg);
    }

    .changeToCross .MenuBottomLine {
       width: 2rem;
       transform: translate3d(0, -1rem, 0) rotate(-45deg);
    }

    .changeToCross .MenuMiddleLine {
       opacity: 0;
    }
`;
