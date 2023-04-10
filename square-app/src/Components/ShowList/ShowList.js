import React from "react";
import { useSelector } from "react-redux";
import ShowItemComponent from "./ShowItem";
import { selectCells } from "../../store/app/selectors";
import "./ShowList.css";


const ShowListComponent = () =>{

    const cells = useSelector(selectCells);
    
    return(
        <div className="squares">
            <h3>Hover squares</h3>
            <ul className="list">
            { cells.length > 0
                ?cells.map((item)=>
                <ShowItemComponent
                key = {item.id}
                item = {item}
                />)
                :null
            }
            </ul>
        </div>
    )
}
export default ShowListComponent;