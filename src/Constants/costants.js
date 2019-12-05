export const REGEX ={
    EMAIL:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //email
    BUISNESSNAME:/^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/, //for buisness name
    OTP:/^[0-9]{8}$/,
    PASSWORD:/^[a-zA-Z]\w{6,1000}$/,
    WEBSITE:/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,
}

export const API = {

    URL:'https://bhfarmers.herokuapp.com/',
    PATHS:{
      ACTIVITIES_COMPLETION_SUCCESS: 'activities'
        
    },
    status: {
        /* *** SERVER STATUS CODES *** */
        OK: '200',
        BAD_REQUEST: '400',
        INVALID_CREDENTIALS: '403',
        NOT_ACCEPTABLE: '406',
        NOT_FOUND: '404',
        OTP_EXPIRED: '405',
        INVALID_CLAIM: '490',
        UNAUTHORIZED:'401',
        ALGORITHM_MISMATCH: '492',
        TOKEN_EXPIRED: '498',
        COOKIE_REQUIRED: '499',
        INTERNAL_SERVER_ERROR: '500',
        /* *** FRONT END STATUS CODES *** */
        NO_TOKEN_IN_STORAGE: '0',
        /* VALIDATE_INVITE */
        VALIDATE_INVITE_FAILED_INVALID_CODE: '1',
        VALIDATE_INVITE_FAILED_TO_PROCESS: '2',
        VALIDATE_INVITE_SUCCESS_HAS_ACCOUNT: '3',
        VALIDATE_INVITE_SUCCESS_NEW_ACCOUNT: '4',
      },
     
}
