var RemoveBox1=document.querySelector(".Definition");

    function RemoveBox(){
        RemoveBox1.remove();
    }
    
    function change(element) {
        if(element.innerText == "Login") {
            element.innerText = "Logout";
        } else {
            element.innerText = "Login";
        }
    }