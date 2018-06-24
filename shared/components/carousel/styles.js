import css from 'styled-jsx/css';

export default css`
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
        transform: translate(0, -50%);
    }

    .slick-prev {
        left: 0;
    }

    .slick-next {
        right: 0;
    }

    .SliderWrapper {
        max-height: calc(100vh - 6rem);
    }

    .Image {
        width: 100%;
        max-width: 100%;
        height: calc(100vh - 6rem);
        vertical-align: top;
        background-position: center top;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
