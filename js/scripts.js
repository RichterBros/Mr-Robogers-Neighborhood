$(document).ready(function(){
    number.numberArray();
});
    
    
    
    
function Numbers(userInput, newArr, newString ){
    this.userInput = userInput;
    this.newArr = newArr;
    this.newString = newString;
}
        
var number = new Numbers(50,[],"")
     
Numbers.prototype.numberArray = function() {
        
    for(i=0; i < this.userInput + 1; i++){
        this.newArr.push(i)
    }
    
    this.newString = this.newArr.join().split(',') 
          
    for (i = 0; i < this.newString.length; i ++){
    if (this.newString[i].includes("3") ){
        this.newString[i] = "Won't you be my neighbor?"
    }else if (this.newString[i].includes("2") ){
        this.newString[i] = "boop!"
    }else if (this.newString[i].includes("1") ){
        this.newString[i] = "beep!"
        } 
    }   
    console.log(this.newString)    
   
}

