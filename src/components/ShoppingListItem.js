import React from 'react';

const ShoppingListItem = (props) => {
    return (
        <div>
            {/* accept item list passed in from ShoppingLIst component as a prop and insert it inside of li element */}
            <li>{props.itemList}</li>
            {/* */}
            <button onClick={(event) => {props.handleRemoveItem(props.itemList); }}>Remove</button>
        </div>
    );
}

export default ShoppingListItem;