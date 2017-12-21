import React from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = (props) => {
    return (
        <div>
            <p>Shopping List:</p>
            <ul className="shopping-list">
                {/* loop through each item in items array and insert it inside  of a list */}
                {props.items.map((item, i) => (
                    // make ShoppingListItem instance component for each item, pass in the text info and 
                    // handleRemoveItem method as a props
                    <ShoppingListItem key={`item_${i + 1}`} itemList={item} handleRemoveItem={props.handleRemoveItem}/>
                ))}
                
            </ul>
            <button>Sort</button>
            {/* kick off this method on click if there are any items provided */}
            <button onClick={props.handleRemoveItems} disabled={props.items.length === 0}>Remove All</button>
        </div>
    );
}

export default ShoppingList;