const root = document.getElementById("root")
root.addEventListener('click',(event)=>{
    document.body.style.backgroundColor=event.target.id;
})