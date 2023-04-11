import React from "react";
import PropTypes from 'prop-types';

const ShowItemComponent = ({item}) =>{

    return(
        <li>row {item.row} col {item.cell}</li>
    )
}
export default ShowItemComponent;

ShowItemComponent.propTypes = {
    item: PropTypes.shape({
        cell: PropTypes.number,
        row: PropTypes.number,
        id: PropTypes.string
      }),
}