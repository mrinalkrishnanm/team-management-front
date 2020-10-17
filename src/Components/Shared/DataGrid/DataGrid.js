import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
//Config to be passed to the DataGrid component
// gridConfig = {
//     gridId,
//     ColumnList(string array)
//     dataList (data object)
// }
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.grey,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
const DataGrid = (props) => {
    return(
        <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
            {props.gridConfig.ColumnList.map((Column) => (
                <StyledTableCell>
                    {Column}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.gridConfig.dataList.map((data) => (
              <StyledTableRow>
                {props.gridConfig.ColumnList.map((Column) => (
                    <StyledTableCell component="th" scope="row">
                    {data.[Column]}
                    </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
};


export default DataGrid;