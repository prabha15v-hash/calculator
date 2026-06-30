const display=document.getElementById('display');
function change(value)
{
 display.value+=value;
}
function adds(operator)
{
    display.value+=operator;
}
function subs(operator)
{
    display.value+=operator;
}
function muls(operator)
{
     display.value+=operator;
}
function divs(operator)
{
     display.value+=operator;
}
function  equal(operator)
{    try{
     display.value=eval(display.value);
     }
     catch{
        display.value="ERROR"
     }
}
function mod(operator)
{
     display.value+=operator;
}
function dot(operator)
{
     display.value+=operator;
}
function del()
{
     display.value="";
}
function cl()
{
   display.value=display.value.slice(0,-1);
}
