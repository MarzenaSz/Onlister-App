import React from 'react';

const ShoppingListItem = (props) => {
    return (
        <div>
            {/* accept item text passed in from ShoppingLIst component as a prop and insert it inside of li element */}
            <li>{props.itemText}</li>
            <button>Remove</button>
        </div>
    );
}

export default ShoppingListItem;