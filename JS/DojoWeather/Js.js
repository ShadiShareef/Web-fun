function alertfunction(){
    alert("Loading weather report...");
}
function RemoveCookie(){
    document.querySelector(".footer").remove();
}

function ChangeT(){
    var z=document.querySelector("#temperature");
    x = document.querySelectorAll("#Number");
    if (z.value=='F') {
        for(var i=0;i<x.length;i++){
            y=parseInt(x[i].innerHTML);
            y=y*9/5+32;
            x[i].innerHTML=Math.ceil(y);
            console.log(y);  
        }
        document.querySelectorAll("#Number").innerHTML=x;
    }

    else {
        for(var i=0;i<x.length;i++){
            y=parseInt(x[i].innerHTML);
            y=(y-32)*5/9;
            x[i].innerHTML=Math.ceil(y);
            console.log(y);  
        }
        document.querySelectorAll("#Number").innerHTML=x;
    }
}
