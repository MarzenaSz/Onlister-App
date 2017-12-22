import React from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';
import AddItem from './AddItem';

class OnlisterApp extends React.Component {

    state = {
        // set default items to empty array
       items: ["Item-nr1", "Item-nr2", "Item-nr3"]
    };

    // method responsible for sorting item in items array
    //handleSortItems = () => {

    //};

    // method responsible for removing all items from items array
    handleRemoveItems = () => {
        // update the items and shopps state - empty the whole item/shop array
        this.setState(() => ({ items: [] }));
    };

    // method responsible for removing a sigle item from items array
    handleRemoveItem = (itemToRemove, shopToRemove) => {
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

     // method resposible for adding an item to items array
     handleAddItem = (item) => {
        // check if item exists
        if(!item) {
            return "Enter valid value to add an item";
            console.log('no item');
        } 
        else if(this.state.items.indexOf(item) > -1){
            return "The item under this name already exists";
        }

        console.log('I am working!');
        // merge two arrays thanks to concat and return a new array that contains all of the elements from both arrays
        this.setState((prevState) => ({ items: prevState.items.concat([item]) })); // <- insert item inside of old array 
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
                <AddItem handleAddItem={this.handleAddItem}/>
            </div>
        );
    }
}

export default OnlisterApp;