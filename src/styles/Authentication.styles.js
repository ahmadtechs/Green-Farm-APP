import { blue } from '@material-ui/core/colors';
import { Colors } from './themes';
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 25,
      zIndex: 100,
    },
    dense: {
      marginTop: 10,
    },
    fab: {
      height: 46,
      width: 46,
      margin: theme.spacing.unit,
      paddingTop: 3,
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[800]
      }
    },
    fabProgress: {
      color: blue[900],
      position: 'absolute',
      top: 4,
      right: 4,
      zIndex: 1,
    },
    button: {
      marginTop: 20,
      margin: theme.spacing.unit,
      height: 40,
      textTransform: 'none',
      width: 350,
      backgroundColor: blue[800],
      '&:hover': {
        backgroundColor: blue[900],
      },
      color: '#fff'
      // color:'rgb(4, 32, 63)',
    },
    mobileButton:{
      width: '100%',
      height:35,
      marginTop:10,
    },
    phoneInputprops: {
      marginBottom: 8,
      fontSize: 16,
    },
    FormHelperText:{
      color:Colors.danger,
      marginTop:'0.4em',
      marginLeft:15,
      textAlign:'right',
    },
    resize: {
      paddingBottom: 0,
      fontSize: 14,
      marginBottom: -4,
      paddingLeft: 10,
  
    },
    margin: {
      margin: theme.spacing.unit,
    },
    textField: {
      'label + &': {
        marginBottom: 10,
      },
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginBottom: theme.spacing.unit / 2,
      width: 350,
      height: 40,
      flexBasis: 200,
    },
    mobileTextField:{
      width: '100%',
      height: 30,
    },
  
  })

  export default styles