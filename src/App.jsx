import React from 'react';
import ReactDom from 'react-dom';
import styles from './assets/sass/styles.scss';

const App = () => {
    return <h1>Hello world!</h1>;
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);