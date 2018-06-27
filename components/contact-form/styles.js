import css from 'styled-jsx/css';

export default css`
   @import 'styles/index';

   .ContactSection {
       padding: 6rem 0;
       width: 100%;
       display: flex;
       flex-direction: column;
       flex: 1 0 auto;
       align-items: center;
       background-image: url('/static/bg.png');
       background-position: center top;
       background-size: cover;
       background-repeat: no-repeat;

       @media (--layout-sm) {
           padding: 8rem 0;
       }
   }

   .ContentWrapper {
       width: 100%;

       @media (--layout-sm) {
           max-width: 62rem;
       }
   }

   .Title {
       margin-bottom: 2rem;
       font-size: 2rem;
       font-weight: 900;
       line-height: 1.4;
       text-transform: uppercase;
       text-align: center;
       color: var(--white);

       @media (--layout-sm) {
           margin-bottom: 4rem;
           font-size: 3.6rem;
       }
   }

   .FormInner {
       padding: 2rem 1rem;
       background-color: rgba(255, 255, 255, 0.2);

       @media (--layout-sm) {
           padding: 2rem 0.5rem;
       }
   }

   .Button {
       margin-top: 2rem;
       display: flex;
       justify-content: center;

       @media (--layout-sm) {
           margin-top: 4rem;
       }
   }
`;
