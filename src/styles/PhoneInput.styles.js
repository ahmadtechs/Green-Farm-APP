
import { blue } from '@material-ui/core/colors';
export const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 35,
    },
    cssFocused: {},
    cssLabel: {
      // // fontSize:23,
      // '&$cssFocused': {
      //   color: blue[500],
      // },
     
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline':{
        borderColor: blue[500],
        border:0,
      },
    },
    
    notchedOutline: {},
    bootstrapRoot: {
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    selectHeight:{
      height:20,
    },
    resize:{
      fontSize:13.5,
      padding:13,
    },
    phoneInputprops:{
      textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            fontSize:14,
            margin:'auto',
            display:'none'
    },
    phoneNumberField: {
        marginLeft: 0,
        [`& fieldset`]: {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            borderWidth:0,
            outline:0,
        },
        width: '100%',
        position: 'absolute',
        top: -16,
        left:93,
        width: '68%',
      maxHeight:50,
        marginRight: 0,
        zIndex:100,
        // height:50,
        // fontSize:14,
      
    },
  
})

