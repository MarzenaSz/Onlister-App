import React from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';

class OnlisterApp extends React.Component {

    state = {
        //set default items to empty array
        items: [{
            shop: "",
            item: ""
        }]
    };
    
    // method resposible for adding an item to items array
    handleAddItem = () => {

    };

    // method responsible for sorting item in items array
    handleSortItems = () => {

    };

    // method responsible for removing all items from items array
    handleRemoveItems = () => {

    };

    // method responsible for removing a sigle item from items array
    handleRemoveItems = () => {

    };

    render() {
        // info for Header
        const title = "Onlister App";
        const subtitle = "You will never lose your shopping list again!";


        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <ShoppingList />
                <AddItem />
            </div>
        );
    }
}

export default OnlisterApp;