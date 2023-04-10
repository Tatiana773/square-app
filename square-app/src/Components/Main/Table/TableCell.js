import React, { useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCellAction, removeCellAction } from "../../../store/app/actions";
import { selectisReset } from "../../../store/app/selectors";

const TableCellComponent = ({cell, row}) =>{

    const [color, setColor] = useState("white");
    const isReset = useSelector(selectisReset)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(isReset)setColor("white")
    }, [isReset])

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