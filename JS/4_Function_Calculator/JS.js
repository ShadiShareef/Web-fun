
var v=0,number,first,z,operator=0,a,Result;

function clr(id2){
    second=0;
    first=0;
    operator=0;
    document.getElementById(id2).innerHTML=0;
}

function press(id,id2){
    if(operator==0){
        number=document.getElementById(id).innerHTML;
        first=document.getElementById(id2).innerHTML;

        if(first==0) first=number;
        else first=first+number;

    document.getElementById(id2).innerHTML=first; }

    else 
    {
        number=document.getElementById(id).innerHTML;
        second=document.getElementById(id2).innerHTML;
            if(second==0) second=number;
            else second=second+number;
        document.getElementById(id2).innerHTML=second; }
}

function setOP(op,id){
    v=document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML=0;

    switch(op){

    case "divider" :operator=1;
    break;

    case "multiplication" :operator=2;
    break;

    case "minus" :operator=3;
    break;

    case "plus" :operator=4;
    break; }
}

function calculate(id)
        {   
    console.log(operator)
    switch (operator){

    case 1 : Result=first/second
    document.getElementById(id).innerHTML=Result;
    break;

    case 2 : Result=first*second
    document.getElementById(id).innerHTML=Result;
    break;

    case 3 : Result=first-second
    document.getElementById(id).innerHTML=Result;
    break;

    case 4 : Result=first+second
    document.getElementById(id).innerHTML=Result;
    break; }

}

