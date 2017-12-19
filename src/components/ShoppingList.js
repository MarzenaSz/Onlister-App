import React from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = () => {
    return (
        <div>
            <p>Shopping List:</p>
                <ShoppingListItem />
                <ShoppingListItem />
            <button>Sort</button>
        </div>
    );
}

export default ShoppingList;