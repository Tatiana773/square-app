
export const createTableItem = (elements) =>{

    const items = []

    function createData(id, value) {
        return {id, value};
    }

    for (let i = 0; i < elements; i++){
        items.push(createData(i+1, " "))
    }
    return items

};

    