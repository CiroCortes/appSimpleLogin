const FETCH_OPTION = {
    method: 'GET',
    
    headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': 'c92fa4fbc0mshd594ff35205932bp1ff3e6jsn35fb5f63c905'
        
    }
}

 export async function getWeatherFrom (query = 'santiago') {
        const response = await fetch(
     `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, 
     FETCH_OPTION
         )

         const data = await response.json()
         
            const { location, current} = data;
            const { country , localtime, name }= location;
            const {
                condition,
                humidity,
                feelslike_c,
                is_day,
                temp_c,
                wind_kph, wind_dir
            }= current
            const {code, text} = condition
    
            return{
                conditionCode:code,
                conditionText: text,
                country,
                localtime,
                locationName: name,   
                humidity,
                isDay: is_day,
                feelslike: feelslike_c,
                temperature : temp_c,
                windSpeed: wind_kph,
                windDir: wind_dir
    
            }
       
 }