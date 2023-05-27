let weather = document.createElement('div')
weather.classList= 'container'
document.body.appendChild(weather)

let heading = document.createElement('h1')
heading.textContent = "Enter Your City Name!"
heading.classList = 'heading'
weather.appendChild(heading)

let input = document.createElement('input')
input.type = 'text'
input.classList= 'input'
weather.appendChild(input)

let weather_info = document.createElement('div')
weather_info.classList = 'weather-info'
weather.appendChild(weather_info)

input.addEventListener('change',(data)=>{
    let query = data.target.value
    const api_key = '5306a8a8ab844118ab9101153232705'
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${query}&aqi=no`

    fetch(url).then((res)=>res.json()).then((data)=>{
        console.log(data);
         weather_info.textContent = ""
        
        let h1 = document.createElement('h1')
        h1.innerText = data.current.feelslike_c  + ' °C';
        weather_info.appendChild(h1)
     
        let h2 = document.createElement('h2')
        h2.innerText = data.current.condition.text
        weather_info.appendChild(h2)
    
        let h3 = document.createElement('h2')
        h3.innerText = data.location.name
        weather_info.appendChild(h3)
    });
})



