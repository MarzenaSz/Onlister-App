import React from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';

class OnlisterApp extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <ShoppingList />
                <AddItem />
            </div>
        );
    }
}

export default OnlisterApp;