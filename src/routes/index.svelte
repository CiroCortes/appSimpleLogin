<script>
import  Weather from '../component/weather.svelte';
import { isLoggedIn } from "../store";


    
</script>

{#if $isLoggedIn}

<Weather/>



{:else} 
 <div class="bg-zinc-700 px-10 py-10 flex flex-col items-center gap-y-4 rounded">

     <h1>DEBES INGRESAR PARA VER EL CONTENIDO</h1> 

 </div>

{/if}