const button = document.querySelector('button');
const form = document.querySelector('form')
const span = document.createElement('span');
document.body.appendChild(span);
button.addEventListener('click', (event)=>{
    event.preventDefault();
    const formdata = new FormData(form);
    const data = formdata.get('Location');
    fetch(`http://api.weatherapi.com/v1/current.json?key=aa1dbcc2e81c44ca88854206250301&q=${data}&aqi=no`).then((data)=> data.json()).then((response)=>
        span.textContent = `The temperature is ${response.current.temp_c} degree celcius`).catch((error)=>console.log(error));
})


