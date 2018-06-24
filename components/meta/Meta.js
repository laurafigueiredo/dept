import React from 'react';
import Head from 'next/head';
import styles from './styles';

export default () => (
    <React.Fragment>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
        <style jsx global>{ styles }</style>
    </React.Fragment>
);
