import React from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../../../store/app/selectors";
import TableRowComponent from "./TableRow";
import "./Table.css";
import { createTableItem } from "../../../handlers/tableHandler";

const TableComponent = () =>{

    const mode = useSelector(selectMode);
    const rowNumber = mode.field;
    const rows = createTableItem(rowNumber);

    return(
        <table className="table">
            <tbody>
                {rows.length > 0
                ?rows.map((row)=>
                    <TableRowComponent
                    key = {row.id}
                    row = {row.id}
                    size = {rowNumber}
                    />
                )
                :null
                }
            </tbody>
        </table>
    )
}
export default TableComponent;