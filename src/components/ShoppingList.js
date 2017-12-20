import React from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = (props) => {
    return (
        <div>
            <p>Shopping List:</p>
            <ul className="shopping-list">
                {/* loop through each item in items array and insert it inside  of a list */}
                {props.items.map((item, i) => (
                    // make ShoppingListItem instance component for each item and pass in the text info as a prop
                    <ShoppingListItem key={`item_${i + 1}`} itemText={item} />
                ))}
            </ul>
            <button>Sort</button>
            {/* kick off this method on click */}
            <button onClick={props.handleRemoveItems}>Remove All</button>
        </div>
    );
}

export default ShoppingList;