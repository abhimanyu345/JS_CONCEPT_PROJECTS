document.addEventListener('click',(event)=>{
    const body = document.querySelector("body");
    let div1 = document.createElement("div");
    div1.className="container";
    div1.innerHTML = "HI";
    let x = event.clientX;


    let y = event.clientY;

    div1.style.top = `${y}px`;
    div1.style.left = `${x}px`;
    
    body.appendChild(div1);

    setTimeout(()=>
        div1.remove(),1000
    );
})


