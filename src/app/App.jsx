import React from 'react';
import ReactDom from 'react-dom';
import { Header } from './Header.jsx';
import { Categories } from './Categories.jsx';
import { ProductsTable } from './ProductsTable.jsx';
import { Footer } from './Footer.jsx';
import styles from '../assets/sass/styles.scss';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                <Categories handleSelect={(id) => console.log('Category:', id)}/>
                <hr />
                <ProductsTable />
                <hr />
                <Footer />
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);