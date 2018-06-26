import css from 'styled-jsx/css';

export default css`
   @import 'styles/index';

   .TextareaWrapper {
       position: relative;
       margin-top: 1rem;
       width: 100%;
       display: flex;
       flex-direction: column;

       @media (--layout-sm) {
           padding: 0 0.5rem;
       }
   }

   .Textarea {
       padding: 1.2rem 2rem;
       font-size: 1.8rem;
       font-weight: 300;
       color: var(--black);
       background-color: var(--white);
       border: none;
       resize: none;
   }

   .TextareaSuccess {
       content: url('/static/check_icon.svg');
       position: absolute;
       top: 1.2rem;
       right: 1.6rem;
       width: 2.5rem;
       height: 2.5rem;
       display: block;
   }

   .Error {
       position: relative;
       padding: 0.9rem 2rem;
       background-color: var(--gunmetal);
       color: var(--white);

       &::before {
           content: '';
           position: absolute;
           top: -1rem;
           left: 2rem;
           width: 0;
           height: 0;
           border-left: 0.7rem solid transparent;
           border-right: 0.7rem solid transparent;
           border-bottom: 1.1rem solid var(--gunmetal);
       }
   }
`;
