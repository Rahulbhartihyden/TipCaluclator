
const amount = document.querySelector('#amount'); 
const btn = document.querySelector('#btn');
const sb = document.querySelector('#service-type-name')
const people = document.querySelector('#count');
const final = document.querySelector('#res');




// btn.addEventListener('click',function()
function tipCalc()
{
    let tip = 0;
    let amt = 0;
    let peo = 0;
    let share = 0;
   
    if(sb.value == 1){
        amt += Number(amount.value);
        tip = amt * 0;
        

    }
    else if(sb.value == 2){
        amt += Number(amount.value);
        tip = amt * 0.10;
        
    }
    else if(sb.value == 3){
        amt += Number(amount.value);
        tip = amt * 0.20;
        
    }
    else if(sb.value == 4){
        amt += Number(amount.value);
        tip = amt * 0.30;
        
    }
    else{
        alert('try again');
    }

    peo = people.value;
    share = (tip/peo).toFixed(2);
    
    

    const tag = document.createElement('h1');
    
    const content = document.createTextNode(`TIP AMOUNT $${share} each`);
    result  = tag.appendChild(content);

    final.appendChild(result);


}





    
    
    


    
   



