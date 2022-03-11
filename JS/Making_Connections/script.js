var username=document.querySelector("#username");
var itemlist1=document.querySelector(".card-list-item1");
var itemlist2=document.querySelector(".card-list-item2");

function changename(){
    username.innerText="Shadi Shareef";
}


function AddOrRemove1(element){
    itemlist1=document.querySelector(".card-list-item1");
    itemlist1.remove();}

function AddOrRemove2(element){
    itemlist2=document.querySelector(".card-list-item2");
    itemlist2.remove();
}
