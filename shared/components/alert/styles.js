import css from 'styled-jsx/css';

export default css`
   @import 'styles/index';

   .Alert {
       padding: 1.5rem 2rem;
       display: flex;
       align-items: center;
       background-color: rgba(0, 0, 0, 0.2);
   }

   .Icon {
       width: 3rem;
       height: 3rem;
       display: flex;
       justify-content: center;
       align-items: center;
       background-color: rgba(0, 0, 0, 0.2);
       border-radius: 100%;
   }

   .Text {
       margin-left: 2rem;
       font-size: 1.8rem;
       line-height: 1.39;
       color: var(--white);
   }
`;
