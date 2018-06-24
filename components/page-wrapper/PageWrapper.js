import React from 'react';
import PropTypes from 'prop-types';
import Meta from 'components/meta/Meta';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';

const PageWrapper = ({ children }) => (
    <React.Fragment>
        <Meta />
        <Header />
        <div>
            { children }
        </div>
        <Footer />
        <style jsx>{
            `
                div {
                min-height: 100%;
                display: flex;
                flex: 1 0 auto;
                flex-direction: column;
                }
            `
        }
        </style>
    </React.Fragment>
);

PageWrapper.propTypes = {
    children: PropTypes.node,
};

export default PageWrapper;
