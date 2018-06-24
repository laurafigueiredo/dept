import React, { Component } from 'react';
import classnames from 'classnames';

// Components
import Button from 'shared/components/button/Button';
import Navigation from './navigation/Navigation';

// Styles
import styles from './styles.js';


class Header extends Component {
    constructor() {
        super();

        this.state = {
            menuMobileOpen: false,
        };

        this.handleMobileMenuButton = this.handleMobileMenuButton.bind(this);
    }

    handleMobileMenuButton() {
        this.setState({
            menuMobileOpen: !this.state.menuMobileOpen,
        });
    }

    render() {
        const { menuMobileOpen } = this.state;

        return (
            <header className="Header">
                <div className="Actions">
                    <div className="ActionsMenuButton">
                        <Button
                            normal
                            onClick={ this.handleMobileMenuButton }
                        >
                            <div className={ classnames('MenuIconInner', { ['changeToCross']: menuMobileOpen }) }>
                                <span className="MenuTopLine" />
                                <span className="MenuMiddleLine" />
                                <span className="MenuBottomLine" />
                            </div>
                        </Button>
                    </div>
                    <img
                        src="/static/logo-stripe.png"
                        alt="tam tam logo"
                        className="Logo"
                    />
                </div>
                <Navigation isOpen={ menuMobileOpen } />
                <style jsx>{ styles }</style>
            </header>
        );
    }
}


export default Header;
