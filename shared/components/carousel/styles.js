import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .slick-slider {
       position: relative;
       overflow: hidden;
    }

    .slick-list {
       height: 100%;
    }

    .slick-slide {
        max-height: calc(100vh - 6rem);
       height: 100%;
       min-height: 0.1rem;
       float: left;
    }

    .slick-slide {
        & > div {
            height: 100%;
        }
    }

    .slick-track {
       height: 100%;
       display: flex;
       flex-wrap: nowrap;
    }

    .slick-arrow {
        position: absolute;
        top: 50%;
        z-index: 1;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--black);
        border-radius: 100%;
        transform: translate(0, -50%);
        font-size: 0;

        &:hover {
            background-color: var(--orange);
        }
    }

    .slick-prev {
        left: 2.5rem;

        &::before {
            content: url('/static/arrow_left.svg');
            display: block;
        }
    }

    .slick-next {
        right: 2.5rem;

        &::before {
            content: url('/static/arrow_right.svg');
            display: block;
        }
    }

    .SliderWrapper {
        position: relative;
        max-height: calc(100vh - 6rem);
    }

    .Image {
        position: relative;
        width: 100%;
        max-width: 100%;
        height: calc(100vh - 6rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .Title {
        position: absolute;
        top: calc(50% - 7rem);
        margin-bottom: 3rem;
        font-size: 3rem;
        font-weight: 900;
        text-transform: uppercase;
        color: var(--black);
        transform: translate(0, -50%);

        @media (--layout-sm) {
            font-size: 4rem;
        }

        @media (--layout-md) {
            top: calc(50% - 8rem);
            font-size: 4rem;
        }

        @media (--layout-xl) {
            font-size: 5rem;
        }
    }

    .IconGroup {
        position: absolute;
        bottom: 4rem;
        left: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translate(-50%, 0);
    }

    .IconRound {
        position: relative;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--white);
        border-radius: 100%;
        cursor: pointer;

        &::before {
            content: url('/static/arrow_down_touch.svg');
            width: 1.2rem;
            height: 1.7rem;
            display: block;
        }

        @media (--layout-md) {
            width: 5.4rem;
            height: 5.4rem;

            &::before {
                content: url('/static/mouse.svg');
                width: 2.2rem;
                height: 3.4rem;
            }

            &::after {
                content: url('/static/arrow_down.svg');
                position: absolute;
                bottom: -1rem;
                width: 1.2rem;
                height: 0.8rem;
                display: block;
                pointer-events: none;
            }

            &:hover {
                &::before {
                    content: url('/static/mouse_.svg');
                }
            }
        }
    }

    .IconArrow {
        display: none;

        @media (--layout-md) {
            margin-top: 1rem;
            display: block;
        }
    }
`;
