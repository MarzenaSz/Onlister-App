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
        // update the items state - empty the whole item array
        this.setState(() => ({ items: [] }));
    };

    // method responsible for removing a sigle item from items array
    handleRemoveItem = (itemToRemove) => {
        // update items state
        this.setState((prevState) => ({
            //loop though items array (before the update) filter out the item that has been removed and return brand new array 
            // without the item that has been removed
            items: prevState.items.filter((item)=> {
                // keep all of the items that are not equal to the item that has been removed
                return itemToRemove !== item;
            })
        }));

        
    };

    render() {
        // info for Header
        const title = "Onlister App";
        const subtitle = "You will never lose your shopping list again!";


        return (
            <div>
                {/* render Header and pass in some into as props */}
                <Header title={title} subtitle={subtitle}/>
                {/* render Shopping List and pass in state and two methods as props*/}
                <ShoppingList items={this.state.items} handleRemoveItems={this.handleRemoveItems} handleRemoveItem={this.handleRemoveItem}/>
                <AddItem />
            </div>
        );
    }
}

export default OnlisterApp;