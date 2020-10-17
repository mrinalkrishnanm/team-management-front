import React from 'react';
import DataGrid  from '../Shared/DataGrid/DataGrid';
const columnList = ['A','B', 'C']
const object = [
   {
       A: 1,
       B: 2,
       C: 3
   } , {
    A: 1,
    B: 2,
    C: 3
    },
    {
        A: 1,
        B: 2,
        C: 3
    }  
]
const gridConfig = {
    dataList: object,
    ColumnList: columnList
}
const Teammate = () => {
    return (
        <DataGrid gridConfig={gridConfig} />
    )
}

export default Teammate;