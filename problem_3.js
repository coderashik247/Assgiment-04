function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }
    for(const letter of name){
        if(name[letter] >= '0' && name[letter] <= '9'){
            return true;
        }
    }
    return false;
}

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));





