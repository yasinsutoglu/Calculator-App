//SELECTORS
const panel = document.querySelector(".panel")
const reset = document.querySelector(".reset")
const negate = document.querySelector(".negate")
const percent = document.querySelector(".percent")
const container = document.querySelector(".container")

let temp;
let total = 0;
let str = "";

container.addEventListener("click",(e)=>{
    const el = e.target;

    if(el.classList.contains("num")){

         (str.includes(".") && el.textContent === ".") ? str += "" : str += el.textContent; 
         
         panel.textContent = Number(str);
           

    }else if(el.classList.contains("operator")){

        
           str = (total === 0) ? "" : panel.textContent;
           temp = Number(panel.textContent);

         if (el.classList.contains("plus")) {
            total = temp + total;                  
             panel.textContent = total;
             console.log("topla:", total,temp,str)
             str="";         
         }else if (el.classList.contains("sub")) {
            total = panel.textContent + temp; 
            total = total - temp;
            
            console.log("cıkar:", total,temp,str)
            str="";           
        }
        //else if(el.classList.contains("result")){
        //     panel.textContent = total;
        //  }
    }
   

})