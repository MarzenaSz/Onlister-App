import React from 'react';

class AddItem extends React.Component {

    // set default state
    state = {
        error: undefined
    };

    handleAddItem = (e) => {
        // prevent the full page refresh on submit
        e.preventDefault();

        // check if there is any value typed in and remove any trailing spaces (trim())
        const item = e.target.elements.item.value.trim();

         // (log data)...pass in item as an argument inside of handleAddItem method.
        const error = this.props.handleAddItem(item);

        // update data and rerender it
        this.setState(() => ({ error: error }));

        // if there was no error, clear the ipnut
        if(!error){
            e.target.elements.item.value = '';
        }
        
    };

    render() {
        return (
            <div>
                 {/* print error message if there is any*/}
                 {this.state.error && <p>{this.state.error}</p>}
                 <form onSubmit={(e) => {this.props.handleAddItem(e.target.elements.item.value)}}>
                     <input type="text" name="item" />
                     <button>Add Item</button>
                 </form>   
            </div>
        );
    }
}

export default AddItem;