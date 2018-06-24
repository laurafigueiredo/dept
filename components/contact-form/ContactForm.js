import React, { Component } from 'react';

// Components
import Input from 'shared/components/input/Input';
import TextArea from 'shared/components/text-area/TextArea';
import Button from 'shared/components/button/Button';

// Utils
import { hasError } from './utils';

// styles
import styles from './styles';

class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            error: {},
            successSubmit: false,
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange({ target }) {
        const { id, value } = target;

        this.setState({
            [id]: value,
            error: {
                submit: false,
            },
        });
    }

    handleOnBlur({ target }) {
        const { id, type, value } = target;
        const { error } = this.state;

        this.setState({
            error: {
                ...error,
                [id]: hasError(type, value),
            },
        });
    }

    handleOnSubmit(event) {
        const { error } = this.state;

        event.preventDefault();

        if (error.firstName ||
            error.lastName ||
            error.email ||
            error.textarea) {
            this.setState({
                error: {
                    ...error,
                    submit: true,
                },
            });
        } else {
            this.setState({
                successSubmit: true,
            });
        }
    }

    render() {
        const { error, successSubmit } = this.state;

        return (
            <section className="ContactSection">
                <h1 className="Title">We would love to hear from you</h1>
                {
                    !successSubmit &&
                    <React.Fragment>
                        {
                            error.submit &&
                            <p>Please complete the form and try again.</p>
                        }
                        <form onSubmit={ this.handleOnSubmit }>
                            <div className="FormInner">
                                <Input
                                    type="text"
                                    placeholder="First name"
                                    name="firstName"
                                    id="firstName"
                                    hasError={ !!error.firstName }
                                    errorQuote="We need your first name."
                                    required
                                    onBlur={ this.handleOnBlur }
                                    onChange={ this.handleOnChange }
                                />
                                <Input
                                    type="text"
                                    placeholder="Last name"
                                    name="lastName"
                                    id="lastName"
                                    hasError={ !!error.lastName }
                                    errorQuote="We need your last name."
                                    required
                                    onBlur={ this.handleOnBlur }
                                    onChange={ this.handleOnChange }
                                />
                                <Input
                                    type="email"
                                    placeholder="Your e-mail address"
                                    name="email"
                                    id="email"
                                    hasError={ !!error.email }
                                    errorQuote="Please use a valid e-mail address."
                                    required
                                    onBlur={ this.handleOnBlur }
                                    onChange={ this.handleOnChange }
                                />
                                <Input
                                    type="tel"
                                    placeholder="Your phone number (optional)"
                                    name="phone"
                                    id="phone"
                                />
                                <TextArea
                                    type="textarea"
                                    placeholder="Your message..."
                                    name="textarea"
                                    id="textarea"
                                    hasError={ !!error.textarea }
                                    errorQuote="Sorry, your message can't be empty."
                                    required
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
                    <p>Thank you, we have received your message.</p>
                }
                <style jsx>{ styles }</style>
            </section>
        );
    }
}

export default ContactForm;
