<script>
  import { getWeatherFrom } from "../services/weather.js";

  const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
 
    
        <div class="container   bg-zinc-600 flex  flex-col h-50 w-64 gap-1 ml-4 rounded">
          <h1>
            <p class="ml-3 mt-1">
              City : {weather.locationName}
            </p>
          </h1>
    
          <h2>
            <p class="ml-3 mt-1">
              Temperature : {weather.temperature}°
            </p>
          </h2>
    
          <h3>
            <p class="ml-3 mt-1">
              Condition : {weather.conditionText}
            </p>
          </h3>
          <h4>
            <p class="ml-3 mt-1 mb-2">
              Wind Speed : {weather.windSpeed}
            </p>
          </h4>
        </div>

    
  
{/await}
