import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import PageWrapper from 'components/page-wrapper/PageWrapper';
import ContactForm from 'components/contact-form/ContactForm';

class Contact extends Component {
    static async getInitialProps({ query }) {
        return { query };
    }

    render() {
        return (
            <PageWrapper>
                <ContactForm />
            </PageWrapper>
        );
    }
}

Contact.propTypes = {
    query: PropTypes.object,
};

export default Contact;
