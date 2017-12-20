import React from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';

class OnlisterApp extends React.Component {

    state = {
        // set default items to empty array
        items: ["Item-nr1", "Item-nr2", "Item-nr3"]
    };

    // method resposible for adding an item to items array
    handleAddItem = () => {

    };

    // method responsible for sorting item in items array
    handleSortItems = () => {

    };

    // method responsible for removing all items from items array
    handleRemoveItems = () => {
        // empty the whole item array
        this.setState(() => ({ items: [] }));
    };

    // method responsible for removing a sigle item from items array
    handleRemoveItem = () => {

    };

    render() {
        // info for Header
        const title = "Onlister App";
        const subtitle = "You will never lose your shopping list again!";


        return (
            <div>
                {/* render Header and pass in some into as props */}
                <Header title={title} subtitle={subtitle}/>
                {/* render Shopping List and pass in state and a method as props*/}
                <ShoppingList items={this.state.items} handleRemoveItems={this.handleRemoveItems} />
                <AddItem />
            </div>
        );
    }
}

export default OnlisterApp;