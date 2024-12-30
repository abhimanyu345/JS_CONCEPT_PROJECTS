const obj = {
    q1:"Asia",
    q2:"Planet Vegeta",
    q3:"Rat",
    q4:"North America"
}

const button = document.querySelector("button");
const form = document.querySelector("form");
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const arr = Array.from(formData.values());
    let res = 0;
    formData.forEach((value, key)=>{
        if(obj[key]==value)
            res++;
    });
    const Result = document.createElement("div");
    Result.textContent = `You scored ${res} out of ${arr.length}`;
    const container = document.getElementsByClassName("container");
    container[0].appendChild(Result);
})