import React from 'react';
import Head from 'next/head';
import styles from './styles';

export default () => (
    <React.Fragment>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,900" rel="stylesheet" />
        </Head>
        <style jsx global>{ styles }</style>
    </React.Fragment>
);
