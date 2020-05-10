import React from "react"; 

function FilterBox(){
    return (
        <div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Filter</button>
        </div>
        </div>
        </div>
    ); 
}

export default FilterBox; 