export const styles = theme => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 'none',
      padding:15,
    },

    with:{
        width: theme.spacing.unit * 50,
        padding: theme.spacing.unit * 4,
    },
    mobileWidth:{
        width: theme.spacing.unit * 40,
        padding: theme.spacing.unit * 2,
    }
    

  });