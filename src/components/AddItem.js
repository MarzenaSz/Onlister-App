import React from 'react';

class AddItem extends React.Component {

    state = {
        error: undefined
    };

    
    // method resposible for 
    handleAddItemEvent = (event) => {
        // prevet full pafe refresh after submiting the form
        event.preventDefault();
        // store typed values and remove trailling spaces
        const shop = event.target.elements.shop_name.value.trim();
        const item = event.target.elements.item.vlue.trim();
        
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddItemEvent} className="onlister_form">
                    <input type="text" name="shop_name"/>
                    <input type="text" name="item" />
                </form>
                <button>Add Item</button>
            </div>
        );
    }
}

export default AddItem;