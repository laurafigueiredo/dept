import React, { Component } from 'react';

// Components
import Input from 'shared/components/input/Input';
import TextArea from 'shared/components/text-area/TextArea';
import Button from 'shared/components/button/Button';
import Alert from 'shared/components/alert/Alert';

// Utils
import { hasError } from './utils';

// styles
import styles from './styles';

class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                textarea: '',
            },
            error: {},
            successSubmit: false,
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange({ target }) {
        const { id, value, type } = target;
        const { inputs, error } = this.state;

        // sets new target input on state and error if target input isn't valid
        this.setState({
            inputs: {
                ...inputs,
                [id]: value,
            },
            error: {
                ...error,
                [id]: hasError(type, value),
                submit: false,
            },
        });
    }

    handleOnBlur({ target }) {
        const { id, type, value } = target;
        const { error } = this.state;

        // sets error if target input isn't valid
        this.setState({
            error: {
                ...error,
                [id]: hasError(type, value),
            },
        });
    }

    handleOnSubmit(event) {
        const { inputs } = this.state;

        event.preventDefault();

        if (!(!!inputs.firstName &&
            !!inputs.lastName &&
            !!inputs.email &&
            !!inputs.textarea)) {
            // sets error if required inputs are not valid
            this.setState({
                error: {
                    firstName: hasError('text', inputs.firstName),
                    lastName: hasError('text', inputs.lastName),
                    email: hasError('email', inputs.email),
                    textarea: hasError('textarea', inputs.textarea),
                    submit: true,
                },
            });
        } else {
            // sets success if all required inputs are valid
            this.setState({
                successSubmit: true,
            });
        }
    }

    render() {
        const { error, inputs, successSubmit } = this.state;

        return (
            <section className="ContactSection">
                <div className="ContentWrapper">
                    <h1 className="Title">We would love to hear from you</h1>
                    {
                        !successSubmit &&
                        <React.Fragment>
                            {
                                error.submit &&
                                <Alert type="error">
                                    Please complete the form and try again.
                                </Alert>
                            }
                            <form onSubmit={ this.handleOnSubmit }>
                                <div className="FormInner">
                                    <Input
                                        type="text"
                                        placeholder="First name"
                                        name="firstName"
                                        id="firstName"
                                        value={ inputs.firstName }
                                        hasError={ !!error.firstName }
                                        errorQuote="We need your first name."
                                        onBlur={ this.handleOnBlur }
                                        onChange={ this.handleOnChange }
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Last name"
                                        name="lastName"
                                        id="lastName"
                                        value={ inputs.lastName }
                                        hasError={ !!error.lastName }
                                        errorQuote="We need your last name."
                                        onBlur={ this.handleOnBlur }
                                        onChange={ this.handleOnChange }
                                    />
                                    <Input
                                        type="email"
                                        placeholder="Your e-mail address"
                                        name="email"
                                        id="email"
                                        value={ inputs.email }
                                        hasError={ !!error.email }
                                        errorQuote="Please use a valid e-mail address."
                                        onBlur={ this.handleOnBlur }
                                        onChange={ this.handleOnChange }
                                    />
                                    <Input
                                        type="tel"
                                        placeholder="Your phone number (optional)"
                                        name="phone"
                                        id="phone"
                                        value={ inputs.phone }
                                        onChange={ this.handleOnChange }
                                    />
                                    <TextArea
                                        type="textarea"
                                        placeholder="Your message..."
                                        name="textarea"
                                        id="textarea"
                                        value={ inputs.textarea }
                                        hasError={ !!error.textarea }
                                        errorQuote="Sorry, your message can't be empty."
                                        onBlur={ this.handleOnBlur }
                                        onChange={ this.handleOnChange }
                                    />
                                </div>
                                <div className="Button">
                                    <Button primary type="submit">Send</Button>
                                </div>
                            </form>
                        </React.Fragment>
                    }
                    {
                        successSubmit &&
                        <Alert type="success">
                            Thank you, we have received your message.
                        </Alert>
                    }
                </div>
                <style jsx>{ styles }</style>
            </section>
        );
    }
}

export default ContactForm;
