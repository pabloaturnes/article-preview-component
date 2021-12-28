




let $component = document.querySelector(".component");


document.addEventListener("click", (event)=>{
    
    if(event.target.matches(".share-icon-button , *")){
        $component.classList.toggle("active");
    } 




})