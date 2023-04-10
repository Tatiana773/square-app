import React, { useCallback, useState} from "react";
import { useDispatch } from "react-redux";
import { addCellAction, removeCellAction } from "../../../store/app/actions";

const TableCellComponent = ({cell, row}) =>{

    const [color, setColor] = useState("white");
    const dispatch = useDispatch();

    const onOverElement = useCallback((event)=>{
        if(event.target.style.backgroundColor !== "blue"){
            setColor("blue");
            dispatch(addCellAction({
                cell: cell,
                row: row,
                id: cell.toString() + row.toString()
            }));
        }else{
            dispatch(removeCellAction(cell.toString() + row.toString()));
            setColor("white");
        }
    },[setColor, dispatch, cell, row])

    const styles = {
        backgroundColor: color,
    };

    return(
        <td
        onMouseOver = {onOverElement}
        style={styles}
        >
        </td>
    )
}
export default TableCellComponent