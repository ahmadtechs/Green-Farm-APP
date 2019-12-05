import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MUIDataTable from "mui-datatables";
import FormPage from './FormPage'

const useStyles = makeStyles( theme => ({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
}));

 const StickyHeadTable = props =>{

  const columns = ["Name", "Phone", "Age", "L.G.A", "Marital Status"];

  const data = [
    ["Joe James", "0703 0001 101", "30", "Ankpa", "Married"],
    ["John Walsh", "0903 3000 000", "26", "Okene", "Single"],
    ["Bob Herm", "0804 2222 000", "52", "Lafia", "Married"],
    ["James Houston", "0811 2000 000", "60", "Lokoja", "Single"],
  ];

  const options = {
    filterType: 'checkbox',
    responsive: 'scroll',
    filter: false
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <FormPage/>
    <Paper >
      <MUIDataTable 
      title={"Referal Lists"} 
      data={data} 
      columns={columns} 
      options={options} 
      />
    </Paper>
    </div>
  );
}

export default StickyHeadTable;