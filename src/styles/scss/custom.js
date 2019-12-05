import { Fonts, Colors } from "../themes";
const {grey} = Colors;
const { primary} = Fonts;
export const styles = theme =>({
    smallText:{
        textAlign: 'center',
        fontFamily: primary,
        fontSize: '13px',
        color: grey,
        paddingLeft: '4px',
    }
})