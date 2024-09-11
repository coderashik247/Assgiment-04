function calculateTax(income, expenses) {
    if(income <0 ||expenses <0){
        return "Invalid Input"
    }
    else if (income < expenses){
        return "Invalid Input";
    }
    else{
        return (income - expenses)*.2;
    }    
}


function sendNotification(email) {
    if(email.indexOf('@') !== -1){
        const remove = email.split('@');
        return (remove.join(" sent you an email from "));
    }
    else{
       return ("Invalid Email");
    }
}


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


function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
    let mark = 0;
    if(obj.isFFamily === true){
        mark = 20 + obj.testScore + obj.schoolGrade;
    }
    else{
        mark = 0 + obj.testScore + obj.schoolGrade; 
    }
    
    if(mark >= 80){
        return true;
    }
    else{
        return false;
    }
}


function  waitingTime(waitingTimes, serialNumber) {
    if((!Array.isArray(waitingTimes)) || (typeof serialNumber !== 'number')){
        return "Invalid Input";
    }
    else{
        let timeSum = 0;
        let size = waitingTimes.length;
        for(const time of waitingTimes){
            timeSum += time;
        }
        const averageTime = Math.round(timeSum/size);
        const remainingSerial = (serialNumber-1) - size;
        
        return (remainingSerial*averageTime);
    }
}