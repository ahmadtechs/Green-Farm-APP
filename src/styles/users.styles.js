
import { Fonts, Colors } from "./themes";

export const styles =theme=> ({
    root: {
      flexGrow: 1,
      padding:0,
      maxWidth: 400,
    },
     pagination:{
        width:'50%',
        margin:'auto',
        alignSelf:'center',
     },
   tabsWrapper:{
     
    width:'35%',
    flexDirection:"row",
    // justifyContent:"space-between",
    display:'flex',
    alignContent:"center",
    alignItems:'flex-start'
   },
   mobileTabsWrapper:{
    width:'100%',
   },
   card:{
    width:'45%',
    boxShadow:'none',
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
   },
   button:{
    padding:10,
    justifyContent:'space-around',
    fontFamily:Fonts.primary
   },
   tableCard:{
    width:'100%',
    height:'100%'
   },
   isActive:{
    // boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
   },
   employeeWrapper:{
       padding:0,
       margin:0,
       width: '100%',
       marginTop: theme.spacing.unit+5,
       overflowX: 'auto',
     },
     label:{
      fontSize: "14px",
      transform: "translate(14px, 12px)",
      marginTop: "0px"
  },
  size: {
    '&:focus': {
      backgroundColor: 'none',
    },
    fontSize: "14px",
    padding: "0.7em",
    paddingHorizontal:5,   
  },
  theInput:{
    fontSize:14,
    lineHeight:1
  },
     table: {
        minWidth: 300,
      },
      row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
   },
   headItems:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-between",
    display:'flex',
    height:40,
    paddingLeft:5,
    paddingRight:0,
    marginTop:0
   },
   textField: {
    margin: theme.spacing.unit / 2,
      marginTop:theme.spacing.unit/2,
    width: '100%',
    // height:50,
    textAlign: 'left',
   
  },
  borderLeft:{
    borderTopLeftRadius:0,
  },
  borderRight:{
    borderTopRightRadius:0,
  },
   headerButton:{
    width:'20%',
    borderRadius:10,
    color:Colors.blueSecondary,
    padding:0,
    borderColor:Colors.blueSecondary,
    '&:hover':{
        boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    }

   },
   
   tableHeader:{
           backgroundColor:Colors.blueSecondary
   },
   topic:{
    fontSize:18,
    fontWeight:600,
    fontFamily:Fonts.primary,
   },
   
  });
  