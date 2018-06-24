import css from 'styled-jsx/css';

export default css`
    @import 'styles/index';

    .TextareaWrapper {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .Textarea {
        padding: 1.2rem 2rem;
        font-size: 1.8rem;
        font-weight: 300;
        background-color: var(--white);
        color: var(--black);
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
