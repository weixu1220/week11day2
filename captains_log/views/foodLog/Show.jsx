import React from "react";
function Show({foodLog}) {
    let {name, quantity, _id, createdAt} = foodLog
    return (
        <div>
            <h1>Show</h1>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{createdAt.toString()}</p>
        </div>
    );
}

export default Show;