import React from "react";

const ShowItemComponent = ({item}) =>{
    return(
        <li>row {item.row} col {item.cell}</li>
    )
}
export default ShowItemComponent;