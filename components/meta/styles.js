import css from 'styled-jsx/css';

export default css`
   *,:after,:before {
       box-sizing: border-box
   }

   html {
       font-size: 62.5%
   }

   body {
       color: #252422;
       font-family: Barlow Regular,Helvetica Neue,Helvetica,Arial,sans-serif;
       font-size: 1.6rem;
       -webkit-font-smoothing: antialiased;
       line-height: 1.4
   }

   body,html {
       height: 100%;
       margin: 0;
       padding: 0
   }

   #__next,body {
       display: flex;
       flex: 1 0 auto;
       flex-direction: column
   }

   .Wrapper {
       padding: 0 1.5rem;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   p {
       margin: 0;
   }

   a {
       color: inherit; /* blue colors for links too */
       text-decoration: inherit; /* no underline */
   }

   button {
       background: transparent;
       border: 0;
       padding: 0;
       cursor: pointer;

       &:not(.unstyled) {
           background-color: #b7b7b7;
           color: white;
           font-weight: bold;
           text-transform: uppercase;
           font-size: 1.6rem;
           padding: 0 2.3rem;
           height: 4.6rem;
           cursor: pointer;

           &:hover {
               background-color: #8a8a8a;
           }
       }
   }

   figure {
       margin: 0;
       padding: 0;
   }

   ul {
       list-style: none;
       padding: 0;
       margin: 0;
   }
`;
