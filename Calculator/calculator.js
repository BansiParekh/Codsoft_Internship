let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayValue = '';
for(item of buttons){
            item.addEventListener('click',(e)=> {
                buttonText = e.target.innerText; 
                console.log('Button text is ', buttonText);
                if(buttonText=='*'){
                    buttonText = '*';
                    displayValue += buttonText ;
                    display.value = displayValue;
                    
                }
                else if(buttonText =='CE'){
                    displayValue = "" ;
                    display.value = displayValue;
                }
                else if(buttonText == "="){
                    display.value = eval(displayValue);
                }
                else{
                    displayValue += buttonText;
                    display.value = displayValue;
                }
            })
}