import React from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = () => {
    return (
        <div>
            <p>Shopping List:</p>
                <ShoppingListItem />
                <ShoppingListItem />
            <button>Sort</button>
            <button>Remove All</button>
        </div>
    );
}

export default ShoppingList;