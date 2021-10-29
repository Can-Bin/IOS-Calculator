window.onload = function(){
    let numbers = document.querySelectorAll(".num");
    let screen = document.getElementById("result");
    let selectedOperator = "";
    let leftPart = "";
    let rightPart = "";
    for(let i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click", function() {
            screen.innerHTML += this.value;
            if(selectedOperator ==""){
                leftPart += this.value;
            }

            else if(selectedOperator !=""){
                rightPart += this.value;
            }
            
        }, false);
    }

    let operators = document.querySelectorAll(".operator")
    for(let i = 0; i < operators.length; i++){
        operators[i].addEventListener("click", function() {
            selectedOperator = this.value;
            if(screen.innerHTML[0] == "-"){
                if(!screen.innerHTML.includes("+") && !screen.innerHTML.includes("-") && !screen.innerHTML.includes("*") && !screen.innerHTML.includes("/")){
                    screen.innerHTML += selectedOperator;
                }
            }

            else if(!screen.innerHTML.includes("+") && !screen.innerHTML.includes("-") && !screen.innerHTML.includes("*") && !screen.innerHTML.includes("/")){
                screen.innerHTML += selectedOperator;
            }
            

        }, false);
    }

    

    document.getElementById("equation").addEventListener("click", function(){
        
        if(selectedOperator == "+"){
            screen.innerHTML = parseFloat(leftPart)  + parseFloat(rightPart);
        }

        else if(selectedOperator == "-"){
            screen.innerHTML = parseFloat(leftPart)  - parseFloat(rightPart);
        }

        else if(selectedOperator == "*"){
            screen.innerHTML = parseFloat(leftPart)  * parseFloat(rightPart);
        }

        else if(selectedOperator == "/"){
            if(rightPart == 0){
                screen.innerHTML = "Infinity"
            }
            else{
                screen.innerHTML = parseFloat(leftPart)  / parseFloat(rightPart);
            }
            
        }

    }, false);

    document.getElementById("ac").addEventListener("click", function(){
        selectedOperator = "";
    
        leftPart = "";
        rightPart = "";
        screen.innerHTML = "";
    
        }, false);
    
        // document.getElementById("plus-minus").addEventListener("click", function(){
        //     leftPart *= -1;
        //     screen.innerHTML = parseFloat(leftPart);
        // }, false);
    
        document.getElementById("backspace").addEventListener("click", function(){
            screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length-1) 
        }, false);
    
        document.getElementById("dot").addEventListener("click", function(){
            if(rightPart == "")
            {
                leftPart+= "." ;
                screen.innerHTML = leftPart 
            }
            else
            {
                rightPart+= ".";
                screen.innerHTML = leftPart + selectedOperator + rightPart ;

            }
        }, false); 

};
