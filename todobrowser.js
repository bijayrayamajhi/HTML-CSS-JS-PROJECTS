let btn= document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);

    let del = document.createElement ("button");
    del.innerText = "delete";
    del.classList.add ("delete");
    li.appendChild(del);
    input.value = "";                   // to reset the value of input to empty after the button is clicked.
});

ul.addEventListener("click", function (event) {   // this concept is known as Event Delegation
    if(event.target.nodeName == "BUTTON")
    {
       let listItem = event.target.parentElement;
       listItem.remove();
    }

})


// let delBtns = document.querySelectorAll (".delete");  "if we do this event will not triger for the latest added lists"
// for(delBtn of delBtns){
//     delBtn.addEventListener ("click", function() {
//         let par = this.parentElement; 
//         par.remove();
//     });
//  }