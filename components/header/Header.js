import React, { Component } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

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
                    <Link href="/">
                        <img
                            src="/static/logo.svg"
                            alt="tam tam logo"
                            className="Logo"
                        />
                    </Link>
                </div>
                <Navigation isOpen={ menuMobileOpen } />
                <style jsx>{ styles }</style>
            </header>
        );
    }
}


export default Header;
