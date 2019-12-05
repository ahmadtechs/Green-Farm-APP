export const ActionsStyles = theme =>({
    root:{
        width: 630,
    },
    formWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 50,
        paddingRight: 50,
    },
    addButton: { 
      backgroundColor: 'white',
      color: '#008542',
      textTransform: 'capitalize',
      marginTop: 5,
      marginBottom: 5,
      width: 130,
      '&:hover': {
        backgroundColor: "#00854",
        color: 'white',
      }
    } ,
    button: {
      float: 'right',
      position: 'relative',
      margin: 4,
      backgroundColor: '#008542',
      color: 'white',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: "white",
        color: '#008542',
      }
    },
    header:{
        color: '#008542',
        marginLeft: 20,
        marginBottom: 20,
        textTransform: 'capitalize',
        fontSize: 18
    },
    closeIcon:{
      width: 30,
      height: 30,
      marginLeft: 600,
        color: '#008542',
        fontSize: 24,
        '&:hover': {
          color: 'white',
          backgroundColor: "#008542",
      },
    },
    fieldWrappers:{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    Fields001:{
      width: 300,
    },
    Fields:{
      width: 200,
    },
    Fields1:{
      width: 200,
    },
    fieldSizes:{
      height: 37,
      margin: 5
    },
    textFields:{
        width: 600,
        margin: 5
    },
    currentDesigBox:{
      width: 600,
      marginBottom: 15,
      marginTop: 10,
    },
    currentDesig:{
      fontSize: 13,
      marginLeft: 5,
      color: '#008542',
    },
    menuEmails:{
      fontSize: 12,
      display: 'block',
      color: '#008542',
      paddingTop: 0,
    },
    submitButton:{
        marginBottom: 30,
        marginTop: 10,
        marginLeft: 400,
        height: 45,
        width: 200,
        fontSize: 16,
        backgroundColor: '#008542',
        color: 'white',
        '&:hover': {
            backgroundColor: "#00854D",
            color: 'white',
        }
    },
    sendIcons:{
      marginLeft: 10,
    },

    actionButton: {
        width: 150,
        height: 50,
      //   margin: 4,
        textAlign: 'left',
        backgroundColor: "inherit",
        color: '#008542',
        boxShadow: 'none',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#008542',
          color: 'white',
        }
      },
      editHeader:{
        color: '#008542',
        marginRight: 150,
        textTransform: 'capitalize',
        fontSize: 14
      }
  });