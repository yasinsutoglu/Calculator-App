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
    }
 }

container.addEventListener("click",(e)=>{
    const el = e.target;

    if(el.classList.contains("num")){

         (str.includes(".") && el.textContent === ".") ? str += "" : str += el.textContent; 
         
         panel.textContent = Number(str);
           

    }else if(el.classList.contains("operator")){
        
        //    str = (total === 0) ? "" : panel.textContent;
        // temp = Number(panel.textContent);

        if (el.classList.contains("plus")) {
            if(str!==""){
                temp = Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total + temp);
                panel.textContent = total;
                str = "";
                operator = "+";
            }else{
                temp = 0;
                total = Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total + temp);
                operator = "+";
            }            
            
             console.log(total , temp, operator)      
         }else if (el.classList.contains("sub")) {
            if(str!==""){
               temp = Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total - temp);
                panel.textContent = total;
                str="";  
                operator= "-"; 
            }else{
                temp = 0;
                total= Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total - temp);
                operator = "-"; 
            }        
            console.log(total, temp, operator);       
        }else if (el.classList.contains("mult")) {
            if(str!==""){
               temp = Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : ((total==0 ? total=1 : total+=0) * temp);
                panel.textContent = total;
                str="";  
                operator= "*"; 
            }else{
                temp = 0;
                total= Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total * 1);
                operator = "*"; 
            }        
            console.log(total, temp, operator);       
        }else if (el.classList.contains("div")) {
             if(str!==""){
                 temp = Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : ( total == 0 ? total=temp : total+=0 );
                panel.textContent = total;
                str="";  
                operator= "/";  
                   
            }else{
                temp = 0;
                total= Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total / 1);
                operator = "/"; 
            }        
             console.log(total, temp, operator);       
        }else if (el.classList.contains("result")) {
            if(str!==""){
                 temp = Number(panel.textContent);
                 total =  operate(operator) ;
                panel.textContent = total;
                str="";                     
             }
             else{
                temp = 0;
                total= Number(panel.textContent);
                total = !(operator === "") ? operate(operator) : (total / 1);
            }             
        }
    }
   

})