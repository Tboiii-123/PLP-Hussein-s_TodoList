const inputBox=document.getElementById("input-box");
const ListContainer=document.getElementById("List-container");


function addTask(){
    if(inputBox.value === ''){
        alert("Please Add an Item to the Input Field")
    }
    else{
        // Creating an element
        let li =document.createElement("li");
        // writing a text  inside the created elemnet form the input field
        li.innerHTML =inputBox.value;
        // To be displayed
        ListContainer.appendChild(li);
        let span =document.createElement("span");
        //For the X sign
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    savedata();
}



ListContainer.addEventListener('click',function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    
    }

},false)


// Creating a local database



function savedata(){
    //The data is a varibale whilw the orher parameter is coming form the text
    //In the list container
    localStorage.setItem("data",ListContainer.innerHTML);
}

function viewdata(){
    ListContainer.innerHTML =localStorage.getItem("data")
}
viewdata();