
export function getNumberOfChars(name) {
    // This funtion returns the number of characters in: name
    return name.length;

}

export function getFirstChar(name) {
    // This funtion returns the first character of: name
    return name.charAt(0);

}

export function getLastChar(name) {
    // This funtion returns the last character of: name using slice method
    return name.slice(-1);

}

export function getLower(name) {
    // This funtions returns the name all in lower case (example: "ABBA" becomes "abba")
    return name.toLocaleLowerCase();

}

export function getUpper(name) {
    // This funtion returns the name all in upper case (example: "abubakar" becomes "ABUBAKAR")
    return name.toLocaleUpperCase();

}

export function getCapitalized(name) {
    // This funtion returns the capitalized version of name (example: "mARIA" becomes "Maria")
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

}
