const reverserString = (str) => {
    if (str.length === 0){
        return ''
    }
    return str.split("").reverse().join("");
}
export default reverserString;