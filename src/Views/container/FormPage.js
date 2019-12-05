import React, {useState,useEffect} from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

import { Dialog, DialogContent } from '@material-ui/core';


const localGovt = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Ajaokuta',
    label: 'Ajaokuta',
  },
  {
    value: 'Ankpa',
    label: 'Ankpa',
  },
  {
    value: 'Bassa',
    label: 'Bassa',
  },
];


const useStyles = makeStyles(theme => ({
  containers: {
  //  alignItems: 'center',
  //  justifyContent: 'center',
  //  display: 'flex',
   width: '50%'
  },
  pos: {
    marginBottom: 12,
  },
  buttons:{
    color: 'white',
    backgroundColor: '#3F51B5',
    borderRadius: 0,
    minWidth: '12%',
    textTransform: 'capitalize',
    '&:hover':{
        backgroundColor: '#3F51B5',
    }
},

}));


const  FormPage = props => {

  const [open, setOpen] = useState(false);

  // Similar to componentDidMount and componentDidUpdate

  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async() =>{
    const response = await fetch('url');
    const data = await response.json();
    const item = data.results;
    setDatas(item);
    setLoading(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const [lga, setlga] = React.useState('LGA');

  const handleChange = event => {
    setlga(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
  }

  return (
       
      <div className={classes.formWrap}>

       <Button className={classes.buttons} onClick={handleClickOpen}>
            Add Referal
        </Button>

        <Dialog open={open} aria-labelledby="simple-dialog-title" onClose={handleClose}>
        <DialogContent className={classes.containers}>

      <form 
      autoComplete="on" 
      onSubmit={handleSubmit}>
    
        <TextField
          id="outlined-basic"
          label="Name"
          margin="normal"
          variant="outlined"
          fullWidth
        />
     
        <TextField
          id="outlined-basic"
          label="Phone Number"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      
        <TextField
          id="outlined-basic"
          label="Age"
          margin="normal"
          variant="outlined"
          fullWidth
        />
     
          <TextField
            id="outlined-select-lga"
            select
            label="Local Govt Area"
            fullWidth
            value={lga}
            onChange={handleChange}
            helperText="Please select your LGA"
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {localGovt.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
    
             <Button variant="contained" 
             size="large" 
             color="primary" 
             type="submit"
             >
               Submit
              </Button>
             
           </form> 
          </DialogContent>
          </Dialog>   
          </div>
  );
}

FormPage.propTypes = {
    history : PropTypes.object
}

export default FormPage;
