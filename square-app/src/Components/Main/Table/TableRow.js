import React from "react";
import { createTableItem } from "../../../handlers/tableHandler";
import TableCellComponent from "./TableCell";

const TableRowComponent = ({size, row}) =>{

   const cells = createTableItem(size);

    return(
        <tr>
            {
                cells.length > 0
                ?cells.map((cell)=>
                <TableCellComponent
                key = {cell.id}
                cell = {cell.id}
                row = {row}
                />)
                :null
            }
        </tr>
    )
}
export default TableRowComponent