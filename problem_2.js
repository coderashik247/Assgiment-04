function sendNotification(email) {
    if(email.indexOf('@') !== -1){
        const remove = email.split('@');
        return (remove.join(" sent you an email from "));
    }
    else{
       return ("Invalid Email");
    }
}

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));

console.log(sendNotification('sadia8icloud.com'));
