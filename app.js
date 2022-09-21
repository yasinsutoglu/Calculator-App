//SELECTORS
const panel = document.querySelector(".panel")
const reset = document.querySelector(".reset")
const negate = document.querySelector(".negate")
const percent = document.querySelector(".percent")
const container = document.querySelector(".container")

let temp;
let total = 0;
let str = "";
let operator="";


 const operate = (operator) =>{
    switch(operator){
        case "+":
            return total + temp;
        case "-":
            return total - temp;
        case "*":
            return total * (temp==0 ? temp=1: temp+=0);
        case "/":
            return total / (temp == 0 ? (temp = 1) : (temp += 0));
        case "=":
            return  temp==0 ? total : 0;
    }
 }

container.addEventListener("click",(e)=>{
    const el = e.target;

    if(el.classList.contains("num")){

         (str.includes(".") && el.textContent === ".") ? str += "" : str += el.textContent;         
         panel.textContent = Number(str);

    }else if(el.classList.contains("operator")){
       

        //!Summation
        if (el.classList.contains("plus")) {
            if(str!==""){
                if(operator !== "="){
                    temp = Number(panel.textContent);
                    total = !(operator === "") ? operate(operator) : total + temp;
                    panel.textContent = total;
                    str = "";
                    operator = "+";
                 }else if(operator === "="){
                        temp = Number(panel.textContent);
                        total = operate(operator) + temp;
                        str = "";
                        operator = "+";
                    }
            }else{
                temp = 0;
                total = Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total + temp);
                operator = "+";
            }            
            
             console.log(total , temp, operator)
             //!Subtruction      
         }else if (el.classList.contains("sub")) {
            if(str!==""){
                if (operator !== "=") {
                  temp = Number(panel.textContent);
                  total = !(operator === "") ? operate(operator) : (total == 0 ? (-1)*(total - temp) : (total-temp));
                  console.log("mytotal:",total)
                  panel.textContent = total;
                  str = "";
                  operator = "-";
                } else if (operator === "=") {
                  temp = Number(panel.textContent);
                  total = operate(operator) - (-temp);
                  str = "";
                  operator = "-";
                }
                
            }else{
                temp = 0;
                total= Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total - temp);
                operator = "-"; 
            }        
            console.log(total, temp, operator); 
            //! Multiplication      
        }else if (el.classList.contains("mult")) {
            if(str!==""){
                if(operator !== "="){
                    temp = Number(panel.textContent);
                    total = !(operator === "") ? operate(operator) : ((total==0 ? total=1 : total+=0) * temp);
                    panel.textContent = total;
                    str="";  
                    operator= "*";
                }else if(operator === "=") {
                  temp = Number(panel.textContent);
                  total = operate(operator) || 1 * (temp);
                  str = "";
                  operator = "*";
                }
               
            }else{
                temp = 0;
                total= Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total * 1);
                operator = "*"; 
            }        
            console.log(total, temp, operator); 
            //! Division      
        }else if (el.classList.contains("div")) {
             if(str!==""){
                if (operator !== "=") {
                  temp = Number(panel.textContent);
                  total = !(operator === "") ? operate(operator) : total == 0 ? (total = temp) : (total += 0);
                  panel.textContent = total;
                  str = "";
                  operator = "/";
                } else if (operator === "=") {
                  total= Number(panel.textContent)
                  str = "";
                  operator = "/";
                }
                  
            }else{
                temp = 0;
                total= Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total / 1);
                operator = "/"; 
            }        
             console.log(total, temp, operator); 
             //!Result      
        }else if (el.classList.contains("result")) {
            if(str!==""){
                    temp = Number(panel.textContent);
                    total = operate(operator);
                    console.log("total:", total)
                    panel.textContent = total;
                    str = "";
                    operator = "=";                                             
             }else{
                temp = 0;
                total= Number(panel.textContent);
                // total=0;
            } 
            console.log(total,temp,operator)            
        }
        //! RESET
    }else if(el.classList.contains("reset")){
             temp=0;
             total = 0;
             str = "";
             operator = "";
             panel.textContent = total;
    }else if(el.classList.contains("negate")){
        if(total ===0){
            if(str!==""){
                panel.textContent = -Number(panel.textContent)
            }
        }else{
            total = Number(panel.textContent);
            total = total * -1;
            panel.textContent = total;
        }
           
    }
   

})