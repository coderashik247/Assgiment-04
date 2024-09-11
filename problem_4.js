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

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false  }));
console.log(calculateFinalScore("hello" ));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));



