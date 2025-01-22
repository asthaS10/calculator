// const upper = document.querySelector('input[name="upper"]');
// const buttons = document.querySelectorAll('.button');

// for (let i = 0; i < buttons.length; i++) {

//     buttons[i].addEventListener('click', () => {
//         const buttonValue = buttons[i].value;

//         switch (buttonValue) {
//             case '=':
//                 display.value = eval(display.value);
//                 break;
//             case 'AC':
//                 display.value = '';
//                 break;
//             case 'DE':
//                 display.value = display.value.slice(0, -1);
//                 break;
//             case '√':
//                 display.value = Math.sqrt((display.value));
//                 break;
//             default:
//                 display.value = display.value + buttonValue;
//         }
//     });
// }

let string ="";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='DELETE'){
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='√'){
            string = math.sqrt(string);
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string+ e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})