$(document).ready(function(){
    number.numberArray();
    });
    
    
    
    
    function Numbers(userInput){
       this.userInput = userInput;
    }
        
    var number = new Numbers()
        
    
    Numbers.prototype.numberArray = function() {
        userInput =50;
        newArr = []
        newString = ""
        
        for(i=0; i < userInput + 1; i++){
            newArr.push(i)
           
           }
           
           newString = newArr.join().split(',') 
          
           newString.forEach(function(){
            

           });
           
           console.log(newString)
            
            
           
           
        
        

